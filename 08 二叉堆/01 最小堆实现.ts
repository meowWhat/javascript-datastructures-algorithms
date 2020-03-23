export default class MinHeap {
  protected heap: Array<number>
  constructor() {
    this.heap = []
  }
  /* 私有方法 */
  protected getLeftIndex(index: number) {
    //访问左子节点
    return 2 * index + 1
  }
  protected getRightIndex(index: number) {
    //访问右子节点
    return 2 * index + 2
  }
  protected getParentIndex(index: number) {
    //访问父节点
    return Math.floor((index - 1) / 2)
  }
  protected swap(arr: any[], a: number, b: number) {
    // 交换 数组两个元素的位置
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
  protected preTraverseNode(index: number, cb: (value: number) => void) {
    //先序遍历实体函数
    if (this.heap[index] !== undefined) {
      cb(this.heap[index])
      this.preTraverseNode(this.getLeftIndex(index), cb)
      this.preTraverseNode(this.getRightIndex(index), cb)
    }
  }
  protected compare(a: number, b: number) {
    //一定要做一层封装
    return a >= b
  }
  protected siftUp(index: number) {
    //将要将这个值和它的父节点进行交换，直到父节点小于这个插入的值
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compare(this.heap[parent], this.heap[index])) {
      this.swap(this.heap, index, parent)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
  protected siftDown(index: number) {
    //向下冒泡
    let left = this.getLeftIndex(index)
    let right = this.getRightIndex(index)
    if (
      this.compare(this.heap[index], this.heap[left]) &&
      this.compare(this.heap[index], this.heap[right])
    ) {
      if (!this.compare(this.heap[right], this.heap[left])) {
        this.swap(this.heap, right, index)
        this.siftDown(right)
      } else {
        this.swap(this.heap, left, index)
        this.siftDown(left)
      }
    } else if (this.compare(this.heap[index], this.heap[left])) {
      this.swap(this.heap, left, index)
      this.siftDown(left)
    } else if (this.compare(this.heap[index], this.heap[right])) {
      this.swap(this.heap, right, index)
      this.siftDown(right)
    }
  }

  /* 允许子类访问的方法 */
  insert(value: number) {
    // 这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false。
    if (!isNaN(value)) {
      this.heap.push(value)
      //进行上移操作处理
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  extract() {
    //这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
    if (this.isEmpty()) return undefined
    if (this.size() === 1) return this.heap.shift()
    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removedValue
  }
  findMinimum() {
    //这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
    return this.isEmpty() ? undefined : this.heap[0]
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  preTraverse(cb: (value: number) => void) {
    //先序遍历
    this.preTraverseNode(0, cb)
  }
}
