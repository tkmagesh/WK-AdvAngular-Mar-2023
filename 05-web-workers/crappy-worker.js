function doWork() {
    for (let i = 1; i <= 10000; i++){
        for (let j = 0; j < 2000; j++)
            for (let k = 0; k < 1000; k++) {

            }
        if (i % 100 === 0) {
            const percentCompleted = (i / 100)
            self.postMessage({
                type : 'progress',
                percentCompleted
            })
        }
    }
}

self.addEventListener('message', (evt) => {
    if (evt.data.type === 'start'){
        doWork()
        console.log('work completed')
        self.postMessage({ type : 'done'})
    }
})
