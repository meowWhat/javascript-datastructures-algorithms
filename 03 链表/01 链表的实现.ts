import { Node } from '../models/linked-list-models'
import { defaultEquals } from '../util'

export default class LinkedList<T> {
  //使用protected修饰符因为还有子类需要使用这些属性
  protected count: number
  protected head: Node<T> | null
  protected equalsFn: typeof defaultEquals
  constructor() {
    this.count = 0
    this.head = null
    this.equalsFn = defaultEquals
  }

  push(element: T) {
    //向链表尾部添加一个新元素
    const node = new Node(element)
    //如果列表为空 直接添加
    if (this.head === null) {
      this.head = node
    } else {
      //否则 找到链表最后一个节点 添加
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  insert(element: T, index: number) {
    //向链表的特定位置插入一个新元素
    if (index < 0 || index > this.count) return false
    let current = this.head
    const node = new Node(element)
    if (index === 0) {
      this.head = node
      node.next = current
    } else {
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
    return true
  }

  getElementAt(index: number) {
    //返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined
    if (index < 0 || index >= this.count) return undefined
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  indexOf(element: T) {
    //返回元素在链表中的索引,如果链表中没有该元素则返回-1。
    let current = this.head
    let res = 0
    let temp = false
    while (current !== null) {
      if (this.equalsFn(current.element, element)) {
        temp = true
        break
      }
      current = current.next
      res++
    }
    return temp ? res : -1
  }

  removeAt(index: number) {
    //从链表的特定位置移除一个元素。
    if (index < 0 || index >= this.count) return undefined
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
      let preivous = this.getElementAt(index - 1)
      current = preivous.next
      preivous.next = current.next
    }
    this.count--
    return current.element
  }

  remove(element: T) {
    //从链表中移除一个元素
    let index = this.indexOf(element)
    return index === -1 ? null : this.removeAt(index)
  }

  isEmpty() {
    //如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
    return this.count === 0
  }

  size() {
    //返回链表包含的元素个数，与数组的 length 属性类似。
    return this.count
  }

  toString(separator = ',') {
    //返回表示整个链表的字符串。
    let res = ''
    let current = this.head
    while (current !== null) {
      res = res + separator + current.element
      current = current.next
    }

    return res.slice(1)
  }

  getHead() {
    return this.head
  }

  clear() {
    this.head = null
    this.count = 0
  }
}
