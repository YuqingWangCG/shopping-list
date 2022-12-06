var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');


function inputLength () {
	return input.value.length;
}

function createNewItem () {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.addEventListener('click', crossItem);
		createDeleteButton(ul.length);
		input.value='';
}

function addNewItemAfterClick () {
	if (inputLength() > 0) {
		createNewItem();
	} 
}

function addNewItemAfterKeyPress (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createNewItem();
	} 

}

function crossItem () {
	this.classList.toggle('done');
}

function deleteItem(){
    this.previousElementSibling.remove();
    this.remove();
    
}

function createDeleteButton(index) {
	var newButton = document.createElement('button');
	newButton.appendChild(document.createTextNode('Delete'));
    newButton.addEventListener('click', deleteItem);
    ul.insertBefore(newButton, li[index]);
}

button.addEventListener('click', addNewItemAfterClick);

input.addEventListener('keypress', addNewItemAfterKeyPress);

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', crossItem);
	createDeleteButton(i);
}
