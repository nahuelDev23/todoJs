export class TodoList {
    constructor(){
        this.todo = []
    }

    nuevoTodo(todo){
        this.todo.push(todo);
        console.log(this.todo);
    }

    eliminarTodo(id){
        // this.todo = this.todo.filter(todo => todo.id !== id);
    }

    marcarCompletado(id){

    }

    eliminarCompletados(){

    }


}