import { DOES_NOT_EXIST } from '../models/const'

export function binarySearch(arr: number[], value: number) {
  //二分查找
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = arr[mid]
    if (element === value) {
      return mid
    }
    if (value > element) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return DOES_NOT_EXIST
}
