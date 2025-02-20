let x = 100;  // X-position for cirklen
let y = 100;  // Y-position for cirklen

function setup() {
  createCanvas(512, 512);  // Opretter et lærred på 512x512 pixels
  fill(255, 0, 0);  // Sætter farven til rød
}

function draw() {
  // Tjekker om piletasterne er trykket ned og flytter cirklen
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;  // Flytter cirklen til venstre
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;  // Flytter cirklen til højre
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;  // Flytter cirklen opad
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;  // Flytter cirklen nedad
  }
  clear();  // Rydder lærredet
  circle(x, y, 50);  // Tegner cirklen på den aktuelle position
}
