function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	background(220);
	if (mouseIsPressed) {
		if(mouseButton === LEFT) {
			ellipse(mouseX, mouseY, 50, 50)
		}	else if (mouseButton === RIGHT) {
			rect(mouseX, mouseY, 50, 50)
		}
	}
	

}
