import Stack from './01 栈的实现基于数组'
import Stack1 from './02 栈的实现基于对象'

import { decimalToBinary, baseConverter } from './03 栈的实践'

describe('测试基于数组的栈结构', () => {
  test('stack测试', () => {
    const stack = new Stack<number>()

    //测试size 和 isEmpty
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)

    //压入 5,8
    stack.push(5)
    stack.push(8)

    //测试size 和 isEmpty
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(2)

    //压入 11
    stack.push(11)
    //移除 11
    expect(stack.pop()).toBe(11)
    // 测试toString
    expect(stack.toString()).toBe('5,8')
  })
})

describe('测试基于对象的栈结构', () => {
  test('基本测试', () => {
    const stack = new Stack1<number>()

    //测试size 和 isEmpty
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)

    //压入 5,8
    stack.push(5)
    stack.push(8)

    //测试size 和 isEmpty
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(2)

    //压入 11
    stack.push(11)
    //移除 11
    expect(stack.pop()).toBe(11)
    // 测试toString
    expect(stack.toString()).toBe('5,8')
  })
  test('十进制转二进制测试', () => {
    expect(decimalToBinary(5)).toBe('101')
    expect(decimalToBinary(30)).toBe('11110')
    expect(decimalToBinary(50)).toBe('110010')
    expect(decimalToBinary(99)).toBe('1100011')
  })
  test('任意进制转换测试', () => {
    expect(baseConverter(30)).toBe('11110')
    expect(baseConverter(50)).toBe('110010')
    expect(baseConverter(30, 8)).toBe('36')
    expect(baseConverter(50, 16)).toBe('32')
    expect(baseConverter(50, 36)).toBe('1E')
    expect(baseConverter(100, 36)).toBe('2S')
    expect(baseConverter(10, 26)).toBe('A')
    expect(baseConverter(100, 24)).toBe('44')
  })
})
