class JTeam {
	constructor() {
		console.log('JTeam: constructor: ');
		this.name = "";
		this.nickname = "";
		this.year = "";
		this.filename = "";
		this.helmet = "";
		this.abrv = "";
		this.fumble = 0;
		this.stats = new JStats();

		this.offenseResult = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.offenseResult[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.offenseResult[i][j] = new JResult();
			}
		}

		this.defenseResult = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.defenseResult[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.defenseResult[i][j] = new JResult();
			}
		}
	}

	load(lines) {
		console.log('JTeam:load: ')
		for(var i = 0; i < lines.length; i++){
			if(i === 0) {
				var items = lines[i].split(',');

				for(var j=0; j<items.length; j++) {
					console.log('   ' + items[j]);

					this.name = items[1];
					this.nickname = items[2];
					this.year = items[0];
					if(items.length > 6) this.helmet = items[6];
					this.fumble = parseInt(items[3]);

					// helmet = helmet.replace("c:\\Mike\\Football\\", "");

					if(items.length > 7) this.abrv = items[7];
					// if(abrv.length() == 0) abrv = this.name.substring(0,3);
				}
			}
		}				
	}
}
