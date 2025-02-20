function setup() 
{
	createCanvas(1000, 600);
	background(220)
}

function draw()
{
	stroke(0);
	line(pmouseX, pmouseY, mouseX, mouseY);
}
