const path = require('path');

const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contactus', contactController.getContactUs);

router.post('/contactus', contactController.postContactUs);

router.post('/success', contactController.getSuccessPage);

module.exports = router;
