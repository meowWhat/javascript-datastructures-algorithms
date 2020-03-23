export function mergeSort(arr: number[]) {
  //分而治之
  //先分
  if (arr.length > 1) {
    //将数组 分成两半 递归进行 直到 数组长度 小于等于 1
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle, arr.length))
    //然后 合并排序
    arr = merge(left, right)
  }
  //将结果返回
  return arr
}

function merge(left: number[], right: number[]) {
  //将左右两个数组 合并 排序
  //i 指向 左数组   j 指向右数组
  let i = 0
  let j = 0
  //将结果有序的push 进 result 中
  let result = []

  while (i < left.length && j < right.length) {
    //排序
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  //合并 =>将 左右 数组 剩余的部分 concat
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
