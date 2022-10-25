const express = require("express");
const SupplierRouter = express.Router();
const SupplierController = require("../controllers/supplierController");

// supplierRegistration
SupplierRouter.post("/supplier/registration", SupplierController.supplierRegistration);

// supplierLogin
SupplierRouter.post("/supplier/login", SupplierController.supplierLogin);



module.exports = SupplierRouter;