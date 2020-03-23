import RBT from './03 红黑树官方版'
import RBT2 from './04 自己实现红黑树'
describe('红黑树官方测试', () => {
  const rbt = new RBT()
  for (let i = 10; i > 0; i--) {
    rbt.insert(i)
  }
  test('先序遍历', () => {
    let str = ''
    rbt.preOrderTraverse((key) => {
      str = str + ',' + key
    })
    expect(str.slice(1)).toBe('7,5,3,2,1,4,6,9,8,10')
  })
})
describe('自己的红黑树测试', () => {
  const rbt = new RBT2()
  for (let i = 10; i > 0; i--) {
    rbt.insert(i)
  }
  test('先序遍历', () => {
    let str = ''
    rbt.preOrderTraverse((key) => {
      str = str + ',' + key
    })
    expect(str.slice(1)).toBe('7,5,3,2,1,4,6,9,8,10')
  })
})
