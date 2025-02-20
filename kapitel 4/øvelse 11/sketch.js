let x;
let y;
let mouseX;
let mouseY;

function setup(){
    createCanvas(1000, 400,)
   x = random(50, width, height - 50);
   y = random(50, width, height - 50);
   mouseX = width / 2;
   mouseY = height / 2;

}
function draw(){ 
    background(244)   
    if(keyIsDown(UP_ARROW)){
        y-=7
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=7
    }
    if(keyIsDown(LEFT_ARROW)){
        x-=7
    }
    if(keyIsDown(RIGHT_ARROW)){
        x+=7
    }              
    if(keyIsDown(87)){ 'W'
        mouseY-=7
    }
    if(keyIsDown(83)){ 'S'
        mouseY+=7
    }
    if(keyIsDown(65)){ 'A'
        mouseX-=7
    }
    if(keyIsDown(68)){ 'D'
        mouseX+=7
    }
    x = constrain(x, 25, width - 25); 
    y = constrain(y, 25, height - 25);

    mouseX = constrain(mouseX, 25, width - 25);
    mouseY = constrain(mouseY, 25, height - 25);

    fill(255, 0, 0);
    circle(x, y, 50);

    fill(0, 0, 255);
    circle(mouseX, mouseY, 50);
}