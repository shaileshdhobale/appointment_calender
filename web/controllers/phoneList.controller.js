// Phone controller
app.controller('PhoneController', ['$scope', '$http', 'LoginService', 'PhoneList', function($scope, $http, LoginService, PhoneList){
	$scope.orderProp = 'age';
	var url = 'phones/phones.json';
	PhoneList.getPhoneList(fetchSuccess, fetchError, url);
	
	function fetchSuccess(data){
		$scope.phones = data;	
	}
	function fetchError(error) {
		$scope.isPageNotFound = true;
	}
	// Logout user
	$scope.logoutUser = function(){
		LoginService.logout();
	}
}]);