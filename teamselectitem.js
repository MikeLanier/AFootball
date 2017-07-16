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

			scope.helmet = scope.team.helmet;
			// console.log(scope.helmet);

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
				console.log("click: " + scope.team.tag);
				scope.$emit('LOAD-TEAM', scope.team.tag);
			};
		}
    }
});