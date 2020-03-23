export default class Stack<T> {
  private count: number
  private items: { [key: string]: T }

  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element: T) {
    this.items[this.count++] = element
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this.items[this.count - 1]
  }

  pop() {
    if (this.isEmpty()) return undefined

    const result = this.items[--this.count]

    delete this.items[this.count]

    return result
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString(separator = ',') {
    if (this.isEmpty()) return ''
    return Object.keys(this.items)
      .reduce((sum, el) => (sum = sum + separator + this.items[el]), '')
      .slice(1)
  }
}
