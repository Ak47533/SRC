function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	let x= 5;
	let y=3;

	let sum=x+y;
	let dif=x-y;
	let multi=x*y;
	let divi=x/y;
	let rest=x%y;

	console.log("Sum:"+sum+". Differens:"+dif+". multiplikationen:"+multi+". division:"+divi+". resultat:"+rest+".")
	
}
