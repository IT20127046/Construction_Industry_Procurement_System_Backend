const TenderModel = require("../models/tenderModel");

// Create tender
const save_tender = function (req, res){
    let newTender = new TenderModel(req.body);

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
const getall_tenders = function (req, res){
    TenderModel.find().exec((err, existingTenders) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          existingTenders,
        });
      });
}

// Get tender by ID
const get_tender = function (req, res){
    let tenderID = req.params.id;

    TenderModel.findById(tenderID,(err,existingTender)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingTender
        });
    });
}

// Update tender
const update_tender = function (req, res){
    TenderModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, tender)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true,
                tender
            });
        }
    );
}

// Delete tender
const delete_tender = function (req, res){
    TenderModel.findByIdAndRemove(req.params.id).exec((err,deletedTender)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedTender
        });

    });
}

module.exports = { save_tender, getall_tenders, get_tender, update_tender, delete_tender };