/**
 * 自定义截取字符串方法
 * @param val 要截取的字符串
 * @param length 要截取的长度，1汉字=2字符
 * **/
function subString(val, length) {
  let returnValue = '';
  let byteValLen = 0;
  let exp = '';
  for (var i = 0; i < val.length; i++) {
    if (val[i].match(/[^\x00-\xff]/ig) != null) {
      byteValLen += 2;
    } else {
      byteValLen += 1;
    }
    if (byteValLen > length) {
      exp = "..."
      break;
    }
    returnValue += val[i];
  }
  return returnValue + exp;
}