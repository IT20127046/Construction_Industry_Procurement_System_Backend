const express = require('express');
const ReceivedOrderRouter = express.Router();
const ReceivedOrderController = require('../controllers/receivedOrderController');

// Create tender
ReceivedOrderRouter.post('/receivedOrder/add', ReceivedOrderController.save_order);

// Get all tenders
ReceivedOrderRouter.get('/receivedOrder/getall', ReceivedOrderController.getall_orders);

// Get tender by id
ReceivedOrderRouter.get('/receivedOrder/get/:id', ReceivedOrderController.get_order);

// Update tender
ReceivedOrderRouter.put('/receivedOrder/update/:id', ReceivedOrderController.update_order);

// Delete tender
ReceivedOrderRouter.delete('/receivedOrder/delete/:id', ReceivedOrderController.delete_order);

module.exports = ReceivedOrderRouter;