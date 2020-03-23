export function shuffle(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1)) // [0,i+1)
    ;[arr[i], arr[index]] = [arr[index], arr[i]] //swap
  }
  return arr
}
