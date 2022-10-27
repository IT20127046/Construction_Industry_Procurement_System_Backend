const mongoose = require("mongoose");

const supplierDetails = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  supplierItems: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("SupplierDetailsy", supplierDetails);
