function setup() 
{
	createCanvas(600, 600);
	background(220);
}

function draw()
{
	if (keyIsPressed){
		if (key === 'f'){
			rect(mouseX, mouseY, 50, 50);
		}	else if (key === 'c') {
			ellipse(mouseX, mouseY, 50, 50);
		}	else if(key === 'e') {
			ellipse(mouseX, mouseY, 70, 40);
		}

	}
}
