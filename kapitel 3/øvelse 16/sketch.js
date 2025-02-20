let x1;
let x2;
let y;
let xspeed1;
let xspeed2;
let radius = 25;

function setup() { 
  createCanvas(400, 400);
  x1 = width / 2;
  x2 = width / 1.1;
  y = height / 2;
  xspeed1 = 1;
  xspeed2 = -1;
}

function draw(){
	x1 = min(x1, 400); 
	x2 = min(x2, 400); 
  background(0, 0, 255);
  ellipse(x1, y, radius * 2);
  ellipse(x2, y, radius * 2); 
  
  x1 += xspeed1; 
  x2 += xspeed2;
}