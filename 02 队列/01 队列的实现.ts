//队列 先进先出(FIFO)
export default class Queue<T> {
  private count: number
  private lowestCount: number
  private items: { [key: string]: T }
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0 //追踪第一个元素
  }

  enqueue(...element: Array<T>) {
    //向队列尾部添加一个（或多个）新的项。
    element.length === 1
      ? (this.items[this.lowestCount + this.count++] = element[0])
      : element.forEach(
          (el) => (this.items[this.lowestCount + this.count++] = el)
        )
  }
  dequeue() {
    //移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
    if (this.isEmpty()) return undefined

    let result = this.items[this.lowestCount]

    delete this.items[this.lowestCount++]

    this.count--

    return result
  }
  isEmpty() {
    //判断队列是否为空
    return this.count === 0
  }
  peek() {
    //查看队列的头元素
    return this.isEmpty() ? undefined : this.items[this.lowestCount]
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
