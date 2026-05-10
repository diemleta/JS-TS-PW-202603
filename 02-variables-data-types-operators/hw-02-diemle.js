//Homework 
//Exercise 1
/*console.log(`***Exercise 1***`);

let giaGocDau = '1.000.000 d';
let giamGia = 20;
let giaSauGiam = '800.000 d';

let giaGocDau1 = (giaGocDau.substring(0,giaGocDau.indexOf("d")));
let giaGocDau2 = (giaGocDau1.trim()).replaceAll(".","");
let giaGocDau3 = parseInt(giaGocDau2);
console.log(`Giá Gốc là: ${giaGocDau3}`);

let giaSauGiam1 = (giaSauGiam.substring(0,giaSauGiam.indexOf("d")));
let giaSauGiam2 = (giaSauGiam1.trim()).replaceAll(".","");
let giaSauGiam3 = parseInt(giaSauGiam2);
console.log(`Giá Sau Giảm là: ${giaSauGiam3}`);


let giaMongDoi = giaGocDau3*(100-giamGia)/100;
console.log(`Giá Mong Đợi là: ${giaMongDoi}`);

//Exercise 2
console.log(``);
console.log(`***Exercise 2***`);


let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

//console.log(tenSanPham.trim().toUpperCase());

let giaGoc1 = giaGoc.indexOf(":");
let giaGoc2 = giaGoc.indexOf("v");
let giaGoc3 = parseInt(giaGoc.substring(giaGoc1 + 1,giaGoc2).trim().replaceAll(",",""));
//console.log(giaGoc3);

let soLuong1 = soLuong.indexOf(":");
let soLuong2 = soLuong.indexOf("m");
let soLuong3 = parseInt(soLuong.substring(soLuong1 + 1,soLuong2).trim().replaceAll(",",""));
//console.log(soLuong3);

let tongTienGoc = giaGoc3*soLuong3;
//console.log(tongTienGoc);

let maGiamGia1 = maGiamGia.indexOf(":");
let maGiamGia2 = maGiamGia.indexOf("%");
let maGiamGia3 = maGiamGia.substring(maGiamGia1 + 1,maGiamGia2+1).trim();
//console.log(maGiamGia3);

let maGiamGiaSo = parseInt(maGiamGia.substring(maGiamGia1 + 1,maGiamGia2).trim());
let thanhTien = tongTienGoc - (tongTienGoc*maGiamGiaSo/100);
let thanhTienVN = thanhTien.toLocaleString('vi-VN') + ' VND';
let thanhTienVN1 = thanhTien.toLocaleString('vi-VN',{style: "currency", currency:"VND"});

//console.log(thanhTien);

// Hóa Đơn
console.log(`HÓA ĐƠN THANH  TOÁN - ID:#0002`);
console.log(`Sản phẩm: ${tenSanPham.trim().toUpperCase()}`);
console.log(`Đơn giá: ${giaGoc3}`);
console.log(`Số lượng: ${soLuong3}`);
console.log(`Tổng tiền (Gốc): ${tongTienGoc}`);
console.log(`Giảm giá: ${maGiamGia3} `);
console.log(`THÀNH TIỀN: ${thanhTienVN}`);




let slugText = " Playwright Basic First test ";
console.log((slugText.trim()).replaceAll(" ","-").toLowerCase());


let text = " sale ";
console.log(text.trim().toLowerCase().includes("sale"));

let amount = 9.5;//=>. 009.50
console.log(amount.toFixed(2).padStart(6,0));



let text1 = "ABCDEFGH";
console.log(text1.slice(3));
*/
const finalPrice = "54000000";//=>54.000.000
console.log(finalPrice.slice(0,-6));
console.log(finalPrice.slice(-6,-3));
console.log(finalPrice.slice(-3));
//0,-6,//-6,-3,//-3
