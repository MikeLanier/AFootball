angular.module("AFootball", [])
	.controller('AFootballCtrl', function AFootballCtrl($scope, $window) {
		// console.log("AFootball.js: AFootballCtrl")

		$scope.gamedata = {
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
			who: 0,
			frameWidth: 0,
			frameHeight: 0
		};
  	})
