const mongoose = require("mongoose");

const sample = new mongoose.Schema({
    sampleNo: { type: String, required: true },
    sampleName: { type: String, required: false }
});

module.exports = mongoose.model("Sample", sample);