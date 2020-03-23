import { createRandomArray } from '../util'

import { bubbleSort } from './01 冒泡排序'
import { selectionSort } from './02 选择排序'
import { insertionSort } from './03 插入排序'
import { shellSort } from './04 希尔排序'
import { quickSort } from './05 快速排序'
import { mergeSort } from './06 归并排序'
import { countingSort } from './07 计数排序'
import { radixSort } from './08 基数排序'

describe('排序算法测试', () => {
  test('冒泡排序测试', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(bubbleSort(arr)).toEqual(sortArr)
  })
  test('选择排序测试', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(selectionSort(arr)).toEqual(sortArr)
  })
  test('插入排序测试', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(insertionSort(arr)).toEqual(sortArr)
  })
  test('希尔排序测试', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(shellSort(arr)).toEqual(sortArr)
  })
  test('快速排序', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(quickSort(arr)).toEqual(sortArr)
  })
  test('归并排序', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(mergeSort(arr)).toEqual(sortArr)
  })
  test('计数排序', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(countingSort(arr)).toEqual(sortArr)
  })
  test('基数排序', () => {
    const arr = createRandomArray(10)
    const sortArr = Array.from(arr).sort((a, b) => a - b)
    expect(radixSort(arr)).toEqual(sortArr)
  })
})
