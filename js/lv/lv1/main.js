function start_1() {
	alert("Level 1: A New Time");
	var input_x1 = prompt("You hear a noise do you *keep walking* or go *check it out*?");

	if (input_x1 === "check it out") {
		alert("Whatever it was it's gone now...");
		alert("- you keep walking on the path to the village -");
		path_1();
	} else {
		alert("- you keep walking along the path to the village -");
		path_1();
	}
}
function path_1() {
	var input_x2 = prompt("It's Getting dark, there is a place to stay nearby do you *go to a safe place* or *keep walking* during the dark night?");
	if (input_x2 ==="go to a safe place") {
		alert("You arrive there safely & go to sleep");
		alert("Day 2");
	} else {
		alert("- As you are walking along the path you get attacked by a wolf -");
		health_n();
	}
}

// Health System

var health = 10;



function health_n() {
	health--;
	alert(health);
	if (health <= 0) {
	confirm("Game over");
}

}

function health_p() {
	health++;
	alert(health);
	if (health >= 10) {
	confirm("health full!");
}
}

// Health System END HERE