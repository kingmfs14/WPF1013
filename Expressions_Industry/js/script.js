// Matthew King 10/9/2013 Industrial Expression


//IRRIGATION PRESSURE

// establish variables
var psiCurrent = prompt ("What is your current functioning PSI? \nOptions: 15, 20, 25, or 30");
var gpmCurrent = prompt ("What is your current GPM flow from a nearby hose bib?");
var nozzleSize = prompt ("What size are your nozzles on the station? \nOptions: 5, 8, 10, 12, or 15");
var fullNozzle = prompt ("How many full nozzles do you have on the station?");
var halfNozzle = prompt ("How many half nozzles do you have on the station?");
var quarterNozzle = prompt ("How many quarter nozzles do you have on the station?");

// calculate how many GPM are currently being used

var nozzleGPM = (nozzleSize / 100) * (psiCurrent / 5);
var fullGPM =  4 * nozzleGPM * fullNozzle;
var halfGPM = 2 * nozzleGPM * halfNozzle;
var quarterGPM = nozzleGPM * quarterNozzle;
var neededGPM = fullGPM + halfGPM + quarterGPM;

//calculate if there is enough GPM to fulfill the needed GPM
var totalGPM = gpmCurrent - neededGPM;
var message = "You have " + totalGPM + " GPM left over with the current set up you have. \nIf this is negative you should change nozzle sizes.";

//alert how many zombies are left
alert (message);