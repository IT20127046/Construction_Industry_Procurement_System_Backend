/**
 * This controller is used handle functions(insert, retrive, update, delete) of received order details
 */

const ReceivedOrderModel = require("../models/receivedOrderModel");

// Create tender
const save_order = function (req, res){
    let newTender = new ReceivedOrderModel(req.body);

    newTender.save((err)=>{
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

// Get all tender
const getall_orders = function (req, res){
    ReceivedOrderModel.find().exec((err, existingOrders) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          existingOrders,
        });
      });
}

// Get tender by ID
const get_order = function (req, res){
    let tenderID = req.params.id;

    ReceivedOrderModel.findById(tenderID,(err,existingOrder)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingOrder
        });
    });
}

// Update tender
const update_order = function (req, res){
    ReceivedOrderModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, order)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true,
                order
            });
        }
    );
}

// Delete tender
const delete_order = function (req, res){
    ReceivedOrderModel.findByIdAndRemove(req.params.id).exec((err,deletedOrder)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedOrder
        });

    });
}

module.exports = { save_order, getall_orders, get_order, update_order, delete_order };