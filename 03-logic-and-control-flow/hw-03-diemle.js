/*Tình huống: Bạn đang viết một bản kiểm tra trước khi release. 
Hệ thống trả về dữ liệu thô từ UI và config. 
Bạn cần xử lý thành báo cáo rõ ràng.			
        	
Dữ liệu đầu vào:			
        	
let rawProjectName = "   Neko CRM   ";			
let rawEnvName = "   ";			
let rawPassRate = "82";			
let rawHasReport = "true";			
let rawCriticalMessage = "   ";			
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"			
        	
        	
Yêu cầu:			
Dùng .trim() để làm sạch rawProjectName và rawEnvName.			
Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.			
Ép rawPassRate sang Number.			
Ép rawHasReport sang Boolean đúng cách.			
        	
Tạo hasCriticalBug theo quy tắc:			
nếu message là null hoặc undefined -> false			
nếu sau trim() là rỗng -> false			
ngược lại -> true			
Dùng if / else if để xếp hạng:			
>= 95 -> "EXCELLENT"			
>= 80 -> "GOOD"			
>= 60 -> "NEEDS IMPROVEMENT"			
còn lại -> "CRITICAL"			
        	
Dùng switch/case để gán tên engine cho browserUsed:			
chrome -> "Chromium"			
edge -> "Chromium"			
firefox -> "Gecko"			
safari -> "WebKit"			
Nếu không khớp -> "Unknown"			
        	
Dùng toán tử 3 ngôi để tạo message cho report:			
nếu hasReport là true -> "Có report"			
ngược lại -> "Chưa có report"			
        	
Tạo isReadyToRelease theo quy tắc:			
nếu pass rate dưới 80 -> false			
nếu có critical bug -> false			
nếu chưa có report -> false			
còn lại -> true			
In báo cáo ra console.			
        	
Expected output			
Project:         Neko CRM			
Environment:     Development			
Browser:         chrome			
Engine:          Chromium			
        	
Pass Rate:       82.00%			
Grade:           GOOD			
Report:          Có report			
Critical Bug:    Không có bug nghiêm trọng			
        	
Ready:           YES			 */

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "  ";
let browserUsed = "edge"; // "chrome", "firefox", "safari", "edge"


let projectName = rawProjectName.trim();
let envName;
if (rawEnvName.trim() === "") {
    envName = "Development";
} else {
    envName = rawEnvName.trim();
}
let passRate = Number(rawPassRate);
let passRateFormatted = passRate.toFixed(2);

let hasReport;
if (rawHasReport.toLowerCase() === "true") {
    hasReport = true;
}
else {
    hasReport = false;

}


let hasCriticalBug = (rawCriticalMessage !== null && rawCriticalMessage !== undefined && rawCriticalMessage.trim() !== "");
if (hasCriticalBug) {
    hasCriticalBug = true;
}
else {
    hasCriticalBug = false;
}

let bugMessage = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

let rate;
if (passRate >= 95) {
    rate = "EXCELLENT";
} else if (passRate >= 80) {
    rate = "GOOD";
} else if (passRate >= 60) {
    rate = "NEEDS IMPROVEMENT";
} else {
    rate = "CRITICAL";
}

let browser = browserUsed.trim();
let engine;
switch (browser) {
    case "chrome":
    case "edge":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    default:
        engine = "Unknown";

}

let report = hasReport ? "Có report" : "Chưa có report";

let isReadyToRelease;

if (passRate < 80 || hasCriticalBug === true || hasReport === false) {
    isReadyToRelease = false;
} else {
    isReadyToRelease = true;

}

let confirmRelease = isReadyToRelease ? "YES" : "NO";

console.log(`Project: ${projectName}`);
console.log(`Environment: ${envName}`);
console.log(`Browser: ${browser}`);
console.log(`Engine: ${engine}`);
console.log(``);
console.log(`Pass Rate: ${passRateFormatted}%`);
console.log(`Grade: ${rate}`);
console.log(`Report: ${report}`);
console.log(`Critical Bug: ${bugMessage}`);
console.log(``);
console.log(`Ready: ${confirmRelease}`);








