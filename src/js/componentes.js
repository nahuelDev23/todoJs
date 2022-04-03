const divTodoList = document.querySelector('.todo-list');

export const crearTodoHtml = (todo) => {
    const isCompleted = todo.completado ? 'completed' : '';
    const isCompletedCheck = todo.completado ? 'checked' : '';
    const htmlTodo = `
    <li class="${isCompleted}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${isCompletedCheck}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    const div = document.createElement('div');
    
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild)

    return div.firstElementChild
}