angular.module("AFootball", [])
	.controller('AFootballCtrl', function AFootballCtrl($scope, $window) {
		console.log("AFootball.js: AFootballCtrl")
		this.title = {
			title: 'AFootball'
		};

		var gamedata = {
			trigger: 0,
			offense: 0,
			defense: 1,
			score: [
			[ 1, 2, 3, 4, 5 ],
			[ 6, 7, 8, 9, 10 ]
			],
			quarter: 1,
			down: 1,
			yardline: 0,
			togo: 10,
			time: 900,
			to: [ 3, 3 ],
			name: [ 'HOME', 'VISITOR' ],
			teams: [ null, null ],
			who: 0
		};

		$scope.gamedata = gamedata;
  	})
	.directive('elheightresize', ['$window', function($window) {
    return {
        link: function(scope, elem, attrs) {
            scope.onResize = function() {
				console.log("onResize");
				var frame = document.getElementById("frame");
				console.log("header.clientHeight: " + frame.clientHeight);
				console.log("header.clientWidth: " + frame.clientWidth);
            }
            scope.onResize();

            angular.element($window).bind('resize', function() {
                scope.onResize();
            })
        }
    }
}])
