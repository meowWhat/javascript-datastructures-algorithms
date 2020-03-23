function lcs(wordX: string, wordY: string) {
  let f = []
  //初始化 f
  for (let j = 0; j <= wordX.length; j++) {
    f[j] = []
    f[j][0] = { value: 0, prev: null, x: j }
  }
  for (let i = 1; i <= wordY.length; i++) {
    f[0][i] = { value: 0, prev: null, x: 0 }
  }
  //循环计算
  for (let i = 1; i <= wordX.length; i++) {
    for (let j = 1; j <= wordY.length; j++) {
      if (wordX[i - 1] === wordY[j - 1]) {
        f[i][j] = {
          value: f[i - 1][j - 1].value + 1,
          prev: f[i - 1][j - 1],
          x: i
        }
      } else {
        if (f[i - 1][j].value > f[i][j - 1].value) {
          f[i][j] = f[i - 1][j]
        } else {
          f[i][j] = f[i][j - 1]
        }
      }
    }
  }

  return f[wordX.length][wordY.length]
}

function lcsToString(
  obj: { value: number; prev: typeof obj; x: number },
  str1: string
) {
  let current = obj
  let temp = []
  let res = ''
  while (current.prev !== undefined) {
    if (current.value === 0) {
      break
    }
    temp.push(current.x)
    current = current.prev
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    res = res + str1[temp[i] - 1]
  }
  return res
}

console.log(lcsToString(lcs('abcadfk', 'acbaedk'), 'abcadfk'))

//[a,c,b,a,e,d]
//[a,b,c,a,d,f]
//answer a c a d
// f(x) =  { f(x-0)+a ,f(x-1) +c,}

//  xm = yn => zk = xm = yn  //  且 Zk-1 是 Xm-1 和 Yn-1 的一个LCS

//  xm != yn && zk !=xm !=yn // 则 Z 是 Xm-1 和 Yn-1 的一个LCS

//  xm != yn  &&  zk != xm // 则 Z是 Xm-1和 Y 的一个LCS

// xm != yn   &&  zk != yn // 则Z是X和Yn-1的一个LCS

/* 

  c[i,j]  = { 
     0                    i = y = 0   ,   

   c[i-1,j-1] +1          xi=yi  ,

   max(
    c[i,j-1] ,c[i-1,j] 
     )                     xi!=yi

} 

*/
// x[A,C,B,A,E,D ]
// y[A,B,C,A,D,F ]

// c[0,0] = 0   ..c[0,n] = 0

// c[1,0] = 0   ..c[1,1] = 1 ,  c[1,2] =  1 C[1,3] =1 ,C[1,4]
// c[2,0] = 0    c[2,1] = 1    c[2,2] = 1  c[2,3] = 2
//c[ 2 3 ] =

// [A ,A ,C]
