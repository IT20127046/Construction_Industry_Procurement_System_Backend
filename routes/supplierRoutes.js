const express = require("express");
const SupplierRouter = express.Router();
const SupplierController = require("../controllers/supplierController");

// supplierRegistration
SupplierRouter.post("/supplier/registration", SupplierController.supplierRegistration);

// supplierLogin
SupplierRouter.post("/supplier/login", SupplierController.supplierLogin);

// GetAll Supplier Details
SupplierRouter.get('/supplier/details/getAll', SupplierController.getAll_supplier_details);

// Get Supplier Details using Id
SupplierRouter.get('/supplier/:id', SupplierController.get_Supplier_id);

//get Supplier Details by Name
SupplierRouter.get( "/supplier/details/:name", SupplierController.getSupplierDetailsByName);

// Update Supplier Details
SupplierRouter.put('/update/supplier/details/:id', SupplierController.update_supplier_details);


module.exports = SupplierRouter;SupplierRouter