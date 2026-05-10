
for(let i=1;i <=5; i++){
    console.log(`Dang chay vong thu ${i}`);
    
}

//
let soLuongAccount = 3;
for (let i=1; i<=3; i++){
    let emailText  = `nguoiDung_${i}@gmail.com`;
    console.log(`Da tao tai khoan ${emailText}`);
    
}
//Duyệt array bang index
let sanPham2 = ["Quan dui", "Ao Coc", "vay"];
for (let i = 0; i< sanPham2.length; i++){
    console.log(`San pham #${i+1}: ${sanPham2[i]}`);
    
}

//Duyet qua object
let config2 = {
    browser: "Firefox",
    timeout: 2000,
    headless: true,
}
//Object ko dung duoc for cổ điển
let keys = Object.keys(config2);
for (let i=0; i<keys.length; i++){
    let key = keys[i];
    let value = config2[key];
    console.log(`${key}: ${value}`);
    
}


// Trace thực thi:
// 1. Tạo object config2 với 3 thuộc tính:
//    - browser = "Firefox"
//    - timeout = 2000
//    - headless = true
// 2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:
//    keys = ["browser", "timeout", "headless"]
// 3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).
//    - Lần 1: i = 0
//      key = "browser"
//      value = config2["browser"] = "Firefox"
//      In ra: browser: Firefox
//    - Lần 2: i = 1
//      key = "timeout"
//      value = config2["timeout"] = 2000
//      In ra: timeout: 2000
//    - Lần 3: i = 2
//      key = "headless"
//      value = config2["headless"] = true
//      In ra: headless: true
// 4. Sau lần lặp cuối, i tăng thành 3.
//    Điều kiện 3 < 3 là sai nên vòng lặp dừng.

//Những lỗi kinh điển hay gặp
let arr = ["A", "B", "C"];
for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
    
}
// biến i chỉ tồn tại trong dấu ngoặc nhọn -> khi ra ngoài ko tồn tại

// Exercise
let soLuongDon = 5;
for(let i = 1; i<=soLuongDon; i++){
    let maDonHang = `ORDER-${i}`;
    console.log(maDonHang);
}

//Vòng lặp for...of(dành cho array)
let fruits = ["Tao","Cam","Oi"];

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
    
}

for(let fruit of fruits){
    console.log(fruit);
    
}
// Các cách dùng thường gặp
//duyệt array đơn giản
// duyệt string
let matKhau = "Neko@123";
for(let kyTu of matKhau){
    console.log(`Kys tự: ${kyTu}`);
    
}

let danhSachUsers = [
    {ten: "neko", role: "admin"},
    {ten: "neko2", role: "guest"},
    {ten: "neko3", role: "user"},
]

for(let user of danhSachUsers){
 console.log(`${user.ten} - Quyền ${user.role}`);
}

//Exercise
let danhSachUrl = ["/login", "/dashboard", "/profile"];

for(let url of danhSachUrl){
    console.log(`Đang kiểm tra: url ${url}`);
    
}

//for... in (dành riêng cho object)
let config = {
    browser: "chrome",
    timeout: 5000
}
for(let key in config){
    console.log(`${key} - ${config[key]}`);
    
}

//Dung vòng lặp nào cho array và object
//while: 

let products = [
  { ten: "iphone", gia: 200000 },
  { ten: "airpods", gia: 300000 },
  { ten: "macbook", gia: 10000 },
];

for(let product of products){
   // console.log(product);
    for (let item in product){
        console.log(`${item}: ${product[item]}`);
        
    }
    console.log(`---------------`);
    
}

//break & continue
//từ 1->100 mình muốn tìm số chia hết cho 7 đầu tiên
for(let i=1; i<=100; i++){
    if(i % 7 === 0){
        console.log(`Tim thay ${i}`);
        break;
        
    }
}

let sanPhams = [
  { ten: "iphone", conHang: true },
  { ten: "airpods", conHang: false },
  { ten: "macbook", conHang: true },
];

for(let sanPham of sanPhams){
    //console.log(sanPham.conHang);
    if(!sanPham.conHang){
        console.log(`San pham het hang: ${sanPham.ten}`);
        break;
        
    }   
}

for(let sanPham of sanPhams){
   // console.log(sanPham.conHang);
    if(!sanPham.conHang){
       // console.log(`San pham het hang: ${sanPham.ten}`);
        continue;
        
    }   
    console.log(`San pham con hang ${sanPham.ten}`);
    
}

// bỏ qua sp hết hàng
for (let sanPham of sanPhams) {
 if (!sanPham.conHang) {
continue;
 }
console.log(sanPham.ten);
}


//exercise

let userInfo = {
    username: "Neko",
    email: "neko@gmail.com",
    password: "1234560",
    role: "admin",
    isActive: true
}

let fieldAnDi = ["password"];
//dùng includes và continue trong array, bỏ qua field nhạy cảm dựa trên fieldAnDi -> in ra key và value hợp lệ

console.log(userInfo.username);
console.log(userInfo["username"]);

for(let info in userInfo){
    
    if(info.includes(fieldAnDi)){
        continue;
    }
    else {
        console.log(`${info}: ${userInfo[info]}`);
        
    }
    
}

//Exercise
let danhSachGia = [5000,120000,80000,30000,50000];
let danhSachVip = [];

// gia >100000
for(let i of danhSachGia){
    if(i<80000){
        continue;
         
    }
   danhSachVip.push(i); 
}
console.log(`Danh sách VIP gồm: ${danhSachVip}`);
console.log(`Số lượng sản phẩm VIP ${danhSachVip.length}`);
