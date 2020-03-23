function binarySearchRecursive(arr: number[], value: number, left, right) {
  if (left > right) {
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  let element = arr[mid]
  if (element === value) {
    return mid
  }
  if (value > element) {
    return binarySearchRecursive(arr, value, mid + 1, right)
  } else {
    return binarySearchRecursive(arr, value, left, mid)
  }
}
export function binarySearch(arr: number[], value: number) {
  let res = binarySearchRecursive(arr, value, 0, arr.length - 1)
  return res
}
