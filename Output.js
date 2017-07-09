angular.module("AFootball")
	.component("output",{
		templateUrl: "output.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
