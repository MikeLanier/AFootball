angular.module("AFootball")
	.directive('optionbutton', function() {
    return {
		scope: {
			opttitle: '=',
			xxx: '=',
			gamedata: '='
		},
		templateUrl: "optionbutton.html",
        link: function(scope, elem, attrs) {

			console.log("optionbutton: opttitle: " + scope.opttitle);
			console.log("optionbutton: cmdID: " + scope.xxx);

			scope.bgcolor = 'white-background';
			
			scope.mouseover = function() {
				scope.bgcolor = 'yellow-background';
				// console.log("mouseover");
			};

			scope.mouseleave = function() {
				scope.bgcolor = 'white-background';
				// console.log("mouseleave");
			};

			scope.click = function() {
				console.log("click");
			};
		}
    }
});