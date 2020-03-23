function factorialIterative(n: number) {
  if (n === 1 || n === 0) {
    //出口
    return 1
  }
  return n * factorialIterative(n - 1) //入口
}

function getFibonacci(n: number) {
  if (n < 1) return 0
  if (n < 2) return 1
  return getFibonacci(n - 1) + getFibonacci(n - 2)
}

function fibonacciMemoization() {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] != undefined) {
      return memo[n]
    }
    return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2))
  }
  return fibonacci
}
