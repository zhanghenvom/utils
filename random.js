
/**
 * @description: 生成一个随机数字，根据传入参数返回个十百千位数
 * @param {Number:10\100\1000}
 * @return {*}
 */

let method = function (number) {
    return Math.trunc(Math.random() * number)
}

console.log(method(100))
