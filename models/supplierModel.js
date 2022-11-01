const mongoose = require("mongoose");


//Create database schema 
const supplierSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,

  },
  location: {
    type: String,
    
  },
  supplierItems: {
    type: String,
    
  },
  type: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true,
  },
  dateRegistered: {
    type: Date,
    default: Date.now,
  },
  supstatus: {
    type: String, 
  }
});

module.exports = mongoose.model("suppliers", supplierSchema);
