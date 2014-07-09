// Story starts here

// Setup
function load() {
	$('#story').append('Level 2<br />');
	display();
}
window.onload=load;


// END HERE


//bootbox.prompt("What is your name?", function(result) {
//if (result === null) {
//alert("Hello");
//} else {
//alert("Swag");
//}
//});

// Day 1
function day1() {
	bootbox.dialog({
  message: "Are you ready to play?",
  title: "Welcome to Txt Jelly!",
  buttons: {
    success: {
      label: "Yes!",
      className: "btn-success",
      callback: function() {
        bootbox.alert("Awesome!");
      }
    },
    danger: {
      label: "No!",
      className: "btn-danger",
      callback: function() {
        Example.show("uh oh, look out!");
      }
    },
  }
});
}
// END HERE

// Night 1 x

// END HERE

// Night 1 y

// END HERE

// Day 2 x
// info: this is ran from night 1 x

// END HERE

// Day 2 y
// info: this is ran from night 1 y

// END HERE

// END HERE


// Main game events
function display() {
	$('#money').html("Money: " + money);
	$('#health').html("Health: " + health);
	$('#armor').html("Armor: " + armor);
	day1();
}
//Armor and Health System!!!
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
function removeAlerts() {
	$('#alerts').empty();
}

