const express = require("express");
const SupplierDetailsRouter = express.Router();
const SupplierDetailsController = require("../controllers//supplierDetailsController");


// Update Vacancy
SupplierDetailsRouter.put("/vacancy/update/:id", SupplierDetailsController.update_supplier_details);


module.exports = SupplierDetailsRouter;
