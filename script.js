var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("#random-gradient");
var body = document.getElementById("gradient");
var initial = document.querySelector("h4");

color1.value = "#FF0000"; // rgb(255,0,0)
color2.value = "#FFFF00"; // rgb(255,255,0)

function hexToRGB(h) {
let r = 0, g = 0, b = 0;

// 3 digits
if (h.length == 4) {
r = "0x" + h[1] + h[1];
g = "0x" + h[2] + h[2];
b = "0x" + h[3] + h[3];

// 6 digits
} else if (h.length == 7) {
r = "0x" + h[1] + h[2];
g = "0x" + h[3] + h[4];
b = "0x" + h[5] + h[6];
}

return "rgb("+ +r + "," + +g + "," + +b + ")";
}


var init = "linear-gradient(to right, " 
	+ hexToRGB(color1.value) 
	+ ", " 
	+ hexToRGB(color2.value) 
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
