var colors = createRandomColor(numberOfsquares);
var squareClass1 = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var updateRgb = document.getElementById("h1_first_span");
var userSelcted = document.getElementById("rightORworng");
var headerBackground = document.querySelector("header");
var newColors = document.getElementById("new_color_button");
var easyBtn = document.getElementById("easy_mode_button");
var hardBtn = document.getElementById("hard_mode_button");
var startGame1 = document.getElementById("startGame");
var numberOfsquares = 6;
var startGameswtich = document.getElementById("startGame");
var dimedSquared = document.querySelectorAll(".main_div");

colourProcss();
resetColors();


startGame1.addEventListener("click", function () {
    console.log("clicked")
    startGame.style.display = "none";
    document.getElementById("square").style.opacity = "1";
    numberOfsquares = 6;
    colors = createRandomColor(6);
    pickedcolor = pickcolor();
    updateRgb.textContent = pickedcolor;
    colourProcss();
    for (var i = 0; i < squareClass1.length; i++) {

        squareClass1[i].style.backgroundColor = colors[i]

        squareClass1[i].style.display = "block";

    }
})


easyBtn.addEventListener("click", function () {


    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected")

    numberOfsquares = 3;
    colors = createRandomColor(3);
    pickedcolor = pickcolor();
    updateRgb.textContent = pickedcolor;

    for (var i = 0; i < squareClass1.length; i++) {
        if (colors[i]) {
            squareClass1[i].style.backgroundColor = colors[i];
        } else {
            squareClass1[i].style.display = "none";
        }
    }
});



hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfsquares = 6;
    colors = createRandomColor(6);
    pickedcolor = pickcolor();
    updateRgb.textContent = pickedcolor;

    for (var i = 0; i < squareClass1.length; i++) {

        squareClass1[i].style.backgroundColor = colors[i]

        squareClass1[i].style.display = "block";

    }
});




if (newColors === "PLAY AGIN ?") {
    colourProcss();
    this.style.cursor = "pointer";

}

function resetColors() {
    newColors.addEventListener("click", function () {

        colors = createRandomColor(numberOfsquares)
        pickedcolor = pickcolor();
        colourProcss()
        updateRgb.textContent = pickedcolor;
        console.log(pickedcolor)


        headerBackground.style.backgroundColor = "#f2c55a";

    });
}



function colourProcss() {
    newColors.addEventListener("click", function () {

        colors = createRandomColor(numberOfsquares)


        userSelcted.innerHTML = "";
        headerBackground.style.backgroundColor = "#f2c55a";
    });




    updateRgb.textContent = pickedcolor;
    for (var i = 0; i < colors.length; i++) {
        squareClass1[i].style.backgroundColor = colors[i];
        squareClass1[i].addEventListener("click", function () {


            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedcolor) {

                userSelcted.innerHTML = "Correct!";
                headerBackground.style.backgroundColor = pickedcolor;
                coreectcolour(pickedcolor);
                newColors.innerHTML = "PLAY AGAIN?";


                newColors.addEventListener("click", function () {


                    newColors.innerHTML = "NEW COLORS";
                })

            } else {

                this.style.backgroundColor = "black";
                userSelcted.innerHTML = "Try Agin!";
                this.style.cursor = "default";

            }

        })


    }
}









//this function will make all the squares the correct color

function coreectcolour(color) {
    for (var i = 0; i < squareClass1.length; i++) {
        squareClass1[i].style.backgroundColor = color;
    }

}



function pickcolor() {

    var randomMath = Math.floor(Math.random() * colors.length);

    return colors[randomMath]
}

function createRandomColor(num) {

    var arr = []
    // add random colors to array

    for (var i = 0; i < num; i++) {
        //return that array 
        arr.push(randomColor())
    }
    return arr;

}

function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
