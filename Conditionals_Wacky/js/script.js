// Matthew King 10/15/2013 Frogger Conditional



//establish variable
var ponds = prompt ("How many ponds are around your structure?");
var tireWidth = prompt ("How wide are your tired on you 4x4? \nIn inches, please.");
var currentFrog = prompt ("How many frogs are in one pond?");
var speed = prompt ("How fast will you drive to crush the frogs? \nIn miles per hour, please.");
var time = prompt ("How long are you going to be chasing frogs for? \nIn minutes, please.");

//calculations
var frogGrowth = currentFrog * 5;
var frogPopulation = frogGrowth * ponds;
var runFrog = (tireWidth / 4) * 12;
var convert = speed * (1 / 1.46667);
var secTime = time / 60;
var deadFrogs = runFrog * convert * secTime;
var frogsLeft = frogPopulation - deadFrogs;

//conditionals
if (deadFrogs >= frogPopulation) {
	//You have enough time to kill them all
	alert ("With the time you have you are able to get all of the frogs!");
}else {
	//You are unable to kill all the frogs
	alert ("You are able to get " + parseInt(deadFrogs) + " frogs in " + time + " but there are still " + parseInt(frogsLeft) + " frogs alive!");
}