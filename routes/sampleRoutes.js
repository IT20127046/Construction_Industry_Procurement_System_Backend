const express = require('express');
const SampleRouter = express.Router();
const SampleController = require('../controllers/sampleController');

// Save Sample
SampleRouter.post('/sample/add', SampleController.save_sample);

// GetAll Sample
SampleRouter.get('/sample/getAll', SampleController.getAll_samples);

// Get Sample By ID
SampleRouter.get('/sample/get/:id', SampleController.get_sample);

// Update Sample
SampleRouter.put('/sample/update/:id', SampleController.update_sample);

// Delete Sample
SampleRouter.delete('/sample/delete/:id', SampleController.delete_sample);

module.exports = SampleRouter;