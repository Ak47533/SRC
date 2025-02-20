let x=100
let y=100

function setup(){
createCanvas(800, 400,)
fill(20, 100, 80)
}
function draw(){
    if(keyIsDown(UP_ARROW)){
        y-=7}
        if(keyIsDown(DOWN_ARROW)){
            y+=7}
            if(keyIsDown(LEFT_ARROW)){
                x-=7}
                if(keyIsDown(RIGHT_ARROW)){
                    x+=7}
                        x = constrain(x, 25, width - 25); // 25 is half the circle's diameter
                            y = constrain(y, 25, height - 25);
                                clear();
                                    circle(x, y, 50);
                                }
