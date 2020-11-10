// 敏感信息类型	展示样例
// 姓名	名字只有两个字，对第一个字打码，如：*三。 多于两个字，只保留第一个和最后一个，其余都打码，如：王*四、欧**五
// 身份证	只显示第一位和最后一位，如：3****************1
// 手机号	除去手机国际码后，手机号位数不少于10位时，只显示前三位和最后两位，如：156******77。手机号位数少于10位时，只显示前两位和后两位，如：12*****89。国家码可以完全显示。
// 银行卡	只显示最后4位，如：************1234

let name = '张瑞';
let tel = 17313102641;

let desensitize = (data) => {
    let newData = [...data.toString()]
    if (newData.length <= 2) {
        newData[0] = '*';
    } else {
        for (let i = 0; i < newData.length; i++) {
            if (0 < i && i < newData.length - 1) {
                newData[i] = '*';
            }
        }
    }
    return newData.join('')
}

console.log(desensitize(tel))



