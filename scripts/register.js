"use strict";
const inputFirtname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
//input - username;
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");
// const KEY = "USER_ARRAY";
// const userArr = JSON.parse(getFromStorage(KEY)) || [];
//bắt sự kiện nhấm vào nút regisster
btnSubmit.addEventListener("click", function () {
  //lấy dữ liệu nhập vào từ người dùng
  const user = new User(
    inputFirtname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  //const userArr = JSON.stringify();
  //check validate
  const isvalidate = validate(user);
  if (isvalidate) {
    //
    if (userArr == null) userArr = [];
    //thêm một thuộc tính vào mảng userarr
    userArr.push(user);
    //lưu dữ liệu lại xuống localstorage
    saveToStorage("userArr", JSON.stringify(userArr));
    alert("đăng kí thành công!");
    //điều hướng qua trang login
    window.location.assign("../pages/login.html");
  }
});

//hàm validate thông tin đăng kí nhập vào form
//hàm nyaf trả về true nếu hợp lệ và false nếu không hợp lệ
function validate(user) {
  let isvalidate = true;
  //1 không trường nào để trống
  if (user.firstname.trim().length === 0) {
    //trim()loại bỏ khoảng trắng
    alert("vui logf nhập fisrtname");
    isvalidate = false;
  }
  if (user.lastname.trim().length === 0) {
    alert("vui logf nhập lastname");
    isvalidate = false;
  }
  if (user.username.trim().length === 0) {
    alert("vui logf nhập username");
    isvalidate = false;
  }
  //không dùng phương thức .trim().length===0 như ở các input trên vì: đề yêu cầu : passwword phải có nhiều hơn 8 kí tự =>nên dấu cách khoảng trắng cũng là 1 kí tự thỏa mãn yêu cầu
  if (user.password.trim().length === "") {
    alert("vui logf nhập paswword");
    isvalidate = false;
  }
  if (inputPasswordConfirm.value === "") {
    alert("vui logf nhập confirm paswword");
    isvalidate = false;
  }
  let userArr = getFromStorage("userArr");
  if (userArr.length == 15) userArr = [];
  else userArr = JSON.parse(userArr);
  //userArr = JSON.parse(userArr);
  //username không được trùng vs username trc đó

  if (
    userArr != null &&
    !userArr.every((item) => (item.username !== user.username ? true : false))
    //nếu như trường tồn tại một username tồn tại thì sẽ trả về một arlert
  ) {
    alert("user name đã tồn tại");
    isvalidate = false;
  }
  //3passsrord và confirmword phải giống nhau
  if (user.password !== inputPasswordConfirm.value) {
    alert("password và confimpassword phải giống nhau");
    isvalidate = false;
  }
  //password phải có 8 kí rtụ trở nên
  if (user.password.length <= 8) {
    alert("password phải có 8 kí tự trở nên");
    isvalidate = false;
  }
  return isvalidate;
}
// "use strict";

// const firstNameInput = document.getElementById("input-firstname");
// const lastNameInput = document.getElementById("input-lastname");
// const usernameInput = document.getElementById("input-username");
// const passwordInput = document.getElementById("input-password");
// const btnSubmit = document.getElementById("btn-submit");
// const passwordInputConfirm = document.getElementById("input-password-confirm");

// const KEY = "USER_ARRAY";
// const userArr = JSON.parse(getFromStorage(KEY)) || [];

// btnSubmit.addEventListener("click", handleRegister);
// // get data user

// //
// function handleRegister() {
//   // Lấy dữ liệu nhập vào từ form

//   // goi ham du lieu hop le
//   const data = {
//     firstName: firstNameInput.value,
//     lastName: lastNameInput.value,
//     username: usernameInput.value,
//     password: passwordInput.value,
//     passwordConfirm: passwordInputConfirm.value,
//   };
//   const isValid = validate();

//   if (isValid) {
//     const newUser = new User(
//       data.firstName,
//       data.lastName,
//       data.username,
//       data.password
//     );

//     userArr.push(newUser);
//     saveToStorage(KEY, JSON.stringify(userArr));

//     window.location.href = "../pages/login.html";
//   }
//   function validate() {
//     const existuser = userArr.find((user) => user.username === data.username);

//     if (
//       !data.firstName ||
//       !data.lastName ||
//       !data.username ||
//       !data.password ||
//       !data.passwordConfirm
//     ) {
//       alert("please fill data ");
//     } else if (existuser) {
//       alert("nguoi dung da ton tai");
//     } else if (data.password.length < 8) {
//       alert("mk có ít nhất 8 kí tự");
//     } else if (data.password !== data.passwordConfirm) {
//       alert("mk va xac nhan mk khong giong nhau");
//     } else {
//       return true;
//     }
//   }
// }

// //function declaration validate
