// 保留指定小数，整数加零
let toStr = function (num) {
    if (Number.isInteger(num)) {
        return num + '.00';
    } else {
        return num.toFixed(2)
    }
}
console.log(toStr(5))