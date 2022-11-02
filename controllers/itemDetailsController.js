const ItemDetailsModel = require('../models/itemDetailsModel');

// Create item details
const save_itemDetails = function (req, res){
    let newItemDetails = new ItemDetailsModel(req.body);

    newItemDetails.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true
        });
    });
}

// Get all item details
const getall_itemDetails = function (req, res){
    ItemDetailsModel.find().exec((err, existingItemDetails) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          existingItemDetails,
        });
      });
}

// Get item details by ID
const get_itemDetails = function (req, res){
    let itemDetailsID = req.params.id;

    ItemDetailsModel.findById(itemDetailsID,(err,existingItemDetails)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingItemDetails
        });
    });
}

// Update item details
const update_itemDetails = function (req, res){
    ItemDetailsModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, itemDetails)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete item details
const delete_itemDetails = function (req, res){
    ItemDetailsModel.findByIdAndRemove(req.params.id).exec((err,deletedItemDetails)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
        return res.json({
            message:"Delete successful", deletedItemDetails
        });
    });
}

module.exports = { save_itemDetails, getall_itemDetails, get_itemDetails, update_itemDetails, delete_itemDetails };  