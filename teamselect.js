angular.module("AFootball")
	.directive('teamselect', function() {
    return {
		templateUrl: "teamselect.html",
        link: function(scope, elem, attrs) {
			// console.log("teamselect: scope.count.count1: " + scope.count.count1);
			// console.log("teamselect: scope.count.count2: " + scope.count.count2);

            // elem.bind('teamselect: click', function(event) {
			// 	console.log(event);
			// 	scope.$apply(function() {
			// 		console.log("teamselect: scope.$apply");
          	// 		scope.count.count1 = scope.count.count1 + 1;
			// 		scope.change = !scope.change;
			// 	});
			// });

			scope.closeNav = function() {
				console.log("closeNav");
		        document.getElementById("mySidenav").style.width = "0px";
			};

			scope.click = function() {
				console.log("click");
				// console.log(event);
				// scope.$apply(function() {
					console.log("teamselect: scope.$apply");
          			// scope.count.count1 = scope.count.count1 + 1;
					// scope.change = !scope.change;
				// });
		        document.getElementById("mySidenav").style.width = "250px";
			};

			scope.$watch(
				// This is the important part
				function() {
					return scope.gamedata.trigger;
				},

				function(newValue, oldValue) {
					console.log('teamselect: scope.gamedata.trigger has been changed');
					// Do whatever you want with demoService.currenctObject
			        document.getElementById("mySidenav").style.width = "250px";
				},
				true
			);

			// scope.$watch(
			// 	// This is the important part
			// 	function() {
			// 		return scope.count.count2;
			// 	},

			// 	function(newValue, oldValue) {
			// 		console.log('teamselect: scope.count.count2 has been changed');
			// 		// Do whatever you want with demoService.currenctObject
			// 	},
			// 	true
			// );

			// scope.$watch("scope.change", function(newValue, oldValue) {
			// 	console.log('teamselect: scope.change: has changed');
			// });

			// scope.$watch("scope.count", function(newValue, oldValue) {
			// 	console.log('teamselect: scope.count: has changed');
			// });

			// scope.$watch('scope.count.count1', function(newValue, oldValue) {
			// 	console.log('teamselect: scope.count.count1: has changed');
			// });

			// scope.$watch('scope.count.count2', function(newValue, oldValue) {
			// 	console.log('teamselect: scope.count.count2: has changed');
			// });        
		}
    }
});