const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScehma = new Schema ({
    name: { type: String, required: true },
    password: { type: String, required: true}
})