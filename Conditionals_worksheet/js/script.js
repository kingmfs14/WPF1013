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


//GRADE LETTER CALCULATOR

//establish variables
var grade = 97;

//determining conditional
if(grade >= 95){
	//if student has gotten an A+
	console.log("You have a " + grade + "%, which means you have earned a(n) A+ in the class!");
}else if(grade >= 90 && grade < 95){
	//if student has gotten an A
	console.log("You have a " + grade + "%, which means you have earned a(n) A in the class!");
}else if(grade >= 85 && grade < 90){
	//if student has gotten an B+
	console.log("You have a " + grade + "%, which means you have earned a(n) B+ in the class!");
}else if(grade >= 80 && grade < 85){
	//if student has gotten an B
	console.log("You have a " + grade + "%, which means you have earned a(n) B in the class!");
}else if(grade >= 76 && grade < 80){
	//if student has gotten an C+
	console.log("You have a " + grade + "%, which means you have earned a(n) C+ in the class!");
}else if(grade >= 73 && grade < 76){
	//if student has gotten an C
	console.log("You have a " + grade + "%, which means you have earned a(n) C in the class!");
}else if(grade >= 70 && grade < 73){
	//if student has gotten an D
	console.log("You have a " + grade + "%, which means you have earned a(n) D in the class!");
}else{
	//if student has gotten an F
	console.log("You have a " + grade + "%, which means you have earned a(n) F in the class!");
}


//TIRE PRESSURE 1

//establish variables
var front = new Array (35,35);
var rear = new Array (40,30);

//determine if vehicle will pass inspection
if (front[0] === front[1] && rear[0] === rear[1]){
	//if vehicle has passed inspection
	console.log("The tires pass spec!");
}else{
	//if vehicle has failed inspection
	console.log ("Get your tires checked out!")
}