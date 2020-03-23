import Queue from './01 队列的实现'
import DeQue from './02 双端队列实现'

//01 循环队列——击鼓传花游戏 ( hot potato)
export function hotPotato<T>(list: Array<T>, num: number = 3) {
  const que = new Queue<T>()
  que.enqueue(...list)
  let temp = 1
  while (que.size() > 1) {
    temp % num === 0 ? que.dequeue() : que.enqueue(que.dequeue())
    temp++
  }
  return que.dequeue()
}

//02  回文检查器

export function palindromeChecker(aString: string) {
  if (aString.length < 1) return false
  const deque = new DeQue<string>()
  //将字符串去除空格,转成数组格式入栈
  deque.addBack(
    ...aString
      .toLocaleLowerCase()
      .split(' ')
      .join('')
      .split('')
  )
  let result = true
  while (deque.size() > 1 && result) {
    //然后将队列 前端 和 后端 remove 并比较 赋值给result
    //循环的出口是 result 为 false 或 队列size <= 1
    result = deque.removeFront() === deque.removeBack()
  }
  return result
}
