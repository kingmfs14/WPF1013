// Matthew King 10/15/2013 Groundcover Tool Conditional



// establish variables
var width = prompt ("What is the width of the planter? \nIn Inches, please.");
var length = prompt ("What is your length of the planter? \nIn Inches, please.");
var trays = prompt ("How many trays of groundcover do you have?");
var cell = prompt ("What size are your groundcover tray cells? \nOptions: 16, 24, 36, or 48");

// calculations
var planter = width * length;
var groundcover = trays * cell;
