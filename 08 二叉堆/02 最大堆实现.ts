import MinHeap from './01 最小堆实现'

export default class MaxHeap extends MinHeap {
  constructor() {
    super()
  }
  protected compare(a: number, b: number) {
    //重新compare 方法即可
    return a < b
  }
}
