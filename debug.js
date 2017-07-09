angular.module("AFootball")
	.component("debug",{
		templateUrl: "debug.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
