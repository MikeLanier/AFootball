var Plays =
{
	// offensive plays on the game chart
	LinePlunge: 0,
	Counter: 1,
	EndReverse: 2,
	Draw: 3,
	Option: 4,
	Screen: 5,
	SprintOut: 6,
	Bootleg: 7,
	Dropback: 8,
	Breakaway: 9,
	QuarterbackRun: 10,
	QuarterbackTrapped: 11,
	Kickoff: 12,
	KickoffReturn: 13,
	Punt: 14,
	PuntReturn: 15,
	InterceptionReturn: 16,
	FieldGoal: 17,

	// defensive plays on the game chart
	Standard: 18,
	ShortGaps: 19,
	ShortWide: 20,
	ShortPass: 21,
	LongPass: 22,
	Blitz: 23,

	// hybrid offensive plays
	FakePunt: 24,
	FakeFG: 25,
	Kneel: 26,
	QBSneak: 27,
	Spike: 28,
	OnsidesKick: 29,
	SquibKick: 30,
	SquibKickReturn: 31,

	Undefined: 99
}

var ActionModifiers =
{
	Undefined: 0,

	QT: 0,		// Quarterback Trapped
	QR: 1,		// Quarterback Runs
	FG: 2,		// Shanked Punt
	NG: 3,		// Fieldgoal No Good
	SOP: 4,		// Sprintout Pass
	BLP: 5,		// Bootleg Pass
	INC: 6,		// Incomplete Pass

	INT: 7,		// Interception
	F: 8,		// Fumble
	BK: 9,		// Blocked Kick
	PI: 10,		// Pass Interference
	OFF: 11,	// Offensive Penalty
	DEF: 12,	// Defensive Penalty
	OFFX: 13,	// Offensive Deadball Penalty
	DEFX: 14	// Defensive Deadball Penalty
}

var YardageModifiers =
{
	Undefined: 0,

	DS_GAIN: 0,	// Variable Yards Gained Direct Sum
	DS_LOSS: 1,	// Variable Yards Lost Direct Sum
	X_GAIN: 2,	// Variable Yards Gained
	X_LOSS: 3,	// Variable Yards Lost
	B: 4,		// Breakaway
	TD: 5,		// Touchdown
	KO: 6,		// Booming Punt
	T1: 7,		// Variable Yards Gained T1
	T2: 8,		// Variable Yards Gained T2
	T3: 9,		// Variable Yards Gained T3
	S: 10,		//
	R: 11,
}

var OtherModifiers =
{
	Undefined: 0,

	IO: 1,				// Ignore Other
	OB: 2,				// Out of bounds
	PNR: 3,				// Punt not returned
	RECOVERED: 4,		// on side kick recovered
	B_RUSH: 5,
	B_PASS: 6,
	F_LOST: 7,
	F_RECOVERED: 8,
	FD: 9,				// First down
	HALF_DISTANCE: 10	// penalty is marked half the distance to the goal
}

var Who =
{
	offense: 0,
	defense: 1,
	combined: 2,
	undefined: 3
}

var _yardageModifier = YardageModifiers.Undefined;
var _actionModifier = ActionModifiers.Undefined;
var _otherModifiers = new Array();
var source = "";
var _who = Who.Undefined;

var _yards = 0;
var _play = 0; //Plays;

class JResult
{
	constructor() {
		// console.log('JResult');
		this._yards = 0;
		this._play = Plays.Undefined;

		this._yardageModifier = YardageModifiers.Undefined;
		this._actionModifier = ActionModifiers.Undefined;
		this._otherModifiers = OtherModifiers.Undefined;
	}

	load_from_string(result)
	{
		interpret(result);
	}

	yards() {
		return this._yards;
	}

	otherModifier(modifier) { _otherModifiers.add(modifier); }

	play(play) { this._play = play; }
	play() { return this._play; }

	toString()
	{
		var s = "";
		s = s + "Result:";
		s = s + "\n    Yards: " + _yards;
		s = s + "\n    Play : " + _play;
		if(_yardageModifier != YardageModifiers.Undefined)	s = s + "\n    yMod : " + _yardageModifier;
		if(_actionModifier != ActionModifiers.Undefined)	s = s + "\n    aMod : " + _actionModifier;

		for(var i=0; i<_otherModifiers.length; i++)
		{
			if(i==0)
				s = s + "\n    oMods: " + _otherModifiers.get(i);
			else
				s = s + "\n         : " + _otherModifiers.get(i);
		}

		s = s + "\n    Who  : " + _who;

		return s;
	}

	log()
	{
		console.log("Result:");
		console.log("    Yards: " + _yards);
		console.log("    Play : " + _play);
		if(_yardageModifier != YardageModifiers.Undefined)	console.log("    yMod : " + _yardageModifier);
		if(_actionModifier != ActionModifiers.Undefined)	console.log("    aMod : " + _actionModifier);

		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(i==0)
				console.log("    oMods: " + _otherModifiers.get(i));
			else
				console.log("         : " + _otherModifiers.get(i));
		}

		console.log("    Who  : " + _who);
	}

	get(playOffense, playDefense)
	{
		console.log("JResult: " + playOffense + ", " + playDefense);
		if(playOffense == Plays.OnsidesKick)
		{
			// ONSIDE: Ball travels 12 yards. Kicking teams rolls offensive dice. Kicking Team recovers on totals of 13-20.
			//         Receiving Team recovers on 10-12,21-39. No return.

			_yards = 12;
			_play = Plays.OnsidesKick;

			_yardageModifier = YardageModifiers.Undefined;
			_actionModifier = ActionModifiers.Undefined;
			_otherModifier = OtherModifiers.Undefined;

			var roll = JGame.dice.offense();
			if(roll >= 13 && roll <= 20)
			{
				_otherModifiers.add(OtherModifiers.RECOVERED);
			}
		}

		else if(playOffense == Plays.SquibKick)
		{
			// SQUIB: Ball travels 40 yards. REceiving team rolls offensive dice and consults Squib Kickoff
			//        Return Column for return yardage

			_yards = 40;
			_play = Plays.SquibKick;

			_yardageModifier = YardageModifiers.Undefined;
			_actionModifier = ActionModifiers.Undefined;
			_otherModifier = OtherModifiers.Undefined;
		}

		else if(playOffense == Plays.SquibKickReturn)
		{
			// SQUIB: Ball travels 40 yards. REceiving team rolls offensive dice and consults Squib Kickoff
			//        Return Column for return yardage
			//squibKickResults[]
			var roll = JGame.dice.offense() - 10;
			copy(JGame.squibKickResults[roll]);
			_play = Plays.SquibKickReturn;
		}

		else
		{
			var resultOffense = GetResultOffense(playOffense);
			if(resultOffense.DEF() ||
				resultOffense.DEFX() ||
				resultOffense.OFF() ||
				resultOffense.OFFX() ||
				resultOffense.PI())
			{
				// Yards	OFF-S	DEF-S	OFF-R	DEF-R
				// -----	-----	-----	-----	-----
				// 5		10-32	13-34	10-25	10-24
				// 5X*		None	35-36	None	25-26
				// 10		33-35	10-12	26-34	27-29
				// 15*		36-39	37-39	35-39	30-39

				var o = JGame.dice.offense();
				resultOffense._yards = 5;

				if(resultOffense.S())
				{
					if(resultOffense.OFF() || resultOffense.OFFX())
					{
						if(o >= 10 && 0 <= 21)	resultOffense._yards = 5;
						if(o >= 33 && 0 <= 35)	resultOffense._yards = 10;
						if(o >= 36 && 0 <= 39)	resultOffense._yards = 15;
					}
					else
					{
						if(o >= 13 && 0 <= 36)	resultOffense._yards = 5;
						if(o >= 10 && 0 <= 12)	resultOffense._yards = 10;
						if(o >= 37 && 0 <= 39)	resultOffense._yards = 15;
					}
				}

				else if(resultOffense.R())
				{
					if(resultOffense.OFF() || resultOffense.OFFX())
					{
						if(o >= 10 && 0 <= 25)	resultOffense._yards = 5;
						if(o >= 26 && 0 <= 34)	resultOffense._yards = 10;
						if(o >= 35 && 0 <= 39)	resultOffense._yards = 15;
					}
					else
					{
						if(o >= 10 && 0 <= 26)	resultOffense._yards = 5;
						if(o >= 27 && 0 <= 29)	resultOffense._yards = 10;
						if(o >= 30 && 0 <= 39)	resultOffense._yards = 15;
					}
				}

				copy(resultOffense);
			}

			else if(playDefense != Plays.Undefined)
			{
				var resultDefense = GetResultDefense(playOffense, playDefense);
				JGame.resultStack.add(resultOffense);
				JGame.resultStack.add(resultDefense);

				resultOffense.log();
				resultDefense.log();
				copy(Priority(resultOffense, resultDefense));
				_who = Who.combined;
			}
			else
			{
				copy(resultOffense);
			}
		}

		if(F())
		{
			if(JGame.dice.offense() > JGame.data.teams[JGame.data.offense].fumble)
				OtherModifier(OtherModifiers.F_LOST);
			else
				OtherModifier(OtherModifiers.F_RECOVERED);
		}

		log();
		JGame.resultStack.add(this);
	}

	copy(result)
	{
		_yards = result._yards;
		_play = result._play;

		_yardageModifier = result._yardageModifier;
		_actionModifier = result._actionModifier;

		for(var i=0; i<result._otherModifiers.size(); i++)
		{
			_otherModifiers.add(result._otherModifiers.get(i));
		}

		_source = result._source;
	}

	Validate(str)
	{
		str = str.replace( "0", "" );
		str = str.replace( "1", "" );
		str = str.replace( "2", "" );
		str = str.replace( "3", "" );
		str = str.replace( "4", "" );
		str = str.replace( "5", "" );
		str = str.replace( "6", "" );
		str = str.replace( "7", "" );
		str = str.replace( "8", "" );
		str = str.replace( "9", "" );
		str = str.replace( "+", "" );
		str = str.replace( "-", "" );
		str = str.replace( " ", "" );

		if( str.length > 0 )
			return false;
		else
			return true;
	}

	Interpret(str)
	{
		console.log("str: " + str);
		source = str;

		try
		{
			str = str.toUpperCase();

			var i = -1;
			if((i = str.indexOf("(")) >= 0)
			{
				console.log("(");
				str = str.replace("(", "");
				str = str.replace(")", "");

				_otherModifiers.add(OtherModifiers.IO);
				Interpret(str);
			}

			else if((i = str.indexOf("[")) >= 0)
			{
				console.log("[");
				str = str.replace("[", "");
				str = str.replace("]", "");

				_otherModifiers.add(OtherModifiers.IO);
				Interpret(str);
			}

			else if((i = str.indexOf("*")) >= 0)
			{
				console.log("*");
				str = str.replace("*", "");

				_otherModifiers.add(OtherModifiers.OB);
				Interpret(str);
			}

			else if((i = str.indexOf("DEFX")) >= 0)
			{
				console.log("DEFX");
				str = str.replace("DEFX", "");
				_actionModifier = ActionModifiers.DEFX;
				Interpret(str);
			}

			else if((i = str.indexOf("OFFX")) >= 0)
			{
				console.log("OFFX");
				str = str.replace("OFFX", "");
				_actionModifier = ActionModifiers.OFFX;
				Interpret(str);
			}

			else if((i = str.indexOf("BLP")) >= 0)
			{
				console.log("BLP");
				_actionModifier = ActionModifiers.BLP;
			}

			else if((i = str.indexOf("DEF")) >= 0)
			{
				console.log("DEF");
				str = str.replace("DEF", "");
				_actionModifier = ActionModifiers.DEF;
				Interpret(str);
			}

			else if((i = str.indexOf("INC")) >= 0)
			{
				console.log("INC");
				_actionModifier = ActionModifiers.INC;
			}

			else if((i = str.indexOf("INT")) >= 0)
			{
				console.log("INT");
				str = str.replace("INT", "");
				_actionModifier = ActionModifiers.INT;
				Interpret(str);
			}

			else if((i = str.indexOf("OFF")) >= 0)
			{
				console.log("OFF");
				str = str.replace("OFF", "");
				_actionModifier = ActionModifiers.OFF;
				Interpret(str);
			}

			else if((i = str.indexOf("SOP")) >= 0)
			{
				console.log("SOP");
				_actionModifier = ActionModifiers.SOP;
			}

			else if((i = str.indexOf("BK")) >= 0)
			{
				console.log("BK");
				str = str.replace("BK", "");
				_actionModifier = ActionModifiers.BK;
				Interpret(str);
			}

			else if((i = str.indexOf("FG")) >= 0)
			{
				console.log("FG");
				_actionModifier = ActionModifiers.FG;
				_yards = -1;
			}

			else if((i = str.indexOf("KO")) >= 0)
			{
				console.log("KO");
				_yardageModifier = YardageModifiers.KO;
				_yards = 1;
			}

			else if((i = str.indexOf("NG")) >= 0)
			{
				console.log("NG");
				_actionModifier = ActionModifiers.NG;
				_yards = -1;
			}

			else if((i = str.indexOf("PI")) >= 0)
			{
				console.log("PI");
				str = str.replace("PI", "");
				_actionModifier = ActionModifiers.PI;
				Interpret(str);
			}

			else if((i = str.indexOf("QR")) >= 0)
			{
				console.log("QR");
				_actionModifier = ActionModifiers.QR;
			}

			else if((i = str.indexOf("QT")) >= 0)
			{
				console.log("QT");
				_actionModifier = ActionModifiers.QT;
			}

			else if((i = str.indexOf("T1")) >= 0)
			{
				console.log("T1");
				_yardageModifier = YardageModifiers.T1;
				_yards = 1;
			}

			else if((i = str.indexOf("T2")) >= 0)
			{
				console.log("T2");
				_yardageModifier = YardageModifiers.T2;
				_yards = 1;
			}

			else if((i = str.indexOf("T3")) >= 0)
			{
				console.log("T3");
				_yardageModifier = YardageModifiers.T3;
				_yards = 1;
			}

			else if((i = str.indexOf("TD")) >= 0)
			{
				console.log("TD");
				_yardageModifier = YardageModifiers.TD;
				_yards = 1;
			}

			else if((i = str.indexOf("B")) >= 0)
			{
				console.log("B");
				_yardageModifier = YardageModifiers.B;
				_yards = 1;
			}

			else if((i = str.indexOf("F")) >= 0)
			{
				console.log("F");
				str = str.replace("F", "");
				_actionModifier = ActionModifiers.F;
				Interpret(str);
			}

			else if((i = str.indexOf("-DS")) >= 0)
			{
				console.log("-DS");
				_yardageModifier = YardageModifiers.DS_LOSS;
				_yards = -1;
			}

			else if((i = str.indexOf("DS")) >= 0)
			{
				console.log("DS");
				_yardageModifier = YardageModifiers.DS_GAIN;
				_yards = 1;
			}

			else if((i = str.indexOf("-X")) >= 0)
			{
				console.log("-X");
				_yardageModifier = YardageModifiers.X_LOSS;
				_yards = -1;
			}

			else if((i = str.indexOf("X")) >= 0)
			{
				console.log("X");
				_yardageModifier = YardageModifiers.X_GAIN;
				_yards = 1;
			}

			else if((i = str.indexOf("S")) >= 0)
			{
				console.log("S");
				_yardageModifier = YardageModifiers.S;
				_yards = 1;
			}

			else if((i = str.indexOf("R")) >= 0)
			{
				console.log("R");
				_yardageModifier = YardageModifiers.R;
				_yards = 1;
			}

			else if((i = str.indexOf("O")) >= 0)
			{
				console.log("O");
				str = str.replace("O", "");
				Interpret(str);
			}

			else if(!this.Validate(str))
			{
				s = "Uninterpreted value \"";
				s += str;
				s += "\" found in results data.";
			}

			else
			{
				try
				{
					if(str.length > 0)
					{
						str = str.replace("+", "");
						str = str.replace(" ", "");
						if(str.length > 0)
							_yards = parseInt(str);
						else
							_yards = 0;
					}
					else
						_yards = 0;
				}
				catch(e)
				{
					console.log("Results.cs: Exception thrown: String [" + str + "]");
				}
			}
		}
		catch(e)
		{
			console.log("Results.cs: Exception caught");
		}
	}

	Record(recordFilename, id)
	{
	}

	Playback(recordFilename, id)
	{
	}

	QT() { return (_actionModifier == ActionModifiers.QT); }
	QR() { return (_actionModifier == ActionModifiers.QR); }
	FG() { return (_actionModifier == ActionModifiers.FG); }
	NG() { return (_actionModifier == ActionModifiers.NG); }
	SOP() { return (_actionModifier == ActionModifiers.SOP); }
	BLP() { return (_actionModifier == ActionModifiers.BLP); }
	INC() { return (_actionModifier == ActionModifiers.INC); }

	INT() { return (_actionModifier == ActionModifiers.INT); }
	F() { return (_actionModifier == ActionModifiers.F); }
	BK() { return (_actionModifier == ActionModifiers.BK); }
	PI() { return (_actionModifier == ActionModifiers.PI); }
	DEF() { return (_actionModifier == ActionModifiers.DEF); }
	OFF() { return (_actionModifier == ActionModifiers.OFF); }
	DEFX() { return (_actionModifier == ActionModifiers.DEFX); }
	OFFX() { return (_actionModifier == ActionModifiers.OFFX); }

	DS()
	{
		return (_yardageModifier == YardageModifiers.DS_GAIN) || (_yardageModifier == YardageModifiers.DS_LOSS);
	}

	DS_GAIN() { return (_yardageModifier == YardageModifiers.DS_GAIN); }
	DS_LOSS() { return (_yardageModifier == YardageModifiers.DS_LOSS); }

	X()
	{
		return (_yardageModifier == YardageModifiers.X_GAIN) || (_yardageModifier == YardageModifiers.X_LOSS);
	}

	X_GAIN() { return (_yardageModifier == YardageModifiers.X_GAIN); }
	X_LOSS() { return (_yardageModifier == YardageModifiers.X_LOSS); }
	B() { return (_yardageModifier == YardageModifiers.B); }
	TD() { return (_yardageModifier == YardageModifiers.TD); }
	KO() { return (_yardageModifier == YardageModifiers.KO); }
	T1() { return (_yardageModifier == YardageModifiers.T1); }
	T2() { return (_yardageModifier == YardageModifiers.T2); }
	T3() { return (_yardageModifier == YardageModifiers.T3); }
	S() { return (_yardageModifier == YardageModifiers.S); }
	R() { return (_yardageModifier == YardageModifiers.R); }

	IO()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.IO)
			{
				return true;
			}
		}
		return false;
	}

	OB()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.OB)
			{
				return true;
			}
		}
		return false;
	}

	PNR()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.PNR)
			{
				return true;
			}
		}
		return false;
	}

	RECOVERED()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.RECOVERED)
			{
				return true;
			}
		}
		return false;
	}

	B_PASS()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.B_PASS)
			{
				return true;
			}
		}
		return false;
	}

	B_RUSH()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.B_RUSH)
			{
				return true;
			}
		}
		return false;
	}

	F_LOST()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.F_LOST)
			{
				return true;
			}
		}
		return false;
	}

	F_RECOVERED()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.F_RECOVERED)
			{
				return true;
			}
		}
		return false;
	}

	FD()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.FD)
			{
				return true;
			}
		}
		return false;
	}

	HALF_DISTANCE()
	{
		for(var i=0; i<_otherModifiers.size(); i++)
		{
			if(_otherModifiers.get(i) == OtherModifiers.HALF_DISTANCE)
			{
				return true;
			}
		}
		return false;
	}

	GetResultDefense(playOffense, playDefense)
	{
		console.log("GetResultDefense: " + playOffense + ", " + playDefense);
		result = null;
		var roll = 0;
		var p = 0;
		var d = 0;

		try
		{
			if(playDefense != Plays.Undefined)
			{
				// if there are debug results in the list use those first.  Get the first
				// result then pop it off the list.
				if(JGame.resultStackDebug.size() > 0)
				{
					result = JGame.resultStackDebug.get(0);
					JGame.resultStackDebug.remove(0);
				}
				else
				{
					roll = JGame.dice.defense() - 1;
					p = JGame.playIndex(playOffense);

					if(playDefense == Plays.Standard) d = 0;
					else if(playDefense == Plays.ShortGaps) d = 5;
					else if(playDefense == Plays.ShortWide) d = 10;
					else if(playDefense == Plays.ShortPass) d = 15;
					else if(playDefense == Plays.LongPass) d = 20;
					else if(playDefense == Plays.Blitz) d = 25;

					result = JGame.data.teams[JGame.data.defense].defenseResults[roll + d][p];
				}

				result._play = playOffense;
			}
		}
		catch(e)
		{
			msg = "roll = " + roll +
					"\np = " + p +
					"\nd = " + d;
			console.log(msg);
		}

		result._who = Who.defense;
		result.log();
		JLog.subindent();
		return result;
	}

	GetResultOffense(playOffense)
	{
		console.log("GetResultOffense: " +playOffense);
		result = null;
		var p = 0;
		var roll = 0;

		try
		{
			// if there are debug results in the list use those first.  Get the first
			// result then pop it off the list.
			if(JGame.resultStackDebug.size() > 0)
			{
				result = JGame.resultStackDebug.get(0);
				JGame.resultStackDebug.remove(0);
				result._play = playOffense;
			}
			else
			{
				p = JGame.playIndex(playOffense);
				roll = JGame.dice.offense() - 10;
				result = JGame.data.teams[JGame.data.offense].offenseResults[roll][p];

				result._play = playOffense;
			}

			// if the result is a penalty, process it, add it to the spots list and
			// get another result
			if(result.PI() ||
				result.DEF() ||
				result.DEFX() ||
				result.OFF() ||
				result.OFFX())
			{
				if(result.X_GAIN())
				{
					result._yards = 5;
				} else if(result.X_LOSS())
				{
					result._yards = -5;
				}
			}
			else if(result.DS())
			{
				if(result.DS_GAIN())
					result._yards = JGame.dice.DS();
				else
					result._yards = -JGame.dice.DS();
			}
			else if(result.X())
			{
				if(result.X_GAIN())
					result._yards = 40 - JGame.dice.offense();
				else
					result._yards = JGame.dice.DS() - 40;
			}
			else if(result.T1())
			{
				result._yards = JGame.dice.offense();
			}
			else if(result.T2())
			{
				result._yards = JGame.dice.offense() +
						JGame.dice.offense();
			}
			else if(result.T3())
			{
				result._yards = JGame.dice.offense() +
						JGame.dice.offense() +
						JGame.dice.offense();
			}

			else if(result.TD())
			{
				result._yards = 120;
			}
		}
		catch(e)
		{
			msg = "roll = " + roll +
					"\np = " + p +
					"\nresult = " + result;
			console.log("Exception caught in GetResultOffense: " + msg);
		}

		result._who = Who.offense;
		result.log();
		JLog.subindent();
		return result;
	}

	Priority(resultOffense, resultDefense)
	{
		result = new JResult(resultOffense);

		if(resultOffense.IO())
		{
			if(resultDefense.IO())
			{
				result.copy(resultDefense);
			}
			else
			{
				result.copy(resultOffense);
			}
		}

		else if(resultOffense.TD())
		{
			if(resultDefense.IO() ||
					resultDefense.INT() ||
					resultDefense.F() ||
					resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				result.copy(resultOffense);
			}
		}

		else if(resultOffense.B())
		{
			if(resultDefense.IO() ||
				resultDefense.INT() ||
				resultDefense.F() ||
				resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				play = result.Play();
				result.copy(new JResult(Plays.Breakaway, Plays.Undefined));
				result._yards += resultDefense._yards;
				//result.Play(play);

				if(play == Plays.Screen ||
						play == Plays.SprintOut ||
						play == Plays.Bootleg ||
						play == Plays.Dropback)
					result.OtherModifier(OtherModifiers.B_PASS);
				else
					result.OtherModifier(OtherModifiers.B_RUSH);
			}
		}

		else if(resultOffense.QR())
		{
			if(resultDefense.IO() ||
					resultDefense.INT() ||
					resultDefense.F() ||
					resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
				result._yards += resultDefense._yards;
			}
		}

		else if(resultOffense.QT())
		{
			if(resultDefense.IO() ||
					resultDefense.INT() ||
					resultDefense.F() ||
					resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}
		}

		else if(resultOffense.INC())
		{
			if(resultDefense.IO() ||
					resultDefense.INT() ||
					resultDefense.F() ||
					resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				result.copy(resultOffense);
			}
		}

		else if(resultOffense.INT())
		{
		}

		else if(resultOffense.F())
		{
		}

		else if(resultOffense.SOP())
		{
			result.copy(new JResult(Plays.SprintOut, Plays.Undefined));
		}

		else if(resultOffense.BLP())
		{
			result.copy(new JResult(Plays.Bootleg, Plays.Undefined));
		}

		else
		{
			if(resultDefense.IO() ||
					resultDefense.INT() ||
					resultDefense.F() ||
					resultDefense.INC())
			{
				result.copy(resultDefense);
			}

			else if(resultDefense.QR())
			{
				result.copy(new JResult(Plays.QuarterbackRun, Plays.Undefined));
			}

			else if(resultDefense.QT())
			{
				result.copy(new JResult(Plays.QuarterbackTrapped, Plays.Undefined));
			}

			else
			{
				result.copy(resultOffense);
				result._yards += resultDefense._yards;
			}
		}

		return result;
	}

	draw(x, y)
	{
		// draw(gc, x, y, 1.0, false);
	}

	draw(x, y, scale, source)
	{
		var	width = 64;
		var	height = 32;
		gc.setStroke(Color.BLACK);

		n = _yards;
		tx = n.toString();

		if(QT())
		{
			gc.setFill(Color.RED);
			tx = "QT";
		}
		else if(QR())
		{
			gc.setFill(Color.WHITE);
			tx = "QR";
		}
		else if(SOP())
		{
			gc.setFill(Color.WHITE);
			tx = "SOP";
		}
		else if(BLP())
		{
			gc.setFill(Color.WHITE);
			tx = "BLP";
		}
		else if(INC())
		{
			gc.setFill(Color.rgb(36,22,15));
			tx = "INC";
		}
		else if(INT())
		{
			gc.setFill(Color.RED);
			if(_yards<0)
				tx = "INT" + n.toString();
			else
				tx = "INT+" + n.toString();
		}
		else if(F())
		{
			gc.setFill(Color.RED);
			if(_yards<0)
				tx = "F" + n.toString();
			else
				tx = "F+" + n.toString();
		}
		else if(BK())
		{
			gc.setFill(Color.RED);
			if(_yards<0)
				tx = "BK" + n.toString();
			else
				tx = "BK+" + n.toString();
		}
		else if(PI())
		{
			gc.setFill(Color.YELLOW);
			tx = "PI " + n.toString();
		}
		else if(DEF())
		{
			gc.setFill(Color.YELLOW);
			tx = "DEF " + n.toString();
		}
		else if(OFF())
		{
			gc.setFill(Color.YELLOW);
			tx = "OFF " + n.toString();
		}
		else if(DEFX())
		{
			gc.setFill(Color.YELLOW);
			tx = "DEFX " + n.toString();
		}
		else if(OFFX())
		{
			gc.setFill(Color.YELLOW);
			tx = "OFFX " + n.toString();
		}
		else if(DS())
		{
			gc.setFill(Color.GREEN);
			tx = "DS";
		}
		else if(DS_GAIN())
		{
			gc.setFill(Color.GREEN);
			tx = "DS";
		}
		else if(DS_LOSS())
		{
			gc.setFill(Color.RED);
			tx = "DS";
		}
		else if(X())
		{
			gc.setFill(Color.GREEN);
			tx = "X";
		}
		else if(X_GAIN())
		{
			gc.setFill(Color.GREEN);
			tx = "X";
		}
		else if(X_LOSS())
		{
			gc.setFill(Color.RED);
			tx = "X";
		}
		else if(B())
		{
			gc.setFill(Color.GREEN);
			tx = "B";
		}
		else if(TD())
		{
			gc.setFill(Color.GREEN);
			tx = "TD";
		}
		else if(KO())
		{
			gc.setFill(Color.GREEN);
			tx = "KO";
		}
		else if(T1())
		{
			gc.setFill(Color.GREEN);
			tx = "T1";
		}
		else if(T2())
		{
			gc.setFill(Color.GREEN);
			tx = "T2";
		}
		else if(T3())
		{
			gc.setFill(Color.GREEN);
			tx = "T3";
		}
		else if(S())
		{
		}
		else if(R())
		{
		}
		else
		{
			if(_yards < 0)
				gc.setFill(Color.RED);
			else if(_yards > 0)
				gc.setFill(Color.GREEN);
			else
				gc.setFill(Color.WHITE);
		}

		if(IO())
		{
			tx = "(" + tx + ")";
		}
		else if(OB())
		{
			tx = "*" + tx;
		}
		else if(PNR())
		{
			tx = "*" + tx;
		}

		if(source) tx = _source;

		gc.setLineWidth(1);
		gc.fillRect(x, y, width*scale, height*scale);

		gc.setStroke(Color.CYAN);
		if(_who == Who.offense)		gc.setStroke(Color.BLUE);	else
		if(_who == Who.defense)		gc.setStroke(Color.ORANGE);	else
		if(_who == Who.combined)	gc.setStroke(Color.BLACK);

		gc.strokeRect(x, y, width*scale, height*scale);

		gc.setFont(new Font("Arial Narrow", 16*scale));
		widthTx = getToolkit().getFontLoader().computeStringWidth(tx, gc.getFont());
		heightTx = getToolkit().getFontLoader().getFontMetrics(gc.getFont()).getXheight();

		xCenter = width*scale/2 + x;
		yCenter = height*scale/2 + y;

		xOffset = xCenter - widthTx*scale/2;
		yOffset = yCenter + heightTx*scale/2;

		gc.setFill(Color.BLACK);

		gc.fillText( tx, xOffset, yOffset);
	}
}
