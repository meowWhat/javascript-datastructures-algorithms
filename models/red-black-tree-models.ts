import { Node } from './binary-search-tree-models'

//定义表示颜色的常量
export const RED = Symbol('color-red')
export const BLACK = Symbol('color-black')

export class ReadBlackTreeNode<T> extends Node<T> {
  //重新声明属性的类型
  public color: symbol
  public parent: ReadBlackTreeNode<T>
  public left: ReadBlackTreeNode<T>
  public right: ReadBlackTreeNode<T>
  constructor(key: T) {
    super(key)
    //对红黑树来说 节点需要额外的属性 color 和指向父节点的引用 parent
    this.parent = null
    this.color = RED
  }
  isRed() {
    return this.color === RED
  }
}
