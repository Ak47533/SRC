function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
let x = 5;
let y = 7;
let resultat;
 
resultat = --x; // x bliver 4 først og derefter tildeles resultat. 
console.log(resultat); // 4
 
resultat = x++; // x bliver først brugt som 4 og derefter inkrementeres til 5.
console.log(resultat); // 4
 
resultat = y * (x++); // y er 7 og x er 5 i denne operation, og derefter bliver x 6.
console.log(resultat); // 35
 
resultat = x ** (y-- - 4); // x er 6 og y er 7, så (y-- - 4) er 3. Derefter bliver y 6.
console.log(resultat); // 216
 
resultat += (resultat % (x ** 2)); // x er nu 6, og x ** 2 er 36. 
console.log(resultat); // 216
}
