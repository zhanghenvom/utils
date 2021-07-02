var toChinesNum = function (num) {
    var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
        newNum = '',
        arr = num.toString().split('');
    arr[0] = parseInt(arr[0]) - 1;
    if (arr[0] == -1 && arr.length == 1) { return '零'; }
    if (arr.length > 1) {
        arr[1] = parseInt(arr[1]) - 1;
        if (!arr[0]) {
            newNum = !arr[0] && arr[1] == -1 ? changeNum[9] : changeNum[9] + changeNum[arr[1]];
        } else {
            newNum = (changeNum[arr[0]] + changeNum[9]) + (changeNum[arr[1]] ? changeNum[arr[1]] : '')
        }
    } else {
        newNum = changeNum[arr[0]];
    }
    return newNum;
}
