export function getUnion<T>(setA: Set<T>, setB: Set<T>) {
  return new Set([...setA, ...setB])
}

export function getIntersection<T>(setA: Set<T>, setB: Set<T>) {
  let smallerSet = setA
  let biggerSet = setB
  if (smallerSet.size > biggerSet.size) {
    ;[smallerSet, biggerSet] = [biggerSet, smallerSet]
  }
  return new Set([...smallerSet].filter((el) => biggerSet.has(el)))
}

export function getDifference<T>(setA: Set<T>, setB: Set<T>) {
  return new Set([...setA].filter((el) => !setB.has(el)))
}

export function isSubsetOf<T>(setA: Set<T>, setB: Set<T>) {
  if (setA.size > setB.size) return false
  //注意 set提供的foreach 是无法 break的 为了优化采用迭代器迭代
  let iteratorResult: IteratorResult<T, any> = { value: null, done: false }
  let values = setA.values()
  let res = true
  while (!iteratorResult.done) {
    iteratorResult = values.next()
    if (iteratorResult.value && !setB.has(iteratorResult.value)) {
      res = false
      break
    }
  }
  return res
}
