// Matthew King 10/7/13 Expression Worksheet


//DOG YEARS PROBLEM
// convert Sparky's age into dog years
var humanYears = 3;
var dogYears = 7;

// multiply human years by dog years and get the dog's age
var dogAge = humanYears * dogYears;

// print out Spark's age
console.log("Sparky is " + humanYears + " human years old which is " + dogAge + " in dog years.");


//SLICE OF PIE PART1
// calculate how many slices of pizza each person will get
var pizzaOrdered = 8;
var people = 10;
var slices = 12;

// multiply pizza times slices divide total number by people
var peopleSlices = (pizzaOrdered * slices) / people;

// print out amount slices each person gets
console.log("Each person ate " + parseFloat(peopleSlices) + " slices of pizza at the party.");


//SLICE OF PIE PART2
// calculate how many slices of pizza each person will get
var pizzaOrdered = 8;
var people = 10;
var slices = 12;

// multiply pizaa times slices then divide by people and leave the remainder
var pizzaSlices = pizzaOrdered * slices;
var extraSlices = pizzaSlices % people;

// print out amount slices each person gets
console.log("Sparky got " + extraSlices + " slices of pizza.");


//AVERAGE SHOPPING BILL
// get the average of previous grocery shopping
var shopping = new Array (123,85,140,130,75);
var trips = 5;

// add up total shopping expenses and divide by number of trips
var expenseTotal = shopping[0] + shopping[1] + shopping[2] + shopping[3] + shopping[4];
var averageExpense = expenseTotal / trips;

// print out the average amount spent for each shopping trip
console.log ("You have spet a total of $" + expenseTotal + " on groceries over 5 weeks. That is an average of $" + averageExpense + " per week.");


//DISCOUNTS
// determine what the price of an item is before and after discount and taxes
var description = "solid state drive";
var itemPrice = 145;
var discount = 20;
var tax = 0.04166;

//multiply price times discount ddivied by 100 and multiply discounted price tims tax
var discountPrice = itemPrice * (discount / 100);
var discountItem = itemPrice - discountPrice;
var discountedPrice = (discountItem * tax) + discountItem;

// print out the prices of item as it gets discounted
console.log ("Your " + description + " was originally $" + itemPrice + ", but after a " + discount + "% discount, it is now $" + discountItem + " without tax, and $" + discountedPrice + " with tax.");