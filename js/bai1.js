let arrbool = [];
try {
  //cho phep nguoi dung nhap so luong phan tu trong mang
  let n = prompt("Số lượng phần tử trong mảng: ");
  n = parseInt(n);
  if (n < 0) {
    throw new error("Số lượng phần tử không hợp lệ");
  }
  for (let i = 0; i < n; i++) {
    const element = confirm(
      `Giá trị phần tử ${i} là true? \n(OK:true, Cancel:false)`
    );
    arrbool.push(element);
  }
  // c1: for each
  let counter = document.getElementById("true-counter");
  //   let count = 0;
  //   arrbool.forEach((value) => {
  //     if (value == true){
  //         count++;
  //     }
  //   })
  //   counter.innerHTML = count;
  //c2
  //   let truearr = arrbool.filter(function (item) {
  //     return item === true;
  //   });
  //   counter.innerHTML = truearr.length;
  //c3
  const trueCount = arrbool.reduce(function (accumulator, currentValue) {
    if (currentValue === true) {
      return accumulator + 1;
    }
  }, 0);
  counter.innerHTML = trueCount;
} catch (error) {
  console.error("Có lỗi xảy ra");
  alert("Cố lỗi xảy ra vui lòng thử lại");
}
