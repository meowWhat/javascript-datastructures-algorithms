// Dijkstra 算法
const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]
export function Dijkstra(graph: number[][], src: number) {
  //dist 用来存储路径值(权)
  //visited  用来存储顶点是否访问
  let dist = []
  let visited = []

  const length = graph.length
  const INF = Number.MAX_SAFE_INTEGER

  //初始化dist 和 visited 列表
  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false
  }

  //选择第一个节点 进入循环
  dist[src] = 0

  let i = 0
  while (i < length - 1) {
    //此时对应节点 已经访问设置 true
    visited[src] = true
    //找到对应节点 的 对应的边集合
    let currentEdges = graph[src]
    //遍历边,更新路径
    for (let i = 0; i < currentEdges.length; i++) {
      if (currentEdges[i] !== 0) {
        //存在边 , 找到最短路径  例如
        //A=>B=>C 最短路径的权
        //为 A=>B 的权(dist[src]) +  B=>C的权(currentEdegs[i]) 和 A=>C(dist[i]) 的权 进行比较
        if (dist[src] + currentEdges[i] < dist[i]) {
          //符合上面条件 更新dist[i] 保证dist[i]是每次探路的最短路径
          dist[i] = currentEdges[i] + dist[src]
        }
      }
    }
    //迪杰斯特拉的核心算法 , 找到最短路径 重新探路.
    //选择最短路径
    let min = INF
    let minIndex = -2
    for (let i = 0; i < dist.length; i++) {
      if (!visited[i] && dist[i] < min) {
        min = dist[i]
        minIndex = i
      }
    }

    //进入下一次循环
    src = minIndex
    i++
  }
  return dist
}

export function floydWarshall(graph: number[][]) {
  const dist: number[][] = []
  const length = graph.length

  //初始化dist
  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0
      } else if (graph[i][j] == 0) {
        dist[i][j] = Number.MAX_SAFE_INTEGER
      } else {
        dist[i][j] = graph[i][j]
      }
    }
  }

  //核心操作  判断 K 是否 是 i 到 j 可能的中点
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }

  return dist
}
