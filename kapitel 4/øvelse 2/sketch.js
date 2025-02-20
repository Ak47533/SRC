let shape = "cirkel";
function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
background(220);
let centerX = width / 2;
let centerY = height / 2;
if (mouseX > mouseY){
	shape = "rectangle";
} else {
	shape = "cirkel";
}
if(shape === "cirkel"){
	ellipse(centerX, centerY, 100, 100);
} else if(shape === "rectangle"){
	rect(centerX -50, centerY -50, 100, 100);
}
}
