// NEW: TO WORK WITH HEALTH EVENTS for taking away health: choose(); for adding it's still health_p();
function main() {
	alert("After a few hours of playing around with the code...");
	alert("We have brought to you the ARMOR SYSTEM!!!!");
	alert("Let's test");
}

// Armor and Health System!!!
var health = 10;
var armor = 1;

function addArmor() {
	if (armor >= 2) {
		alert("Armor full!");
	} else {
		armor++;
		alert("Armor: " + armor);
	}
}


function health_n() {
	health-=2;
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
function choose() {
	if (armor >= 2) {
		health_y();
	} else {
		health_n();
	}
}

function health_y() {
	health-=1;
	alert("health: " + health);
	alert("It works");
}
