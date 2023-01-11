function addn(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
    
  }
  
  console.log(addn(10,10,10,10,10));