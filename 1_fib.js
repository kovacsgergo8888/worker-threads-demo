const fibonacci = (n) => n < 1 ? 0 
  : n <= 2 ? 1 
  : fibonacci(n - 1) + fibonacci(n - 2)

const asyncFibonacci = (n) =>
  new Promise((resolve) => {
    const start = Date.now()
    const result = fibonacci(n)
    console.log(`finished in ${Date.now() - start}ms`)
    resolve(result)
  })

const main = async () => {
  const start = Date.now()  
  const allResult = await Promise.all([
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40),
    asyncFibonacci(40)
  ])
  console.log(`all finished in ${Date.now() - start}`)
  console.log(allResult)
}

main()
