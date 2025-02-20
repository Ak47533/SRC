function setup() { 
	createCanvas(600, 400);  // Opret et lærred med bredde 600 og højde 400
  } 
  
  function draw() { 
	background(220);  // Sæt baggrunden til en lys grå farve
	fill(255, 0, 0);  // Sæt fyldfarven til rød
	noStroke();       // Fjern konturen på figurer
  
	// Hvis musen er i den venstre tredjedel af lærredet
	if (mouseX < width / 3) { 
	  rect(0, 0, width / 3, height);  // Tegn et rektangel i venstre tredjedel
	} 
	// Hvis musen er i den midterste tredjedel
	else if (mouseX <= width * 2 / 3) { 
	  rect(width / 3, 0, width / 3, height);  // Tegn et rektangel i midterste tredjedel
	} 
	// Hvis musen er i den højre tredjedel
	else { 
	  rect(width * 2 / 3, 0, width / 3, height);  // Tegn et rektangel i højre tredjedel
	}
  }
  