function setup() 
{ 
    createCanvas(400, 400); 
} 
function draw(){

    background(204); 

    if (keyIsPressed) {  
        if ((key == 'v') || (key == 'V')) {
            line(25, 25, 200, 400-25);
            line(400-25, 25, 200, 400-25);
        } 
        if ((key == 'a') || (key == 'A')) {
            line(25, 400-25, 200, 25);
            line(400-25, 400-25, 200, 25);
            line(100, 200, 400, 200);
            
        } 
    }

}
