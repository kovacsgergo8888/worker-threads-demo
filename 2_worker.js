const { Worker } = require('node:worker_threads')

const fibonacciWorker = async (number) =>
  new Promise((resolve, reject) => {
    const start = Date.now()
    const worker = new Worker('./3_fib.js', {
      workerData: {
        number
      }
    })
    worker.once('message', (data) => {
      console.log(
        `worker done, thread: ${worker.threadId}`,
        `time: ${Date.now() - start}`,
        data
      )
      resolve(data)
    })
    worker.once('error', (err) => reject(err))
  })

const main = async () => {
  try {
    const start = Date.now()
    const allResult = await Promise.all([
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40),
      fibonacciWorker(40)
    ])
    console.log(`all done in ${Date.now() - start}`, allResult)
  } catch (err) {
    console.log(err)
  }
}

main()
