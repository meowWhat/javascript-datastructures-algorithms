export function countingSort(arr: number[]) {
  let count = [] //计数
  let result = [] //结果
  arr.forEach((el) => {
    //将每个数字 以索引 存入 count中
    if (!count[el]) {
      count[el] = 0
    }
    count[el]++
  })

  count.forEach((el, i) => {
    //将count 取出
    if (el && el > 0) {
      for (let j = 0; j < el; j++) {
        result.push(i)
      }
    }
  })

  return result
}
