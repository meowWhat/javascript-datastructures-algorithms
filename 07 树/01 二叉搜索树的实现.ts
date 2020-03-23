import { Node } from '../models/binary-search-tree-models'

export default class BinarySearchTree {
  protected root: Node<number>
  constructor() {
    this.root = null
  }
  /* 私有方法 */
  protected insertNode(node: Node<number>, key: number) {
    //插入操作实体函数
    if (key > node.key) {
      //在右边插入
      if (node.right === null) {
        //如果左节点为空 插入 --出口
        node.right = new Node(key)
      } else {
        //否则进入递归  --入口
        this.insertNode(node.right, key)
      }
    } else {
      //在左边插入同理
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    }
  }
  protected preOrderTraverseNode(
    node: Node<number>,
    callback: (key: number) => void
  ) {
    //先序遍历实体函数
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  protected inOrderTraverseNode(
    node: Node<number>,
    callback: (key: number) => void
  ) {
    //中序遍历实体函数
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  protected postOrderTraverseNode(
    node: Node<number>,
    callback: (key: number) => void
  ) {
    //后序遍历实体函数
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  protected getMinNode(node: Node<number>) {
    //得到最小的节点
    while (node !== null && node.left !== null) {
      node = node.left
    }
    return node
  }
  protected getMaxNode(node: Node<number>) {
    //得到最大的节点
    while (node !== null && node.right !== null) {
      node = node.right
    }
    return node
  }
  protected searchNode(node: Node<number>, key: number) {
    //根据键值查找节点 递归版
    if (node === null) return false
    if (key > node.key) return this.searchNode(node.right, key)
    if (key < node.key) return this.searchNode(node.left, key)
    return true
  }
  protected removeNode(node: Node<number>, key: number) {
    if (node === null) return null
    if (key === node.key) {
      //执行删除
      if ((node.left === node.right) === null) {
        //第一种情况 ,节点为叶子节点
        node = null
        return node
      } else if (node.left === null || node.right === null) {
        //第二种情况,节点只有一个子节点
        node = node.right || node.left
        return node
      } else {
        //第三种情况 ,节点有两个子节点
        const aux = this.getMinNode(node.right)
        node.key = aux.key
        node.right = this.removeNode(node.right, aux.key)
        return node
      }
    } else if (key > node.key) {
      //指定的key较大 传入右节点递归
      node.right = this.removeNode(node.right, key)
      return node
    } else if (key < node.key) {
      //指定的key较小 传入左节点递归
      node.left = this.removeNode(node.left, key)
      return node
    }
  }

  /* 外部方法  */
  insert(key: number) {
    //向数中插入一个新的键
    if (this.root === null) {
      //如果树为空 直接插入
      this.root = new Node(key)
    } else {
      //否则交给 插入函数去处理
      this.insertNode(this.root, key)
    }
  }
  search(key: number) {
    //在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回false
    // ----递归版本
    return this.searchNode(this.root, key)
    // ----while循环版本 帮助理解
    // let node = this.root
    // while (node !== null) {
    //   if (key > node.key) {
    //     node = node.right
    //   } else if (key < node.key) {
    //     node = node.left
    //   } else {
    //     return true
    //   }
    // }
    // return false
  }
  preOrderTraverse(callback: (key: number) => void) {
    //先序遍历
    this.preOrderTraverseNode(this.root, callback)
  }
  inOrderTraverse(callback: (key: number) => void) {
    //中序遍历
    this.inOrderTraverseNode(this.root, callback)
  }
  postOrderTraverse(callback: (key: number) => void) {
    //后序遍历
    this.postOrderTraverseNode(this.root, callback)
  }

  min() {
    //返回数中最小的键
    if (this.root === null) return null
    return this.getMinNode(this.root).key
  }
  max() {
    //返回数中最大的键
    if (this.root === null) return null
    return this.getMaxNode(this.root).key
  }
  remove(key: number) {
    //从树中移除某个键
    this.root = this.removeNode(this.root, key)
  }
}
