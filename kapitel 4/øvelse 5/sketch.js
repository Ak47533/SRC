let y;
let speed = 2;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  y = height / 2;
}

function draw() {
  background(220);
  fill(0, 0, 255);
  noStroke();
  ellipse(width / 2, y, 50, 50);

  y = y + speed * direction;
  if (y > height - 25 || y < 25) {
    direction = direction * -1;
  }
}