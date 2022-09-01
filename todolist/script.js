let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
todo = document.querySelector('.todo');

let todoList = [];
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function () {
    if(!addMessage.value) return;

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';



    // console.log(addMessage.value);
    // console.log(newTodo);
    // console.log(todoList);
});

function displayMessages() {
    let displayMessage = '';
    if(todoList.length === 0) todo.innerHTML = '';
    localStorage.setItem('todo', JSON.stringify(todoList));

    todoList.forEach(function (item, i) {
        // console.log(item);
        displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''} >
    <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
    </li>
    `;
        // console.log('displayMessage', displayMessage)
        todo.innerHTML = displayMessage;
    })
}

//находим чекед и менять на противоположное

todo.addEventListener('change', function (event) {
    // console.log(event.target);
    //    let idInput = event.target.getAttribute('id');
    //    let forLabel = todo.querySelector('[for='+ idInput +']');
    let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;

    todoList.forEach(function (item) {
        if (item.todo == valueLabel) {
            item.checked = !item.checked; //оператором на противоположное
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

todo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoList.forEach(function(item, i) {
    if(item.todo === event.target.innerHTML){
        if(event.ctrlKey || event.metaKey) {
            todoList.splice(i, 1)
        }else {
            item.important = !item.important;
        }
       
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
    
})
})



