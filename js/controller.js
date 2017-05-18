angular.module('starter.controllers',[])
.controller('Search',function($scope)
{$scope.items=['Closer','Shape of You','Brave','7 Years'];


}

)
.controller('TodoController',function($scope){
	$scope.saved=localStorage.getItem('musics');
	$scope.musics=(localStorage.getItem('musics')!=null)?JSON.parse($scope.saved):[{title:'',done:false}];
	localStorage.setItem('musics',JSON.stringify($scope.musics));
	
	$scope.addMusic=function(){
		
		var music= $scope.musicTitle;
			$scope.musics.push({
				title:$scope.musicTitle,
				done:false
			});
			$scope.musicTitle='';
			localStorage.setItem('musics',JSON.stringify($scope.musics));
	
	};
	
	$scope.remove=function(index){
		$scope.musics.splice(index,1);
		localStorage.setItem('musics', JSON.stringify($scope.musics));
	};
	
})
var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);
;
