import LinkedList from './01 链表的实现'
import DoublyLinkedList from './02 双向链表的实现'
describe('LinkedList test ', () => {
  const link = new LinkedList<number>()
  test('push method test', () => {
    expect(link.size()).toBe(0)
    expect(link.isEmpty()).toBe(true)
    expect(link.toString('*')).toBe('')
    for (let i = 0; i < 5; i++) {
      link.push(i)
    }
    expect(link.toString('*')).toBe('0*1*2*3*4')
    expect(link.size()).toBe(5)
    expect(link.isEmpty()).toBe(false)
  })
  test('getElementAt method test', () => {
    expect(link.getElementAt(0).element).toBe(0)
    expect(link.getElementAt(1).element).toBe(1)
    expect(link.getElementAt(1).next.element).toBe(2)
  })
  test('removeAt method test', () => {
    expect(link.removeAt(4)).toBe(4)
    expect(link.removeAt(2)).toBe(2)
    expect(link.removeAt(0)).toBe(0)
    expect(link.toString()).toBe('1,3')
    expect(link.size()).toBe(2)
  })
  test('insert method test', () => {
    expect(link.insert(50, 0))
    expect(link.insert(60, 2))
    expect(link.insert(70, 4))
    expect(link.toString()).toBe('50,1,60,3,70')
    expect(link.size()).toBe(5)
  })
  test('indexOf method test', () => {
    expect(link.indexOf(50)).toBe(0)
    expect(link.indexOf(60)).toBe(2)
    expect(link.indexOf(70)).toBe(4)
    expect(link.indexOf(80)).toBe(-1)
  })
  test('remove method test', () => {
    expect(link.remove(50)).toBe(50)
    expect(link.remove(60)).toBe(60)
    expect(link.remove(70)).toBe(70)
    expect(link.remove(40)).toBe(null)
    expect(link.toString()).toBe('1,3')
  })
  test('clear method test', () => {
    link.clear()
    expect(link.toString()).toBe('')
    expect(link.size()).toBe(0)
    expect(link.isEmpty()).toBe(true)
    expect(link.getHead()).toBe(null)
  })
})
describe('DoublyLinkedList test', () => {
  const link = new DoublyLinkedList<number>()
  test('insert method test ', () => {
    link.insert(10, 0)
    link.insert(20, 0)
    link.insert(30, 2)
    link.insert(40, 2)
    link.insert(50, 2)
    expect(link.inverseToString()).toBe('30,40,50,10,20')
    expect(link.toString()).toBe('20,10,50,40,30')
  })
  test('removeAt && remove  method test ', () => {
    link.removeAt(0)
    link.removeAt(2)
    link.removeAt(link.size() - 1)
    expect(link.removeAt(8)).toBe(undefined)
    expect(link.toString()).toBe('10,50')
    expect(link.remove(20)).toBe(null)
    expect(link.remove(10)).toBe(10)
    expect(link.remove(50)).toBe(50)
    expect(link.inverseToString()).toBe('')
  })
  test('push method test', () => {
    expect(link.isEmpty()).toBe(true)
    link.push(10)
    link.push(20)
    link.push(30)
    expect(link.toString()).toBe('10,20,30')
    expect(link.inverseToString()).toBe('30,20,10')
    expect(link.isEmpty()).toBe(false)
    expect(link.size()).toBe(3)
  })
  test('clear method test', () => {
    link.clear()
    expect(link.toString()).toBe('')
    expect(link.inverseToString()).toBe('')
    expect(link.size()).toBe(0)
    expect(link.isEmpty()).toBe(true)
    expect(link.getHead()).toBe(null)
    expect(link.getTail()).toBe(null)
  })
})
