function boomTimer(time) {
    let timer =setInterval(()=>{
        if(time) console.log(time--)
        else {console.log("Go!")
        clearInterval(timer)}
    },1000)
    return timer
}

boomTimer(5)