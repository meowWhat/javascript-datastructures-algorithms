export class Node<T> {
  public element: T
  public next: Node<T> | null
  constructor(element: T) {
    this.element = element
    this.next = null
  }
}

export class DoublyNode<T> extends Node<T> {
  public prev: DoublyNode<T>
  public next: DoublyNode<T> | null
  constructor(element: T) {
    super(element)
    this.prev = null
  }
}
