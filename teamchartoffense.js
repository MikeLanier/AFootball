angular.module("AFootball")
	.directive('teamchartoffense', function() {
    return {
		scope: { gamedata: '=' },
		templateUrl: "teamchartoffense.html",
        link: function(scope, elem, attrs) {
			scope.closeNav = function() {
				// console.log("closeNav");
		        document.getElementById("teamchartoffense").style.width = "0px";
			};
		}
    }
});