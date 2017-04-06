var express = require('express');
var router = express.Router();	

var appointmentController = require('../controllers/appointmentController.js');

// router.get('/appointment', appointmentController.getAppointment);
router.post('/addAppointment', appointmentController.addAppointment);

module.exports = router;