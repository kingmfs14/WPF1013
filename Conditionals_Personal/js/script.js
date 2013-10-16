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
var overBudgetTransportation = transportation - transportationPercent;
var overBudgetHousing = housing - housingPercent;
var overBudgetInsurance = insurance - insurancePercent;
var overBudgetPersonal = personal - personalPercent;
var overBudgetDebt = debt - debtPercent;
var overBudgetRecreation = recreation - recreationPercent;

//conditionals
if (utilityPercent <= utilities && foodPercent <= food && transportationPercent <= transportation && housingPercent <= housing && insurancePercent <= insurance && personalPercent <= personal && debtPercent <= debt && recreationPercent <= recreation){
	//budget is all good
	alert ("Your current budget is on track!")
}else if (utilityPercent > utilities && foodPercent > food && transportationPercent > transportation && housingPercent > housing && insurancePercent > insurance && personalPercent > personal && debtPercent > debt && recreationPercent > recreation){
	//all costs are too high
	alert ("All of your current costs are over the recommended amount!");
}
if (utilityPercent > utilities) {
	//utility costs are too high
	alert ("You are currently $" + overBudgetUtility + " over the recommended utility amount for your income.");
}
if (foodPercent > food) {
	//food costs are too high
	alert ("You are currently $" + overBudgetFood + " over the recommended food amount for your income.");
}
if (transportationPercent > transportation) {
	//transportation costs are too high
	alert ("You are currently $" + overBudgetTransportation + " over the recommended transportation amount for your income.");
}
if (housingPercent > housing) {
	//housing costs are too high
	alert ("You are currently $" + overBudgetHousing + " over the recommended housing amount for your income.");
}
if (insurancePercent > insurance) {
	//insurance costs are too high
	alert ("You are currently $" + overBudgetInsurance + " over the recommended insurance amount for your income.");
}
if (personalPercent > personal) {
	//personal costs are too high
	alert ("You are currently $" + overBudgetPersonal + " over the recommended personal amount for your income.");
}
if (debtPercent > debt) {
	//debt costs are too high
	alert ("You are currently $" + overBudgetDebt + " over the recommended debt amount for your income.");
}
if (recreationPercent > recreation) {
	//recreational costs are too high
	alert ("You are currently $" + overBudgetRecreation + " over the recommended recreation amount for your income.");
}