export function defaultEquals(a: unknown, b: unknown) {
  return a === b
}
export function createRandomArray(size: number) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(Math.round(Math.random() * 50))
  }
  return array
}
