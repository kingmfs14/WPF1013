// Matthew King 10/24/13 Functions Personal Project


// Determine the amount of labor needed for wedding video
//establish beginning variables
var rehearsal = prompt ("Would you like your rehearsal video taped?");
var ceremony = prompt ("Would you like your ceremony video taped?");
var reception = prompt ("Would you like your reception video taped?");
var photos = prompt ("Would you like the video to include some photos?");

//create if statements to gather more information
if (rehearsal === yes) {
	var rehearseTime = prompt ("How long do you anticipate your rehearsal being? \nIn minutes, please.");
}else {
	var rehearseTime = 0;
}
if (ceremony === yes) {
	var ceremonyTime = prompt ("How long do you anticipate your ceremony being? \nIn minutes, please.");
}else {
	var ceremonyTime = 0;
}
if (reception === yes) {
	var receptTime = prompt ("How long do you anticipate your reception being? \nIn minutes, please.");
}else {
	var receptTime = 0;
}
if (photos === yes) {
	var photographer = prompt ("Will you hire an additional photographer?");
}else {
	var photoTime = 0;
}
if (photographer === yes) {
	var photoTime = 480;
}else {
	var photoTime = rehearseTime + ceremonyTime + receptTime + 240;
}

//create function variables
var videoTime = video(rehearseTime, ceremonyTime, receptTime);
var videoHourTime = (videoTime + photoTime) % 60;

//function for videoTime
function video (reh, cer, rec) {
	var recordingTotal = reh + cer + rec;
	var editingTotal = recordingTotal * 3;
	var totalTime = recordingTotal + editingTotal;
	return totalTime;
}
