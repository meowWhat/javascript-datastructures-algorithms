// 获取指定长度的斐波那契数列
let fibonacci: Array<number> = []
fibonacci[0] = 1
fibonacci[1] = 1
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

/* 数组中的插入操作 */
// 01 尾部插入
//原生
fibonacci[fibonacci.length] = 0
//方法
fibonacci.push(1)

// 02 开头插入
//原生
for (let i = fibonacci.length; i >= 0; i--) {
  fibonacci[i] = fibonacci[i - 1]
}
fibonacci[0] = 300
//方法
fibonacci.unshift(299)

/* 数组中的删除操作 */
// 01 末尾删除
//方法
fibonacci.pop()
// 02 开头删除
//原生
//思路先执行覆盖 再将所有不是undefined的值移入新数组
//执行覆盖操作
for (let i = 0; i < fibonacci.length; i++) {
  fibonacci[i] = fibonacci[i + 1]
}
//将不是undefined的值移入newArray
const newArray = []
for (let i = 0; i < fibonacci.length; i++) {
  if (fibonacci[i] !== undefined) {
    newArray.push(fibonacci[i])
  }
}
fibonacci = newArray

// 方法
fibonacci.shift()

/* 在任意位置添加或删除元素 */
//使用splice方法
//删除
fibonacci.splice(fibonacci.length - 1, 1)
//插入
fibonacci.splice(1, 0, 0)
