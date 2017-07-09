angular.module("AFootball")
	.component("field",{
		templateUrl: "field.html",
		bindings: { 
			name: "@",
			title: "=" 
		},
		controller: function() {
			console.log("field.js: controller");

			var width = '360px';
			var height = '150px';
			var scale = 3;
			var iwidth = 360;
			var iheight = 160;
			var margin = "10px";
			var imargin = 10;
			var background_color = 'green';
			var border = "1px solid white";
			var lineofscrimmage = null;
			var linetomake = null;
			var ball = null;
			var ball_height = 0;
			var ball_width = 0;

			// build the field
			// compute the scaled height, width and border
			var w = iwidth * scale;
			var h = iheight * scale;
			console.log("field.js: one");
			width = w.toString() + 'px';
			height = h.toString() + 'px';
			border = scale.toString() + "px solid white";

			console.log("field.js: two");
			var hashsize = 10;
			var hashtop = [ 0, 0, 0, 0 ];
			hashtop[0] = imargin;
			hashtop[1] = h / 3;
			hashtop[2] = hashtop[1] * 2;
			hashtop[3] = imargin + h - hashsize + 1;

			// compute x coordinate for visitor goal line.  that's 30 feet (10 yards)
			// times the scale plus the margin
			var x = imargin + 30 * scale;

			// get the field
			var field = document.getElementById('field');
			field.style.position = "fixed";

			var border = document.createElement('div');
			border.style.borderLeft='medium solid';
			border.style.position='absolute';
			border.style.left = '0px';
			border.style.height = height;
			border.style.border = '1px solid white';
			field.appendChild(border);

			var border = document.createElement('div');
			border.style.borderLeft='medium solid';
			border.style.position='absolute';
			border.style.width = width;
			border.style.top = '0px';
			border.style.border = '1px solid white';
			field.appendChild(border);

			border = document.createElement('div');
			border.style.borderLeft='medium solid';
			border.style.position='absolute';
			border.style.left = width;
			border.style.height = height;
			border.style.border = '1px solid white';
			field.appendChild(border);

			border = document.createElement('div');
			border.style.borderLeft='medium solid';
			border.style.position='absolute';
			border.style.top = height;
			border.style.width = width;
			border.style.border = '1px solid white';
			field.appendChild(border);

			// draw the yard and goal lines, every 10 yards
			for(var i=0; i<=10; i++) {
			var yardline = document.createElement('div');
			yardline.style.borderLeft='medium solid';
			yardline.style.position='absolute';
			yardline.style.left = x.toString() + 'px';
			yardline.style.height = height;
			yardline.style.border = '1px solid white';
			field.appendChild(yardline);

			x = x + 30 * scale;
			}

			// draw the hash marks
			x = imargin + 30 * scale;
			for(var i=0; i<=100; i++) {
			for(var j=0; j<4; j++) {
				var hashmark = document.createElement('div');
				hashmark.style.borderLeft='medium solid';
				hashmark.style.position='absolute';
				hashmark.style.left = x.toString() + 'px';
				hashmark.style.top = hashtop[j].toString() + 'px';
				hashmark.style.height = hashsize.toString() + "px";
				hashmark.style.border = '1px solid white';
				field.appendChild(hashmark);
			}

			x = x + 3 * scale;
			}

			var fontSize = scale * 75;

			var yardnumbers = [ '', 'G', '1', '0', '2', '0', '3', '0', '4', '0', '5', '0', '4', '0', '3', '0', '2', '0', '1', '0', 'G', '' ];
			var iboxsize = 15 * scale;
			var boxsize = iboxsize.toString() + 'px';
			x = imargin + 30 * scale - iboxsize / 2 + 1;

			for(var i=0; i<22; i+=2)
			{
			var yardnumber = document.createElement('div');
			yardnumber.style.position='absolute';
			yardnumber.style.left = x.toString() + 'px';
			yardnumber.style.top = '30px';
			yardnumber.style.height = boxsize;
			yardnumber.style.width = boxsize;
			yardnumber.innerText = yardnumbers[i];
			yardnumber.style.textAlign = 'left';
			yardnumber.style.fontSize = fontSize.toString() + '%';
			yardnumber.style.fontFamily = 'Impact';
			yardnumber.style.color = 'white';
			// yardnumber.style.border = '1px solid white';
			field.appendChild(yardnumber);

			yardnumber = document.createElement('div');
			yardnumber.style.position='absolute';
			yardnumber.style.left = x.toString() + 'px';
			yardnumber.style.top = '30px';
			yardnumber.style.height = boxsize;
			yardnumber.style.width = boxsize;
			yardnumber.innerText = yardnumbers[i+1];
			yardnumber.style.textAlign = 'right';
			yardnumber.style.fontSize = fontSize.toString() + '%';
			yardnumber.style.fontFamily = 'Impact';
			yardnumber.style.color = 'white';
			// yardnumber.style.border = '1px solid white';
			field.appendChild(yardnumber);

			var y = h - 55;

			if(i == 0) {
				yardnumber = document.createElement('div');
				yardnumber.style.position='absolute';
				yardnumber.style.left = x.toString() + 'px';
				yardnumber.style.top = y.toString() + 'px';
				yardnumber.style.height = boxsize;
				yardnumber.style.width = boxsize;
				yardnumber.innerText = yardnumbers[i+1];
				yardnumber.style.textAlign = 'left';
				yardnumber.style.fontSize = fontSize.toString() + '%';
				yardnumber.style.fontFamily = 'Impact';
				yardnumber.style.color = 'white';
				yardnumber.style.transform = 'rotate(180deg)'
				// yardnumber.style.border = '1px solid white';
				field.appendChild(yardnumber);
			}
			else {
				yardnumber = document.createElement('div');
				yardnumber.style.position='absolute';
				yardnumber.style.left = x.toString() + 'px';
				yardnumber.style.top = y.toString() + 'px';
				yardnumber.style.height = boxsize;
				yardnumber.style.width = boxsize;
				yardnumber.innerText = yardnumbers[i];
				yardnumber.style.textAlign = 'left';
				yardnumber.style.fontSize = fontSize.toString() + '%';
				yardnumber.style.fontFamily = 'Impact';
				yardnumber.style.color = 'white';
				yardnumber.style.transform = 'rotate(180deg)'
				// yardnumber.style.border = '1px solid white';
				field.appendChild(yardnumber);

				yardnumber = document.createElement('div');
				yardnumber.style.position='absolute';
				yardnumber.style.left = x.toString() + 'px';
				yardnumber.style.top = y.toString() + 'px';
				yardnumber.style.height = boxsize;
				yardnumber.style.width = boxsize;
				yardnumber.innerText = yardnumbers[i+1];
				yardnumber.style.textAlign = 'right';
				yardnumber.style.fontSize = fontSize.toString() + '%';
				yardnumber.style.fontFamily = 'Impact';
				yardnumber.style.color = 'white';
				yardnumber.style.transform = 'rotate(180deg)'
				// yardnumber.style.border = '1px solid white';
				field.appendChild(yardnumber);
			}

			x = x + 30 * scale;
			}

			var x = imargin + 30 * scale;
			lineofscrimmage = document.createElement('div');
			lineofscrimmage.style.borderLeft='medium solid';
			lineofscrimmage.style.position='absolute';
			lineofscrimmage.style.left = x.toString() + 'px';
			lineofscrimmage.style.height = height;
			lineofscrimmage.style.border = '1px solid blue';
			field.appendChild(lineofscrimmage);

			linetomake = document.createElement('div');
			linetomake.style.borderLeft='medium solid';
			linetomake.style.position='absolute';
			linetomake.style.left = x.toString() + 'px';
			linetomake.style.height = height;
			linetomake.style.border = '1px solid yellow';
			field.appendChild(linetomake);

			var y = h / 2;

			var xx = new Array(5);
			var yy = new Array(5);

			ball_height = 8 * scale;
			ball_width = 5 * scale;
			x -= ball_width;
			ball = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			ball.style.position="absolute";
			ball.style.left = x.toString() + "px";
			ball.style.top = y.toString() + "px";
			ball.style.width = ball_width.toString() + "px";
			ball.style.height = ball_height.toString() + "px";
			ball.style.zIndex = "1";
			// ball.style.backgroundColor = "orange";
			// ball.style.border = "1px solid black";
			ball.style.transform = 'rotate(180deg)';
			field.appendChild(ball);

			xx[0] = 0;
			yy[0] = ball_height / 2;
			xx[1] = ball_width;
			yy[1] = ball_height;
			xx[2] = ball_width;
			yy[2] = 0;
			xx[3] = 0;
			yy[3] = ball_height / 2;

			console.log('[0]: ' + xx[0].toString() + ', ' + yy[0].toString());
			console.log('[1]: ' + xx[1].toString() + ', ' + yy[1].toString());
			console.log('[2]: ' + xx[2].toString() + ', ' + yy[2].toString());
			console.log('[3]: ' + xx[3].toString() + ', ' + yy[3].toString());

			var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			path.setAttribute('d',	"M" + xx[0].toString() + " " + yy[0].toString() + " " +
									"L" + xx[1].toString() + " " + yy[1].toString() + " " +
									"L" + xx[2].toString() + " " + yy[2].toString() + " " +
									"L" + xx[3].toString() + " " + yy[3].toString() + " " +
									"Z" );
			path.setAttribute('stroke', "black");
			path.setAttribute('stroke-width', "1px");
			path.setAttribute('fill', "brown");
			ball.appendChild(path);
		}
	});
