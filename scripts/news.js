var user = getFromStorage("currentUser");
//if (user) {

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const newsContainer = document.getElementById("news-container");
const pageNum = document.getElementById("page-num");
const apiKey = "20bc9c6554544727b40c2ae354388944";
// console.log(apiKey);
if (user) {
  // var user = getFromStorage("currentUser");
  var pageSize = 6;
  let totalResults = 0; // Số lượng bài viết tổng cộng
  async function getNewsData(page) {
    var country = "us";
    var categogy = "Business";

    var link = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categogy}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    try {
      //kết nối vs api
      const res = await fetch(link);
      console.log(res);
      const data = await res.json();
      console.log(data);
      //kiểm tra lỗi quá 100 lần request/100 ngày lỗi khi kết nối đến api
      if (data.status === "error" && data.code === "reteLimited") {
        throw new Error(data.message);
        //bắt lỗi khi chạy tệp thông tin không cùng sever=>chạy trên máy khác
      }
      if (data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }
      //gọi hàm hiển thị list new
      displayNewList(data);
      //bắt lỗi
    } catch (err) {
      //thông báo lỗi
      console.log("Error:" + err.message);
    }
  }
  //getNewsData();
  //hàm kiểm tra điều kiện ẩn và ẩn nút previous
  function checkBtnPrev() {
    //hàm pagenumber là một hàm ẩn  đi
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  //hàm kiển tra điều kiện ẩn và ẩn nút next
  function checkBtnNext() {
    //làm tròn và chiwa đều lượng tin tức

    if (pageNum.textContent == Math.ceil(totalResults / pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  //bắt sự kiện nhấm vào nút Previuos
  btnPrev.addEventListener("click", function () {
    //gọi hàm này dể lấy giữ liệu và hiện thị cách danh sách trc đó
    getNewsData(--pageNum.textContent);
  });
  //băt sự kiệm nhấm vào nút next
  btnNext.addEventListener("click", function () {
    //gọi hàm này để hiện thị danh sách hiển thị chá danh sách tiếp theo
    getNewsData(++pageNum.textContent);
  });
  //hàm hiển thị list News lên trang
  function displayNewList(data) {
    console.log(data);
    //lấy giá trị co biến tatolresults
    totalResults = data.totalResults;
    //kiểm tra xem đã ẩn các nút Next hay previuous hay chưa và ẩn đi
    checkBtnNext();
    checkBtnPrev();

    let html = "";
    //tạo các code html các neeww để hiển thi
    //no-image-available.jmg để thay cho 1 số ảnh có gia trị đường dẫn không hiển thị ảnh'
    console.log(data.article);
    data.articles.forEach(function (article) {
      html += `
  <div class="new-content">
 <div class="img-banner">
 <img width ="350px", height="350px",
 src=${article.urlToImage ? article.urlToImage : "no_image_available.ipg"}
alt="img"/>
</div>
  <div class="contect">
  <h4>${article.title}</h4>
  <p>${article.description}</p>
  <button>
  <a href=${article.url} target="_blank">view</a>
  </button>
  </div>
  </div>`;
    });
    newsContainer.innerHTML = html;
  }
  //if (user) {
  var page = 1;
  //hàm lấy dữ liệu api và hiển thị list news ra ứng dụng
  getNewsData(page);
} else {
  alert("vui lòng đăng nhập/đăng kí để truy cập ứng dụng");
  window.location.assign("../index.html");
}
//nếu chưa đăng nhập thị thông báo cho người nhập đăng nhập vào
