angular.module("AFootball")
	.directive('output', function() {
		return {
			templateUrl: "output.html",
			scope: { gamedata: '='},
			link: function(scope, elem, attrs) {
			}
		}
	});
