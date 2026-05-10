
/*Bài 1
Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

Dữ liệu đầu vào:

let apiResponse = {
    userId: 101,
    username: ""neko_tester"",
    email: null,
    isActive: ""true"",  // Bug: phải là boolean, không phải string
    phone: """",
    role: ""admin""
};

Yêu cầu:

Với mỗi key, kiểm tra:
Giá trị có phải null hoặc """" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
Nếu key là ""isActive"", kiểm tra typeof có phải ""boolean"" không? → In cảnh báo sai kiểu.
Đếm tổng số lỗi tìm được.
Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra."
*/
console.log("--------------Bài 1-------------------");

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

let errorApi = [];

for (let response in apiResponse) {
    let value = apiResponse[response];  
    if (!value) {
        console.log(`Trường ${response} có giá trị rỗng`);
        errorApi.push(response);
    }

    if (response === "isActive" && typeof (value) !== "boolean") {
        console.log(`isActive đang bị sai, kiểu ${typeof (value)} thay vì boolean`);
        errorApi.push(response);
    }
 
}
console.log(`Tổng số lỗi tìm được là: ${errorApi.length}`);

/*Bài 2
Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

Dữ liệu đầu vào:

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];
Yêu cầu:

Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
Nếu bình thường → in kết quả PASS.
Đếm tổng URL đã test được (không tính URL bị bỏ qua). */
console.log("--------------Bài 2-------------------");


let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];

let url = [];

    for (let key of testUrls){
    if(key.url === ""){
        console.log("URL rỗng");
        url.push(key.url);
        continue;
    }
    else if(key.status === 500){
        console.log(`Lỗi nghiêm trọng`);
        url.push(key.url);
        break;
        
    } else  {
        console.log("PASS");
        url.push(key.url);
        
    }
}
console.log(`Tổng URL đã test được là ${url.length}`);

/*
console.log("--------------Bài 2 - cách 2----------------");

let arrUrl = [];
for (let i = 0; i < testUrls.length; i++) {

        if (testUrls[i].url ==="") {
            console.log(`URL tại vị trí thứ ${i} rỗng`);
            arrUrl.push(testUrls[i].url);
            continue;
        }
        else if (testUrls[i].status === 500) {
            console.log(`URL tại vị trí thứ ${i} bị lỗi nghiêm trọng`);
            arrUrl.push(testUrls[i].url);
            break;

        } else {
            console.log(`URL tại vị trí thứ ${i} PASS`);
            arrUrl.push(testUrls[i].url);

        }
    }


console.log(`Tổng URL đã test được là ${arrUrl.length}`);
 */     


//Bài 2 - Cách 3 (của thầy)
/*
let testedCount = 0;
    for (let key of testUrls) {
        console.log(key);
        
        if (key.url === "") {
            console.log("URL rỗng");
            continue;
        }
        testedCount++;
        if (key.status === 500) {
            console.log(`Lỗi nghiêm trọng - ${key.url}`);
            break;
        }
        console.log(`PASS - ${key.url}`);
    }
    console.log(`Tổng URL đã test được là ${testedCount}`);
     */
        
    