
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // case 1: if everything's true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }

    // case 2: otherwise, make everything true
this.displayTodos();
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }

    this.displayTodos();
  }
}
};

//get acces to the display todos button

// var displayTodosButton = document.getElementById('displayTodosButton');
// console.log(displayTodosButton);
//
// // run displayTodos method when someone clicks button
//
// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();
// });
//
// var toggleAllButton = document.getElementById('toggleAllButton');
// console.log(toggleAllButton);
//
// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// });

var handlers = {
toggleAll: function() {
  todoList.toggleAll();
  view.displayTodos();
  },
addTodo: function() {
  var addTodoTextInput = document.getElementById('addTodoTextInput');
  todoList.addTodo(addTodoTextInput.value);
  addTodoTextInput.value = '';
  view.displayTodos();

},
deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
},
changeTodo: function() {
  var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
  var changeTodoTextInput = document.getElementById('changeTodoTextInput');
  todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
  changeTodoPositionInput.value = '';
  changeTodoTextInput.value = '';
  view.displayTodos();

}
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');
        todoLi.id = i;
        todoLi.textContent = todoList.todos[i].todoText;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
    if (elementClicked.className === 'deleteButton') {
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

//get element that was clicked on


// check if elementClicked is a delete deleteButton



// var todoLi = document.createElement('li');
// var todosUl = document.querySelector('ul');
// todosUl.appendChild(todoLi);
