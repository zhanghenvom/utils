//验证身份证
export let ifCard = param => {
    let norm = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    let norm_ = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x)$/
    //x大小写均可
    if (norm.test(param) || norm_.test(param)) {
        return false;
    } else {
        return true
    }
};
//验证手机号
export let ifPhone = param => {
    let norm = /^1[3456789]\d{9}$/
    if (norm.test(param)) {
        return false
    } else {
        return true
    }
};
//验证汉字
export let ifHanZi = param => {
    let norm = /^[\u4e00-\u9fa5]+$/
    if (norm.test(param)) {
        return false
    } else {
        return true
    }
};
//验证邮箱号
export let ifMail = param => {
    let norm = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (norm.test(param)) {
        return false
    } else {
        return true
    }
};

//银行卡号
export let ifBankCard = param => {
    let norm = /^[1-9]\d{9,29}$/;
    if (norm.test(param)) {
        return false
    } else {
        return true 
    }
};
