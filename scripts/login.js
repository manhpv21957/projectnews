"use strict";
const inputUsername = document.getElementById("input-username");
//input - username;
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");
///bắt sự kiện hấm vào nút login
btnSubmit.addEventListener("click", function () {
  // kiểm tra xem người dùng đã đăng nhập username và pasword hay chưa?
  const isvalidate = validate();
  if (isvalidate) {
    //console.log(userArr);
    // let userArr = getFromStorage("userArr");
    // userArr = JSON.parse(userArr);
    //tìm kiếm trong userArr thông tin user người dùng nhập vào có đúng hay không
    const finddata = userArr.find(
      (item) =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );
    if (finddata) {
      alert("đăng nhập thành công !");
      //lưa thông tin hiện tại đng đăng nhập vào trang

      saveToStorage("currentUser", JSON.stringify(finddata));

      //chuyển hướng về trang chủ
      window.location.assign("../index.html");
    } else {
      alert("thông tin đăng nhập không đúng, vui lòng kiển tra lại !");
    }
  }
});
/////////////hàm validate dữ liệu nhập của người dugf
//dòng này nó chưa thực hiện đc a ạ

function validate() {
  let isvalidate = true;
  if (inputUsername.value === "") {
    alert("vui lòng nhập username");
    isvalidate = false;
  }
  if (inputPassword.value === "") {
    alert("vui lòng nhập password");
    isvalidate = false;
  }
  return isvalidate;
}
