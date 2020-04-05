import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
let todos = store.State.todos
let template = ''

todos.forEach(task => {template += task.Template})
document.getElementById('todos').innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    var formData = e.target;
    var todo = {
    //TODO build the todo object from the data that comes into this method
      description: formData.description.value
    };
    TodoService.addTodoAsync(todo);
    formData.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
