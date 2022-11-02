const express = require('express');
const SupplierItemsRouter = express.Router();
const SupplierItemsController = require('../controllers/SupplierItemsController');

// Save Items
SupplierItemsRouter.post('/add/item', SupplierItemsController.save_items);

// GetAll Items
SupplierItemsRouter.get('/items/getAll', SupplierItemsController.getAll_items);

// Get Items By ID
SupplierItemsRouter.get('/item/get/:id', SupplierItemsController.get_items);

// Update Items
SupplierItemsRouter.put('/item/update/:id', SupplierItemsController.update_items);

// Delete Items
SupplierItemsRouter.delete('/item/delete/:id', SupplierItemsController.delete_items);


module.exports = SupplierItemsRouter;