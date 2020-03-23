export class Node<T> {
  public left: Node<T>
  public right: Node<T>
  public key: T
  constructor(key: T) {
    this.left = null
    this.right = null
    this.key = key
  }
}
