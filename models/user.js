const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScehma = new Schema ({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true},
});

const User = mongoose.model("User", userScehma);

module.exports = User;