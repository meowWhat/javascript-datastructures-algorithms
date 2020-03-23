/* 二维数组的迭代 */
let arrs = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10]
]

for (let i = 0; i < arrs.length; i++) {
  for (let j = 0; j < arrs[i].length; j++) {
    console.log(arrs[i][j])
  }
}
console.table(arrs)

/* 多维数组 */

let many = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ],
  [
    [9, 10],
    [11, 12]
  ]
]
for (let i = 0; i < many.length; i++) {
  for (let j = 0; j < many[i].length; j++) {
    for (let k = 0; k < many[i][j].length; k++) {
      console.log(many[i][j][k])
    }
  }
}
