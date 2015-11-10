(function(){
	var canvas = document.getElementById("canvas");   // the canvas where game will be drawn
	var context = canvas.getContext("2d");            // canvas context
	var tile_size = 10;
	var up = false;
	var down = false;
	var left = false;
	var right = false;
	var levelCols=50;
	canvas.width = 500;
	var levelRows=40;	
	canvas.height = 400;

	var level = [];
	for(var i=0; i<levelRows; i++) {
	    level[i] = [];
	    for(var j=0; j<levelCols; j++) {
	        level[i][j] = Math.floor((Math.random() * 100) % 29);
	    }
	}   
 
	var startX = canvas.width / 2;
	var startY = canvas.height / 2;

	// current x, y
	var cx = startX;
	var cy = startY;

	//player1 start
	context.fillRect(startX, startY, tile_size, tile_size);             
	
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
		context.fillStyle = "#00ff00";
	}
	
	// function collisionDet(posX, posY){
	// 	var collCheck = true;
	// 	if(level[posX][posY] == 1){
	// 		collCheck = false;
	// 	}
	// 	return collCheck;
	// }

	context.fillRect(startX, startY, tile_size, tile_size);

	$(document).bind("keydown", function(e){
	    switch(e.keyCode)
	    {
	        //left
	        case 65:
	        	var zy = 0;
	        	var zx = 0;
	        	if(cx != 0){
	        		zx = cx - tile_size;
		        	zx /= tile_size;
	        	}
	        	if(cy != 0){
		        	zy = cy / tile_size;
	        	}
	        	if(cx != 0 && level[zy][zx] != 1){
                	renderLevel();
					context.fillRect(cx - tile_size, cy, tile_size, tile_size);
					cx -= tile_size;
                }
	        break;
	            
	        //up
	        case 87:
	        	var zy = 0;
	        	var zx = 0;
	        	if(cx != 0){
	        		
		        	zx = cx / tile_size;
	        	}
	        	if(cy != 0){
		        	zy = cy - tile_size;
		        	zy /= tile_size;
	        	}
	       
	        	if(cy != 0 && level[zy][zx] != 1){
                	renderLevel();
					context.fillRect(cx, cy - tile_size, tile_size, tile_size);
					cy -= tile_size;
                }
	        break;
	            
	        //right
	        case 68:
	        	var zy = 0;
	        	var zx = 0;
	        	if(cx != 0){
	        		zx = cx + tile_size;
		        	zx /= tile_size;
	        	}
	        	if(cy != 0){
		        	zy = cy / tile_size;
	        	}
	        	if(cx != canvas.width - tile_size && level[zy][zx] != 1){
                	renderLevel();
					context.fillRect(cx + tile_size, cy, tile_size, tile_size);
					cx += tile_size;
                }
	        break;
	        
	        //down
	        case 83:
	        	var zy = 0;
	        	var zx = 0;
	        	if(cx != 0){		
		        	zx = cx / tile_size;
	        	}
	        	if(cy != 0){
		        	zy = cy + tile_size;
		        	zy /= tile_size;
	        	}
	        	if(cy != canvas.height - tile_size && level[zy][zx] != 1){
                	renderLevel();
					context.fillRect(cx, cy + tile_size, tile_size, tile_size);
					cy += tile_size;
				}
	        break;
	    }
	    
	});
 
})();

