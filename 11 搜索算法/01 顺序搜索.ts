import { DOES_NOT_EXIST } from '../models/const'

export function sequentialSearch<T>(arr: T[], value: T) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return DOES_NOT_EXIST
}
