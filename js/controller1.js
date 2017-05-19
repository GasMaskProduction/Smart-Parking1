angular.module('starter.controllers',[])
.controller('Search',function($scope,$http)
{
done();
function done(){
	setTimeout( function(){
		updates();
		done();}, 200);
}
function updates(){
	var url='js/test.php';
	$http.get(url).success(function(response){
	$scope.items=response;
});
}

})

;
