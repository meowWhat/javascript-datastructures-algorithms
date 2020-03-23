import mySet from './01 集合的实现'
import {
  getUnion,
  getIntersection,
  getDifference,
  isSubsetOf
} from './02 ES2015 Set 类'
describe('集合的测试', () => {
  const set = new mySet<number>()
  const otherSet = new mySet<number>()
  test('方法测试', () => {
    expect(set.add(20)).toBe(true)
    set.add(30)
    set.add(50)
    expect(set.add(20)).toBe(false)
    expect(set.size()).toBe(3)
    expect(set.values()).toEqual([20, 30, 50])
    set.delete(30)
    expect(set.values()).toEqual([20, 50])
    set.clear()
    expect(set.values()).toEqual([])
    expect(set.size()).toBe(0)
  })
  test('求并集测试', () => {
    set.add(30)
    set.add(50)
    otherSet.add(50)
    otherSet.add(200)
    let newSet = set.getUnion(otherSet)
    expect(newSet.values()).toEqual([30, 50, 200])
  })
  test('求交集测试', () => {
    set.clear()
    otherSet.clear()
    set.add(0)
    set.add(1)
    set.add(2)
    set.add(3)
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)

    let intersection = set.getIntersection(otherSet)
    expect(intersection.values()).toEqual([2, 3])
    otherSet.clear()
    intersection = set.getIntersection(otherSet)
    expect(intersection.values()).toEqual([])
  })
  test('求差集测试', () => {
    set.clear()
    otherSet.clear()
    set.add(0)
    set.add(1)
    set.add(2)
    set.add(3)
    otherSet.add(2)
    otherSet.add(3)
    otherSet.add(4)
    expect(set.getDifference(otherSet).values()).toEqual([0, 1])
    otherSet.delete(3)
    expect(set.getDifference(otherSet).values()).toEqual([0, 1, 3])
  })
  test('求子集测试', () => {
    set.clear()
    otherSet.clear()
    set.add(0)
    set.add(1)
    set.add(2)
    set.add(3)
    otherSet.add(2)
    otherSet.add(3)
    expect(set.isSubsetOf(otherSet)).toBe(false)
    expect(otherSet.isSubsetOf(set)).toBe(true)
  })
})

describe('02 ES2015 Set 类测试', () => {
  const setA = new Set([1, 2, 3])
  const setB = new Set([2, 3, 4])
  test('求并集测试', () => {
    expect(getUnion(setA, setB)).toEqual(new Set([1, 2, 3, 4]))
  })
  test('求交集测试', () => {
    expect(getIntersection(setA, setB)).toEqual(new Set([2, 3]))
  })
  test('求差集测试', () => {
    expect(getDifference(setA, setB)).toEqual(new Set([1]))
  })
  test('求子集测试', () => {
    expect(isSubsetOf(setA, setB)).toBe(false)
    setA.delete(1)
    expect(isSubsetOf(setA, setB)).toBe(true)
  })
})
