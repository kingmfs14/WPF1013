// Matthew King 10/9/2013 Personal Expression


//YEARLY EGG CONSUMPTION

// establish variables
var eggsWeekly = prompt ("How many eggs to you eat every week?");
var eggContainer = prompt ("How many eggs are in the carton that you buy?");
var eggPrice = prompt ("What is the price of carton of eggs before tax?");
var saleTax = prompt ("What is the sales tax in your area?", 4.166);

// calculate how much eggs are eaten during the year

var eggsYearly = eggsWeekly * 52;
var perPrice =  eggPrice / eggContainer;
var perTax = perPrice * (saleTax / 100) + perPrice;

//calculate how much money is spend on eggs every year
var eggsTax = perTax * eggsYearly;
var message = "You eat " + eggsYearly + " a year, costing you $" + parseInt(eggsTax) + " every year.";

//alert much do eggs cost me a year
alert (message);