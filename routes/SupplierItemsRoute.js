const express = require('express');
const SupplierItemsRouter = express.Router();
const SupplierItemsController = require('../controllers/SupplierItemsController');

// Save Sample
SupplierItemsRouter.post('/add/supplier/items', SupplierItemsController.save_items);


module.exports = SupplierItemsRouter;