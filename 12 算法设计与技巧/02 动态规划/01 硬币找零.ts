import { INF } from '../../models/const'

export function minCoinChange(coins: number[], amount: number) {
  let f = []
  let temp = []

  f[0] = 0

  for (let i = 1; i <= amount; i++) {
    coins.forEach((coin) => {
      if (i - coin < 0) {
        temp.push(INF)
      } else {
        temp.push(f[i - coin] + 1)
      }
    })

    let min = Math.min(...temp)

    f[i] = min

    temp = []
  }

  return f[amount] == INF ? -1 : f[amount]
}

console.log(minCoinChange([2, 5, 10, 25], 13))

// f(x)  =min {  f(x-2) + 1 , f(x -5) +1 , f(x-10) +1 ,  f (x-25) +1   }

// f(-1) = 正无穷

// f(0) = 0

//f(1) = min { f(0) +1 , 正无穷 ...} = 1

//f(2 ) =min { f(1)+1 ,正无穷... }  = 2
