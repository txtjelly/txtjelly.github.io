// NEW: TO WORK WITH HEALTH EVENTS for taking away health: choose(); for adding it's still health_p();
function main() {
	alert("After a few hours of playing around with the code...");
	alert("We have brought to you the ARMOR SYSTEM!!!!");
	alert("Let's test");
}

window.onload=function display() {
	$('#money').html(money);
	$('#health').html(health);
	$('#armor').html(armor);
}
// Armor and Health System!!!
var health = 10;
var armor = 1;
var money = 0;


// Adds Armor to the user and changes all kill instances to 1 also checks if the user has above to armor
function addArmor() {
	if (armor >= 2) {
		$('#alerts').append("<br />Armor Full<br />");
	} else {
		armor++;
		$('#alerts').append("<br />Armor Added<br />");
		$('#armor').html(armor);
	}
}


function health_n() {
	health-=2;
	$('#health').html(health);
	$('#alerts').append("<br />You have being attacked<br />")
	if (health <= 0) {
	$('#alerts').append("<br />Game Over<br />");
	}
}

function health_p() {
	health++;
	$('#health').html(health);
	if (health >= 10) {
	health = 10;
	$('#health').html(health);
	$('#alerts').append("<br />Health is full! <br />");
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
	$('#health').html(health)
	$('#alerts').append('<br />You have being attacked<br />')
	if (health <= 0) {
		$('#alerts').append('<br />Game Over<br />')
	}
}


// Health System END HERE


// Money System

// This is ran to check if the user has money to remove
function checkMoney() {
	if (money <= 0) {
		$('#alerts').append('<br />You have no' + '<br />' +'money to be taken<br />')
	} else {
		removeMoney();
	}
}
// This is ran when the user is given or finds money
function addMoney() {
 money+=100;
 $('#alerts').append("<br />Money has been Added<br />");
 $('#money').html(money);

}
// This is ran from the checkMoney() function if the user has money to remove
function removeMoney() {
	money-=50;
	$('#alerts').append('<br />Your money has been stolen<br />');
	$('#money').html(money);

}

// This is to check if the user has enough money to buy the item
function checkBuy() {
	if (money <= 99) {
		$('#alerts').append("<br />You do not have enough" + "<br />" + "money to buy this item <br />");
	} else {
		buyItem();
	}
}
// This buy function is for the purchase of armor ONLY
// This is ran from the checkBuy() function and the user pays the money and collects the item
function buyItem() {
	addArmor();
	$('#alerts').append("<br />An item has being bought<br />");
	removeMoneyI();
}

// Ran when the user buys armor
function removeMoneyI() {
	money-=100;
	$('#money').html(money);
	$('#alerts').append("<br />You bought Armor <br />");
}

