let x;             // Variabel til cirklens X-position
let xspeed = 3;    // Hastighed i X-retningen

function setup() { 
  createCanvas(400, 400);  // Opretter et lærred på 400x400 pixels
  x = width / 2;          // Sætter cirklens startposition til midten af lærredet
} 

function draw() { 
  background(220);        // Sætter baggrunden til en lys grå farve

  // Tjekker om cirklen rammer venstre eller højre kant
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;        // Skifter retning
  }
  
  // Flytter cirklen
  x += xspeed;
  
  // Tegner cirklen i midten af lærredet
  circle(x, height / 2, 50);  // 50 er cirklens diameter
}