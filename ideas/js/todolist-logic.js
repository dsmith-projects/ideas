function addNewToDo() {
    var newItem = document.getElementById("newToDo").value; // obtengo el valor del input field

    if(newItem !== "") {
    	var itemContent = document.createTextNode(newItem + " ");
	    var newListItem = document.createElement("li"); // creo un elemento li
	    var myList = document.getElementById("myToDoList"); // obtengo el elemento con id = myToDoList

	    var iconElement = document.createElement("i"); // crea elemento para el ícono de la x
	    iconElement.className = "glyphicon glyphicon-remove pointer"; // agrego la clase insertar el ícono


	    //alert("New item: " + newItem);
	    newListItem.appendChild(itemContent); // al nuevo li le agrego el texto
	    newListItem.appendChild(iconElement); // al mismo li le agrego un elemento <i></i>

	    myList.appendChild(newListItem);
	    

	    // a cada elemento le agrego una función para eliminar el li cuando presiono la X
	    iconElement.onclick = function removeListItem() {
	        //alert("Vamos bien ");
	        var myList = document.getElementById("myToDoList"); // obtengo el elemento con id = myToDoList
	        var childItem = iconElement.parentElement;
	        myList.removeChild(childItem);        
	    }
	    document.getElementById("newToDo").value = "";
    } else {
    	alert("Enter a to-do item!");
    }
    
}

function pressEnter(e) {
	if(e.which == 13 || e.keyCode == 13) {
		addNewToDo();
	}
}
