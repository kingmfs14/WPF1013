// Matthew King 10/9/2013 Wacky Expression


//ZOMBIE SURVIVAL

// establish variables
var zombies = prompt ("How many zombies are surrounding your structure?",500);
var bullets = prompt ("How many bullets do you have left in your machine gun?");
var grenades = prompt ("How many grenades do you have left?");
var slugs = prompt ("How many slugs are left in your shotgun?");

// calculate how many zombies each weapon will kill

var zombieBull = bullets / 3;
var zombieSlug = slugs / 2;
var zombieGren = grenades * 5;

//calculate how many zombies are left after the massacre
var zombieDead = parseInt(zombieBull) + parseInt(zombieSlug) + parseInt(zombieGren);
var zombieAlive = zombies - zombieDead
var message = "You have " + zombieAlive + " zombies still alive. \nGET OUT NOW!";

//alert how many zombies are left
alert (message);