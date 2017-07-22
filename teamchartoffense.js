angular.module("AFootball")
	.directive('teamchartoffense', function() {
    return {
		scope: { gamedata: '=' },
		templateUrl: "teamchartoffense.html",
        link: function(scope, elem, attrs) {

			scope.results = [
				{ lineno: 10 },
				{ lineno: 11 },
				{ lineno: 12 },
				{ lineno: 13 },
				{ lineno: 14 },
				{ lineno: 15 },
				{ lineno: 16 },
				{ lineno: 17 },
				{ lineno: 18 },
				{ lineno: 19 },
				{ lineno: 20 },
				{ lineno: 21 },
				{ lineno: 22 },
				{ lineno: 23 },
				{ lineno: 24 },
				{ lineno: 25 },
				{ lineno: 26 },
				{ lineno: 27 },
				{ lineno: 28 },
				{ lineno: 29 },
				{ lineno: 30 },
				{ lineno: 31 },
				{ lineno: 32 },
				{ lineno: 33 },
				{ lineno: 34 },
				{ lineno: 35 },
				{ lineno: 36 },
				{ lineno: 37 },
				{ lineno: 38 },
				{ lineno: 39 },
			];
 
			scope.closeNav = function() {
				// console.log("closeNav");
		        document.getElementById("teamchartoffense").style.width = "0px";
			};
		}
    }
});