//Declare variables from DOM
let input = document.querySelector("input [type='text']");
let ul = document.querySelector("ul");

//Event listener for input and making new todo Items

input.addEventListener("keypress", function(keypressed){
    if(keypressed.which === 13){
        //Add elements after you hit enter
        let li = document.createElement('li');
        let spanElement = document.createElement('span');
        let icon = document.createElement('i');

        let newTodo = this.value;
        this.value = ""; 

        icon.classList.add('fas','fa-trash-alt');

        //Append items
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();
    }
}

);