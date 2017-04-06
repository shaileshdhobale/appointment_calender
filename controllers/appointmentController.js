



var addAppointment = function(req, res) {
	console.log(req.body)
	res.send(req.body);
}

module.exports.addAppointment = addAppointment;