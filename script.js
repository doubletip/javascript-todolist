const TodoInput = document.querySelector('.input')
const TodoButton = document.querySelector('.button')
const TodoUl = document.querySelector('.todoUl')

TodoButton.addEventListener('click', ()=> {
    // if(TodoInput.value.length > 0) {
    //     const TodoLi = document.createElement('li')
    //     TodoLi.innerHTML = TodoInput.value
        

    //     TodoUl.appendChild(TodoLi)
    //     TodoInput.value = ""
    // } else {
    //     alert("할 일을 입력하세요.")
    // }

    if(TodoInput.value.length > 0) {
        const TodoLi = document.createElement('li')
        TodoLi.classList.add('todoLi')
        // TodoLi.innerHTML = TodoInput.value
        TodoLi.innerHTML = `
        ${TodoInput.value}
        <div class="btn_wrap">
                <button class="del">삭제</button>
                <button class="edit">수정</button>
            </div>
        `
        

        TodoUl.appendChild(TodoLi)
        TodoInput.value = ""
    } else {
        alert("할 일을 입력하세요.")
    }
    
})

