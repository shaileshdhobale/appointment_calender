app.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService) {
	$scope.authenticateUser = function(){
        LoginService.login($scope.loginData);
	}
}]);