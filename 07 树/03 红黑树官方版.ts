import BST from './01 二叉搜索树的实现'
import {
  RED,
  BLACK,
  ReadBlackTreeNode as Node
} from '../models/red-black-tree-models'

export default class RedBlackTree extends BST {
  root: Node<number>
  constructor() {
    super()
  }
  insert(key: number) {
    //重写insert方法
    if (this.root === null) {
      this.root = new Node(key)
      this.root.color = BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      //insertNode需要返回新插入的节点以验证在插入后，红黑树的规则是否得到了满足
      this.fixTreeProperties(newNode)
    }
  }
  insertNode(node: Node<number>, key: number) {
    //和二叉搜索树相比  多了两步
    //一  保留插入节点 对于父子节点的指针
    //二  返回插入的节点
    if (key > node.key) {
      if (node.right === null) {
        node.right = new Node(key)
        node.right.parent = node
        return node.right
      } else {
        return this.insertNode(node.right, key)
      }
    } else {
      if (node.left === null) {
        node.left = new Node(key)
        node.left.parent = node
        return node.left
      } else {
        return this.insertNode(node.left, key)
      }
    }
  }
  private fixTreeProperties(node: Node<number>) {
    while (node && node.parent && node.parent.isRed() && node.color !== BLACK) {
      let parent = node.parent // 拿到 P
      const grandParent = parent.parent //拿到 G
      // 情形 A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        //P = G.left
        const uncle = grandParent.right
        // 情形 1A：叔节点也是红色——只需要重新填色
        if (uncle && uncle.color === RED) {
          grandParent.color = RED
          parent.color = BLACK
          uncle.color = BLACK
          node = grandParent
        } else {
          // 情形 2A：节点是右侧子节点——先左旋转 再右旋转
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent
          }
          // 情形 3A：节点是左侧子节点——右旋转
          this.rotationLL(grandParent)
          //P 节点 与 G节点交换颜色
          parent.color = BLACK
          grandParent.color = RED
          //循环的出口
          node = parent
        }
      } else {
        // 情形 B：父节点是右侧子节点
        const uncle = grandParent.left
        // 情形 1B：叔节点是红色——只需要重新填色
        if (uncle && uncle.color === RED) {
          grandParent.color = RED
          parent.color = BLACK
          uncle.color = BLACK
          node = grandParent
        } else {
          // 情形 2B：节点是左侧子节点——右旋转
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }
          // 情形 3B：节点是右侧子节点——左旋转
          this.rotationRR(grandParent)
          parent.color = BLACK
          grandParent.color = RED
          node = parent
        }
      }
    }

    this.root.color = BLACK
  }
  private rotationLL(node: Node<number>) {
    //右旋转代码  node 就是 G
    const tmp = node.left //  p
    node.left = tmp.right //node.left = B
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node // B.parent = G
    }
    tmp.parent = node.parent // P.parent = G.parent
    if (!node.parent) {
      // 如果没有父亲   根就是 P
      this.root = tmp
    } else {
      // G .left || G.right = p
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    // P. right = G
    tmp.right = node
    // G .parent  = P
    node.parent = tmp
  }
  private rotationRR(node: Node<number>) {
    //左旋转  node  = P
    const tmp = node.right // temp = N

    node.right = tmp.left // P.right = N .left

    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node //
    }

    tmp.parent = node.parent

    if (!node.parent) {
      this.root = tmp
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp
      } else {
        node.parent.right = tmp
      }
    }
    tmp.left = node
    node.parent = tmp
  }
}
