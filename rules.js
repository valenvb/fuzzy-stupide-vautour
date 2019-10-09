let And = require("fuzzy-toolbox").And
let Inference = require("fuzzy-toolbox").Inference
const sets = require('./sets')

const rules = {
    //simple tile-value based rules
    HIGH_FOR_HIGH : new Inference.Inference(new Inference.Antecedent(sets.HIGH_VALUE), sets.HIGH_BET, "cap"),
    MED_FOR_MED : new Inference.Inference(new Inference.Antecedent(sets.MEDIUM_VALUE), sets.MEDIUM_BET, "cap"),
    LOW_FOR_LOW : new Inference.Inference(new Inference.Antecedent(sets.LOW_VALUE), sets.LOW_BET, "cap"),
    MED_FOR_HIGHNEG : new Inference.Inference(new Inference.Antecedent(sets.HIGH_NEGATIVE_VALUE), sets.MEDIUM_BET, "cap"),
    LOW_FOR_LOWNEG : new Inference.Inference(new Inference.Antecedent(sets.LOW_NEGATIVE_VALUE), sets.LOW_BET, "cap"),

    //Play based on current score
    HIGH_VALUE_AND_LOW_SCORE : new Inference.Inference(new Inference.Antecedent([sets.HIGH_VALUE, sets.LOW_SCORE], And.godel), sets.VERY_HIGH_BET, "cap"),
    HIGH_VALUE_AND_HIGH_SCORE : new Inference.Inference(new Inference.Antecedent([sets.HIGH_VALUE, sets.HIGH_SCORE], And.godel), sets.HIGH_BET, "cap"),
    LOW_VALUE_AND_HIGH_SCORE : new Inference.Inference(new Inference.Antecedent([sets.LOW_VALUE, sets.HIGH_SCORE], And.godel), sets.LOW_BET, "cap"),
    LOW_VALUE_AND_LOW_SCORE : new Inference.Inference(new Inference.Antecedent([sets.LOW_VALUE, sets.LOW_SCORE], And.godel), sets.MEDIUM_BET, "cap"),



}

module.exports = rules