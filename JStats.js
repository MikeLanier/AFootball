var points = 0;

var first_downs = 0;

var total_yards = 0;
var total_plays = 0;
var total_touchdowns = 0;
var total_safeties = 0;
var total_fumbles = 0;
var total_fumbles_lost = 0;

var rush_yards = 0;
var rush_carries = 0;
var rush_touchdowns = 0;
//var rush_fumbles = 0;
//var rush_fumbles_lost = 0;

var pass_yards = 0;
var pass_attempts = 0;
var pass_completions = 0;
var pass_touchdowns = 0;
//var pass_fumbles = 0;
//var pass_fumbles_lost = 0;
var pass_interceptions = 0;
var pass_sacks = 0;
var interception_returns = 0;
var interception_return_yards = 0;
var interception_return_touchdowns = 0;
//var interception_return_fumbles = 0;
//var interception_return_fumbles_lost = 0;

var punts = 0;
var punt_yards = 0;
var punts_returned = 0;
var punts_blocked = 0;
var punt_returns = 0;
var punt_return_yards = 0;
var punt_return_touchdowns = 0;
//var punt_return_fumbles = 0;
//var punt_return_fumbles_lost = 0;

var kickoffs = 0;
var kickoff_yards = 0;
var kickoffs_returned = 0;
var kickoff_returns = 0;
var kickoff_return_yards = 0;
var kickoff_return_touchdowns = 0;
//var kickoff_return_fumbles = 0;
//var kickoff_return_fumbles_lost = 0;

var fieldgoal_attempts = 0;
var fieldgoals_made = 0;
var fieldgoals_blocked = 0;

var extrapoint_attempts = 0;
var extrapoints_made = 0;
var extrapoints_blocked = 0;

var penalties = 0;
var penalty_yards = 0;

class JStats
{
	constructor()
	{
	}

	Points(_points)	{ points+=_points; }
	FirstDown()    {first_downs++;}

	TotalYards(yards)
	{
		total_yards+=yards;
		total_plays++;
	}

	TotalPlays()
	{
		total_plays++;
	}

	TotalTouchdowns()   {   total_touchdowns++;    }
	TotalSafeties()     {   total_safeties++;  }

	TotalFumbles(lost)
	{
		total_fumbles++;
		if(lost)    total_fumbles_lost++;
	}

	Rush(yards)
	{
		rush_yards+=yards;
		rush_carries++;
		TotalYards(yards);
	}

	RushTouchdowns()
	{
		rush_touchdowns++;
		TotalTouchdowns();
	}

	//RushFumble(Boolean lost)
	//{
	//	rush_fumbles++;
	//	if(lost)    rush_fumbles_lost++;
	//	TotalFumbles(lost);
	//}

	Pass(yards)
	{
		pass_yards+=yards;
		pass_attempts++;
		pass_completions++;
		TotalYards(yards);
	}

	PassIncomplete()
	{
		pass_attempts++;
	}

	PassTouchdowns()
	{
		pass_touchdowns++;
		TotalTouchdowns();
	}

	//PassFumble(Boolean lost)
	//{
	//	pass_fumbles++;
	//	if(lost)    pass_fumbles_lost++;
	//	TotalFumbles(lost);
	//}

	PassInterception()	{	pass_interceptions++;	}
	Sack() { pass_sacks++; }

	InterceptionReturn(yards)
	{
		interception_returns++;
		interception_return_yards+=yards;
	}

	InterceptionReturnTouchdowns()    { interception_return_touchdowns++; }

	//InterceptionReturnFumble(Boolean lost)
	//{
	//	interception_return_fumbles = interception_return_fumbles.get()+1);
	//	if(lost)    interception_return_fumbles_lost = interception_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	Punt(yards)
	{
		punts++;
		punt_yards+=yards;
	}

	PuntReturned()  { punts_returned++; }

	PuntBlocked()
	{
		punts_blocked++;
	}

	PuntReturn(yards)
	{
		punt_returns++;
		punt_return_yards+=yards;
	}

	PuntReturnTouchdown()
	{
		punt_return_touchdowns++;
		TotalTouchdowns();
	}

	//PuntReturnFumble(Boolean lost)
	//{
	//	punt_return_fumbles = punt_return_fumbles.get()+1);
	//	if(lost)    punt_return_fumbles_lost = punt_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	Kickoff(yards)
	{
		kickoffs++;
		kickoff_yards+=yards;
	}

	KickoffReturned()   { kickoffs_returned++; }

	KickoffReturn(yards)
	{
		kickoff_returns++;
		kickoff_return_yards+=yards;
	}

	KickoffReturnTouchdown()    { kickoff_return_touchdowns++; }

	//KickoffReturnFumble(Boolean lost)
	//{
	//	kickoff_return_fumbles = kickoff_return_fumbles.get()+1);
	//	if(lost)    kickoff_return_fumbles_lost = kickoff_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	Fieldgoal(made)
	{
		fieldgoal_attempts++;
		if(made)    fieldgoals_made++;
	}

	FieldgoalBlocked()  { fieldgoals_blocked++; }

	ExtraPoint(made)
	{
		extrapoint_attempts++;
		if(made)    extrapoints_made++;
	}

	ExtraPointBlocked() { extrapoints_blocked++; }

	Penalty(yards)
	{
		penalties++;
		penalty_yards+=yards;
	}

	copy(stats)
	{
		points = stats.points;

		first_downs = stats.first_downs;

		total_yards = stats.total_yards;
		total_plays = stats.total_plays;
		total_touchdowns = stats.total_touchdowns;
		total_safeties = stats.total_safeties;
		total_fumbles = stats.total_fumbles;
		total_fumbles_lost = stats.total_fumbles_lost;

		rush_yards = stats.rush_yards;
		rush_carries = stats.rush_carries;
		rush_touchdowns = stats.rush_touchdowns;
		//rush_fumbles = stats.rush_fumbles;
		//rush_fumbles_lost = stats.rush_fumbles_lost;

		pass_yards = stats.pass_yards;
		pass_attempts = stats.pass_attempts;
		pass_completions = stats.pass_completions;
		pass_touchdowns = stats.pass_touchdowns;
		//pass_fumbles = stats.pass_fumbles;
		//pass_fumbles_lost = stats.pass_fumbles_lost;
		pass_interceptions = stats.pass_interceptions;
		pass_sacks = stats.pass_sacks;

		interception_returns = stats.interception_returns;
		interception_return_yards = stats.interception_return_yards;
		interception_return_touchdowns = stats.interception_return_touchdowns;
		//interception_return_fumbles = stats.interception_return_fumbles;
		//interception_return_fumbles_lost = stats.interception_return_fumbles_lost;

		punts = stats.punts;
		punt_yards = stats.punt_yards;
		punts_returned = stats.punts_returned;
		punts_blocked = stats.punts_blocked;

		punt_returns = stats.punt_returns;
		punt_return_yards = stats.punt_return_yards;
		punt_return_touchdowns = stats.punt_return_touchdowns;
		//punt_return_fumbles = stats.punt_return_fumbles;
		//punt_return_fumbles_lost = stats.punt_return_fumbles_lost;

		kickoffs = stats.kickoffs;
		kickoff_yards = stats.kickoff_yards;
		kickoffs_returned = stats.kickoffs_returned;

		kickoff_returns = stats.kickoff_returns;
		kickoff_return_yards = stats.kickoff_return_yards;
		kickoff_return_touchdowns = stats.kickoff_return_touchdowns;
		//kickoff_return_fumbles = stats.kickoff_return_fumbles;
		//kickoff_return_fumbles_lost = stats.kickoff_return_fumbles_lost;

		fieldgoal_attempts = stats.fieldgoal_attempts;
		fieldgoals_made = stats.fieldgoals_made;
		fieldgoals_blocked = stats.fieldgoals_blocked;

		extrapoint_attempts = stats.extrapoint_attempts;
		extrapoints_made = stats.extrapoints_made;
		extrapoints_blocked = stats.extrapoints_blocked;

		penalties = stats.penalties;
		penalty_yards = stats.penalty_yards;
	}
}
