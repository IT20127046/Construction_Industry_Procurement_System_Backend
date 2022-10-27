const express = require("express");
const SupplierRouter = express.Router();
const SupplierController = require("../controllers/supplierController");

// supplierRegistration
SupplierRouter.post("/supplier/registration", SupplierController.supplierRegistration);

// supplierLogin
SupplierRouter.post("/supplier/login", SupplierController.supplierLogin);

// GetAll Sample
SupplierRouter.get('/supplier/details/getAll', SupplierController.getAll_supplier_details);

//get Supplier Details by Name
SupplierRouter.get( "/supplier/details/:name", SupplierController.getSupplierDetailsByName);


module.exports = SupplierRouter;SupplierRouter