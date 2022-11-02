const mongoose = require("mongoose");

const tender = new mongoose.Schema({
    site: { type: String, required: true },
    siteManagerID: { type: String, required: true },
    siteManagerName: { type: String, required: true },
    items: {type: Object, required: true},
    status: { type: String, required: true },
    expectedBudget: { type: Number, required: true },
    acceptedSupplier: { type: String, required: false },
    actualAmount: { type: Number, required: false },
    createdDate: { type: Date, required: true }
});

module.exports = mongoose.model("Tender", tender);