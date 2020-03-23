import Queue from '../02 队列/01 队列的实现'
import Stack from '../01 栈/02 栈的实现基于对象'

const WHITE = Symbol('white')
const GREY = Symbol('grey')
const BLACK = Symbol('black')

export default class Graph {
  private isDirected: boolean
  private vertices: Array<number | string>
  private adjList: Map<string | number, Array<number | string>>
  constructor(isDirected = false) {
    this.isDirected = isDirected //是否是无向图
    this.vertices = [] //存储顶点
    this.adjList = new Map() //邻接表存储变
  }

  private initializeColor() {
    const color = {}
    this.vertices.forEach((v) => {
      color[v] = WHITE
    })
    return color
  }

  private depthFirstSearchVisit(
    v: string | number,
    color: {},
    cb: (v: string | number) => void
  ) {
    const list = this.adjList.get(v)
    color[v] = BLACK
    cb(v)
    list.forEach((el) => {
      if (color[el] === WHITE) {
        this.depthFirstSearchVisit(el, color, cb)
      }
    })
  }

  addVertex(v: string | number) {
    //添加顶点
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, []) //用数组存储边
    }
  }
  addEdge(v: string | number, w: string | number) {
    //添加边
    if (this.vertices.includes(v) && this.vertices.includes(w)) {
      let vList = this.adjList.get(v)
      let wList = this.adjList.get(w)
      if (!this.isDirected) {
        //如果是无向图
        if (vList.includes(w) || wList.includes(v)) return false
        vList.push(w)
        wList.push(v)
      } else {
        //有向图
        if (vList.includes(w)) return false
        vList.push(w)
      }
      return true
    }
    return false
  }
  toString() {
    let str = ''
    this.vertices.forEach((verText) => {
      let temp = verText + '=>'
      this.adjList.get(verText).forEach((edge) => {
        temp = temp + ' ' + edge
      })
      str = str + temp + '\n'
    })
    return str
  }
  breadthFirstSearch(
    startVertex: string | number,
    callback: (v: string | number) => void
  ) {
    //广度优先搜索 BFS
    //初始化 队列 和颜色
    const queue = new Queue<string | number>()
    const color = this.initializeColor()
    queue.enqueue(startVertex)
    while (!queue.isEmpty()) {
      //当队列不为空时循环出列
      const v = queue.dequeue()
      const list = this.adjList.get(v)
      //将v设置为灰色(已经发现的)
      color[v] = GREY
      list.forEach((vertext) => {
        //遍历关联的顶点,如果顶点是白色的(未发现的),入列
        if (color[vertext] === WHITE) {
          color[vertext] = GREY
          queue.enqueue(vertext)
        }
      })
      //访问 v顶点 ,将其设为black(已探索的)
      callback(v)
      color[v] = BLACK
    }
  }
  depthFirstSearch(v: string | number, cb: (v: string | number) => void) {
    //深度优先搜索 DFS
    const color = this.initializeColor()
    this.depthFirstSearchVisit(v, color, cb)
  }
  getShortedPathByBfs(startVertex: string | number) {
    //通过广度优先搜索 得到最短路径
    let color = this.initializeColor()
    let queue = new Queue<string | number>()
    //distance 存储距离  predecessors 存储前一个节点
    let distance = {}
    let predecessors = {}
    //初始化 disance 和 predecessors
    this.vertices.forEach((el) => {
      distance[el] = 0
      predecessors[el] = null
    })
    queue.enqueue(startVertex)
    while (!queue.isEmpty()) {
      let v = queue.dequeue()
      let list = this.adjList.get(v)
      color[startVertex] = GREY
      list.forEach((el) => {
        if (color[el] === WHITE) {
          color[el] = GREY
          //比BFS多两步操作即可
          distance[el] = distance[v] + 1
          predecessors[el] = v
          queue.enqueue(el)
        }
      })
      color[v] = BLACK
    }
    //将结果返回
    return {
      distance,
      predecessors
    }
  }
  getShortedPathByBfsToString(v: string | number) {
    //将结果拼接成字符串 以下 是 path的 传入A 的 预期结果
    //distances:{A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3},
    //predecessors:{A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H:"D",I:"E"}
    let path = this.getShortedPathByBfs(v)
    let fromVertex = v
    let res = ''
    for (var i = 1; i < this.vertices.length; i++) {
      const toVertex = this.vertices[i]
      const stack = new Stack()
      for (let v = toVertex; v !== fromVertex; v = path.predecessors[v]) {
        stack.push(v)
      }
      stack.push(fromVertex)
      let temp = stack.pop()
      while (!stack.isEmpty()) {
        temp += ' - ' + stack.pop()
      }
      res = res + temp + '\n'
    }
    return res
  }
}
