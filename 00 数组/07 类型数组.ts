/* 
与 C 和 Java 等其他语言不同，JavaScript 数组不是强类型的，因此它可以存储任意类型的数据。 
类型数组则用于存储单一类型的数据。它的语法是 let myArray = new TypedArray(length)，其中 TypedArray 需替换为下表所列之一。

类型数组 数据类型
Int8Array 8 位二进制补码整数
Uint8Array 8 位无符号整数
Uint8ClampedArray 8 位无符号整数
Int16Array 16 位二进制补码整数
Uint16Array 16 位无符号整数
Int32Array 32 位二进制补码整数
Uint32Array 32 位无符号整数
Float32Array 32 位 IEEE 浮点数
Float64Array 64 位 IEEE 浮点数
 */

//example

let n = 5
let int16 = new Int16Array(n)

for (let i = 0; i < n; i++) {
  int16[i] = i + 1
}
console.log(int16)



