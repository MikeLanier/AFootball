angular.module("AFootball")
	.directive('teamselectitem', function() {
    return {
		scope: {
			team: '='
		},
		templateUrl: "teamselectitem.html",
        link: function(scope, elem, attrs) {

			scope.hoverstyle={'border':'1px solid yellow'};

			scope.closeNav = function() {
				console.log("closeNav");
		        document.getElementById("mySidenav").style.width = "0px";
			};

			scope.click = function() {
				console.log("click");
			};

			scope.mouseover = function() {
				console.log("mouseover");
			};

			scope.mouseleave = function() {
				console.log("mouseleave");
			};
		}
    }
});