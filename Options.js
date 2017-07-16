angular.module("AFootball")
	.directive('options', function() {
		return {
			templateUrl: "options.html",
			scope: { gamedata: '='},
			link: function(scope, elem, attrs) {

				var buttons = [
					"line-plunge",	// 0-Line Plunge
					"counter",		// 1-Counter
					"end-reverse",	// 2-End Reverse
					"draw",			// 3-Draw
					"option",		// 4-Option
					"screen",		// 5-Screen
					"sprint-out",	// 6-Sprint Out
					"bootleg",		// 7-Bootleg
					"drop-back",	// 8-Drop Back
					"",				// 9
					"",				// 10
					"",				// 11
					"kickoff",		// 12-Kickoff
					"",				// 13
					"punt",			// 14-Punt
					"",				// 15
					"",				// 16
					"fieldgoal",	// 17-Fieldgoal
					"standard",		// 18-Standard
					"short-gaps",	// 19-Short Gaps
					"short-wide",	// 20-Short Wide
					"short-pass",	// 21-Short Pass
					"long-pass",	// 22-Long Pass
					"blitz",		// 23-Blitz
					"fake-punt",	// 24-Fake Punt
					"fake-fg",		// 25-Fake FG
					"kneel",		// 26-Kneel
					"qb-sneek",		// 27-QB Sneak
					"spike",		// 28-Spike
					"onsides-kick",	// 29-Onsides Kick
					"squib-kick",	// 30-Squib Kick
				];

				scope.mouseover = function(e) {
					//console.log("options: mouseover: " + e + ", " + buttons[e]);
					var button = document.getElementById(buttons[e]);
					button.style.backgroundColor = "yellow";
				}

				scope.mouseleave = function(e) {
					//console.log("options: mouseleave: " + e + ", " + buttons[e]);
					var button = document.getElementById(buttons[e]);
					button.style.backgroundColor = "white";
				}

				scope.click = function(e) {
					//console.log("options: click: " + e + ", " + buttons[e]);
				}
			}
		}
	});

	// .component("options",{
	// 	templateUrl: "options.html",
	// 	bindings: { 
	// 		name: "@",
	// 		title: "=" 
	// 	},
	// 	controller: function() {
	// 	  	this.myName = 'Mike';
	// 	}
	// });
