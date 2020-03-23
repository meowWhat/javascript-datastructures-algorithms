let arr = [1, 2, 3]
//颠倒
arr.reverse()
//排序
arr.sort()

//自定义排序
const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }
]

friends.sort((a, b) => a.age - b.age)

//字符串排序

let names = ['Ana', 'ana', 'john', 'John']
// console.log(names.sort()) //[A J  a j]
names.sort((a, b) => b.localeCompare(a))

console.log(names)
