// Many issues with code still, need to
// 1) sort through the sweetAlert functions
// 2) alerts are still wrong
// 3) tidy and change CSS



var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var context;
var squaresFilled = 0;
var w;
var y;

window.onload=function(){

	painted = new Array();
	content = new Array();
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(var l = 0; l <= 8; l++){
	painted[l] = false;
	content[l]='';
	}
}

function canvasClicked(canvasNumber){
	theCanvas = "canvas"+canvasNumber;
	c = document.getElementById(theCanvas);
	context = c.getContext("2d");

	if(painted[canvasNumber-1] ==false){
		if(turn%2==0){
      var img1 = new Image();
      img1.src = "cat.jpeg"
      img1.onload = function() {
      context.drawImage(img1, 0, 0)
    }
			content[canvasNumber-1] = 'Cat';
		}

		else{
      var img2 = new Image();
      img2.src = "bacon75.jpg"
      img2.onload = function() {
      context.drawImage(img2, 0, 0)
    }
			content[canvasNumber-1] = 'Bacon';
		}

		turn++;
		painted[canvasNumber-1] = true;
		squaresFilled++;
		checkForWinners(content[canvasNumber-1]);

		if(squaresFilled==9){
			alert("Game Over");
			location.reload(true);
		}

	}
	else{
		alert("Nuh Uh!", "The box is taken up!");
	}

}

function checkForWinners(symbol){

	for(var a = 0; a < winningCombinations.length; a++){
	if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
		alert(symbol+ " got yo ass");
		playAgain();
	}
	}

}

function playAgain(){
	y=confirm("One more go?");
	if(y==true){
		location.reload(true);
	}
	else{
		alert("Thanks for playing!");
}

}

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas (e) {
  var myCanvas = document.getElementsByClassName('canvas');
    myCanvas.width = document.documentElement.clientWidth;
    myCanvas.height = document.documentElement.clientHeight;
}
