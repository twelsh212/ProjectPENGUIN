(function(){
	
	

	var canvas = document.getElementById("canvas");   // the canvas where game will be drawn
	var context = canvas.getContext("2d");            // canvas context
	var tile_size = 10;
	var levelCols=50;
	canvas.width = 500;
	var levelRows=40;	
	canvas.height = 400;
	var moves = 5;

	var player1 = {
		startX: 0,
		startY: 0,
		cx: 0,
		cy: 0,
		isTurn: true,
		moves: 5,
		pColor: "#00ff00"
	};
	var player2 = {
		startX: canvas.width - tile_size,
		startY: canvas.height - tile_size,
		cx: canvas.width - tile_size,
		cy: canvas.height - tile_size,
		isTurn: false,
		moves: 5,
		pColor: "#0000ff"
	};

	var level = [];
	for(var i=0; i<levelRows; i++) {
	    level[i] = [];
	    for(var j=0; j<levelCols; j++) {
	        level[i][j] = Math.floor((Math.random() * 100) % 29);
	    }
	}  

	//player1 start
	context.fillRect(player1.startX, player1.startY, tile_size, tile_size);     

	//player2 start
	context.fillRect(player2.startX, player2.startY, tile_size, tile_size);         
	
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
					context.fillRect(j*tile_size,i*tile_size,tile_size,tile_size);	
				}
			}
		}

		// player = green box
		context.fillStyle = player1.pColor;
	}
	
	function moveRestr(currentPlayer){
		var isDone = false;
		if(currentPlayer.moves == 0){
			isDone = true;
		}
		return isDone;
	}
	
	// function collisionDet(posX, posY){
	// 	var collCheck = true;
	// 	if(level[posX][posY] == 1){
	// 		collCheck = false;
	// 	}
	// 	return collCheck;
	// }

	context.fillRect(player1.startX, player1.startY, tile_size, tile_size);
	context.fillRect(player2.startX, player2.startY, tile_size, tile_size);

	function moveLeft(currentPlayer){
		if(!moveRestr(currentPlayer)){	
	        var zy = 0;
	       	var zx = 0;
	       	if(currentPlayer.cx != 0){
	       		zx = currentPlayer.cx - tile_size;
		       	zx /= tile_size;
	       	}
	       	if(currentPlayer.cy != 0){
	        	zy = currentPlayer.cy / tile_size;
        	}
	        if(currentPlayer.cx != 0 && level[zy][zx] != 1){
               	renderLevel();
				currentPlayer.cx -= tile_size;
				currentPlayer.moves--;
            }
        }		
	}

	function moveUp(currentPlayer){
		if(!moveRestr(currentPlayer)){
        	var zy = 0;
        	var zx = 0;
        	if(currentPlayer.cx != 0){
        		
	        	zx = currentPlayer.cx / tile_size;
        	}
        	if(currentPlayer.cy != 0){
	        	zy = currentPlayer.cy - tile_size;
	        	zy /= tile_size;
        	}
       
        	if(currentPlayer.cy != 0 && level[zy][zx] != 1){
            	renderLevel();
				currentPlayer.cy -= tile_size;
				currentPlayer.moves--;
            }
        }
	}

	function moveRight(currentPlayer){
		if(!moveRestr(currentPlayer)){
        	var zy = 0;
        	var zx = 0;
        	if(currentPlayer.cx != 0){
        		zx = currentPlayer.cx + tile_size;
	        	zx /= tile_size;
        	}
        	if(currentPlayer.cy != 0){
	        	zy = currentPlayer.cy / tile_size;
        	}
        	if(currentPlayer.cx != canvas.width - tile_size && level[zy][zx] != 1){
            	renderLevel();
				currentPlayer.cx += tile_size;
				currentPlayer.moves--;
            }
        }
	}

	function moveDown(currentPlayer){
		if(!moveRestr(currentPlayer)){
	    	var zy = 0;
	    	var zx = 0;
	    	if(currentPlayer.cx != 0){		
	        	zx = currentPlayer.cx / tile_size;
	    	}
	    	if(currentPlayer.cy != 0){
	        	zy = currentPlayer.cy + tile_size;
	        	zy /= tile_size;
	    	}
	    	if(currentPlayer.cy != canvas.height - tile_size && level[zy][zx] != 1){
	        	renderLevel();
				currentPlayer.cy += tile_size;
				currentPlayer.moves--;
			}
		}
	}

	function fillPlayer(p1, p2){
		context.fillRect(p1.cx, p1.cy, tile_size, tile_size);
		context.fillRect(p2.cx, p2.cy, tile_size, tile_size);
	}
	$(document).bind("keydown", function(e){
	  	switch(e.keyCode)
	    {
	        //left
	        case 65:
	        	if (player1.isTurn){
			  		moveLeft(player1);
			  	}
			  	else if(player2.isTurn){
			  		moveLeft(player2);
			  	}
	        	fillPlayer(player1, player2);
	        break;
	            
	        //up
	        case 87:
	        	if (player1.isTurn){
			  		moveUp(player1);
			  	}
			  	else if(player2.isTurn){
			  		moveUp(player2);
			  	}
	        	fillPlayer(player1, player2);
	        break;
	            
	        //right
	        case 68:
	        	if (player1.isTurn){
			  		moveRight(player1);
			  	}
			  	else if(player2.isTurn){
			  		moveRight(player2);
			  	}
			  	fillPlayer(player1, player2);
	        break;
	        
	        //down
	        case 83:
	        	if (player1.isTurn){
			  		moveDown(player1);
			  	}
			  	else if(player2.isTurn){
			  		moveDown(player2);
			  	}
	        	fillPlayer(player1, player2);
	        break;
	        
	        //end turn
	        case 84:
	        	if (player1.isTurn){
			  		player1.isTurn = false;
			  		player2.isTurn = true;
			  		player1.moves = 5;
			  	}
			  	else if(player2.isTurn){
			  		player2.isTurn = false;
			  		player1.isTurn = true;
			  		player2.moves = 5;
			  	}
	        break;
	    }


	  	
	});
 
})();

