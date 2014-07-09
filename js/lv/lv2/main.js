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

// Page 1
function page1() {
	bootbox.dialog({
  message: "You are walking along the street on Halloween night. You see a haunted house. You are curious so you approach the door.You notice that there are two doorbells.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You ring the bell to the left",
      className: "btn-success",
      callback: function() {
        page2x();
      }
    },
    danger: {
      label: "You ring the bell to the right.",
      className: "btn-danger",
      callback: function() {
       page2y();
      }
    },
  }
});
}
//END HERE

// Page 2 x
//info: trigged if the user rings the left bell in page1();
function page2x() {
	bootbox.dialog({
  message: "You hear a voice that says “Enter, if you dare”.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You enter immediately.",
      className: "btn-success",
      callback: function() {
       page3x();
      }
    },
    danger: {
      label: "You hesitate, but curiosity overcomes you and you enter slowly.",
      className: "btn-danger",
      callback: function() {
      page3y();
      }
    },
  }
});
}
//END HERE
// Page 2 y
//info: this is ran if the user chooses to ring the right bell in page1();
function page2y() {
	bootbox.dialog({
  message: "You hear a voice that says “Come on in, I’ve been waiting for you!”.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You enter with enthusiasm.",
      className: "btn-success",
      callback: function() {
       page3y();
      }
    },
    danger: {
      label: "You enter slowly, scared but curious.",
      className: "btn-danger",
      callback: function() {
      page3x();
      }
    },
  }
});
}
//END HERE

// Page 3 x
//info: this is ran if the user chooses to enter immediately in page2x();
function page3x() {
	bootbox.dialog({
  message: "You are now in the front hall. You see a door to the left and some stairs.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You climb up the stairs.",
      className: "btn-success",
      callback: function() {
       page4x();
      }
    },
    danger: {
      label: "You enter the door to the left.",
      className: "btn-danger",
      callback: function() {
      page4y();
      }
    },
  }
});
}
//END HERE

//Page 3 y
//info this is ran if the user chooses You hesitate, but curiosity overcomes you and you enter slowly. in page2x();
function page3y() {
bootbox.dialog({
  message: "You hear a voice that says “Come on in, I’ve been waiting for you!”. ",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You enter with enthusiasm.",
      className: "btn-success",
      callback: function() {
       page4y();
      }
    },
    danger: {
      label: "You enter slowly, scared but curious.",
      className: "btn-danger",
      callback: function() {
      page4x();
      }
    },
  }
});
}
//END HERE


//Page 3 z

//END HERE
//Page 4 x
//info: this is ran if the user chooses to climb up the stairs in page3x();
function page4x() {
	bootbox.dialog({
  message: "You see 2 doors: a blue one and a red one.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You open the blue door.",
      className: "btn-success",
      callback: function() {
       page5x();
      }
    },
    danger: {
      label: "You open the red door.",
      className: "btn-danger",
      callback: function() {
      page5y();
      }
    },
  }
});
}

//END HERE

//Page 4 y
function page4y() {
bootbox.dialog({
  message: "You are now in the front hall. You see a door to the just ahead of you and some stairs.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You go up the stairs.",
      className: "btn-success",
      callback: function() {
       page5y();
      }
    },
    danger: {
      label: "You enter the door just ahead of you.",
      className: "btn-danger",
      callback: function() {
      page5x();
      }
    },
  }
});
}
//END HERE

//Page 5 x
//info: this is ran if the user chooses to open the blue door in page4x();
function page5x() {
bootbox.dialog({
  message: "You are in a dark room but you can see two boxes: a black one and a brown one.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "Open the black box.",
      className: "btn-success",
      callback: function() {
       page6x();
      }
    },
    danger: {
      label: "Open the brown box.",
      className: "btn-danger",
      callback: function() {
      page6y();
      }
    },
  }
});
}
// END HERE

//Page 5 y
function page5y() {
	bootbox.dialog({
  message: "You see 2 doors: a blue one and a red one.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "You open the blue door.",
      className: "btn-success",
      callback: function() {
       page6y();
      }
    },
    danger: {
      label: "You open the red door.",
      className: "btn-danger",
      callback: function() {
      page6x();
      }
    },
  }
});
}
// END HERE

//Page 6 x
function page6x() {
	bootbox.dialog({
  message: "MEOW... HELLO! Will you please take me home with you?",
  title: "Halloween night",
  buttons: {
    success: {
      label: "Yes!",
      className: "btn-success",
      callback: function() {
       theEnd();
      }
    },
    danger: {
      label: "No!",
      className: "btn-danger",
      callback: function() {
      theEnd();
      }
    },
  }
});
}
// END HERE

//Page 6 y
function page6y() {
bootbox.dialog({
  message: "You are in a dark room but you can see two boxes: a black one and a brown one.",
  title: "Halloween Night",
  buttons: {
    success: {
      label: "Open the black box.",
      className: "btn-success",
      callback: function() {
       theEnd();
      }
    },
    danger: {
      label: "Open the brown box.",
      className: "btn-danger",
      callback: function() {
      theEnd();
      }
    },
  }
});
}
// The end
function theEnd() {
	bootbox.alert("That's it for level 2!");
  bootbox.alert("Created by Lochie Cameron");
}

// Main game events
function display() {
	$('#money').html("Money: " + money);
	$('#health').html("Health: " + health);
	$('#armor').html("Armor: " + armor);
	page1();
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

