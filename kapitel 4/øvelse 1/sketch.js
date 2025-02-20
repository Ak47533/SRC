function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
// =
console.log(2 == 2); 'true'
console.log(2 == '2'); 'true'
// !=
console.log(3 != 2); 'true'
console.log('hello' != 'Hello'); 'true'
//===
console.log(2 === 2); 'true'
console.log(2 === '2'); 'false'
// !==
console.log(2 !== '2'); 'true'
console.log(2 !== 2);'true'
}
