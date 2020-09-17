const mongoose = require('mongoose');
const stepSchema = require('./step.model').stepSchema;

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: false },
    type: { type: String, required: true },
    time: { type: Number, required: true }, 
    steps: {type: [stepSchema], required: false}, //ingredients will be populated separately by querying parent name in ingredients collection
    user: { type: String, required: true },
}, {
    timestamps: true, // will this capture updates as well?
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;