const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]
console.log(prim(graph, 0))

export function prim(graph: number[][], src: number) {
  let dist = []
  let visited = []
  let parent = []
  //比迪杰斯特拉多的一个列表 存前朔点
  const INF = Number.MAX_SAFE_INTEGER
  const length = graph.length
  //初始化
  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false
  }

  dist[src] = 0
  parent[src] = -1
  let index = 0

  //只用循环length -1 次
  while (index < length - 1) {
    visited[src] = true
    let currentEdges = graph[src]

    for (let i = 0; i < currentEdges.length; i++) {
      if (currentEdges[i] !== 0) {
        if (currentEdges[i] < dist[i]) {
          //注意和迪杰斯特拉不同 只比较边的值
          dist[i] = currentEdges[i]
          parent[i] = src
        }
      }
    }

    let minIndex = -1
    let min = INF
    for (let i = 0; i < dist.length; i++) {
      if (dist[i] < min && !visited[i]) {
        min = dist[i]
        minIndex = i
      }
    }
    src = minIndex
    index++
  }
  return parent
}
