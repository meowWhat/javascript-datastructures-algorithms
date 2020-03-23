// 01 堆排序初体验
import MaxHeap from './02 最大堆实现'
import MinHeap from './01 最小堆实现'
export function firstHeapSort(arr: Array<number>, options: number = 1) {
  let res = []
  //创建一个堆
  let Heap = new MinHeap()
  if (options === -1) {
    Heap = new MaxHeap()
  }
  //将数组插到堆里
  arr.forEach((el) => Heap.insert(el))

  //每次取出最值 push进去即可
  for (let i = 0, j = Heap.size(); i < j; i++) {
    res.push(Heap.extract())
  }
  return res
}
