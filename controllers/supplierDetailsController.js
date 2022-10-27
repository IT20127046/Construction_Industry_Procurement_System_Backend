const SampleModel = require("../models/sampleModel");
const supplierDetailsModal = require("../models/supplierDetailsModal");

// Update Supplier Details
const update_supplier_details = function (req, res) {
  supplierDetailsModal.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: true,
      });
    }
  );
};

module.exports = { update_supplier_details };
