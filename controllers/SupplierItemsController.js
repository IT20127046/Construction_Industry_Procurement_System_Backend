const SupplierItemsModal = require("../models/SupplierItemsModal");

// Save Items
const save_items = function (req, res) {
  let newItems = new SupplierItemsModal(req.body);

  newItems.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
    });
  });
};

// GetAll Items
const getAll_items = function (req, res) {
  SupplierItemsModal.find().exec((err, exsitingItems) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      exsitingItems,
    });
  });
};

// Get Items By ID
const get_items = function (req, res) {
  let itemID = req.params.id;

  SupplierItemsModal.findById(itemID, (err, exsitingItems) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      exsitingItems,
    });
  });
};

// Update Items
const update_items = function (req, res) {
  SupplierItemsModal.findByIdAndUpdate(
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

// Delete Items
const delete_items = function (req, res) {
  SupplierItemsModal.findByIdAndRemove(req.params.id).exec(
    (err, deletedItems) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.json({
        success: true,
        deletedItems,
      });
    }
  );
};

module.exports = {
  save_items,
  getAll_items,
  get_items,
  update_items,
  delete_items,
};
