let userTest2 = {
    hoTen: "Neko Nguyen",
    email: "neko@test.com"
}

let thongTinCanLay = "email" ; //key dduoc gan vao bien
console.log(userTest2[thongTinCanLay]);

///
let config = {browser: "Chrome", timeout: 5000};
//ko in ra duoc
console.log(`Ban dau ${config}`);

console.log("Ban dau", config );

config.timeout= 10000;

//them du lieu (key chua ton tai + du lieu)
config.isHeadless = true;

//xoa du lieu
delete config.browser;

const user3 = {ten: "neko"};
//van them sua xoa duoc ruot ben trong, const chi cam ban gan laij ca object bang dau bang
user3.ten = "meo";
console.log(user3);

////
let spTiki = {id: "SP01", ten: "Ban phim", gia: 50000};
let danhSachKey = Object.keys(spTiki);
console.log(danhSachKey);
console.log(danhSachKey.includes("gia"));

let danhSachValue = Object.values(spTiki);
console.log(danhSachValue);
console.log(danhSachValue.includes("Ban phim"));

let danSachCap = Object.entries(spTiki);
console.log(danSachCap);
console.log(danSachCap[0]);

console.log(Object.hasOwn(spTiki,"id"));

//Exercise
let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes",
};
//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"

let apiGiaTri = Object.keys(apiResponse);
console.log(`Số trường API trả về`,apiGiaTri.length);
console.log(`Số trường API trả về`,Object.keys(apiResponse).length);


console.log(`Co UserId, ${Object.hasOwn(apiResponse,"userId")}`);
console.log(`Co email, ${Object.hasOwn(apiResponse,"email")}`);
console.log(`Co role, ${Object.hasOwn(apiResponse,"role")}`);



let typeActive = typeof apiResponse.isActive;
console.log(typeActive);
if(typeActive !== "boolean"){
    console.log("isAction khong phai kieu boolean!");
    
}

let apiValue = Object.values(apiResponse);
console.log(apiValue.includes("admin"));

////
let danhSachUser =[{id: 2, ten: "teo", role: "user"}
,{id: 2, ten: "teo", role: "user"}
] 






