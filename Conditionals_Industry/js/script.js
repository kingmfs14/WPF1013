// Matthew King 10/15/2013 Groundcover Tool Conditional



// establish variables
var width = prompt ("What is the width of the planter? \nIn inches, please.");
var length = prompt ("What is your length of the planter? \nIn inches, please.");
var trays = prompt ("How many trays of groundcover do you have?");
var cell = prompt ("What size are your groundcover tray cells? \nOptions: 16, 24, 36, or 48");
var gcNeeded

// calculations
var planter = width * length;
var groundcover = trays * cell;

//conditionals

if (cell === 16) {
	gcNeeded = planter / 18;
}else if (cell === 24) {
	gcNeeded = planter / 12;
}else if (cell === 36) {
	gcNeeded = planter / 8;	
}else {
	gcNeeded = planter / 5;
}

var gcMore = parseInt(gcNeeded) - groundcover;
var trayMore = gcMore / cell;

//alert conditionals
(gcNeeded < groundcover) ? alert ("You have enough groundcover for your planter!") : alert ("You still need to get " + parseInt(trayMore) + " trays of groundcover with a " + cell + " count for your planter!");