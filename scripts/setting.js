"use strict";
if (userArr) {
  const inputpagesize = document.getElementById("input-page-size");
  const inputcategory = document.getElementById("input-category");
  const inputsave = document.getElementById("btn-submit");
  //bắt sự kiện nhấn vào nút btn
  inputsave.addEventListener("click", function () {
    if (validate()) {
      //cập nhật lại userarr
      userArr.pageSize = Number.parseInt(inputpagesize.value);
      userArr.category = inputcategory.value;
      saveToStorage("userArr", userArr);
      //cập nhật lại mảng user
      const index = userArr.findIndex(
        (userItem) => userItem.username === userArr.username
      );
      // currentUser[index] = userArr;
      keyUser = userArr[index];
      saveToStorage("currentUser", currentUser);
      //reset lại form nhập và thông báo cad đặt thành công
      alert("cài đặt thành công !");
      inputpagesize.value = "";
      inputcategory.value = "General";
    }
  });
  //hàm validate dữ liệu nhập của người dùng
  function validate() {
    let isvalidate = true;
    //kiểm tra input
    if (Number.isNaN(Number.parseInt(inputpagesize.value))) {
      alert("news per page không hợp lệ !");
      isvalidate = false;
      //kiểm tra inputcatege
    }
    return isvalidate;
  }
} else {
  alert("vui lòng đăng nhập đăng kí để sử dụng");
  window.localStorage.assign("../index.html");
}
