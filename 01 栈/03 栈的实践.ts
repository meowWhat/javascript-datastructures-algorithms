//十进制转二进制

// 6 /2 => 3  , 0
//3 /2 => 1 ,1
// 1 1 0

import Stack from './02 栈的实现基于对象'

export function decimalToBinary(decNumber: number): string {
  let stack = new Stack<number>()
  let binaryString = ''
  //进栈
  while (decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  //出栈
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

//进阶版
export function baseConverter(decNumber: number, base: number = 2): string {
  const remStack = new Stack<number>()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let baseString = ''
  if (!(base >= 2 && base <= 36)) {
    return ''
  }
  //进栈
  while (decNumber > 0) {
    remStack.push(decNumber % base)
    decNumber = Math.floor(decNumber / base)
  }
  //出栈
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
