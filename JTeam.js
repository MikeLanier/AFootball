class JTeam {
	constructor() {
		// console.log('JTeam: constructor: ');
		this.name = "";
		this.nickname = "";
		this.year = "";
		this.filename = "";
		this.helmet = "";
		this.abrv = "";
		this.fumble = 0;
		this.stats = new JStats();

		this.offenseResults = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.offenseResults[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.offenseResults[i][j] = new JResult();
			}
		}

		this.defenseResults = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.defenseResults[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.defenseResults[i][j] = new JResult();
			}
		}
	}

	load(lines) {
		console.log('JTeam:load: ')
		
		var index = 0;
		var items = lines[index].split(',');
		
		this.name = items[1];
		this.nickname = items[2];
		this.year = items[0];
		if(items.length > 6) this.helmet = items[6];
		this.fumble = parseInt(items[3]);

		// helmet = helmet.replace("c:\\Mike\\Football\\", "");

		if(items.length > 7) this.abrv = items[7];
		// if(abrv.length() == 0) abrv = this.name.substring(0,3);

		index++

		for(var r=0; r<30; r++)
		{
			index++
			console.log("index: " + index);
			console.log("lines.length: " + lines.length);
			items = lines[index].split(',');

			console.log("r " + r);
			console.log("this.offenseResults: " + this.offenseResults);
			console.log("this.offenseResults[r][0]: " + this.offenseResults[r][0]);
			this.offenseResults[r][Plays.LinePlunge].Interpret(items[1]);
			this.offenseResults[r][Plays.Counter].Interpret(items[2]);
			this.offenseResults[r][Plays.EndReverse].Interpret(items[3]);
			this.offenseResults[r][Plays.Draw].Interpret(items[4]);
			this.offenseResults[r][Plays.Option].Interpret(items[5]);
			this.offenseResults[r][Plays.Screen].Interpret(items[6]);
			this.offenseResults[r][Plays.SprintOut].Interpret(items[7]);
			this.offenseResults[r][Plays.Bootleg].Interpret(items[8]);
			this.offenseResults[r][Plays.Dropback].Interpret(items[9]);

			this.offenseResults[r][Plays.Breakaway].Interpret(items[10]);
			this.offenseResults[r][Plays.QuarterbackRun].Interpret(items[11]);
			this.offenseResults[r][Plays.QuarterbackTrapped].Interpret(items[12]);
		}

		index++;

		for(var r=0; r<30; r++)
		{
			index++
			items = lines[index].split(',');

			defenseResults[r][Plays.LinePlunge].Interpret(items[1]);
			defenseResults[r][Plays.Counter].Interpret(items[2]);
			defenseResults[r][Plays.EndReverse].Interpret(items[3]);
			defenseResults[r][Plays.Draw].Interpret(items[4]);
			defenseResults[r][Plays.Option].Interpret(items[5]);
			defenseResults[r][Plays.Screen].Interpret(items[6]);
			defenseResults[r][Plays.SprintOut].Interpret(items[7]);
			defenseResults[r][Plays.Bootleg].Interpret(items[8]);
			defenseResults[r][Plays.Dropback].Interpret(items[9]);

			offenseResults[r][Plays.Kickoff].Interpret(items[10]);
			offenseResults[r][Plays.KickoffReturn].Interpret(items[11]);
			offenseResults[r][Plays.Punt].Interpret(items[12]);
			if(items.length > 13) offenseResults[r][Plays.PuntReturn].Interpret(items[13]);
			if(items.length > 14) offenseResults[r][Plays.InterceptionReturn].Interpret(items[14]);
			if(items.length > 15) offenseResults[r][Plays.FieldGoal].Interpret(items[15]);
		}
	}
}
