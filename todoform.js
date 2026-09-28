let todoArray = JSON.parse(sessionStorage.getItem("todoList")) || []

const query = new URLSearchParams(location.search)
const editId = query.get("id")
console.log(editId);

if (editId) {
    heading.textContent = "Edit Todo"
    const todoDetails = todoArray.find(todo => todo.id == editId)
    titleInput.value = todoDetails.title
    dateInput.value = todoDetails.date
    completed.checked = todoDetails.status
}

todoListForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(editId){
        const todoDetails = todoArray.find(todo => todo.id == editId)
        todoDetails.title = titleInput.value
        todoDetails.date = dateInput.value
        todoDetails.status = completed.checked
    }else{
        todoArray.push({
            id: Date.now(),
            title: titleInput.value,
            date: dateInput.value,
            status: completed.checked
        })
    }

    console.log(todoArray);
    sessionStorage.setItem("todoList", JSON.stringify(todoArray))
    location.href = 'index.html'
})