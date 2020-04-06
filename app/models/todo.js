export default class Todo{

constructor (data){
this._id = data._id
this.completed = data.completed || false
this.user = data.user
this.description = data.description
}

get Template() {
  let template = 

/*html*/`
<div>
<input type="checkbox" id="check-${this._id}" `
template += this.completed ? 'checked' : '' 
template += ` onclick="app.todoController.toggleTodoStatus('${this._id}')">
${this.description}
<button type="button" onclick="app.todoController.removeTodo('${this._id}')">remove</button>
</div>
`
return template
}




}