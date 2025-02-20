function setup() { 
	createCanvas(120, 120);  // Opretter et lærred med dimensionerne 120x120 pixels
  } 
  
  function draw() { 
	background(204);  // Sætter baggrunden til en grå farve
  
	// Tjekker om en tast er trykket ned
	if (keyIsPressed) {  
	  // Hvis tasten er 'h' eller 'H'
	  if ((key == 'h') || (key == 'H')) {  
		line(30, 60, 90, 60);  // Tegner en vandret linje i midten
	  } 
  
	  // Hvis tasten er 'n' eller 'N'
	  if ((key == 'n') || (key == 'N')) {  
		line(30, 20, 90, 100);  // Tegner en skrå linje fra øverst til venstre til nederst til højre
	  }
	}
  
	// Tegner lodrette linjer på venstre og højre side af lærredet
	line(30, 20, 30, 100);  // Lodret linje til venstre
	line(90, 20, 90, 100);  // Lodret linje til højre
  }
  