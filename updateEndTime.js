/**
 * @description: 各种倒计时场景
 * @param 
 * {end_time 到期时间戳、format 自定义格式} 
 * @return {String}
 */


let time = setInterval(() => {
    // updateEndTime(1611826801)
    console.log(updateEndTime(1611113520))
}, 1000);

function updateEndTime(end_time, format = 'D天h时m分s秒') {
    if (end_time <= Math.round(new Date() / 1000)) {
        clearInterval(time)
    } else {
        
        let lag = end_time - Math.round(new Date() / 1000);  //剩余时间的时间戳
        let formateArr = ['D', 'h', 'm', 's'];
        let returnArr = [];
        returnArr.push(
            Math.floor((lag / 3600) / 24),
            Math.floor((lag / 3600) % 24),
            Math.floor((lag / 60) % 60),
            Math.floor(lag % 60)
        )
        for (let i in returnArr) {
            format = format.replace(formateArr[i], returnArr[i]);
        }
        return format
    }

};


