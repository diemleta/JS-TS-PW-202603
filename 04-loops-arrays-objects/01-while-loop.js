
// let soLanClick = 1;
// while (soLanClick<=3){
//     console.log(`Dang click lan thu ${soLanClick}`);

//     soLanClick++;
    
// }
// console.log("Da click xong 3 lan, thoat vong lap");

/*let maxRetry = 5;
let currentRetry = 1;
let isFound = false;

while(isFound === false && currentRetry <= maxRetry){
    console.log(`Dang tim nut thanh toan tren man hinh....`);

    //Gia lap tim kiem (cho ti le tim kiem >0.8)
    let toolGiaLap = Math.random();
    let searchResult = toolGiaLap > 0.3;
    console.log(toolGiaLap);
    
    if(searchResult === true){
        isFound = true //Tim thay roi. Doi trang thai de thoat vong
        console.log("NGON! Da tim thay nut thanh toan. Bam click ngay");
        
    } else {
        console.log("Khong thay, chua bi thu lai");
        currentRetry++; // Tang so lan thu len 1
        
    }
    
}

// Xu ly ket qua
if(isFound === false){
    console.log(`Test fail, da thu qua 5 lan....`);
    
}
*/
// Exercise
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, 
// gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" 
// (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai
//  -> in ra Tài khoản bị khóa

let matKhauDung = "1234";
let maxLanThu = 3;
let lanNhapThu = 1;
let matKhauNhap;

if(lanNhapThu === 1){
    matKhauNhap === "0000";
    lanNhapThu++;

    while( lanNhapThu <=3 && matKhauNhap !== matKhauDung ){

            console.log(`Nhap sai mat khau lan thu ${lanNhapThu}`);
            lanNhapThu++;
    

}}
