//复杂度 O(n^2)

export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    let temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
