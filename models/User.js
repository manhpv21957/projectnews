"use strict";
//class user để đại diện cho thông tin người dùng
class User {
  constructor(
    firstname,
    lastname,
    username,
    password,

    //mặc định nếu không sai thì báo giá trị của 2 thuoovj tính này sẽ cho
    pageSize = 10,
    categogy = "business"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    //2 thuộc tính này làm yêu cầu 9,cá nhân hóa luôn phần cà đặt thông tin cho riêng từng user
    this.pageSize = pageSize;
    this.categogy = categogy;
  }
}
//class task chứa các thông tin về task trong Todo List
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
