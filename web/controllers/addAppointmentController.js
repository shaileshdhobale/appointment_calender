app.controller('addAppointmentController', ['$scope', '$http', function($scope, $http) {
	$scope.endDateBeforeRender = endDateBeforeRender
	$scope.endDateOnSetTime = endDateOnSetTime
	$scope.startDateBeforeRender = startDateBeforeRender
	$scope.startDateOnSetTime = startDateOnSetTime
	$scope.apppointmentName = "";

	function startDateOnSetTime () {
	  $scope.$broadcast('start-date-changed');
	}

	function endDateOnSetTime () {
	  $scope.$broadcast('end-date-changed');
	}

	function startDateBeforeRender ($dates) {
	  if ($scope.dateRangeEnd) {
	  	console.log($scope.dateRangeEnd.toISOString())
	    var activeDate = moment($scope.dateRangeEnd);
	    $dates.filter(function (date) {
	    	
	      return date.localDateValue() >= activeDate.valueOf()
	    }).forEach(function (date) {
	      date.selectable = false;
	    })
	  }
	}

	function endDateBeforeRender ($view, $dates) {
	  if ($scope.dateRangeStart) {
	    var activeDate = moment($scope.dateRangeStart).subtract(1, $view).add(1, 'minute');
	    $dates.filter(function (date) {
	    	
	      return date.localDateValue() <= activeDate.valueOf()
	    }).forEach(function (date) {
	      date.selectable = false;
	    })
	  }
	}

	$scope.addAppointment = function() {
		var req = {
			method: 'POST',
			url: '/addAppointment',
			// headers: {
			// 	'Content-Type': undefined
			// },
			data: { name: $scope.apppointmentName, endDate: $scope.dateRangeEnd, startDate: $scope.dateRangeStart}
		}

		$http(req)
		.then(function(response){
			console.log(response.data);
		}, function(error){

		});
	}
}]);