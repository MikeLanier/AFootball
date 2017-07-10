angular.module("AFootball")
	.directive('scoreboard', function() {
		return {
			templateUrl: "scoreboard.html",
			link: function(scope, elem, attrs) {
				console.log("scoreboard: link");
				console.log(scope.gamedata.name[0]);
				console.log(scope.gamedata.name[1]);
			}
		}
	});