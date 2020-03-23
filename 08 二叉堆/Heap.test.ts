import MinHeap from './01 最小堆实现'
import MaxHeap from './02 最大堆实现'
import { firstHeapSort } from './03 堆排序算法'
describe('最小堆测试', () => {
  const minHeap = new MinHeap()
  minHeap.insert(2)
  minHeap.insert(1)
  minHeap.insert(5)
  minHeap.insert(4)
  minHeap.insert(6)
  minHeap.insert(3)
  minHeap.insert(0)
  minHeap.insert(2)
  test('insert测试', () => {
    let str = ''
    minHeap.preTraverse((value) => {
      str = str + ',' + value
    })
    expect(str.slice(1)).toBe('0,2,2,4,6,1,5,3')
  })
  test('取最值测试测试', () => {
    expect(minHeap.findMinimum()).toBe(0)
    expect(minHeap.size()).toBe(8)
  })
  test('extract方法测试', () => {
    expect(minHeap.extract()).toBe(0)
    let str = ''
    minHeap.preTraverse((value) => {
      str = str + ',' + value
    })
    expect(str.slice(1)).toBe('1,2,2,6,3,5,4')
    expect(minHeap.findMinimum()).toBe(1)
    expect(minHeap.size()).toBe(7)
  })
})
describe('最大堆测试', () => {
  const maxHeap = new MaxHeap()
  maxHeap.insert(2)
  maxHeap.insert(1)
  maxHeap.insert(5)
  maxHeap.insert(4)
  maxHeap.insert(6)
  maxHeap.insert(3)
  maxHeap.insert(0)
  maxHeap.insert(2)
  test('insert测试', () => {
    let str = ''
    maxHeap.preTraverse((value) => {
      str = str + ',' + value
    })
    expect(str.slice(1)).toBe('6,5,2,1,4,3,2,0')
  })
  test('取最值测试测试', () => {
    expect(maxHeap.findMinimum()).toBe(6)
    expect(maxHeap.size()).toBe(8)
  })
  test('extract方法测试', () => {
    expect(maxHeap.extract()).toBe(6)
    let str = ''
    maxHeap.preTraverse((value) => {
      str = str + ',' + value
    })
    expect(str.slice(1)).toBe('5,4,2,1,3,2,0')
    expect(maxHeap.findMinimum()).toBe(5)
    expect(maxHeap.size()).toBe(7)
  })
})
describe('堆排序算法测试', () => {
  let arr = [3, 5, 1, 6, 4, 7, 2]
  expect(firstHeapSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(firstHeapSort(arr, -1)).toEqual([7, 6, 5, 4, 3, 2, 1])
})
