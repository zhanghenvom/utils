
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

/**
 * @description: 分页函数
 * @param 数组/每页条数/当前页数
 * @return Array,空=>无数据
 */
let methdos = (array, page, number) => {
    return array.filter((e, i, a) => page * (number - 1) <= i && i < page * number)
}

// console.log(methdos([...array], 5, 1));   