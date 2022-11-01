const mongoose = require("mongoose");

const itemDetails = new mongoose.Schema({
    name: { type: String, required: true },
    availableOptions: [{type: Object, required: true}],
    updatedDate: { type: Date, required: true }
});

module.exports = mongoose.model("itemDetails", itemDetails);