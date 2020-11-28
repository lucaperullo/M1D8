// //Selectors
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");

// //Event Listeners
// todoButton.addEventListener("click", addTodo);

// //Functions
// function addTodo(event) {
//   event.preventDefault();
//   const todoDiv = document.createElement("ul");
//   todoDiv.classList.add("todo");
//   const newTodo = document.createElement("li");
//   newTodo.innerText = "hey";
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = "<i class="fas fa-trash-alt"></i>";
//   trashButton.classList.add("complete-btn");
//   todoDiv.appendChild(trashButton);
//   todoList.appendChild(todoDiv);}

const addNewTask = function (event) {
  let myTaskInput = document.getElementById("todo-input");
  let myTaskValue = myTaskInput.value;

  let myTaskList = document.getElementById("todo-list");

  let li = document.createElement("li");
  li.innerText = myTaskValue;
  // let i1 = document.createElement("i");
  // i1.id = "trashcan";
  // let i2 = document.createElement("i");
  // i2.id = "confirm";

  // i1.className = "fas fa-trash";
  // i2.className = "fas fa-tick";

  // i1.addEventListener("click", function (event) {});

  // li.appendChild(i);
  myTaskList.appendChild(li);

  myTaskInput.value = "";
};

let inputButton = document.getElementById("todo-button");
// inputButton.onclick = addNewTask
inputButton.addEventListener("click", addNewTask);

let removeLast = function () {
  let myTaskList = document.getElementById("todo-list");

  myTaskList.removeChild(myTaskList.lastChild);
};

let removeFirst = function (event) {
  let myTaskList = document.getElementById("todo-list");
  // let nodeToRemove = event.currentTarget
  // myTaskList.removeChild(nodeToRemove);
  myTaskList.removeChild(myTaskList.firstChild);
};

let removeOnClick = function (event) {
  let liList = document.getElementsByTagName("li");
  let newArr = [];

  liList[2].remove();

  let numToRemove;
  for (let index = 0; index < liList.length; index++) {
    let indexPosition = event.currentTarget;
    if (index !== numToRemove) {
      newArr.push(liList[index]);
    }
  }

  return newArr;
};
