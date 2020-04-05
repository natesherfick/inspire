export default class Todo{

constructor (data){
this._id = data._id
this.completed = data.completed || false
this.user = data.user
this.description = data.description
}

get Template() {
  return /*html*/`
<div>
${this.description}
<button type="button" onclick="app.todoController.removeTodo('${this._id}')">remove</button>
</div>
`
}




}