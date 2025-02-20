function setup() { 
  createCanvas(400, 400);
}
  function draw(){
    background(255, 0, 0); 
  if(mouseIsPressed){
    let r = ((mouseX - width/2)**2 + (mouseY - height/2)**2)**0.5;
    r = min(r, 200); 
  
    push(); 
    fill(0, 0, 255); 
    ellipse(width/2, height/2, r * 2, r * 2); 
    pop(); 
  }

}

