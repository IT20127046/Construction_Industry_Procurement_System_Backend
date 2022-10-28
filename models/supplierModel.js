const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: { 
    type: String,
    required: true
   },
  email: { 
    type: String, 
    required: true 
  },
  mobile: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  location: {
    type: String,
    required: true,
  },
  supplierItems: {
    type: String,
    required: true,
  },
  type: { 
    type: String, 
    required: true 
  },
  password: {
    type: String,
    required: true,
  },
  dateRegistered: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("suppliers", supplierSchema);
