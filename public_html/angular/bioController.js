var mainPageApp = angular.module('mainPageApp', []);

mainPageApp.controller('bioController', function($scope, $http){
	$http.get('json/bio.json').success(function(bios){
		//Bio info
		$scope.fields = bios;
	})
	$http.get('json/socialLinks.json').success(function(links){
		//Social links
		$scope.socialLinks = links;
	})
});