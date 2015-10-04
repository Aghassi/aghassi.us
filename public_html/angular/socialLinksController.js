
var socialLinks = angular.module('mainPageApp');

socialLinks.controller('socialLinksController', function($scope, $http){
	$http.get('json/socialLinks.json').success(function(links){
		//Social links
		$scope.socialLinks = links;
	})
});