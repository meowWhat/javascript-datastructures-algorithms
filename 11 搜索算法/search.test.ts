import { createRandomArray } from '../util'
import { sequentialSearch } from './01 顺序搜索'
import { binarySearch } from './02 二分搜索'
import { quickSort } from '../10 排序算法/05 快速排序'

describe('搜索算法测试', () => {
  test('顺序搜索测试', () => {
    const arr = createRandomArray(10)
    for (let i = 0; i < arr.length; i++) {
      expect(sequentialSearch(arr, arr[i])).toBe(i)
    }
    expect(sequentialSearch(arr, null)).toBe(-1)
  })
  test('二分搜索测试', () => {
    const arr = createRandomArray(10)
    let sortedArray = quickSort(arr)
    expect(binarySearch(sortedArray, sortedArray[3])).toBe(3)
  })
})
