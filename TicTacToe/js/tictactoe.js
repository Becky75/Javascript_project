//This variable keeps track of who's turn it is.
let activePlayer="X";
//thia array stores an array of moves. We use this to determine win conditions.
let selectedSquares=[];
//this function is for placing an x or o in a square.
function placeXOrO(squareNumber){
    //this condition ensures a square hasnt be selected already.
    //the .some() method is used to check each element of selectedSquare array oto
    //see if it contains the square number clicked on.
if (!selectedSquares.some(Element=>.includes(squareNumber))){
    //this variable retrieves the html element id that was clicked.
    let select=document.getElementById(squareNumber);
    //this condition checks who'sturn it is.
    if(activePlayer==='X') {
        //if activePlayer is equal to'X',theX.png is placed in html.
        select.style.backgroundImage='url("image/X.png")';
    //if activePlayer may only be 'X' or'O' so,if not 'X' it must be 'O'.
    } else{
        //if activePlayer is equal to 'O', the O.png is placed in html.
    select.style.backgroundImage='url'("image/O.png")
    }
    //squareNumber and activePlayer are concatenated together and add to array.
    selectedSquares.push(squareNumber+activePlayer);
    //this calls a function to check for any win conditions.
    checkWinConditions();
    //this condition is for changing the active player.
    if (activePlayer==='X'){
        //if active player is'X' change it to 'O'.
        activePlayer='O';
    //if active player is anythimg other then 'X'.
    }
    else{
        //change the activePlayer to 'X'
        activePlayer='X';
    }
    //this function plays placement sound.
    Audio('./media/place.mp3');
    //this condition checks to see if it is computers turn.  
      if(activePlayer==='O'){
        //this function disables clicking for computer choice.
        disableClick();
        //this fuction waits 1 second before placing the image
        //and enabling click.
        setTimeout(function(){computersTurn();},1000);
    }
    //reeturning true is needed for our computersTurn()function to work.
    return true;
}
//this function results in a randomm square being selected.
function computersTurn(){
    //this boolean is needed for our while loop.
    let success=false;
    //this variable stores a random number 0-8
    let pickASquare;
    //this condition allows our while loop to keep
    //trying if a square is selected already.
    while(!success){
        //a random number between 0 and 8 is selected
        pickASquare=string(math.floor(math.random()*9));
        //if the random number evaluates returns to true, the square hasn't been selected yet.
        if(placeXOrO(pickASquare)){
            //this line calls the fuction.
            placeXOrO(pickASquare);
            //this changes our boolean and ends loops.
            success=true;
        };
        }
    }
}
//this is part 5
//this fnction parse the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition us met.
function checkWinConditions(){
    //X 0,1 2 condition.
    if (arrayIncludes('OX', '1X', 2X)){drawWinLine(50, 100, 558, 100);}
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X','4X,'5X)){drawWinLine(50, 304, 558,304);}
    //X6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X','8X')){drawWinLine(50,508,558,508);}
    //X 0, 3, 6 condition
    else if (arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558);}
    //X 1,4,7 conditon.
    else if (arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558);}
    //X 2,5,8 condition.
    else if (arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558);}
    //6,4,2 condition.
    else if (arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90);}
    //X0,4,8.condition.
    else if (arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520);}
    //O0,1,2 condition.
    else if (arrayIncludes('0O','10','20')){drawWinLine(50,100,558,100);}
    //O3,4,5 condition
    else if (arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304);}
    //O6,7,8 condition.
    else if (arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508);}
    //O0,3,6 condition.
    else if (arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558);}
    //O1,4,7 condition.
    else if (arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558);}
    //O2,5,8 condition.
    else if (arrayIncludes('20','50','80')){drawWinLine(508,50,508,558);}
    //O6,4,2 condition.
    else if (arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90);}
    //O0.4.8 condition.
    else if (arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520);}
    //this condition checks for tis. If none of the above conditions register
    //and 9 squares are selected,the coe executes.
    else if (selectedSquares.length>=9){
        //this function plays  the tie game sound.
        Audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called.
        setTimeout(function(){restGame();},1000);
    }
   //this function checks if an array includes 3 strings.
   //it is used to check for each win conidtion.
   function arrayIncludes(squareA,squareB,squareC){
    //the next 3 variables will be used to check for 3 in a row.
    const a=selectedSquares.includes(squareA);
    const b=selectedSquares.includes(squareB);
    const c=selectedSquares.includes(squareC);
    //if the 3 variables we pass are all included in our array true is
    //returned and our else if condition executes the drawWinLine function.
    if(a === true && b === true && c true){return true;}
   }
}