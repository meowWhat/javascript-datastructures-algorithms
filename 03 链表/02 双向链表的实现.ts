import LinkedList from './01 链表的实现'
import { DoublyNode } from '../models/linked-list-models'
export default class DoublyLikedList<T> extends LinkedList<T> {
  private tail: DoublyNode<T> | null //子类私有的属性
  head: DoublyNode<T> | null //重写父类head属性
  constructor() {
    super()
    this.tail = null //新增的属性指向尾部
  }
  /* 双向列表重写的方法 */

  push(element: T) {
    const node = new DoublyNode(element)
    if (this.isEmpty()) {
      this.tail = this.head = node
    } else {
      let current = this.tail
      this.tail = node
      current.next = node
      node.prev = current
    }
    this.count++
  }
  insert(element: T, index: number) {
    //重写insert方法
    if (index < 0 || index > this.count) return false
    const node = new DoublyNode(element)
    let current = this.head
    //在开头插入元素
    if (index === 0) {
      if (this.isEmpty()) {
        //链表为空
        this.head = this.tail = node
      } else {
        //链表不为空
        this.head = node
        node.next = current
        current.prev = node
      }
    } else if (index === this.count) {
      //在末尾插入元素
      current = this.tail

      this.tail = node
      node.prev = current
      current.next = node
    } else {
      //在任意节点插入
      let prev = this.getElementAt(index - 1) as DoublyNode<T>
      current = prev.next
      // 例如 1<=>2 插入 x ,需要改变四次指针得到  1<=>x<=>2
      prev.next = node
      node.prev = prev
      node.next = current
      current.prev = node
    }
    this.count++
    return true
  }
  removeAt(index: number) {
    //重新removeAt方法
    if (index < 0 || index >= this.count) return undefined
    let current = this.head
    if (index === 0) {
      //删除头部元素
      if (this.size() === 1) {
        //如果只有一个元素头尾指向空
        this.head = this.tail = null
      } else {
        this.head = current.next
        current.next.prev = null
      }
    } else if (index === this.count - 1) {
      //删除尾部
      current = this.tail
      this.tail = current.prev
      current.prev.next = null
    } else {
      //删除任意节点
      let prev = this.getElementAt(index - 1) as DoublyNode<T>
      current = prev.next
      // 例如 1<=>2<=>3 删 2 只用将1,3建立起链接 就ok了 =>1<=>3
      prev.next = current.next
      current.next.prev = prev
    }
    this.count--
    return current.element
  }
  clear() {
    super.clear()
    this.tail = null
  }
  /* 双向列表新增的方法 */
  inverseToString(separator = ',') {
    //从尾部开始遍历
    if (this.isEmpty()) return ''
    let current = this.tail
    let res = ''
    while (current !== null) {
      res = res + separator + current.element
      current = current.prev
    }
    return res.slice(1)
  }
  getTail() {
    return this.tail
  }
}
