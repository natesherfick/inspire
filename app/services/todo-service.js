import store from "../store.js";
import Todo from "../models/todo.js";


// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/nate/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      console.log("before mapping", res.data.data);
      let results = res.data.data.map(rawData => new Todo(rawData));
      store.commit('todos', results)
      console.log('got todos from api', results);

    })
    
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
   
    todoApi.post("", todo)
    .then(res => {
      store.commit('todos', store.State.todos);
      this.getTodos()
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    console.log(todo);
    
  }

  toggleTodoStatusAsync(todoId) {
    //let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    console.log(todoId);
    todoApi.delete(todoId)
    .then(res => {
      this.getTodos()
    })
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to ensure happens?
  }
}

const todoService = new TodoService();
export default todoService;
