var x = 200;       // Initialiserer x-koordinaten til 200
var y = 200;       // Initialiserer y-koordinaten til 200

function setup() { 
  createCanvas(400, 400);  // Opretter et lærred på 400x400 pixels
} 

function draw() { 
  background(220);        // Sætter baggrundsfarven til lys grå (220) ved hver frame
  fill(0);                // Sætter fyldfarven til sort (0)
  ellipse(x, y, 50, 50);  // Tegner en ellipse med centrum ved (x, y) og en bredde og højde på 50 pixels
  
  // Hvis x-koordinaten er større end eller lig med 400, så wrap-around til 0
  if (x >= 400){
    x = 0; 
  }

  // Hvis UP_ARROW-tasten er trykket ned, flyt ellipsen op ved at reducere y-koordinaten med 1
  if (keyCode === UP_ARROW) {
    y = y - 1;
  }
  // Hvis DOWN_ARROW-tasten er trykket ned, flyt ellipsen ned ved at øge y-koordinaten med 1
  else if (keyCode === DOWN_ARROW) {
    y = y + 1;
  }
  // Hvis LEFT_ARROW-tasten er trykket ned, flyt ellipsen til venstre ved at reducere x-koordinaten med 1
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  }
  // Hvis RIGHT_ARROW-tasten er trykket ned, flyt ellipsen til højre ved at øge x-koordinaten med 1
  else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
}
