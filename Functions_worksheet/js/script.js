// Matthew King 10/23/13 Functions Worksheet



//CIRCUMFERENCE
// Establish variables
var total = calcCircum(7);

// create function for finding the circumference of a circle
function calcCircum(radius){
	var pi = 3.14;
	var circum = pi * (2 * radius);
	return circum;
}

// print out the total circumference
console.log("The circumference of the circle is " + total + ".");



//STUNG!
// Establish variables
var total = killAnimal(367);

// create function for determining the amount of bee stings
function killAnimal(weight){
	var poison = 8.666666667;
	var lethal = poison * weight;
	return lethal;
}
