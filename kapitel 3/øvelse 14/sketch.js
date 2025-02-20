let x;            // Deklarerer en variabel til x-koordinaten
let y;            // Deklarerer en variabel til y-koordinaten
let xspeed;       // Deklarerer en variabel til hastigheden i x-retningen
let yspeed;       // Deklarerer en variabel til hastigheden i y-retningen

function setup() { 
  createCanvas(400, 400);   // Opretter et lærred på 400x400 pixels
  x = width / 2;           // Initialiserer x-koordinaten til midten af lærredet (200)
  y = height / 2;          // Initialiserer y-koordinaten til midten af lærredet (200)
  xspeed = -1;             // Sætter hastigheden i x-retningen til -1 (bevæger sig mod venstre)
  yspeed = 0.5 * xspeed;   // Sætter hastigheden i y-retningen til 0.5 gange xspeed (0.5 * -1 = -0.5)
} 

function draw() { 
  background(220);         // Opdaterer baggrunden til en lys grå farve ved hver frame
  ellipse(x, y, 50, 50);   // Tegner en ellipse med centrum ved (x, y) og en bredde og højde på 50 pixels
  x += xspeed;             // Opdaterer x-koordinaten ved at tilføje xspeed (flytter ellipsen til venstre)
  y += yspeed;             // Opdaterer y-koordinaten ved at tilføje yspeed (flytter ellipsen nedad)
}

