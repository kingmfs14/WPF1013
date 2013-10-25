// Matthew King 10/24/13 Functions Wacky Project



//Painting Opponent through the bush
//establish variables
var velocity = prompt ("How fast are the paintballs exiting your gun? \nPlease type in between 180 and 320.");
var rate = prompt ("At what rate are you firing the paintballs at? \nOptions: single, 3, 6, or auto");
var thick = prompt ("What type of ball will you be using? \nOptions: field, recreation, intermediate, professional");
var brush = prompt ("How thick is the brush that your opponent is hiding behind? \nthick, sticks, or leaves");

//establish rate conditional variable
if (rate === auto) {
	var paint = 20;
}else if (rate === 6) {
	var paint = 18;
}else if (rate === 3) {
	var paint = 12;
}else {
	var paint = 7;
}

//establish thick conditional variable
if (thick === professional) {
	var wall = 8;
}else if (thick === intermediate) {
	var wall = 5;
}else if (thick === recreation) {
	var wall = 4;
}else {
	var wall = 2;
}

//establish brush conditional variable
if (brush === thick) {
	var breaks = 14;
}