// Starting
function intro() {
var start = confirm("Welcome to TxtJelly!");
alert("We have added some new things such as more content to Level 1 and a health system");
if(start === true) {
	p1();
} else {
	confirm("Are you sure you want to quit?");
	end();
}

}
// Starting End Here

function p1() {
var user_input_1 = prompt("How to Play: *cats* or *dogs* anything in * is an option so if you want to choose cats you type: cats");
// Yx

if (user_input_1 === "cats") {
	true_i1();
	end();
} else {
	false_i1();
	end();
}
}

// Yx End Here

// Boolean Value set at if statment Yx

function true_i1() {
	alert("I like cats aswell!");
	alert("Now Choose a level from the homepage and start playing!");
}

function false_i1() {
	alert("i love dogs");
	alert("Now Choose a level from the homepage and start playing!");
}

// Yx Handling ends here
