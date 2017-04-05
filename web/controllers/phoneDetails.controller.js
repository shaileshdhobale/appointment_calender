app.controller('PhoneDetailsController', ['$scope', '$routeParams', 'PhoneDetails', function($scope, $routeParams, PhoneDetails) {
	
	var url = 'phones/' + $routeParams.phoneId + '.json';
	
	PhoneDetails.getPhoneDetails(fetchSuccess, fetchError, url);
	
	function fetchSuccess(data){
		$scope.isFound = true;
		$scope.isPageNotFound = false;
		$scope.phone = data;	
	}
	function fetchError(error) {
		$scope.isFound = false;
		$scope.isPageNotFound = true;
	}
}]);