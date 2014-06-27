// Please Note:
//
// To add or takeaway health call the health system: eg to takeaway health you use health_n();
// TODO:
// Add more to Day2_x
// Add more to Day3_y
function start_1() {
	console.log("Game has started");
	alert("Level 1: A New Time");
	var input_x1 = prompt("You hear a noise do you *keep walking* or go *check it out*?");

	if (input_x1 === "check it out") {
		alert("Whatever it was it's gone now...");
		alert("- you keep walking on the path to the village -");
		day1_x();
	} else {
		// This will run when the user chooses to keep walking
		alert("- you keep walking along the path to the village -");
		day1_x();
	}
}
function day1_x() {
	console.log("Day 1 x");
	var input_x2 = prompt("It's Getting dark, there is a place to stay nearby do you *go to a safe place* or *keep walking* during the dark night?");
	if (input_x2 ==="go to a safe place") {
		alert("You arrive there safely & go to sleep");
		alert("Day 2");
		day2_x();
	} else {
		// This will happen when the user chooses to keep walking
		night1_x();
	}
}
// Night time
// This function is called in the if/else statment if the user chooses to keep walking during the night of day 1
function night1_x() {
	console.log("Night 1 x");
	alert("- As you are walking along the path you get attacked by a wolf -");
	health_n();
	alert("Your getting tired and hungry but you keep going...");
	alert("You start hearing voices you feel scared. You then decied to go to a safe place to sleep");
	alert("You get there safe & sound your happy you decied to go to sleep");
	alert("Day 2");
	day2_y();
}
// END HERE

// Add more story here!!!!
// Day 2
function day2_x() {
	console.log("Day 2 x");
	alert("After a rest you continue on your trek to the village");
	alert("- As you are walking along the path you get attacked by a wolf -");
	health_n();
	day3_y();
}

function day2_y() {
	console.log("Day 2 y");
	alert("You better start moving your way to the village!");
	var c2 = prompt("On your way along the path you run into a ranger. He notices the wolf bite and offers your cream do you *take it* or *run for it!*");
	if (c2 === "take it") {
		alert("You apply the cream and it heals the bite wound");
		health_p();
		day3_y();
	} else {
		// This will run if the user chooses run away
		alert("You run away as fast as you can, the ranger shoots an arrow into your leg");
		health_n();
		day3_x();
	}
}
// END DAY 2
// Day 3

function day3_x() {
	console.log("Day 3 x");
	alert("Day 3");
	alert("- you slowly wake up your tied up with ropes-");
	alert("- you hear people talking as your trapped there -");
	alert("a tall figure walks towards you");
	alert("You start yelling & screaming");
	alert("The man tells you to be quiet you start to wake up more and you look around trying to figure out where you are...??");
	alert("You notice a table with a knife on it the man starts talking to you, you can't be bothred listening to him");
	alert("you sit there quietly waiting for your chance to grab the knife");
	alert("The man walks out now is your chance!");
	alert("You quickly grab the knife and run out of there")
	escape();
}
// Wait & Escape called in day3_x

function escape() {
	alert("You have escaped you get back on the path and have reached the village");
	final();
}
//END HERE
function day3_y() {
	alert("You have made it to the village finally!");
	final();
}

// This is called in day 2 y
// Add more here!!
// END DAY 3
function final() {
	alert("Level Complete!");
	alert("Sorry for the short level we promise in future levels we will add more content the reason why it was short was because i ran out off ideas for the level! ");
	alert("anyway that just gives you a preview of text jelly we will be adding more features soon so stay tuned...");
	alert("if you want to have a sneak peek you can check the link out it should be called 'Future Updates'");
	alert("P.S if your a creative writer instrested in writing the story for the game please email me: lochiecameron@gmail.com");
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