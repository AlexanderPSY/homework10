function makeSaver(cb) {
    let out = null
    let flag = 0
    return () => {
        if (!flag) {
            out = cb()
            flag++
        }
        return out
    }
}


var saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random
// в примере). На этом этапе Math.random НЕ вызывается
var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную
                                  //в makeSaver функцию;
console.log(value1 === value2) // всегда true


var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random() * 6)])
var value3 = saver2()
var value4 = saver2()

console.log(value3 === value4) // тоже должно быть true
