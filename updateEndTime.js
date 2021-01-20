function updateEndTime() {
    //当前时间的时间戳
    let time = Math.round(new Date() / 1000)
    //到期时间,可由后台传
    let end_time = 1611826801
    //计算时间差并换算
    let lag = end_time - time;
    let second = Math.floor(lag % 60);
    let minite = Math.floor((lag / 60) % 60);
    let hour = Math.floor((lag / 3600) % 24);
    let day = Math.floor((lag / 3600) / 24);
    //页面显示
    let text = day + "天" + hour + "时" + minite + "分" + second + "秒"
};
setInterval(() => {
    updateEndTime()
}, 1000);