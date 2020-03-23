const find = (i: number, parent: number[]) => {
  //查找 i元素的父节点 ,如果没有 返回 i
  while (parent[i] !== -1) {
    i = parent[i]
  }
  return i
}

const union = (i: number, j: number, parent: number[]) => {
  if (i !== j) {
    //父节点不相同 不是环  合并 否则是环 返回false
    parent[j] = i
    return true
  }
  return false
}

const getEdges = (graph: number[][]) => {
  //将图的所有边取出
  const length = graph.length
  //用两个数组来表示
  let edges: number[] = [] //存边的权
  let vertices: number[][] = [] // 存顶点
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (graph[i][j] !== 0) {
        graph[j][i] = 0 //防止重复取边
        vertices.push([i, j]) //存取边的顶点
        edges.push(graph[i][j]) //存取边的权
      }
    }
  }
  return {
    edges,
    vertices
  }
}

const sortEdges = (edges: number[] = [], vertices: number[][] = []) => {
  //冒泡排序  将所有的边从小到大排列
  for (let i = 0; i < edges.length - 1; i++) {
    for (let j = 0; j < edges.length - i - 1; j++) {
      if (edges[j] > edges[j + 1]) {
        ;[edges[j], edges[j + 1]] = [edges[j + 1], edges[j]]
        ;[vertices[j], vertices[j + 1]] = [vertices[j + 1], vertices[j]]
      }
    }
  }
  return {
    edges,
    vertices
  }
}

const kruskal = (graph: number[][]) => {
  //克鲁斯卡尔 算法
  //第一步  将图的 所有边 取出
  let initEdeges = getEdges(graph)

  //第二步  将所有的边 按权值 排序 由小到大

  let { vertices } = sortEdges(initEdeges.edges, initEdeges.vertices)

  //第三步 初始化变量
  let res = []
  let parent = [] //存储并查集
  let k = 0 //每次取一条边  K递增
  for (let i = 0; i < graph.length; i++) {
    parent[i] = -1
  }
  // 第四步   取出边 插入图中,
  // 直到插入 n-1条边 n代表 顶点的个数
  while (res.length < graph.length - 1) {
    let v = vertices[k]

    //注意 要避免产生环  采用 并查集的方式 判断是否生成了环

    const i = find(v[0], parent)
    const j = find(v[1], parent)

    if (union(i, j, parent)) {
      //如果不是环 存入res中
      res.push(v)
    }

    k++
  }
  return res
}

const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]
console.log(kruskal(graph))
