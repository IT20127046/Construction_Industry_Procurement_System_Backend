const express = require('express');
const ItemDetailsRouter = express.Router();
const ItemDetailsController = require('../controllers/itemDetailsController');

// Create item details
ItemDetailsRouter.post('/itemDetails/add', ItemDetailsController.save_itemDetails);

// Get all item details
ItemDetailsRouter.get('/itemDetails/getall', ItemDetailsController.getall_itemDetails);

// Get item details by ID
ItemDetailsRouter.get('/itemDetails/get/:id', ItemDetailsController.get_itemDetails);

// Update item details
ItemDetailsRouter.put('/itemDetails/update/:id', ItemDetailsController.update_itemDetails);

// Delete item details
ItemDetailsRouter.delete('/itemDetails/delete/:id', ItemDetailsController.delete_itemDetails);

module.exports = ItemDetailsRouter;