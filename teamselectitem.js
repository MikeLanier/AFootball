angular.module("AFootball")
	.directive('teamselectitem', function() {
    return {
		templateUrl: "teamselectitem.html",
		scope: { team: '='},
        link: function(scope, elem, attrs) {
        }
    }
});