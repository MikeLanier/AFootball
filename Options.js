angular.module("AFootball")
	.component("options",{
		templateUrl: "options.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
