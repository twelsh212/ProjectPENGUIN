// $(document).ready(function(){
// 	var createTable = function(){	
// 		mytable = $('<table></table>').attr({ id: "gridbox" });
// 		var rows = 20;
// 		var cols = 20;
// 		var tr = [];
// 		for (var i = 0; i < rows; i++) {
// 			var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
// 			for (var j = 0; j < cols; j++) {
// 				$('<td></td>').addClass('playCell').appendTo(row); 
// 			}
// 		}
// 		mytable.appendTo("#playGrid");
// 	};
// 	createTable();
// });

(function(){
	var canvas = document.getElementById("canvas");   // the canvas where game will be drawn
	var context = canvas.getContext("2d");            // canvas context
	var levelCols=30;							// level width, in tiles
	var levelRows=30;							// level height, in tiles
	var tileSize=15;							// tile size, in pixels
	var playerCol=5;                                  // player starting column
	var playerRow=4;                                  // player starting row
	
	//var x = Math.floor((Math.random() * 100) % 2);


	// var level = [][];  
	var level = [];
	for(var i=0; i<levelRows; i++) {
	    level[i] = [];
	    for(var j=0; j<levelCols; j++) {
	        level[i][j] = Math.floor((Math.random() * 100) % 15);
	    }
	}      						// the 11x9 level - 1=wall, 0=empty space
	// 	[1,1,1,1,1,1,1,1,1,1,1],
	// 	[1,1,0,0,0,0,0,0,0,1,1],
	// 	[1,0,0,0,0,0,0,0,0,0,1],
	// 	[1,0,0,0,1,0,1,0,0,0,1],
	// 	[1,0,0,0,0,0,0,0,0,0,1],
	// 	[1,0,0,0,1,0,1,0,0,0,1],
	// 	[1,0,0,0,0,0,0,0,0,0,1],
	// 	[1,1,0,0,0,0,0,0,0,1,1],
	// 	[1,1,1,1,1,1,1,1,1,1,1]
	// ];
 
	var playerYPos=playerRow*tileSize;				// converting Y player position from tiles to pixels
	var playerXPos=playerCol*tileSize;               // converting X player position from tiles to pixels
	
	canvas.width=tileSize*levelCols;                   // canvas width. Won't work without it even if you style it from CSS
	canvas.height=tileSize*levelRows;                   // canvas height. Same as before
 
	renderLevel();
	
	// function to display the level
	
	function renderLevel(){
		// clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		// walls = red boxes
		context.fillStyle = "#ff0000";
		for(i=0;i<levelRows;i++){
			for(j=0;j<levelCols;j++){
				if(level[i][j]==1){
					context.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);	
				}
			}
		}
		// player = green box
		
		context.fillStyle = "#00ff00";
		context.fillRect(playerXPos,playerYPos,tileSize,tileSize);
	}
 
})();