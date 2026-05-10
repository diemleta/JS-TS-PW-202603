console.clear();
console.log(10 + 5);
console.log("10" + 5);
console.log(Number("10") + 5);

console.log("10" - 5);
console.log("10"%3);

//Giỏ hàng rỗng
let tongTien = 0;
const giaAo = 25000;

//tongTien = 0+=25000;
tongTien += giaAo;

const giaQuan = 30000;
//tongTien = 25000 + 30000
tongTien+= giaQuan;

console.log(`Tong hoa don: ${tongTien}`);

let passwordLength = 5;
//let isPasswordValid = passwordLength >= 8;

//console.log(isPasswordValid);

let giaUI = "50000";
let giaMongDoi = 50000;

console.log(giaUI == giaMongDoi);
console.log(giaUI === giaMongDoi);
console.log(`PHep &&, ||, !`);

let isEmailCorrect = true;
let isPasswordCorrect = false;
//let canLogin = isEmailCorrect && isPasswordValid;
//console.log(canLogin);

let searchByName = false;
let searchBySKU = true;

let isProductFound = searchByName||searchBySKU;
console.log(isProductFound);

//
let userAge = 20;
let passwordInput = "Neko1234";
let isTermAccepted = true;

//1. Tao biến isAgeValid >=18 hay ko
//2. tạo biến isPasswordValid có 8 kí tự
//isSubmitButtonEnabled


let isAgeValid = userAge >= 18;
let isPasswordValid = (passwordInput.length)=== 8;
let isSubmitButtonEnabled = isAgeValid && isPasswordValid && isTermAccepted;
console.log(`Button Submit is enabled: ${isSubmitButtonEnabled}`);

console.log("*******i++, ++i**********");

//prefix
let b = 5;
let kq2 = ++b;
console.log(kq2);
console.log(b);

let x1 = 5;
//let kqc = ++x1;
console.log(x1);
console.log(x1++);


//postfix
let a = 5;
let kq1 = ++a;
console.log(kq1);
console.log(a);

//let i = 3;
//let result = i++ * 2; // làm 2 việc cùng lúc, tính toán và cập nhập 3*2, sau đó tăng i lên 4

////console.log(result);
//console.log(i);

let i = 3;
let resultPostfix = i*2;
++i;
console.log(resultPostfix);
console.log(i);


let retries = 2;
let firstLog = retries++;
let secondLog = ++retries;
let canRetry = retries-- > 3;
//đoán output 4 dòng
//viết lại theo cách rõ ràng

firstLog = retries;
retries++;
++retries;
secondLog  = retries;
//retries--;
canRetry = retries>3;
console.log(`FirstLog ${firstLog}`);
console.log(`SecondLog ${secondLog}`);
console.log(canRetry);

console.log(`Exercise`);
/*
/ Bài tập
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";
//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả
//  */

let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";


let isAgePass = Number(rawAge.replace("tuổi","").trim()) > 18;
let isVIP = rawisVIP === "true";
let ticketPrice = Number(rawTicketPrice.replace("đ","").replace(".","").trim());


let isGiamGia = isAgePass && isVIP
console.log(`Duoc Giam Gia: ${isGiamGia}`);

let finalPrice = ticketPrice*(100-30)/100;
console.log(`final Price is ${finalPrice}`);







