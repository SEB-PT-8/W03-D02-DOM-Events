const todoInputElement = document.querySelector('#todo-input')

const submitButtonElement = document.querySelector('#submit-button')

const todoListElement = document.querySelector('#todo-list')

console.log(todoInputElement)
console.log(submitButtonElement)
console.log(todoListElement)


todoInputElement.value = 'Abulrahman'


function addToDoItem(){
    console.log('todo item add')
}


// Events
// 2 arguments of the addEventListener
// 1. what type of event
// 2. function

submitButtonElement.addEventListener('click')