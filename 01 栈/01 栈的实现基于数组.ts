//栈结构 遵循 LIFO 原则 (last in first out) 后进先出

export default class Stack<T> {
  private items: Array<T>
  constructor() {
    //栈的属性
    this.items = []
  }
  push(element: T) {
    //添加一个新元素到栈顶
    return this.items.push(element)
  }
  pop() {
    //移除栈顶的元素，同时返回被移除的元素
    return this.items.pop()
  }
  peek() {
    // 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶元素)
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    //如果栈为空的话将返回 true，否则就返回 false。
    return this.items.length == 0
  }
  size() {
    //返回栈里的元素个数
    return this.items.length
  }
  clear() {
    // clear 方法用来移除栈里所有的元素，把栈清空。
    this.items = []
  }

  toString(separator = ',') {
    //将栈结构的内容以字符串形式返回
    return this.items.join(separator).toString()
  }
}
