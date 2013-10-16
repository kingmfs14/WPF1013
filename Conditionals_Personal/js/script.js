// Matthew King 10/15/2013 Budgeting Tool Conditions



// establish variables
var income = prompt ("What is your monthly income after taxes?");
var utilities = prompt ("How much do you spend on utilities, monthly?");
var food = prompt ("How much do you spend on food, monthly?");
var transportation = prompt ("How much do you spend on gas, bus, taxi, metro; monthly?");
var housing = prompt ("How much do you spend on rent/mortgage, monthly?");
var insurance = prompt ("How much do you spend on health, car, dental, house and any other type of insurance, monthly?");
var personal = prompt ("How much do you spend on personal hygiene, monthly?");
var debt = prompt ("How much do you spend on paying off debt, monthly?");
var recreation = prompt ("How much do you spend on recreational activities, monthly?");

//percentages
var utilityPercent = income * .10;
var foodPercent = income * .10;
var transportationPercent = income * .10;
var housingPercent = income * .30;
var insurancePercent = income * .20;
var personalPercent = income * .10;
var debtPercent = income * .05;
var recreationPercent = income * .05;

//budgeted costs
var overBudgetUtility = utilities - utilityPercent;
var overBudgetFood = food - foodPercent;


//conditionals
if (utilityPercent <= utilities && foodPercent <= food && transportationPercent <= transportation && housingPercent <= housing && insurancePercent <= insurance && personalPercent <= personal && debtPercent <= debt && recreationPercent <= recreation){
	//budget is all good
	alert ("Your current budget is on track!")
}else if (foodPercent > food && transportationPercent > transportation && housingPercent > housing && insurancePercent > insurance && personalPercent > personal && debtPercent > debt && recreationPercent > recreation){
	//all costs are too high
	alert ("All of your current costs are over the recommended amount!")
}
