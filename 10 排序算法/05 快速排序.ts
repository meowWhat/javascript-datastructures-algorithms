export function quickSort(arr: number[]) {
  quick(arr, 0, arr.length - 1)
  return arr
}
function quick(arr: number[], left: number, right: number) {
  if (arr.length > 1) {
    let index = partition(arr, left, right)
    //两半局部有序分开  递归排序 分而治之
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
}
function partition(arr: number[], left: number, right: number) {
  //将数组 以pivot 为标准 划分为 两半 局部有序的
  let pivot = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}
function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
// 3  6  5   7  4  1 8 2  9
