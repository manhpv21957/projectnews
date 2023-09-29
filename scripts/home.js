var modelogn = document.getElementById("login-modal");
var maincontent = document.getElementById("main-content");
var welcomemessage = document.getElementById("welcome-message");
var btnlogout = document.getElementById("btn-logout"); //

userArr = localStorage.getItem("userArr");
userArr = JSON.parse(userArr);

console.log(userArr);

//hàm hiển thị trang home một cách hợp lí
//khi có người đăng nhập và khi khong có người đăng nhập
function displayHome() {
  //nếu có người đăng nhập thì hiển thi login và ẩn main-content
  if (userArr) {
    modelogn.style.display = "none";
    maincontent.style.display = "block";
    //thêm thông báo welcome lastname
    welcomemessage.textContent = `welcome ${userArr[0].firstname}`;
  }
  //nếu không có ai đăng nhập thì ẩn maincontent và hiển thị modol
  else {
    maincontent.style.display = "none";
    modelogn.style.display = "block";
  }
}

//displayHome();
//băt sự kiện nhấn vào nút btnlogout
btnlogout.addEventListener("click", function () {
  const islogout = confirm("bạn có chắc muốn thoát ra chứ?");
  if (islogout) {
    //gắn giá trị userarr==null để biểu hiện là kh có ai đăng nhập
    // userArr = null;
    //lưu cập nhập lại dữ liệu xuông localstogare
    // deleteStorage("userArr");
    //saveToStorage("userArr", userArr);
    maincontent.style.display = "none";
    modelogn.style.display = "block";

    // saveToStorage(userArr, JSON.stringify(islogout));
    //hiển thị trang home ở dạng login
    // displayHome();
    // window.location.href = "pages/login.html";
  }
});
displayHome();
