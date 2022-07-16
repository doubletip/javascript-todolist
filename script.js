const TodoInput = document.querySelector('.input')
const TodoButton = document.querySelector('.button')
const TodoUl = document.querySelector('.todoUl')

TodoButton.addEventListener('click', ()=> {
    if(TodoInput.value.length > 0) {
        const TodoLi = document.createElement('li')
        TodoLi.innerHTML = TodoInput.value
        TodoUl.appendChild(TodoLi)
        TodoInput.value = ""
    } else {
        alert("할 일을 입력하세요.")
    }
    
})

