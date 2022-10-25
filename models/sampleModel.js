const mongoose = require("mongoose");

const sample = new mongoose.Schema({
    sampleNo: { type: String, required: true },
    sampleName: { type: String, required: true }
});

module.exports = mongoose.model("Sample", sample);