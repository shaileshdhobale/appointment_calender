var log4js = require('log4js');
var _ = require('lodash');

//Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();
var model = require('../doa/db.js')
// logger
var logger = log4js.getLogger('[appointmentServices]');
logger.setLevel(envConfig.logLevel);


var addAppointment = function  (appointmentObj, callback) {
	var METHOD_NAME = "[addAppointment] ";
	model.appointment(appointmentObj).save({__v:0, _id: 0}, function(error, result) {
		if(error) {
			logger.error(METHOD_NAME + error);
			callback(error, null);
		} else {
			logger.debug(METHOD_NAME + JSON.stringify(result));
			callback(null, result);
		}
	})
}

var checkAppointmentSlot = function(appointmentObj, callback) {
	var METHOD_NAME = "[checkAppointmentSlot] ";
	logger.debug("HERE");
	model.appointment.findOne({
    $or:[{
            $and:[{
                startDate: {$lte: appointmentObj.startDate},
                endDate: {$gte: appointmentObj.startDate},
            }]
        },
        {
            $and:[{
                startDate: {$lte: appointmentObj.endDate},
                endDate: {$gte: appointmentObj.endDate}
            }]
        }
    ]
}, function(error, result) {
		if(error) {
			logger.error(METHOD_NAME + error);
			callback(error, null);
		} else {
			logger.debug(METHOD_NAME + JSON.stringify(result));
			callback(null, result);
		}
	})
}

var getALLAppointment = function(callback) {
	var METHOD_NAME = "[getALLAppointment] ";
	model.appointment.find({}, function(error, result) {
		if(error) {
			logger.error(METHOD_NAME + error);
			callback(error, null);
		} else {
			logger.debug(METHOD_NAME + JSON.stringify(result));
			callback(null, result);
		}
	})
}

module.exports.addAppointment = addAppointment;
module.exports.checkAppointmentSlot = checkAppointmentSlot;
module.exports.getALLAppointment = getALLAppointment;