import { DOES_NOT_EXIST } from '../models/const'

export function interpolationSearch(arr: number[], value: number) {
  let low = 0
  let high = arr.length - 1
  let position = -1
  let delta = -1

  while (low <= high && value >= arr[low] && value <= arr[high]) {
    delta = (value - arr[low]) / (arr[high] - arr[low])

    position = low + Math.floor((high - low) * delta)

    if (arr[position] === value) {
      return position
    }
    if (arr[position] < value) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return DOES_NOT_EXIST
}

console.log(interpolationSearch([1, 6, 7, 9, 15, 27, 30, 41, 66], 30))
