
const rawRuns = [
    { id: " tc_login_001 ", module: " login ", status: " FAIL ", owner: "an", priority: 1, enabled: true },
    { id: "TC_SEARCH_002", module: "search", status: "pass", owner: "binh", priority: 2, enabled: true },
    { id: " tc_cart_003 ", module: " cart ", status: " flaky ", owner: " chi ", priority: 1, enabled: true },
    { id: "TC_PAY_004", module: "payment", status: "fail", owner: "", priority: 1, enabled: true },
    { id: " TC_USER_005 ", module: " user ", status: " skip ", owner: "duy", priority: 3, enabled: true },
    { id: "TC_REPORT_006", module: "report", status: "fail", owner: "ha", priority: 2, enabled: false },
    { id: " ", module: "api", status: "fail", owner: "linh", priority: 1, enabled: true },
    { id: "TC_SYNC_007", module: " sync ", status: " FAIL ", owner: " minh ", priority: 2, enabled: true },
    { id: "TC_BILL_008", module: "billing", status: "pass", owner: "", priority: 1, enabled: true },
    { id: "TC_ORDER_009", module: " order ", status: " flaky ", owner: "nam", priority: 2, enabled: true }
];

function locDanhSachChayLai(rawRuns) {

    //Tạo list normalizedRuns
    const normalizedRuns = rawRuns.map((item) => {
        const { id: rawId, module: rawModule, status: rawStatus, owner: rawOwner, priority, enabled } = item;
        const id = rawId.trim().toUpperCase();
        const module = rawModule.trim().toLowerCase();
        const status = rawStatus.trim().toLowerCase();
        const owner = rawOwner.trim();
        return {
            id: id,
            module: module,
            status: status,
            owner: owner,
            priority: priority,
            enabled: enabled
        };
    })
    //Tạo list rerunList 

    const rerunList = normalizedRuns.filter((item) => {
        const { id, module, status, owner, priority, enabled } = item;

        return (id !== "" && enabled === true && (status.includes("fail") || status.includes("flaky")));

    })

    //Tạo list missingOwnerList

    const missingOwnerList = normalizedRuns.filter((item) => {
        const { id, module, status, owner, priority, enabled } = item;

        return (id !== "" && enabled === true && owner === "");

    })

    //Tìm object firstCriticalCase

    const rawFirstCriticalCase = normalizedRuns.find((item) => {
        const { id, module, status, owner, priority, enabled } = item;
        return (id !== "" && enabled === true && priority === 1 && status === "fail")

    })
    const firstCriticalCase = rawFirstCriticalCase ? rawFirstCriticalCase : null;

    return {
        normalizedRuns: normalizedRuns,
        rerunList: rerunList,
        missingOwnerList: missingOwnerList,
        firstCriticalCase: firstCriticalCase
    }


}

const result = (locDanhSachChayLai(rawRuns));
console.log(result);




