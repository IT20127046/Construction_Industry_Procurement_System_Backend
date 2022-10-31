const mongoose = require("mongoose");

const user = new mongoose.Schema({
    userID: { type: String, required: true },
    nicNo: { type: String, required: true }, // As a user password
    password: { type: String, required: true },
    userName: { type: String, required: true }
});

module.exports = mongoose.model("User", user);