const mongoose = require("mongoose");

const items = new mongoose.Schema({
 
  itemName: {
    type: String,
    required: true,
  },

  sItem: [{
    
    subitem: String,
    price: String,
    
  }],


});

module.exports = mongoose.model("supplier goods details", items);