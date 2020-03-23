/* 
concat 连接 2 个或更多数组，并返回结果
every 对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true
filter 对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组
forEach 对数组中的每个元素运行给定函数。这个方法没有返回值
join 将所有的数组元素连接成一个字符串
indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
map 对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组
reverse 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在
的第一个
slice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
some 对数组中的每个元素运行给定函数，如果任一元素返回 true，则返回 true
sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
toString 将数组作为字符串返回
valueOf 和 toString 类似，将数组作为字符串返回
 */

/* 数组合并 */
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
let numbers = negativeNumbers.concat(zero, positiveNumbers)

/* 迭代器函数 */
const isEven = (x) => x % 2 === 0

// 01 every方法

console.log(numbers.every(isEven))

// 02 some方法

console.log(numbers.some(isEven))

// 03 forEach

// numbers.forEach((el) => console.log(el))

// 04 map

const myMap = numbers.map((el) => el * 2)

// 05 filter

const myFilter = numbers.filter(isEven)

// 06 reduce

const myReduce = numbers.reduce((sum, el) => (sum = sum + el), 0)

/* es2015 和 es2016 新增的数组方法
@@iterator 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
copyWithin 复制数组中一系列元素到同一数组指定的起始位置
entries 返回包含数组所有键值对的@@iterator
includes 如果数组中存在某个元素则返回 true，否则返回 false。E2016 新增
find 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
findIndex 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引
fill 用静态值填充数组
from 根据已有数组创建一个新数组
keys 返回包含数组所有索引的@@iterator
of 根据传入的参数创建一个新数组
values 返回包含数组中所有值的@@iterator
*/

/*    使用 @@iterator对象迭代  */

/* 
let iterator = numbers[Symbol.iterator]()

console.log(iterator.next().value)

for (const n of iterator) {
  console.log(n)
}
*/

/* 中得到迭代器的方法 */

// 01 使用entries =>得到键值对的迭代器

/* let aEntries = numbers.entries()

console.log(aEntries.next().value)

for (const n of aEntries) {
  console.log(n)
}
 */

// 02 keys =>返回包含数组索引的@@iterator

/* const aKeys = numbers.keys()

console.log(aKeys.next()) */

// 03 values => 返回包含数组值得 @@iterator

/* 
const aValues = numbers.values()

console.log(aValues.next())

for (const n of aValues) {
  console.log(n)
}
 */

/*  数组克隆方式  */

// 01 Array.from方法
let numbers2 = Array.from(numbers, (el) => el * 3)

// 02 Array.of方法
let tests = Array.of('4', '5', '6')
let numbers3 = Array.of(...numbers2)

/* 数组的其他方法 */

// 01 fill (target,start,end)

numbers3.fill(5, 2, 4)

// 02 copyWithin  (target,start,end)

numbers3.copyWithin(0, 2, 4)
