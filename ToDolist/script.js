const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [{
    id : new Date().getTime(),
    text : '',
    complete : false
}];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo(){
    // item object
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false
    };

    // 배열 처음에 새로운 아이템 추가
    todos.unshift(item);

    // 요소 생성하기
    const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

    // 앞에 요소를 추가하게 만듦
    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();

    saveToLocalStorage();
}

function createTodoElement(item){
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');

    if(item.complete){
        itemEl.classList.add('complete');
        inputEl.style.color = 'red';
    }

    const actionEl = document.createElement('div');
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circles';

    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;
        if(item.complete){
            inputEl.style.color = 'red';
            itemEl.classList.add('complete');
        }else{
            inputEl.style.color = 'black';
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage();
    });

    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();
    });

    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    });

    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== item.id)
        // item 요소 삭제
        itemEl.remove();
        saveToLocalStorage();
    });

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

// 로컬 저장소에 저장하기 위한 함수
function saveToLocalStorage(){
    const data = JSON.stringify(todos);
    // key : value 로 넣어야 함
    window.localStorage.setItem('my_todos', data);
}

function loadFromLocalStorage(){
    const data = localStorage.getItem('my_todos');
    if (data){
        // json 스트링을 오브젝트 객체로 변환
        todos = JSON.parse(data);
    }
}

function displayTodos(){
    loadFromLocalStorage();

    for(let i = 0; i < todos.length; i++){
        const item = todos[i];
        const {itemEl} = createTodoElement(item);

        list.append(itemEl);
    }
}

displayTodos();