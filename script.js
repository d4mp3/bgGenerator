var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("#random-gradient");
var body = document.getElementById("gradient");
var initial = document.querySelector("h4");

color1.value = "#FF0000"; // rgb(255,0,0)
color2.value = "#FFFF00"; // rgb(255,255,0)

var init = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

initial.textContent = "initial style: " + init + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +  ";";
}

// for randomGradient()
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomGradient() {
	var col1 = getRandomColor();
    var col2 = getRandomColor();
    color1.value = col1;
    color2.value = col2;

    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +  ";";

    
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
