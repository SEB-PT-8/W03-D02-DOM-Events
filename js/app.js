const todoInputElement = document.querySelector('#todo-input')

const submitButtonElement = document.querySelector('#submit-button')

const todoListElement = document.querySelector('#todo-list')



console.log(todoInputElement)
console.log(submitButtonElement)
console.log(todoListElement)




function addToDoItem(){
    const newLiElement = document.createElement('li') // 1. create a new li
    newLiElement.textContent = todoInputElement.value // 2. give the li the textContent of the todoInputElement.value

    newLiElement.style.marginBottom = '10px'
    console.log(newLiElement)
    todoListElement.appendChild(newLiElement) // 3. add the li to the page in the ol

    todoInputElement.value = ''

    
}


// Events
// 2 arguments of the addEventListener
// 1. what type of event
// 2. function

submitButtonElement.addEventListener('click',addToDoItem)


// converting string into number


const plusButtonElement = document.querySelector('#plus-button')
const minusButtonElement = document.querySelector('#minus-button')
const countElement = document.querySelector('#count')




function handleAdd(){
    let updatedCount = Number(countElement.textContent) + 1

    countElement.textContent = updatedCount
}


function handleMinus(){
    if(Number(countElement.textContent) >0){
    
    
    let updatedCount = Number(countElement.textContent) - 1

    countElement.textContent = updatedCount
}}

plusButtonElement.addEventListener('click',handleAdd)

minusButtonElement.addEventListener('click',handleMinus)