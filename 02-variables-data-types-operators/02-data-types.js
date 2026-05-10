//Kiểu string
let loiChao = 'xin chao buoi sang'; // Gán 1 chuỗi lời chào vào biến
let loiChao2 = "xin chao buoi sang"; // Tạo thêm 1 biến khác chứa cùng nội dung

let myName = "I'm Hoang"; 
const tenHocVien = "Hoang";

const loiGioiThieu = `Ten toi la ${tenHocVien}`;

console.log(loiGioiThieu);

const productName = "iphone 15 promax";
const productSelector = 'h2:has-text("${productName}")';

// kiểu number
let tuoi =  30;
const PI = 3.14;
let ketQua = (tuoi-5) * 2;
console.log(ketQua);

//Kiểu boolean
let denDangBat = true; //đèn sáng
let daTotNghiep = false; // chưa tốt nghiệp

//lenghth
let matKhau = "123456";
console.log(matKhau.length);

//trim()
let emailWeb = "  user1  ";
let emailChuan = emailWeb.trim();
console.log(emailWeb);

console.log(emailChuan);

//toUpperCase - toLowerCase
// IPHoNE 15 - data test lại là iphone 15
//giải pháp: chuyển cả 2 về cùng 1 kiểu (thường là lowercase) rồi mới so sánh

let tenSanPham = 'iPhOne 15';
console.log(tenSanPham.toLocaleLowerCase());

//  includes
let thongBao = "Đăng nhập thất bại. Sai mật khẩu";
console.log(thongBao.includes('Thành công'));
console.log(thongBao.includes('mật khẩu'));

let msg = "login Error: invalid password";
console.log(msg.includes('Error'));
console.log(msg.includes('error'));

//includes có check khoảng trắng

//Replace (case - sensitive)
let giaTien = "100$";
let giaTienSo = giaTien.replace("$", "");
console.log(giaTienSo);

let tien = "1.000.000";
console.log(tien.replace(".",""));
console.log(tien.replaceAll(".",""));

let tenUI = "Nguyen Van A";
console.log(tenUI.replaceAll(" ",""));

//IndexOf
let urlUI = "https://shopee.vn/product/12345";
console.log(urlUI.indexOf("product"));

//kết hợp với substring() để cắt lấy 1 phần chuỗi từ vị trí tìm được

let errorMsg = "Error 404: Page not found";
let pos = errorMsg.indexOf(":");

console.log(errorMsg.substring(errorMsg.indexOf(";")));
console.log(errorMsg.substring(errorMsg.indexOf(";") + 1));
console.log(errorMsg.substring(errorMsg.indexOf(";") + 2));

//slice số âm (dùng khi lấy đuôi chuỗi, đuôi file -> slice)
let fileName = "report_2026.pdf";
console.log(fileName.slice(-4));

let rawText = "   Order ID: ORD-2026-123 | Status: Success  ";
//yeu cầu lấy ra được ORD-2026-123
//dùng indexOf + slice
let rawText1 = rawText.trim();
let rawText2 = rawText1.substring(rawText1.indexOf(":")+2);
let rawText3 = rawText2.indexOf("|");
let rawText4 = rawText2.substring(0,(rawText3-1));
console.log(rawText4);


//console.log(rawText1);
//console.log(rawText1.indexOf(":") +2);
//console.log(rawText1.substring(rawText1.indexOf(":")+2));

//Number()
console.log("---------Number--------");
let s1  = "100";
console.log(Number(s1));

let s2 = "100px";
console.log(Number(s2));
console.log(parseInt(s2));
console.log(parseInt("10.999"));
console.log(parseFloat("10.5kg"));

console.log(Number("")); //-> trả về 0
console.log((19.956).toFixed(2));
console.log((19.9).toFixed(2));


let min = 50;
let max = 55;
let soLuong = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(soLuong);
console.log(typeof soLuong);

//min, max
console.log(Math.min(2,5,8));
console.log(Math.max(2,4,0));

///abs
console.log(Math.abs(-15));

let ngay = 5;

//ép kiểu
let chuoiNgay = String(ngay);
let ngayDep = chuoiNgay.padStart(2,"0");
console.log(ngayDep);

//SP-00005
let orderNumber = 5;
//backstick
let orderN = String(orderNumber);
let result = orderN.padStart(5,"0");
console.log(result);
let finalResult = `SP-${result}`;
console.log(finalResult);


let sanPham = "iphone 18";
let gia = "1000$";
console.log(sanPham.padEnd(20,".") + gia);

let username = "neko";
let age = 18;
console.log("Ten: " + username + " - Tuổi: " + age);
console.log("Ten:" , username , "- Tuổi:" , age);
console.log(`Ten: ${username} - Tuổi:${age+1}`);







/*//exercise 1
let rawText = "   Order ID: ORD-2026-123 | Status: Success  ";

//yeu cầu lấy ra được ORD-2026-123

let finalText = rawText.trim();
let start = finalText.indexOf(":");
let end = finalText.indexOf("|");
let result = (finalText.substring(start+1,end)).trim();
console.log(result);

//exercise 2: use backtick
//tao don hang SP-00005
let orderNumber = 5;
let orderN = String(orderNumber).padStart(5,"0");
console.log(`SP-${orderN}`);
*/


