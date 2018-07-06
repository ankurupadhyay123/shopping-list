var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.appendChild(document.createTextNode("delete"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteParent);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass(event) {
	event.target.classList.toggle("done");
}

function deleteParent(event) {
	// event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	event.target.parentNode.remove();
}

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggleClass);
	deleteButtons[i].addEventListener("click", deleteParent);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);