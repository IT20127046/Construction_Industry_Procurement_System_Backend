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
    
  },
  location: {
    type: String,
    
  },
  supplierItems: {
    type: String,
    
  },
  type: { 
    type: String, 
    
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
