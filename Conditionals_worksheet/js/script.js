// Matthew King 10/15/2013 Conditional Expression


//LAST CHANCE FOR GAS

// establish variables
var mpg = 26;
var gauge = .55;
var tankCapacity = 20;
var gasStation = 200;

// calculate how many miles until driver runs out of fuel

var gasTank = tankCapacity * gauge;
var milesLeft =  mpg * gasTank;

//determine conditionals
if(milesLeft > gasStation){
	//if driver can make it to next station
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//is driver cannot make it to the next station
	console.log("You only have " + gasTank + " gallons of gas in your tank, better get gas now while you can!");
}