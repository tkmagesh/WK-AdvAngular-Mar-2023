/// <reference lib="webworker" />

function doWork() {
  for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < 2000; j++)
      for (let k = 0; k < 1000; k++) {

      }
    if (i % 100 === 0) {
      const percentCompleted = (i / 100)
      postMessage({
        type: 'progress',
        percentCompleted
      })
    }
  }
}

addEventListener('message', (evt) => {
  console.log("received message")
  if (evt.data.type === 'start') {
    doWork()
    console.log('work completed')
    postMessage({ type: 'done' })
  }
})
