import 'slick-carousel';
import './css/index.css'
import './js/carousel'

import { Todo,TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript!!');


todoList.nuevoTodo(tarea)
console.log(tarea);

crearTodoHtml(tarea)

