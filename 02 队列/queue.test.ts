import Queue from './01 队列的实现'
import DeQue from './02 双端队列实现'
import { hotPotato, palindromeChecker } from './03 队列的实践'

describe('基本队列的测试', () => {
  test('结构体测试', () => {
    const que = new Queue<string>()
    //测试peek size isEmpty
    expect(que.peek()).toBe(undefined)
    expect(que.size()).toBe(0)
    expect(que.isEmpty()).toBe(true)

    //添加队列元素
    que.enqueue('John', 'Jack', 'Camila')

    //测试peek size isEmpty
    expect(que.size()).toBe(3)
    expect(que.isEmpty()).toBe(false)
    expect(que.peek()).toBe('John')

    //出列两个元素
    expect(que.dequeue()).toBe('John')
    expect(que.dequeue()).toBe('Jack')

    //测试peek size  toString
    expect(que.peek()).toBe('Camila')
    expect(que.size()).toBe(1)
    expect(que.toString()).toBe('Camila')

    que.enqueue('hh')
    expect(que.toString()).toBe('Camila,hh')

    expect(que.dequeue()).toBe('Camila')
    que.enqueue('waw')
    expect(que.toString()).toBe('hh,waw')
  })
  test('击鼓传花测试', () => {
    let arr = ['张三', '李四', '王五', '赵六', '韩七']
    expect(hotPotato(arr, 2)).toBe('王五')
    expect(hotPotato(arr, 3)).toBe('赵六')
    expect(hotPotato(arr, 1)).toBe('韩七')
    let arr1 = ['张三', '李四', '王五', '赵六']
    expect(hotPotato(arr1, 2)).toBe('张三')
  })
})

describe('双端队列的测试', () => {
  test('结构体测试', () => {
    const que = new DeQue<string>()
    //测试peek size isEmpty
    expect(que.peekFront()).toBe(undefined)
    expect(que.peekBack()).toBe(undefined)
    expect(que.size()).toBe(0)
    expect(que.isEmpty()).toBe(true)

    //添加队列元素
    que.addBack('John', 'Jack', 'Camila')

    //测试peek size isEmpty
    expect(que.peekFront()).toBe('John')
    expect(que.peekBack()).toBe('Camila')
    expect(que.size()).toBe(3)
    expect(que.isEmpty()).toBe(false)

    //出列两个元素
    expect(que.removeBack()).toBe('Camila')
    expect(que.removeFront()).toBe('John')

    //测试peek size isEmpty
    expect(que.size()).toBe(1)
    expect(que.peekFront()).toBe('Jack')
    expect(que.peekBack()).toBe('Jack')

    //添加队列前端多个
    expect(que.addFront('John', 'Camila'))
    expect(que.toString('*')).toBe('Camila*John*Jack')

    //添加队列前端 单个
    que.addFront('20')
    expect(que.peekFront()).toBe('20')
  })
  test('回文检查器', () => {
    expect(palindromeChecker('level')).toBe(true)
    expect(palindromeChecker('kayak')).toBe(true)
    expect(palindromeChecker('Was it a car or a cat I  saw')).toBe(true)
    expect(palindromeChecker('Step on no pets')).toBe(true)
    expect(palindromeChecker('')).toBe(false)
    expect(palindromeChecker('queue')).toBe(false)
  })
})
