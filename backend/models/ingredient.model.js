const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    name: { type: String, required: true },
    desc: { type: String, required: false }, //might remove this for simplicity, will add UI complexity
    cost: { type: Number, required : false}, //will this type take floats?
    user: { type: String, required: true },
    recipes: { type: Schema.Types.ObjectId, ref: 'Recipe', required: true }, // NEED EXISTING RECIPES TO TEST
    buyLocation: { type: String, required : false}, //placeholder for future functionality
}, {
    timestamps: true
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports.Ingredient = Ingredient;