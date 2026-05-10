
let password = "123456";

if(password.length>=6)
{
    console.log('Hop le');

    
}
else{
    console.log('Ko hop le');
    
}

// let age = 20;
// let hasTicket = true;

// if(age>18 && hasTicket){
//     console.log('Duoc vao');
    
// }else {
//     console.log('Khong duoc vao');
    
// }

let age = 20;
let hasTicket = true;
let canEnterCinema = age>=18 && hasTicket;
if(canEnterCinema){
    console.log('Duoc vao');
    
}

//ung dung
let successMsg = "Dang nhap thanh cong";
if(successMsg==="Dang nhap thanh cong!"){
    console.log('Test Pass: nguoi dung duoc vao trang chu');   
}else {
    console.log("Test Fail: Hien thi sai thong bao hoac dang nhap that bai");  
}

let score = 95;
if (score>=50){
    console.log("Dau");
    
}
else if (score>=90){
    console.log("XS");
    
}

let statusCode = 404;
if(statusCode===200){
    console.log("API hoat dong OK");
    
} else if(statusCode===400){
    console.log(" Bad request");
    
} else if(statusCode===404){
    console.log("Not found");
    
} else {
    console.log("Cac status code con lai");
    
}
//Exercise
console.log("Exercise");

let loginStatus = "locked";

if(loginStatus=== "sucess")
{
    console.log("Test pass: Login thành công");
    
} else if(loginStatus ==="locked"){
    console.log("Tài khoản bị khóa");
    
} else {
    console.log("Test fail: Login thất bại");    
}

let score2 = 95;
let result;
if (score>=90){
    result="XS";
}

let diem = 2;
//viết tắt của If/else
let trangThai = diem >= 5 ? "Pass" : "Fail";
console.log(trangThai);

//gán text
let isSaving = "true";
let buttonText = isSaving? "Saving" : "Saved";
console.log(buttonText);

//Exercise

let failedTests = 2;
//let suiteStatus =
  failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
// YC -> viết lại đoạn code trên bằng if/else if/else

   
    if (failedTests === 0)
    {
        suiteStatus = "PASS";
    }
    else if (failedTests <= 2){
        suiteStatus = "WARNING";
    }
    else {
        suiteStatus = "FAIL";
    }
    console.log(suiteStatus);

  let age3 = 18;
  if(age3){
    console.log("Dieu kien dung");
    
  }  
  console.log(typeof(age3));
  
  if("0"){
    console.log("Co chay vao day khong");
    
  }
    
  if(0){
    console.log("Co chay vao day khong 2");
    
  }

  let userName = "    ";
  if(userName){
    console.log("Da nhap username");
    
  }

  if(userName.trim()){
    console.log("Da nhap");
    
  } else {
    console.log("username rong");
    
  }
  //Vi du AT
  //Du lieu lay tu web ("" hoac https://github.coom..)
  let githubLink ="";
//   if(githubLink !== "" && githubLink !== null && githubLink != undefined){
//     console.log("User da upload github link");
//   } else {
//     console.log("Chua upload");
    
//   }

  if(githubLink){
    console.log("User da upload github link");
  } else {
    console.log("Chua upload");
    
  }

  //Exercise
let rawUserName = "   ";
if(rawUserName.trim()){
    console.log("Hop le");
    
}else {
    console.log("Khong hop le");
    
}

//Switch case
let role = "admin";
switch(role){
    case"admin":
        console.log("Cap quyen truy cap vao he thong");
        break;
    case"editor":
        console.log("Cap quyen chinh sua");
        break;    

    default:
        console.log("Loi role khong hop le");
        
}

let denGiaoThong = "Do";
switch (denGiaoThong){
    case "Do":
        console.log("Dung lai");
    case "Vang":
        console.log("Di cham lai");
    case "Xanh":
        console.log("Di thoi");
        break;
        
}

let isVip = true;
switch(isVip){
    case true:
        console.log("VIP");
        break;
    case false:
        console.log("BT");
        break;
        
}

let browserName = "firefox";
switch(browserName){
    case "chrome":      
    case "edge":
        //gom nhóm
        console.log("Khoi dong driver");
        break;
        
}

let rawPassRate = "82";
let passRate = Number(rawPassRate);
let passRateFormat = passRate.toFixed(2);
console.log(passRate);
console.log(passRateFormat);











