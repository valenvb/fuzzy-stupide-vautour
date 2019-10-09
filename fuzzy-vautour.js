let Inference = require("fuzzy-toolbox").Inference

class Player{
    constructor(){
        this.score = 0
        this.cards = Array(16).fill(true)
    }

    getScore(){return this.score;}

    addScore(value){
        this.score += value
    }

    played(card){
        //console.log("played"+card)
        this.cards[card] = false
    }

    //ratio of high cards played vs low cards played 
    getCardSkew(){

    }

}

class FuzzyVautourPlayer extends Player {
    /**
     * 
     * @param {number} numPlayers Total number of players in the game, including this AI
     */
    constructor(numPlayers){
        super()       
        this.sets = require('./sets')
        this.rules = require('./rules')
        this.others = Array(numPlayers).fill(new Player())
        this.currentRound = 1
        this.aggression = 0
    }

    allScores(){
        let arr = this.others.map(o=>o.getScore())
        arr[0] = this.score
        return arr
    }

    playTurn(tileValue){
        console.log("Playing turn with "+tileValue)
        let state = {
            MY_SCORE : this.score,
            TILE_VALUE : tileValue,
            ROUND_NUMBER : this.currentRound,
            AGRO : this.aggression
        }

        let results = []
        for(let name of Object.keys(this.rules)){
            results.push(this.rules[name].resolveInput(state) )
        }

        const bet_raw = Inference.defuzzify(results)
        const bet = Math.round(bet_raw)
        console.log("bet: "+bet+" raw: "+bet_raw)
        if(this.cards[bet]){
            this.played(bet)
            return bet
        } else {
            let diff = Math.abs((bet_raw - bet)) < 0.5
            let ctr = 1
            let closestBet = bet + (diff ? -ctr : ctr)
            
            while(!this.cards[closestBet]){
                console.log("new closest bet:"+closestBet)
                ctr++
                diff = !diff
                closestBet += (diff ? -ctr : ctr)
            }
            //console.log("Will play (else) "+closestBet)
            this.currentRound++
            this.played(closestBet)
            return closestBet
        }

    }

    /**
     * 
     * @param {number} whoWon 
     * @param {number} winnings 
     * @param {number[]} playedCards 
     */
    turnResults(whoWon, winnings, playedCards){
        if(whoWon===0){
            this.addScore(winnings)
        } else if(whoWon > 0) { //-1 means no winner
            this.others[whoWon].addScore(winnings)
        }
        console.log(playedCards)
        for(let i=1;i<playedCards.length;i++){
            // console.log(i + " " + this.others[i])
            this.others[i].played(playedCards[i])
        }
        return 
    }

}


module.exports = FuzzyVautourPlayer