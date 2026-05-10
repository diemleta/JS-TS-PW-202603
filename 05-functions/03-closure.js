
//Hình thái đầu tiên -> return ra 1 hàm khác: cổ điển
function taoMayChao(ten){
    function loiChao(){
        console.log(`Xin chao, ${ten}`);
        
    }
    return loiChao;
}

const chaoNeko = taoMayChao("Neko");
chaoNeko();

//taoMayChao("Neko")
// + tạo biến Neko
// + tạo hàm loiChao
// + return loiChao ra ngoai

//chaoNeko()
//loiChao van nho ten = Neko

//Hình thái 2: callback chạy trễ sau đó - ko cần return
//kiểu này hay gặp trong setTimeout, setInterval
function demoHenGio(){
    let message = "abc";

    setTimeout(function(){
        console.log(message);
        
    },100);
}

demoHenGio();

//Hình thái 3: dùng object có sẵn scope bên ngoài

//Hình thái 4: trả về object có method dùng chung biến ngoài
function taoBoDem(){
    let count = 0;
    return {
        tang(){
            count++;
            console.log(`Count = ${count}`);
            
        },
        reset(){
            count = 0;
            console.log("reset xong");
            
        }
    }
}

const boDem = taoBoDem();
boDem.tang();
boDem.tang();
boDem.reset();
boDem.tang();

//Điểm lưu ý: closure ko sao chép nguyên object -> nó giữ quyền truy cập tới biến trỏ tới object
//Closure giải quyết vấn đề gì

let soThuTu = 0;
function taoIdTest(){
    soThuTu++;
    return `USER_TEST_${soThuTu}`
}
console.log(taoIdTest());
console.log(taoIdTest());

soThuTu = 999;
console.log(taoIdTest());

function mayTaoId(){
    let soThuTu = 0;
    function tangId(){
        soThuTu++;
        return `USER_TEST_${soThuTu}`
    }
    return tangId;
}

const layIdMoi = mayTaoId();
console.log(layIdMoi());
console.log(layIdMoi());
console.log(layIdMoi());
console.log(layIdMoi());

//Bài tập
//Viết 1 hàm taoBoDiem(tenNut)

function taoBoDem(tenNut) {
 let soLanClick = 0;
return {
click() {
soLanClick++;
console.log(`${soLanClick} clicks`);
 },
reset() {
soLanClick = 0;
console.log("reset Xong");
 }
 };
}
const nutLogin = taoBoDem("Login Button");
nutLogin.click();
nutLogin.click();
nutLogin.reset();
nutLogin.click();


function taoBoDem(tenNut) {
    let count = 0;
    return {
        click() {
            count++;
            console.log(`${tenNut}: ${count} clicks`);
        },
        reset() {
            count = 0;
            console.log(`${tenNut} reset`);
        },
    };
}
const nutLogin = taoBoDem("Login Button");
nutLogin.click();
nutLogin.click();
nutLogin.reset();
nutLogin.click();

//This 
/* This là gì???: bản chất của this giống đại từ nhân xưng "Tôi" trong đời sống
cùng từ tôi nhưng ai nói thì Tôi là người đó 
QUY TẮC: this ko mang giá trị cố định - Giá trị ccuar nó phụ thuộc hoàn toàn vào AI là người gọi

this. trong object
A. Quy tắc vàng. kẻ đứng trước dấu chấm = THIS
Các nhận dạng của this
Gọi qua object (object.ham()) -> this trỏ về đúng cái object đó -> user.gioiThieu -> this = user
gọi khơi khơi (ham()) -> undefined -> gioiThieu() -> this = undefined

arrowFunctiion (()=>{
    }) -> kế thừa this từ scope bên ngoài -> ko có this riêng
     



*/

const user = {
    hoTen: "neko",
    tuoi: 18,
    gioiThieu(){
        console.log(`Tôi là ${this.hoTen}, ${this.tuoi} tuổi`);
        
    }
}
//Khi gọi user.gioiThieu() -> kẻ đứng rtwocs dấu chấm = user -> this = user
user.gioiThieu();

const sanPham2 = {
    ten: "iphone",
    inten: ()=>{
        console.log(`Toi ten la ${this.ten}`);
        
    },
    inTenDung(){
        console.log(`Toi ten la ${this.ten}`);
    }
};
sanPham2.inten();
sanPham2.inTenDung();

const boDem2 = {
    ten: "Click Counter",
    soLan: 0,
    dem(){
        this.soLan++;
        console.log(`${this.ten}: ${this.soLan} lan`);
        
    }
}

boDem2.dem();
//gán method vào 1 biến mới
const hamTach = boDem2.dem;
//lúc này hamTach chứa cái hàm nhưng đã bị mất liên kết với boDem ->
//giống như viêc photocoty nhưng bản copy ko biết thuộc về ai
hamTach();
//This sẽ bị mất khi truyền callback

//bind
function taoWrapper(obj){
    return function(){
        obj.dem();
    }
}

function chayCallback(callback){
    callback();
}

hamTach2 = taoWrapper(bodem2);
chayCallback(hamTach2);
