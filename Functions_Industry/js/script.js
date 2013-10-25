// Matthew King 10/24/13 Functions Industry Project



//Lawn Fertilizer Needed
// Establish variables
var lawn = prompt ("How many lawn areas do you have that you want to fertilze?");
var area = prompt ("How large, on average, is each lawn? \nIf one is 200 feet and another 100 feet, then you would enter 150.");
var spreading = prompt ("How will you be spreading the fertilizer? \nOptions: hand or spreader");
var currentFertilze = prompt ("How many 50 pound bags of fertilzer do you have?");

//create calculated variables
var footage = lawn * area;
if (spreading === hand) {
	var spread = 1.75;	
}else {
	var spread = 1;
}

//create function call out
total = bagsNeeded(footage, spread);

//create function
function bagsNeeded (ft, sprd) {
	var use = sprd * 4.5;
}

