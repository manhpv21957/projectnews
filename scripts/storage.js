"use strict";

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  var obj = localStorage.getItem(key);
  return obj;
}

function deleteStorage(key) {
  localStorage.removeItem(key);
}
const currentUser = "USER-LOGIN";

var obj_sto = getFromStorage(currentUser);

const currentUserLog = JSON.parse(obj_sto) || null;

// const currentUser = {
//   username: inputUsername.value,
//   password: inputPassword.value,
// };
// saveToStorage("currentUser", currentUser);

const key = "userArr";
console.log("Hello");
var obj_ar = getFromStorage(key);

let userArr = [];
if (obj_ar.length == 15) userArr = [];
else userArr = JSON.parse(obj_ar) || [];

//lấy giữ liệutodoArr từ localstorage
const todos = JSON.parse(getFromStorage("todoArr"))
  ? JSON.parse(getFromStorage("todoArr"))
  : [];
console.log(todos);
//chuyển đổi từ dạng ob về dạng class instance
const todoArr = todos.map((todo) => parseTask(todo));

//hàm chuyển js object sang class intance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.ussername,
    userData.pageSize,
    userData.category
  );
  return user;
}
//hàm đổi từ js object sang class intance của task class
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}
