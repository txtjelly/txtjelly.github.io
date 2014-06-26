function start_1() {
	alert("Level 1: A New Time");
	var input_x1 = prompt("You hear a noise do you *keep walking* or go *check it out*?");

	if (input_x1 === "check it out") {
		alert("Whatever it was it's gone now...");
		alert("- you keep walking on the path to the village -");
	} else {
		alert("- you keep walking along the path to the village -");
	}
}