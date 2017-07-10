angular.module("AFootball")
	.directive('debug', function() {
    return {
		templateUrl: "debug.html",
		scope: { gamedata: '&'},
        link: function(scope, elem, attrs) {
			scope.message = "";
            elem.bind('keyup', function(event) {

				console.log("keyup: " + scope.message);
                if (event.keyCode === 190) {
					console.log("checkKey: period")
	                // this.message = this.message.substr(0,i);
	                // this.click();
					scope.parse(scope.message);
					scope.message = "";
				}
           });

		   scope.parse = function(message) {
				var items = message.split(',');
				console.log("debug: click: " + message);
				console.log("debug: items: " + items.length);
				console.log("debug: items[0]: " + items[0]);
				console.log("debug: items[1]: " + items[1]);
				document.getElementById('junk').focus();

				if(items[0] === 'd') {
					console.log('debug: down: ' + items[1]);
					scope.gamedata.down = parseInt(items[1]);
					console.log('debug: down: ' + items[1] + ", " + scope.gamedata.down);
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

					scope.gamedata.score[who][scope.gamedata.quarter] = val;
					// console.log("debug: scope.gamedata.score[0]: " + scope.gamedata.score[0][0] + ", " + scope.gamedata.score[0][1] + ", " + scope.gamedata.score[0][2] + ", " + scope.gamedata.score[0][3] + ", " + scope.gamedata.score[0][4])
					// console.log("debug: scope.gamedata.score[1]: " + scope.gamedata.score[1][0] + ", " + scope.gamedata.score[1][1] + ", " + scope.gamedata.score[1][2] + ", " + scope.gamedata.score[1][3] + ", " + scope.gamedata.score[0][4])

					scope.gamedata.name[0] = "HOME" + val.toString()
					scope.gamedata.name[1] = "VISITOR" + val.toString()

				}
				else
				if(items[0] == 'q') {
					scope.gamedata.quarter = parseInt(items[1]);
				}
				else
				if(items[0] == 'y') {
					console.log('debug:click:yardline');
					scope.gamedata.yardline = parseInt(items[1]);
				}
				else
				if(items[0] == 'g') {
					scope.gamedata.togo = parseInt(items[1]);
				}
				else
				if(items[0] == 't') {
					scope.gamedata.time = parseInt(items[1]);
				}
				else
				if(items[0] == 'o') {
					// console.log('debug.offense: ' + items[1]);
					if(items[1] == 'h' || items[1] == 'h.') {
						// console.log('debug: offense: home')
						scope.gamedata.offense = 0;
						scope.gamedata.defense = 1;
					}
					else {
						// console.log('debug: offense: visitor')
						scope.gamedata.offense = 1;
						scope.gamedata.defense = 0;                   
					}
					scope.gamedata.trigger++;
				}
			}
        }
    }
});