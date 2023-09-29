"use strict";
////
if (userArr) {
  const todoList = document.getElementById("todo-list");
  const btnadd = document.getElementById("btn-add");
  const inputtask = document.getElementById("input-task");
  displayTodoList();
  //
  //hàn hiển thị thông tin todo list
  function displayTodoList() {
    let html = "";
    //từ mảng todoArr lọc ra các todo (task) là của user đang đăng nhập
    todoArr
      .filter((todo) => todo.owner === userArr.username)
      .forEach(function (todo) {
        html += `
    <li class =${todo.isDone ? "checked" : ""}
    >${todo.task}<span class='close'>x</span></li>`;
      });
    todoList.innerHTML = html; //
    //bắt sự kiện
    eventToggleTasks();
    eventDeleteTasks();
  }
  //bắt sự kiện ấn nút add để thêm task
  btnadd.addEventListener("click", function () {
    //kiểm tra xem người dùng đã thực sự nhập tên nhiệm vụ add chưa
    if (inputtask.value.trim().length === 0) {
      alert("vui lòng nhập nghiệm vụ !");
    } else {
      const todo = new Task(inputtask.value, userArr.username, false);
      //thêm task mới vào mảng todoArr
      todoArr.push(todo);
      //lưu dữ liệu xuống localstorage
      saveToStorage("todoArr", JSON.stringify(todoArr));
      //hiển thị lại list các nghiện vụ
      displayTodoList();
      //resset dữ liệu từ form nhập
      inputtask.value = "";
    }
  });
  //hàm bắt sự kiện toggle tasks
  function eventToggleTasks() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        //tránh nút delete ra.. để kh chùng sự kiện nhấn vào nút delete
        if (e.target !== liEl.children[0]) {
          //toggle class checked
          liEl.classList.toggle("checked");
          //tìm task vừa click vào (toggle)
          const todo = todoArr.find(
            (todoItem) =>
              todoItem.owner === userArr.username &&
              todoItem.task === liEl.textContent.slice(0, -1)
          );
          //sau đó thay đổi thuộc tính isdone của nó
          todo.isDone = liEl.classList.contains("checked") ? true : false;
          //lưu cập nhập lại xuống localstogera
          saveToStorage("todoArr", JSON.stringify(todoArr));
        }
      });
    });
  }
  //hàm bắt sự kiện nhấm vào nút task
  function eventDeleteTasks() {
    //lấy tất cả các phần từ nút delete bắt sự kiện click trên từng phần tử
    document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
      closeEl.addEventListener("click", function () {
        //hỏi để xác nhận xóa
        const isdelete = confirm("bạn xác nhận chắc chắn muốn xóa chứ?");
        if (isdelete) {
          //tìm vị trí của task được aane xóa trong mảng todorr
          const index = todoArr.findIndex(
            (item) =>
              item.owner === userArr.username &&
              item.task === closeEl.parentElement.textContent.slice(0, -1)
          );
          //xóa task đó ra khỏi mảng toddoArr
          todoArr.splice(index, 1);
          //lưu cập nhập lị dữ liệu xuống localstorage
          saveToStorage("todoArr", todoArr);
          //hiển thị list todo
          displayTodoList();
        }
      });
    });
  }
} else {
  alert("vui lòng đăng nhập đăng kí để sử dụng");
  window.localStorage.assign("../index.html");
}
