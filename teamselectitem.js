angular.module("AFootball")
	.directive('teamselectitem', function() {
    return {
		scope: {
			team: '=',
			gamedata: '='
		},
		templateUrl: "teamselectitem.html",
        link: function(scope, elem, attrs) {

			scope.border = 'teamselectitem-border-white';
			
			scope.closeNav = function() {
				// console.log("closeNav");
		        document.getElementById("mySidenav").style.width = "0px";
			};

			scope.mouseover = function() {
				scope.border = 'teamselectitem-border-blue';
				// console.log("mouseover");
			};

			scope.mouseleave = function() {
				scope.border = 'teamselectitem-border-white';
				// console.log("mouseleave");
			};

			scope.click = function() {
				console.log("click");
			};
		}
    }
});