angular.module("AFootball")
	.directive('scoreboard', function() {
		return {
			templateUrl: "scoreboard.html",
			link: function(scope, elem, attrs) {
				console.log("scoreboard: link");
				console.log(scope.gamedata.name[0]);
				console.log(scope.gamedata.name[1]);

				scope.$watch('scope.gamedata.down', function() {
					console.log("scope.gamedata.down: has changed");
					scope.formatDownDistance(scope.gamedata);
					scope.format_ballon(scope.gamedata);
				});

				scope.$watch('scope.gamedata.yardline', function() {
					console.log("scope.gamedata.yardline: has changed");
					scope.formatDownDistance(scope.gamedata);
					scope.format_ballon(scope.gamedata);
				});

				scope.$watch('scope.gamedata.togo', function() {
					console.log("scope.gamedata.togo: has changed");
					scope.formatDownDistance(scope.gamedata);
					scope.format_ballon(scope.gamedata);
				});

				scope.$watch('scope.gamedata.time', function() {
					console.log("scope.gamedata.time: has changed");

					var min = Math.floor(scope.gamedata.time / 60);
					var sec = scope.gamedata.time - (min * 60);
					console.log("   min, sec: " + min.toString() + ", " + sec.toString())

					scope.time = min.toString();
					if(sec < 10)
					{
						scope.time = scope.time + ":0";
					}
					else
					{
						scope.time = scope.time + ":";
					}
					scope.time = scope.time + sec.toString();
				});

				scope.formatDownDistance = function(gamedata) {
					console.log("formatDownDistance: " + gamedata.down + ", " + gamedata.togo);
					if(gamedata.down == 1) { scope.down = '1st and ' }
					else if(gamedata.down == 2)    {scope.down = '2nd and '}
					else if(gamedata.down == 3)    {scope.down = '3rd and '}
					else if(gamedown.down == 4)    {scope.down = '4th and '}
					else {scope.down = gamedata.down.toString() + ' and '}

					scope.down = scope.down + gamedata.togo.toString(); 
				}

				scope.format_ballon = function(gamedata) {
					// console.log('scoreboard: format_ballon')
					// console.log("  yardline: " + gamedata.yardline)
					// console.log("  offense: " + gamedata.offense)
					scope.ballon = 'ball ';
					if(gamedata.yardline == 50) {
						scope.ballon = scope.ballon + 'at midfield'
					}
					else {
						// console.log('scoreboard: yardline: ' + gamedata.yardline)
						var yardline = 0;
						var team = 0;

						if(gamedata.yardline > 50) {
							// console.log('>50')
							yardline = 100 - gamedata.yardline;
							team = gamedata.offense;
						}
						else {
							// console.log('<50')
							yardline = gamedata.yardline;
							team = gamedata.defense;
						}

						scope.ballon = "at the " + gamedata.name[team] + " " + yardline.toString() + " yardline";
					}
				}
			}
		}
	});