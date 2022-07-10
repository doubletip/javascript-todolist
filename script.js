const TodoInput = document.querySelector('.input')
const TodoButton = document.querySelector('.button')
const TodoUl = document.querySelector('.todoUl')
const TodoLI = document.querySelector('.todoLi')

TodoButton.addEventListener('click', ()=> {
    const abc = TodoInput.value
    const aa = TodoUl.appendChild(TodoLI)
    const a = aa.innerText = abc
    console.log(a)
})

