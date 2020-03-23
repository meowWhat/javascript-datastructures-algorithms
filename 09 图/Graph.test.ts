import Graph from './01 图的实现'

describe('图的测试', () => {
  const graph = new Graph(false)
  const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
  test('插入测试', () => {
    for (let i = 0; i < myVertices.length; i++) {
      graph.addVertex(myVertices[i])
    }
    graph.addEdge('A', 'B') //I,E,B,A,C,D,G,H,F
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')
    expect(graph.toString()).toBe(
      `A=> B C D
B=> A E F
C=> A D G
D=> A C G H
E=> B I
F=> B
G=> C D
H=> D
I=> E
`
    )
  })
  test('广度优先搜索测试', () => {
    let str = ''
    graph.breadthFirstSearch('A', (v) => {
      str = str + ',' + v
    })
    expect(str.slice(1)).toBe('A,B,C,D,E,F,G,H,I')
    str = ''
    graph.breadthFirstSearch('C', (v) => {
      str = str + ',' + v
    })
    expect(str.slice(1)).toBe('C,A,D,G,B,H,E,F,I')
  })
  test('深度优先搜索测试', () => {
    let str = ''
    graph.depthFirstSearch('A', (v) => {
      str = str + ',' + v
    })
    expect(str.slice(1)).toBe('A,B,E,I,F,C,D,G,H')
    str = ''
    graph.depthFirstSearch('I', (v) => {
      str = str + ',' + v
    })
    expect(str.slice(1)).toBe('I,E,B,A,C,D,G,H,F')
  })
  test('BFS求最短路径', () => {
    expect(graph.getShortedPathByBfsToString('A')).toBe(
      `A - B
A - C
A - D
A - B - E
A - B - F
A - C - G
A - D - H
A - B - E - I
`
    )
  })
})
