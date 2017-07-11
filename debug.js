angular.module("AFootball")
	.directive('debug', function() {
    return {
		templateUrl: "debug.html",
		scope: { gamedata: '='},
        link: function(scope, elem, attrs) {
			scope.message = "";
            elem.bind('keyup', function(event) {

				console.log("keyup: " + scope.message);
                if (event.keyCode === 190) {
					console.log("checkKey: period")
	                // scope.message = scope.message.substr(0,i);
	                // this.click();
					scope.parse(scope.message, scope.gamedata);
					scope.message = "";
				}
           });

		   scope.parse = function(message, gamedata) {
				var items = message.split(',');
				// console.log("debug: click: " + message);
				// console.log("debug: items: " + items.length);
				// console.log("debug: items[0]: " + items[0]);
				// console.log("debug: items[1]: " + items[1]);
				document.getElementById('junk').focus();

				if(items[0] === 'd') {
					// console.log('debug: down: ' + items[1]);
					scope.$apply(function() {
						gamedata.down = parseInt(items[1]);
					});
					// console.log('debug: down: ' + items[1] + ", " + gamedata.down);
				}
				else
				if(items[0] == 's') {
					// console.log('debug: debug: score: ')
					var who = 0;
					if(items[1] == 'v') {
						who = 1;
					}

					var val = parseInt(items[2]);
					// console.log('debug: who, val: ' + who.toString() + ', ' + val.toString())

					scope.$apply(function() {
						gamedata.score[who][gamedata.quarter] = val;
					// console.log("debug: gamedata.score[0]: " + gamedata.score[0][0] + ", " + gamedata.score[0][1] + ", " + gamedata.score[0][2] + ", " + gamedata.score[0][3] + ", " + gamedata.score[0][4])
					// console.log("debug: gamedata.score[1]: " + gamedata.score[1][0] + ", " + gamedata.score[1][1] + ", " + gamedata.score[1][2] + ", " + gamedata.score[1][3] + ", " + gamedata.score[0][4])

						gamedata.name[0] = "HOME" + val.toString();
						gamedata.name[1] = "VISITOR" + val.toString();
					});
				}
				else
				if(items[0] == 'q') {
					scope.$apply(function() {
						gamedata.quarter = parseInt(items[1]);
					});
				}
				else
				if(items[0] == 'y') {
					// console.log('debug:click:yardline');
					scope.$apply(function() {
						gamedata.yardline = parseInt(items[1]);
					});
				}
				else
				if(items[0] == 'g') {
					scope.$apply(function() {
						gamedata.togo = parseInt(items[1]);
					});
				}
				else
				if(items[0] == 't') {
					scope.$apply(function() {
						gamedata.time = parseInt(items[1]);
					});
				}
				else
				if(items[0] == 'z.') {
					console.log("open panel")
			        document.getElementById("mySidenav").style.width = "250px";
					scope.$apply(function() {
						gamedata.trigger = !gamedata.trigger;
					});
				}
				else
				if(items[0] == 'o') {
					scope.$apply(function() {
						// console.log('debug.offense: ' + items[1]);
						if(items[1] == 'h' || items[1] == 'h.') {
							// console.log('debug: offense: home')
							gamedata.offense = 0;
							gamedata.defense = 1;
						}
						else {
							// console.log('debug: offense: visitor')
							gamedata.offense = 1;
							gamedata.defense = 0;                   
						}
						gamedata.trigger++;
					});
				}
			}
        }
    }
});