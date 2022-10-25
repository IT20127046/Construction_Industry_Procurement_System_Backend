const SampleModel = require("../models/sampleModel");

// Save Sample
const save_sample = function (req, res){
    let newSample = new SampleModel(req.body);

    newSample.save((err)=>{
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

// GetAll Sample
const getAll_samples = function (req, res){
    SampleModel.find().exec((err, exsitingSample) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingSample,
        });
      });
}

// Get Sample By ID
const get_sample = function (req, res){
    let sampleID = req.params.id;

    SampleModel.findById(sampleID,(err,exsitingSample)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingSample
        });
    });
}

// Update Sample
const update_sample = function (req, res){
    SampleModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, sample)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Sample
const delete_sample = function (req, res){
    SampleModel.findByIdAndRemove(req.params.id).exec((err,deletedSample)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedSample
        });

    });
}

module.exports = {save_sample, getAll_samples, get_sample, update_sample, delete_sample};