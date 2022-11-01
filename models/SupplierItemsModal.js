const mongoose = require("mongoose");

const items = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  stocks: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("supplier goods details", items);
