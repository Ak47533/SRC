function setup() { 
	createCanvas(120, 120); 
	strokeWeight(30);  // Sætter tykkelsen på stregerne til 30 pixels
  } 
  
  function draw() { 
	background(204);  // Sætter en lys grå baggrund
	stroke(102);      // Sætter stregfarven til mørkegrå (102)
	line(40, 0, 70, height);  // Tegner en lodret linje fra (40, 0) til (70, 120)
  
	// Tjekker om musen er trykket
	if (mouseIsPressed) {  
	  // Hvis venstre museknap er trykket
	  if (mouseButton == LEFT) {  
		stroke(255);  // Sætter stregfarven til hvid
	  } 
	  // Hvis en anden knap (f.eks. højre) er trykket
	  else {  
		stroke(0);    // Sætter stregfarven til sort
	  }
  
	  // Tegner en vandret linje fra (0, 70) til (120, 50)
	  line(0, 70, width, 50);
	} 
  }
  