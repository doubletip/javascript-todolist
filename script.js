const TodoInput = document.querySelector('input')
const TodoButton = document.querySelector('button')
const TodoUl = document.querySelector('todoUl')
const TodoLi = document.querySelector('todoLi')

TodoButton.addEventListener('click', ()=> {
    const abc = TodoInput.value
    console.log(abc)
})
