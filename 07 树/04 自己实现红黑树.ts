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
      //只有情况三 情况四 情况五 进入循环
      let parent = node.parent // 拿到 P
      const grandParent = parent.parent //拿到 G
      //  P 在 G 的左边
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right //拿到 U
        if (uncle && uncle.color === RED) {
          // 情况 三   => P 与 U 都是红色 => 变色
          grandParent.color = RED
          parent.color = BLACK
          uncle.color = BLACK
          //循环的出口
          node = grandParent
        } else {
          if (node === parent.right) {
            //情况五  => N 在 P的右侧  => 先左旋转
            this.rotationRR(parent)
            // 再将整个节点当作 新插入节点 的 走 右旋转
            node = parent
            parent = node.parent
          }
          //情况四 => N 在 P的左侧 =>右旋转
          this.rotationLL(grandParent)
          //P 节点 与 G节点交换颜色
          parent.color = BLACK
          grandParent.color = RED
          //循环的出口
          node = parent
        }
      } else {
        // P 在 G 的右边 与上面同理
        const uncle = grandParent.left
        if (uncle && uncle.color === RED) {
          grandParent.color = RED
          parent.color = BLACK
          uncle.color = BLACK
          node = grandParent
        } else {
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent
          }
          this.rotationRR(grandParent)
          parent.color = BLACK
          grandParent.color = RED
          node = parent
        }
      }
    }
    //始终保持 root 颜色为黑色
    this.root.color = BLACK
  }
  private rotationLL(node: Node<number>) {
    //向右旋转 , 这里的代码结合 右旋转的图来看
    let G = node //传进来的是新节点的祖父节点
    let P = node.left //找到新节点的父节点
    //第一步 :建立 G 与 B 的联系
    G.left = P.right
    if (P.right !== null) {
      P.right.parent = G
    }
    //第二步 ：将 P 和 G 置换
    P.parent = G.parent
    if (!G.parent) {
      //如果G 没有父亲
      this.root = P
    } else {
      if ((G.parent.left = G)) {
        G.parent.left = P
      } else {
        G.parent.right = P
      }
    }
    //第三步 : 建立 P 与 G 的联系
    P.right = G
    G.parent = P
  }
  private rotationRR(node: Node<number>) {
    //左旋转 ,与右旋转相反,你可以自己画个图来读
    const G = node
    const P = node.right
    //第一步 建立G 与B 的链接
    G.right = P.left
    if (P.left !== null) {
      P.left.parent = G
    }
    //第二步 置换 P 与 G
    P.parent = G.parent
    if (!G.parent) {
      //如果G 没有父亲
      this.root = P
    } else {
      if ((G.parent.left = G)) {
        G.parent.left = P
      } else {
        G.parent.right = P
      }
    }
    //第三步 建立 P 与 G 的连接
    P.left = G
    G.parent = P
  }
}
