angular.module("AFootball")
	.directive('options', function() {
		return {
			templateUrl: "options.html",
			scope: { gamedata: '='},
			link: function(scope, elem, attrs) {
			}
		}
	});
