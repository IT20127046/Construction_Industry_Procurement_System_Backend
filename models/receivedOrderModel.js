/**
 * This model is used for store received order details
 * @orderID, @reason -> String data type
 * @items -> String object
 */
const mongoose = require("mongoose");

const receivedOrder = new mongoose.Schema({
    orderID: { type: String, required: true },
    items: {type: Object},
    reason: {type: String}

});

module.exports = mongoose.model("ReceivedOrder", receivedOrder);