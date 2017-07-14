angular.module("AFootball")
	// .component("stats",{
	// 	templateUrl: "stats.html",
	// 	bindings: { 
	// 	},
	// 	controller: function() {
	// 	  	this.myName = 'Mike';
	// 	}
	.directive('stats', function() {
		return {
			templateUrl: "stats.html",
			link: function(scope, elem, attrs) {
				scope.stats_title = { label: "--",	sublabel: "--",	home_value: "HOME",	visitor_value: "VIS" };
				scope.stat_items = [
					{ label: "Score",		sublabel: "",			home_value: "0",	visitor_value: "0"},
					{ label: "First Downs",	sublabel: "",			home_value: "0",	visitor_value: "0"},
					{ label: "Rush",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "TD",			home_value: "0",	visitor_value: "0"},
					{ label: "Pass",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Complete",	home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "TD",			home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Int",		home_value: "0",	visitor_value: "0"},
					{ label: "Total",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Plays",		home_value: "0",	visitor_value: "0"},
					{ label: "Fumb/Lost",	sublabel: "",			home_value: "0",	visitor_value: "0"},
					{ label: "Punt",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "BK",			home_value: "0",	visitor_value: "0"},
					{ label: "Punt",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "Return",		sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "TD",			home_value: "0",	visitor_value: "0"},
					{ label: "Kickoff",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "Return",		sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "TD",			home_value: "0",	visitor_value: "0"},
					{ label: "Int",			sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					// { label: "Return",		sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					// { label: "",			sublabel: "TD",			home_value: "0",	visitor_value: "0"},
					// { label: "FG",			sublabel: "Att",		home_value: "0",	visitor_value: "0"},
					// { label: "",			sublabel: "Made",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Length",		home_value: "0",	visitor_value: "0"},
					{ label: "Penalty",		sublabel: "Yards",		home_value: "0",	visitor_value: "0"},
					{ label: "",			sublabel: "Num",		home_value: "0",	visitor_value: "0"}
				];
			}
		}
	});
