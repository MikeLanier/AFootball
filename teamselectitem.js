angular.module("AFootball")
	.directive('teamselectitem', function() {
    return {
		scope: {
			team: '='
		},
		templateUrl: "teamselectitem.html",
        link: function(scope, elem, attrs) {
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