let arr = [3, 1, 5, 2, 4]
var method = function (arr) {
    return arr.sort((a, b) => a - b)//升序
    // return arr.sort((a, b) => b - a)//降序
};
console.log(method(arr))