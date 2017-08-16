//todo  AFootball:
//todo      [ ] Field does not size correctly when using FireFox
//todo      [ ] Want the field to be a fixed size, which means it's table cell will not resize. Change the field scale and orientation based on the size of the frame, which I can watch.
//todo      contoller:
//todo          [c] have code to detect that the frame size has changed and what the current size is.  Can I use this to tell the field that it needs to re-draw @cancelled (7/16/2017, 7:29:24 PM)
//todo          [x] define the gamedata and pass it to the panels @done (7/10/2017, 10:06:11 AM)
//todo          [ ] when a team is selected from the team select side panel, load that team
//todo      team:
//todo          [ ] allocate class for team
//todo          [ ] parse team data and load
//todo      result:
//todo          [ ] allocate result class for each result
//todo          [ ] parse result string and load result data
//todo          [ ] interpret result
//todo      scoreboard:
//todo          [x] working on code to resize the controls, but it not working very well and may not be the right answer anyway @done (7/10/2017, 6:42:27 AM)
//todo          [x] develop some non-resizing controls @done (7/10/2017, 6:42:22 AM)
//todo          [x] initialize controls from gamedata @done (7/10/2017, 10:32:31 AM)
//todo              [x] those controls which get data directly from gamedata @done (7/10/2017, 10:08:12 AM)
//todo              [x] those controls which need their data computed @done (7/10/2017, 10:31:24 AM)
//todo                  [x] add watch for down, distance, yardline, time @done (7/10/2017, 10:31:25 AM)
//todo                  [x] build string for down and distance, ballon and time. @done (7/10/2017, 10:31:26 AM)
//todo          [x] add watchers to update the data in the controls when something in the gamedata changes @done (7/10/2017, 8:12:59 PM)
//todo              [x] create the watch functions @done (7/10/2017, 10:32:17 AM)
//todo              [x] change the data using debug commands and make sure the watch's are hit @done (7/10/2017, 8:12:55 PM)
//todo              [x] make sure the scoreboard updates @done (7/10/2017, 8:12:57 PM)
//todo          [x] when either the home or visitor name control is clicked, open the team select side panel and tell the controller to load the selected team @done (7/12/2017, 8:18:07 AM)
//todo          [x] change the background color of the quarter header to white or yellow depending on which quarter it is and automatically change when quarter changes @done (7/11/2017, 12:10:19 PM)
//todo          [x] change the background color of the home and visitor team name to white or yellow depending on which is on offense and automatically change when offense changes @done (7/11/2017, 12:10:18 PM)
//todo          [ ] put button in team select field to open the file open dialog and have the user select a team
//todo              [ ] after selecting a team allocate and load the team data
//todo      field:
//todo          [x] find a way to get the current size of the field panel and center the field @done (7/16/2017, 7:28:52 PM)
//todo          [x] find a way to detect that the size of the field panel has changes and redraw/recreate the field if there is a need to go to a smaller/larger scale. Applying a scale transformation would not look too good. @done (7/16/2017, 7:28:53 PM)
//todo          [x] functions for re-drawing the line of scrimmage, line to make and ball markers. @done (7/16/2017, 7:28:50 PM)
//todo          [x] add watchers to update the line of scrimmage, line to make and ball markers when something appropriate changes in the gamedata @done (7/11/2017, 12:10:32 PM)
//todo              [x] when yardline changes @done (7/11/2017, 9:30:20 AM)
//todo              [x] when offensive team changes @done (7/11/2017, 12:09:02 PM)
//todo          [ ] add watchers to draw a result icon when a new result is defined by a debug command
//todo          drives:
//todo              [ ] create code for the drives display
//todo      output:
//todo          [x] control for displaying multi colored text @done (7/15/2017, 4:45:46 PM)
//todo          [ ] methods for adding text to display
//todo          [x] text ctrl auto resize in height and width @done (7/15/2017, 4:45:55 PM)
//todo          [x] control scrolls when full @done (7/15/2017, 4:46:20 PM)
//todo      options:
//todo          [x] add buttons for the different options. @done (7/10/2017, 6:42:48 AM)
//todo          [ ] buttons need to 
//todo              [x] hilite on hover and @done (7/16/2017, 8:59:35 AM)
//todo              [ ] hilite on select
//todo          [ ] start play on click
//todo      stats:
//todo          [x] create a four column list for displaying the in game stats in the gamedata. @done (7/15/2017, 10:06:31 AM)
//todo          [ ] add watchers to update the in game stats display when something appropriate in the gamedata changes
//todo      debug:
//todo          [x] add an edit control in which to enter debug commmands @done (7/10/2017, 8:13:18 PM)
//todo          [x] add a function to get and parse the debug commmands @done (7/10/2017, 8:13:21 PM)
//todo          [x] if the command is a simple change to the gamedata, make sure the watchers in the other fields detect and respond to the change @done (7/10/2017, 8:13:26 PM)
//todo          [ ] if the command is for an action, create an event to do that action.
//todo          [ ] if the command defines a result for a play to run, 
//todo              [ ] build a result item from the result class
//todo              [ ] add that result to the debug result stack
//todo              [ ] make sure the field detects the addition of the new result to the stack and updates the fields
//todo      team select:
//todo          [x] slide out that displays the list of teams @done (7/12/2017, 7:25:25 AM)
//todo          [x] slide out shows when team name on scoreboard is clicked @done (7/15/2017, 10:06:56 AM)
//todo          [ ] want the list of teams from a text(csv) file, but have yet to figure that out
//todo          [x] list of teams from hardcoded, in code array @done (7/12/2017, 7:25:31 AM)
//todo          [x] team item hilite on over @done (7/12/2017, 5:14:48 PM)
//todo          [ ] load team on click
        
//todo      running a play:
//todo          [ ] get a result from either the debug result stack or the team data
//todo          [ ] parse and react to the result
//todo      user Q/A:
//todo          [x] create a panel in which question can be presented to the user and users can replay @done (7/15/2017, 6:15:22 PM)
//todo          [ ] create the Q/A UI
//todo      team charts:
//todo          [x] click on team name in scoreboard to show team chart @done (8/16/2017, 12:38:40 PM)
//todo          [ ] on select, offense chart will show by default
//todo          [ ] panel will have option to close or show defense
//todo          [ ] defense select will close offense chart and show defense chart
//todo          [ ] chart will contain JResult directives for each item

//  debug commands:
//      d: change down
//      g: change togo
//      o: change offense (o,h. or o,v.)
//      q: change quarter
//      s: change active quarter score (s,h,#. or s,v,#.)
//      t: change time
//      y: change yardline
//  available debug letters:
//  a
//  b
//  c
//  -d
//  e
//  f
//  -g
//  h
//  i
//  j
//  k
//  l
//  m
//  n
//  -o
//  p
//  -q
//  r
//  -s
//  -t
//  u
//  v
//  w
//  x
//  -y
//  z