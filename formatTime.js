/*
 * @Author: your name
 * @Date: 2020-12-24 14:42:03
 * @LastEditTime: 2021-01-20 10:24:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \utils\formatTime.js
 */
/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致,默认格式'Y年M月D日h点m分s秒'
 */
function formatNumber(n) { //9=>09
    n = n.toString();
    return n[1] ? n : '0' + n;
}

function formatTimeTwo(number, format = 'Y年M月D日h点m分s秒') {
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(number);
    returnArr.push(
        date.getFullYear(),
        formatNumber(date.getMonth() + 1),
        formatNumber(date.getDate()),
        formatNumber(date.getHours()),
        formatNumber(date.getMinutes()),
        formatNumber(date.getSeconds())
    )
    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}
