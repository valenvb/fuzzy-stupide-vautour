let Set = require("fuzzy-toolbox").Set

const sets = {

    //Outcome sets
    VERY_HIGH_BET : new Set("VERY_HIGH_BET", [12, 0], [14, 1], [15, 1], [15, 0] ),
    VERY_LOW_BET : new Set("VERY_LOW_BET", [1, 0], [1, 1], [2, 1], [4, 0] ),
    HIGH_BET : new Set("HIGH_BET", [9,0], [11,1], [15, 1], [15,0]),
    LOW_BET : new Set("LOW_BET", [1,0], [1,1], [5,1], [7,0], ),
    MEDIUM_BET : new Set("MEDIUM_BET", [5,0], [8,1], [11, 0]),

    //Tile Value Sets
    //VERY_HIGH_VALUE : new Set("TILE_VALUE_VERY_HIGH", [8,0],[9,1],[10,1],[10,0]),
    HIGH_VALUE : new Set("TILE_VALUE", [5,0],[8,1],[10,1],[10,0]),
    MEDIUM_VALUE : new Set("TILE_VALUE", [3,0],[5,1],[7,0]),
    LOW_VALUE : new Set("TILE_VALUE", [1,0],[1,1],[3,1],[5,0]),
    LOW_NEGATIVE_VALUE : new Set("TILE_VALUE", [-4,0],[-2,1],[-1,1],[-1,0]),
    HIGH_NEGATIVE_VALUE : new Set("TILE_VALUE", [-5,0],[-5,1],[-3,1],[-2,0]),

    //Sets regarding my current score, possible score is [-15..55]
    VERY_HIGH_SCORE : new Set("MY_SCORE", [40, 0],[45, 1],[55,1],[55,0]),
    HIGH_SCORE : new Set("MY_SCORE", [25, 0],[40, 1],[55,1],[55,0]),
    MEDIUM_SCORE : new Set("MY_SCORE", [15, 0],[25,1],[35,0]),
    LOW_SCORE : new Set("MY_SCORE", [-10,0],[-10, 1],[15,1],[25,0]),
    VERY_LOW_SCORE : new Set("MY_SCORE", [-10,0],[-10, 1],[0,1],[5,0]),

}

module.exports = sets
