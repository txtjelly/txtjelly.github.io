// Please Note:
//
// To add or takeaway health call the health system: eg to takeaway health you use health_n();
// TODO:
// Add more to Day2_x
// Add more to Day3_y
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
		day2_x();
	} else {
		night();
	}
}

// Don't forget to call day3_y
function day2_x() {
	alert("After a rest you continue on your trek to the village");
}

function day2_y() {
	alert("You better start moving your way to the village!");
	var c1 = prompt("On your way along the path you run into a ranger. He notices the wolf bite and offers your cream do you *take it* or *think it's posion*");
	if (c1 === "take it") {
		alert("You apply the cream and it heals the bite wound");
		health_p();
	} else {
		alert("You run away as fast as you can, the ranger shoots an arrow into your leg");
		health_n();
		day3_x();
	}
}

function day3_x() {
	alert("Day 3");
	alert("- you slowly wake up your tied up with ropes-");
	alert("- you hear people talking as your trapped there -");
	alert("a tall figure walks towards you");
	alert("You start yelling & screaming");
	alert("The man tells you to be quiet you start to wake up more and you look around trying to figure out where you are...??");
	alert("You notice a table with a knife on it the man starts talking to you, you can't be bothred listening to him");
	alert("you sit there quietly waiting for your chance to grab the knife");
	alert("The man walks out now is your chance!");
	var c2 = prompt("Do you *grab the knife* or *wait* until later");

	if (c2 === "wait") {
		alert("You sit there waiting");
		wait();
	} else {
		alert("You attempt to grab the knife your wattling tied up towards the bench and slip your hand out of the ropes");
		alert("You managed to grab the knife and you cut the ropes as fast as you can and as soon as there loose you ran out of there as fast as your legs could carry you...");
		escape();
	}
}
function wait() {
	alert("Your still waiting");
}

function escape() {
	alert("You have escaped");
}

function day3_y() {

}

function night() {
	alert("- As you are walking along the path you get attacked by a wolf -");
	health_n();
	alert("Your getting tired and hungry but you keep going...");
	alert("You start hearing voices you feel scared. You then decied to go to a safe place to sleep");
	alert("You get there safe & sound your happy you decied to go to sleep");
	alert("Day 2");
	day2_y();
}


// Health System

var health = 10;

function health_n() {
	health--;
	alert("Health: " + health);
	if (health <= 0) {
	confirm("Game over");
}

}

function health_p() {
	health++;
	alert("Health: " + health);
	if (health >= 10) {
	confirm("health full!");
}
}

// Health System END HERE