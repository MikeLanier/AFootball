angular.module("AFootball", [])
	.controller('AFootballCtrl', function AFootballCtrl($scope, $window) {
		console.log("AFootball.js: AFootballCtrl")
		this.title = {
			title: 'AFootball'
		};
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
