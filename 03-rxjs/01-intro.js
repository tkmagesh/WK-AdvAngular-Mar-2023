var { Observable, of, from } = require('rxjs')

let obs$ = new Observable(observer => {
    console.log('sending values')
    observer.next(10)
    observer.next(20)
    observer.next(30)
    observer.next(40)
    // observer.error(new Error('invalid arguments'))
    observer.complete()
    return () => console.log('observable unsubscribed')
})

let timerObs$ = new Observable(observer => {
    console.log('observable created')
    let no = 0
    const timerId = setInterval(() => {
        observer.next(++no)
    }, 1000);
    return () => {
        console.log('subscriber has unsubscribed. stoping the timer')
        clearInterval(timerId)
    }
})

let values = [10, 20, 30, 40, 50]
/* 
var arrObs$ = new Observable(observer => {
    for (let value of values)
        observer.next(value)
    observer.complete()
}) 
*/
// var arrObs$ = from(values)
var arrObs$ = of(values)


var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 4000);
})

var promiseObj$ = from(promise)

let subscription = timerObs$.subscribe({
    next : val => console.log(val),
    complete : () => console.log('All the values received'),
    error : err => console.log('Error :', err)
})

setTimeout(() => {
    subscription.unsubscribe()    
}, 10000);



/* 
Write a function that creates an observable for the given array of values 
*/