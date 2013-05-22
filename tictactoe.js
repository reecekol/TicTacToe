Game={
	       
		   reset:function(){
		   
		   
		   
		     this.board=["","","","","","","","",""], // clear data structure
			 
			 
		     $("td").each(function(){
			 
			   $(this).text("");
			    
			 })
		   
		   },
		   
		   board:["","","","","","","","",""],
		   
		   move:function(target)
		   {  
		   
		       //local scoping 
		      var playerMove;
		    
			  var  number=$(target).attr("id");
			  
              console.log(number);
			  
			  this.board[number]=this.turn;
			  
			  
			  
			  
			  if (this.checkBoardFilled())
			  {
			    alert("Game Over");
			    this.reset();
			  }
			  
			  
			  
			  console.log(this.board);
			  
			  if(this.turn==='X'){
				  playerMove="X";
			  }
			  
			  else {
			       playerMove="O";
			   }
			   
			   
			   $(target).text(playerMove);
			   
			   
			    
				this.checkForWin();
				
				
			   this.updateTurn();
		   },
		   
		   turn:"X",  /*X goes first */
		  
		   gameWon:false,
		   
		   
		   patterns:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
		   
		   checkBoardFilled:function(){
		     
			 for(i=0;  i<9; i++)
			 {
			   if(this.board[i]==="")
			   {
			     return false;
			   }
			 }
		      return true;
		   },
		   
		   updateTurn:function(){
		     this.turn==="X"? this.turn="O":this.turn="X";
			 
		   },
		   
		   checkForWin: function(){
		     
		     for( k in this.patterns)
			 { 
			 
				
				arr=this.patterns[k];
				
				 console.log(this.board[arr[0]]+this.board[arr[1]]+this.board[arr[2]]);
				 
			    if(this.board[arr[0]]+this.board[arr[1]]+this.board[arr[2]]==="XXX")
			    {  
			       alert("X won");
			    }
				
				else if(this.board[arr[0]]+this.board[arr[1]]+this.board[arr[2]]==="OOO")
			    {  
			       alert("O won");
			    }
				
		         
			  }
			  
			}
		   
	   }