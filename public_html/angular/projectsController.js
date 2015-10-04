var porfolio = angular.module('mainPageApp');

porfolio.controller('projectsController', function($scope, $http){
	$http.get('/json/projects.json').success(function(projects){
		//Portfolio data
		$scope.projects = projects;
	})
});