const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petScehma = new Schema ({
    name: { type: String, required: true},
    type: { type: String, required: true},
    description: {type: String, required: true},
    owner: {type: String, required: true},
    contact: {type: String, required: true},

});

const Pet = mongoose.model("Pet", petScehma);

module.exports = Pet;