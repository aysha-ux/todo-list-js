let todoArray = JSON.parse(sessionStorage.getItem("todoList")) || []

function displayTodoList() {
    todoArray = JSON.parse(sessionStorage.getItem("todoList")) || []
    result.innerHTML = ""

    todoArray.forEach(todo => {
        result.innerHTML += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.date}</td>
                <td>${todo.status ? "Completed" : "Pending"}</td>
                <td>
                    <div class="d-flex">
                        <a href="./manage.html?id=${todo.id}" class="btn btn-warning">Edit</a>
                        <button onclick="deleteTodo(${todo.id})" class="btn btn-danger ms-2">Delete</button>
                    </div>
                </td>
            </tr>
        `
    })
}

displayTodoList()

// delete todo list from the table
function deleteTodo(id) {
    const newTodoArray = todoArray.filter(todo => todo.id != id)

    sessionStorage.setItem("todoList", JSON.stringify(newTodoArray))
    displayTodoList()
}