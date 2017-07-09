angular.module("AFootball")
	.component("scoreboard",{
		templateUrl: "scoreboard.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
		  	this.myName = 'Mike';
		}
	});
