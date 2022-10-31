const SupplierItemsModal = require("../models/SupplierItemsModal");

const save_items = function (req, res){

    let newItems = new SupplierItemsModal(req.body);

    newItems.save((err)=>{
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



module.exports = {
    save_items,  
};
