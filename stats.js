angular.module("AFootball")
	.component("stats",{
		templateUrl: "stats.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
