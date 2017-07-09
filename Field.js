angular.module("AFootball")
	.component("field",{
		templateUrl: "field.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
