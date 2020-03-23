export default class Deque<T> {
  private count: number
  private lowestCount: number
  private items: { [key: string]: T }

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0 //追踪第一个元素
  }

  addFront(...element: Array<T>): void {
    //该方法在双端队列前端添加新的元素。

    if (element.length === 0) return
    //如果 element 长度大于 1 就递归
    if (element.length > 1) return element.forEach((el) => this.addFront(el))

    //addFront 每次只添加一个参数
    let value = element[0]

    if (this.isEmpty()) return this.addBack(value)

    if (this.lowestCount > 0) {
      //如果队列前端被删除过
      this.items[--this.lowestCount] = value
    } else if (this.lowestCount === 0) {
      //如果队列是以0开头的
      //遍历items 依次向后挪出一个位置给新元素
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.items[0] = value
    }
    //每次添加完成 count + 1
    this.count++
  }

  addBack(...element: Array<T>) {
    //该方法在双端队列后端添加新的元素
    //实现方法和 Queue 类中的 enqueue 方法相同
    element.length === 1
      ? (this.items[this.lowestCount + this.count++] = element[0])
      : element.forEach(
          (el) => (this.items[this.lowestCount + this.count++] = el)
        )
  }
  removeFront() {
    //该方法会从双端队列前端移除第一个元素
    //实现方法和 Queue 类中 dequeue 方法相同
    if (this.isEmpty()) return undefined
    let res = this.items[this.lowestCount]
    delete this.items[this.lowestCount++]
    this.count--
    return res
  }
  removeBack() {
    //该方法会从双端队列后端移除第一个元素
    if (this.isEmpty()) return undefined
    //注意：此时尾端元素的索引 = count -1 + lowestCount
    let res = this.items[--this.count + this.lowestCount]
    delete this.items[this.count + this.lowestCount]
    return res
  }
  peekFront() {
    //该方法返回双端队列前端的第一个元素
    //实现方法和 Queue 类中的 peek方法一样
    return this.items[this.lowestCount]
  }
  peekBack() {
    // 该方法返回双端队列后端的第一个元素
    // 实现方法和 Stack 类中的 peek方法一
    return this.items[this.lowestCount + this.count - 1]
  }
  isEmpty() {
    //判断队列是否为空
    return this.count === 0
  }
  size() {
    //返回队列长度
    return this.count
  }
  clear() {
    //清空队列
    this.items = {}
    this.count = this.lowestCount = 0
  }
  toString(separator = ',') {
    //将队列toString
    return this.isEmpty()
      ? ''
      : Object.keys(this.items)
          .reduce((sum, el) => (sum = sum + separator + this.items[el]), '')
          .slice(1)
  }
}
