
const boDem2 = {
    ten: "Click Counter",
    soLan: 0,
    dem(){
        this.soLan++;
        console.log(`${this.ten}: ${this.soLan} lan`);
        
    }
}

boDem2.dem();
const hamTach = boDem2.dem;
hamTach();

function taoWrapper(obj){
    return function(){
        obj.dem();
    }
}
