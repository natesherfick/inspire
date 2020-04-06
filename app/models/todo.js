export default class Todo{

constructor (data){
this._id = data._id
this.completed = data.completed || false
this.user = data.user
this.description = data.description
}

get Template() {
if (this.completed == true){

  return /*html*/`
<div>
<input type="checkbox" id="check-${this._id}" checked onclick="app.todoController.toggleTodoStatus('${this._id}')">
${this.description}
<button type="button" onclick="app.todoController.removeTodo('${this._id}')">remove</button>
</div>
`}

else{
  return /*html*/`
<div>
<input type="checkbox" id="check-${this._id}" onclick="app.todoController.toggleTodoStatus('${this._id}')">
${this.description}
<button type="button" onclick="app.todoController.removeTodo('${this._id}')">remove</button>
</div>
`  
}


}




}