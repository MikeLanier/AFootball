angular.module("AFootball")
	// .component("debug",{
	// 	templateUrl: "debug.html",
	// 	bindings: { 
	// 		name: "@",
	// 		title: "=" 
	// 	},
	// 	controller: function() {
	// 	  	this.myName = 'Mike';
	// 	}
	// })
	.directive('debug', function() {
    return {
		templateUrl: "debug.html",
        link: function(scope, elem, attrs) {
            elem.bind('keyup', function(event) {
				// console.log("checkKey: " + event.keyCode);
                if (event.keyCode === 190) {
					console.log("checkKey: period")
				}
                    return false;
                // }
            });
        }
    }
});