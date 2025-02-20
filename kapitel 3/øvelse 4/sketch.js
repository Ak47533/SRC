function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	background(255)
	let xc = width/2
	let yc = width/2
	let r=sqrt((mouseX-pmouseX)**2+(mouseY-pmouseY)**2)
	let hx=mouseX-pmouseX;
	let hy=mouseY-pmouseY;
	circle(200,200,2*r)
	console.log("Hastighed:"+hx+" ,"+hy+". Fart:"+r);

}
