const ulEl = document.querySelector('#jstoDoList');
const toDoFormEl = document.querySelector('#jsToDoForm');
const toDoInputEl = document.querySelector('#jsToDoInput');

const TODOS_KEY = "todos";

let toDosDB = [];

function toDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInputEl.value;
  toDoInputEl.value = "";
  const newToDoObj = {
    text : newToDo,
    id : Date.now()
  }
  toDosDB.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function paintToDo(newToDoObj) {
  const liEl = document.createElement('li');
  liEl.id = newToDoObj.id;
  const divEl = document.createElement('div');
  divEl.innerText = "❕" + newToDoObj.text;
  const delButton = document.createElement('button');
  delButton.innerText = "X";
  delButton.addEventListener('click', deleteToDo);
  liEl.appendChild(divEl);
  liEl.appendChild(delButton);
  ulEl.appendChild(liEl);
}

function deleteToDo(event) {
  const activeLiEl = event.target.parentElement;
  activeLiEl.remove();
  toDosDB = toDosDB.filter(toDo => toDo.id !== parseInt(activeLiEl.id, 10));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosDB));
}

function inputClick() {
  toDoInputEl.placeholder = "";
}

function inputBlur() {
  toDoInputEl.placeholder = "Write a To Do and Press Enter.";
}

const savedToDo = localStorage.getItem(TODOS_KEY);
if(savedToDo) {
  const parseToDos = JSON.parse(savedToDo);
  toDosDB = parseToDos;
  parseToDos.forEach(paintToDo);
}

toDoFormEl.addEventListener('submit', toDoSubmit);
toDoInputEl.addEventListener('click', inputClick);
toDoInputEl.addEventListener('blur', inputBlur);