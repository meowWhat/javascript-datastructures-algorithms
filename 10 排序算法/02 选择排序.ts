// 交换次数 ： O(n)
// 比较次数 : O (n^2)

export function selectionSort(arr: number[]) {
  let min = 0
  for (let i = 0; i < arr.length - 1; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min) {
      ;[arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}
