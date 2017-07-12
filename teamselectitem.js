angular.module("AFootball")
	.directive('teamselectitem', function() {
    return {
		scope: {
			team: '='
		},
		templateUrl: "teamselectitem.html",
        link: function(scope, elem, attrs) {
			// console.log("teamselectitem: team.name: " + scope.team.name);

			scope.closeNav = function() {
				console.log("closeNav");
		        document.getElementById("mySidenav").style.width = "0px";
			};

			scope.click = function() {
				console.log("click");
			};
		}
    }
});