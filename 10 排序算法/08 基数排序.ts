export function radixSort(arr: number[]) {
  if (arr.length < 2) {
    return arr
  }
  //找到最大值
  let max = -Infinity
  arr.forEach((el) => (el > max ? (max = el) : null))
  //求他的位数
  let digit = (max + '').length
  //循环计数排序
  let count = []
  for (let i = 0; i < digit; i++) {
    //按 个位排序, 十位排序 ,百位排序 ....
    arr.forEach((el) => {
      let str = el + ''
      let temp = +str[str.length - 1 - i]
      if (isNaN(temp)) {
        temp = 0
      }
      if (Array.isArray(count[temp])) {
        count[temp].push(el)
      } else {
        count[temp] = [el]
      }
    })
    arr = []
    count.forEach((el) => {
      if (Array.isArray(el)) {
        el.forEach((e) => {
          arr.push(e)
        })
      }
    })
    count = []
  }
  return arr
}
