var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

            /*if(this.textContent === "Easy"){
                numSquares = 3; 
            } else {
                numSquares = 6;
                }
            }
            */

            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners
        squares[i].addEventListener("click", function(){
            //get color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    reset();
}


function reset(){
        //generate new colors
        colors = generateRandomColors(numSquares);
        //pick new random color
        pickedColor = pickColor();
        //change color display to match picked color
        colorDisplay.textContent = pickedColor;
        messageDisplay.textContent = "";
        resetButton.textContent = "New Colors";
        //change colors of squares
        for(var i =0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    //loop through all squares
    for(var i=0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red"
    var r = Math.floor(Math.random() * 256);
    //pick a green
    var g = Math.floor(Math.random() * 256);
    //pick a blue
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
