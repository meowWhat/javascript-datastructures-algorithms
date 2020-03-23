//复杂度为被证明，猜测 为 O (N ^1.3)
export function shellSort(arr: number[]) {
  //获取增量
  let gap = Math.floor(arr.length / 2)
  while (gap >= 1) {
    //进行插入排序
    for (let i = gap; i < arr.length; i++) {
      let j = i
      let temp = arr[i]
      while (j > gap - 1 && arr[j - gap] > temp) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp
    }
    //缩小增量
    gap = Math.floor(gap / 2)
  }
  return arr
}
