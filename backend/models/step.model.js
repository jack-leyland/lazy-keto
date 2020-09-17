const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema ({
    name: { type: String, required: true },
    desc: { type: String, required: false },
    prepTime: { type: Number, required: false }
},{
    timestamps: true
});

const Step = mongoose.model('Step', stepSchema);

module.exports.Step = Step;
module.exports.stepSchema = stepSchema; //not sure if this is neccessay with the deconstructor in the recipe model