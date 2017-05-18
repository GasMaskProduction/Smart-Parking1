angular.module('starter.controllers',[])
.controller('Search',function($scope,$http)
{var url="js/test.php";
$http.get(url).success(function(response){
	$scope.items=response;
})
})
.controller('Login',function($scope,$http)
{var url="js/loginconfig.php";
$http.get(url).success(function(response){
	$scope.login=response;
})
});
