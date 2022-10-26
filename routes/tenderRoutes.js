const express = require('express');
const TenderRouter = express.Router();
const TenderController = require('../controllers/tenderController');

// Create tender
TenderRouter.post('/tender/add', TenderController.save_tender);

// Get all tenders
TenderRouter.get('/tender/getall', TenderController.getall_tenders);

// Get tender by id
TenderRouter.get('/tender/get/:id', TenderController.get_tender);

// Update tender
TenderRouter.put('/tender/update/:id', TenderController.update_tender);

// Delete tender
TenderRouter.delete('/tender/delete/:id', TenderController.delete_tender);

module.exports = TenderRouter;