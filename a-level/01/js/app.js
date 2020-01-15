function doSomething(length) {
    const arr = []
    while (length) {
        arr.push(Math.round(Math.random() * 100000))
        length--
    }
    return arr
}

function makeProfileTimer() {
    let start = new Date()
    console.log('Start benchmark')
    return () => `Benchmark finished in ${new Date() - start} ms`
}

const timer = makeProfileTimer()
console.log(doSomething(10000))
console.log(timer())