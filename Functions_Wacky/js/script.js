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
}else if (brush === sticks) {
	var breaks = 10;
}else {
	var breaks = 5;
}

//call out anonymous functions
if (velocity < 250) {
	var hit = function(wl, br){
		var broke = wl % br;
		var through = paint - broke;
		var shots = through / 2;
		return shots;
	}
	var balls = hit(wall, breaks);
}else {
	var hit = function(wl, br){
		var broke = br % wl;
		var through = paint - broke;
		return through;
	}
	var balls = hit(wall, breaks);
}


//alert user to amount balls have gotten through in one second
var message = "When firing paintballs traveling at " + velocity + " towards an opponent behind " + brush + " brush, " + balls + " will get through the brush hitting your opponent.";
alert (message);
