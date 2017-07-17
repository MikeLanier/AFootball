angular.module("AFootball")
	.directive('scoreboard', function() {
		return {
			scope: { gamedata: '=' },
			templateUrl: "scoreboard.html",
			link: function(scope, elem, attrs) {
				// console.log("scoreboard: link");
				// console.log(scope.gamedata.name[0]);
				// console.log(scope.gamedata.name[1]);

				elem.bind('change', function (evt) {
					console.log('fileAdded: ' + evt.target.files[0]);
					var reader = new FileReader();

					reader.onload = function (e) {
						console.log("scope.result: " + this.scope.result);
						// var lines = this.result.split('\n');
						// for(var line = 0; line < lines.length; line++){
						// 	console.log(lines[line]);
						// }				
					}

					reader.readAsText(evt.target.files[0]);
				});

				scope.hometeamselect = function() {
			        document.getElementById("mySidenav").style.width = "300px";
				};

				scope.visitorteamselect = function() {
			        document.getElementById("mySidenav").style.width = "300px";
				};
				
				scope.$watch(
					// This is the important part
					function() {
						return scope.gamedata.down;
					},

					function(newValue, oldValue) {
						// console.log("scope.gamedata.down: has changed");
						scope.formatDownDistance(scope.gamedata);
						scope.format_ballon(scope.gamedata);
					},
					true
				);

				scope.$watch(
					// This is the important part
					function() {
						return scope.gamedata.yardline;
					},

					function(newValue, oldValue) {
						// console.log("scope.gamedata.yardline: has changed");
						scope.formatDownDistance(scope.gamedata);
						scope.format_ballon(scope.gamedata);
					},
					true
				);

				scope.$watch(
					// This is the important part
					function() {
						return scope.gamedata.togo;
					},

					function(newValue, oldValue) {
						// console.log("scope.gamedata.togo: has changed");
						scope.formatDownDistance(scope.gamedata);
						scope.format_ballon(scope.gamedata);
					},
					true
				);

				scope.$watch(
					// This is the important part
					function() {
						return scope.gamedata.time;
					},

					function(newValue, oldValue) {
						// console.log("scope.gamedata.time: has changed");

						var min = Math.floor(scope.gamedata.time / 60);
						var sec = scope.gamedata.time - (min * 60);
						// console.log("   min, sec: " + min.toString() + ", " + sec.toString())

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
						},
					true
				);

				scope.$watch(
					function() {
						return scope.gamedata.quarter;
					},

					function(newValue, oldValue) {
						// console.log('scoreboard: scope.game.quarter: has changed: ' + scope.gamedata.quarter);

						if(scope.gamedata.quarter === 1) {
							document.getElementById('quarter1header').style.backgroundColor = "yellow";
							document.getElementById('quarter2header').style.backgroundColor = "white";
							document.getElementById('quarter3header').style.backgroundColor = "white";
							document.getElementById('quarter4header').style.backgroundColor = "white";
						} else 
						if(scope.gamedata.quarter === 2) {
							document.getElementById('quarter1header').style.backgroundColor = "white";
							document.getElementById('quarter2header').style.backgroundColor = "yellow";
							document.getElementById('quarter3header').style.backgroundColor = "white";
							document.getElementById('quarter4header').style.backgroundColor = "white";
						} else 
						if(scope.gamedata.quarter === 3) {
							document.getElementById('quarter1header').style.backgroundColor = "white";
							document.getElementById('quarter2header').style.backgroundColor = "white";
							document.getElementById('quarter3header').style.backgroundColor = "yellow";
							document.getElementById('quarter4header').style.backgroundColor = "white";
						} else 
						if(scope.gamedata.quarter === 4) {
							document.getElementById('quarter1header').style.backgroundColor = "white";
							document.getElementById('quarter2header').style.backgroundColor = "white";
							document.getElementById('quarter3header').style.backgroundColor = "white";
							document.getElementById('quarter4header').style.backgroundColor = "yellow";
						}
					},
					true
				);

				scope.$watch(
					function() {
						return scope.gamedata.offense;
					},

					function(newValue, oldValue) {
						if(scope.gamedata.offense === 0) {
							document.getElementById('homename').style.backgroundColor = 'yellow';
							document.getElementById('visitorname').style.backgroundColor = 'white';
						} else {
							document.getElementById('homename').style.backgroundColor = 'white';
							document.getElementById('visitorname').style.backgroundColor = 'yellow';
						}
					}
				);

				scope.formatDownDistance = function(gamedata) {
					// console.log("formatDownDistance: " + gamedata.down + ", " + gamedata.togo);
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