function createArr(length) {
    const arr = []
    while (length) {
        arr.push(Math.round(Math.random() * 100000))
        length--
    }
    return arr
}

function sort(arr) { //Моя любимая быстрая сортировка))
    if (arr.length === 0) return []
    let mid = arr[0]
    let a = [], b = []
    let i = 1
    while (i < arr.length) {
        (arr[i] < mid) ? a.push(arr[i]) : b.push(arr[i])
        i++
    }
    return sort(a).concat(mid, sort(b))
}

const hugeArr = createArr(100000)
console.log(hugeArr)
console.log(sort(hugeArr))