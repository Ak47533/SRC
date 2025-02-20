//mit racer spil
let controlPoints = [];
let numPoints = 4; // Antal kontrol punkter til bézier kurven
let t = 0; // Parameter for bevægelse langs kurven
let car;

function setup() {
    createCanvas(800, 600);
    // Genere random kontrolpunkter
    for (let i = 0; i < numPoints; i++) {
        controlPoints.push(createVector(random(width), random(height)));
    }
    
    car = new Car(controlPoints);
}

function draw() {
    background(220);
    drawBezierCurve();
    car.update();
    car.display();
}

function drawBezierCurve() {
    noFill();
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i <= 1; i += 0.02) {
        let p = deCasteljau(controlPoints, i);
        vertex(p.x, p.y);
    }
    endShape();
    
    // Draw control points
    fill(255, 0, 0);
    noStroke();
    for (let p of controlPoints) {
        ellipse(p.x, p.y, 8, 8);
    }
}

function deCasteljau(points, t) {
    if (points.length === 1) {
        return points[0];
    }
    let newPoints = [];
    for (let i = 0; i < points.length - 1; i++) {
        let x = lerp(points[i].x, points[i + 1].x, t);
        let y = lerp(points[i].y, points[i + 1].y, t);
        newPoints.push(createVector(x, y));
    }
    return deCasteljau(newPoints, t);
}

class Car {
    constructor(controlPoints) {
        this.controlPoints = controlPoints;
        this.t = 0;
        this.pos = deCasteljau(this.controlPoints, this.t);
    }
    
    update() {
        this.t += 0.005;
        if (this.t > 1) this.t = 0;
        this.pos = deCasteljau(this.controlPoints, this.t);
    }
    
    display() {
        fill(0, 0, 255);
        ellipse(this.pos.x, this.pos.y, 15, 15);
    }
}
