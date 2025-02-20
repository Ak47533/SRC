function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
	let x = 12;
	let y = 12.5;
	let s = "Hej";
	let t = "12.5";
	let b = true;

	console.log(typeof(x));       // number
	console.log(typeof(y));       // number
	console.log(typeof(s));       // string
	console.log(typeof(t));       // string
	console.log(typeof(b));       // boolean
	console.log(typeof(x + y));   // number (12 + 12.5 = 24.5)
	console.log(typeof(s + t));   // string ("Hej12.5")
	console.log(typeof(x + t));   // string ("1212.5")

}
