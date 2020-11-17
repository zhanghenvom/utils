function time(tms) {
	let time = new Date()
	const date = new Date(tms)
	let y = date.getFullYear()
	let m = date.getMonth() + 1
	let d = date.getDate()
	let h = date.getHours()
	let s = date.getMinutes()

	let yy = time.getFullYear()
	let mm = time.getMonth() + 1
	let dd = time.getDate()
	let hh = time.getHours()
	let ss = time.getMinutes()

	let outTime;
	if (yy - y > 0) {
		outTime = yy - y + '年前'
	} else if (mm - m > 0) {
		outTime = mm - m + '月前'
	} else if (dd - d > 0) {
		if (dd - d == 1) {
			outTime = "昨天" + h + ':' + s
		} else {
			outTime = dd - d + '天前'
		}
	} else if (hh - h > 0) {
		outTime = hh - h + '小时前'
	} else {
		if (ss - s <= 10) {
			outTime = '刚刚'
		} else {
			AoutTime = ss - s + '秒前'
		}
	}
	return outTime
}