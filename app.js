var min = 0
var sec = 0
var msec = 0
var minnum = document.getElementById("min");
var secnum = document.getElementById("sec");
var msecnum = document.getElementById("msec");
var interval;
var startnum = document.getElementById("btn")

function timer(){
    msec++
    msecnum.innerHTML = msec;
    if(msec>= 100){
        sec++
        secnum.innerHTML = sec
        msec = 0
    }else if(sec >= 60){
        min++
        sec = 0
        minnum.innerHTML = min
    }
}
function start(){
    interval = setInterval(timer,10)
    startnum.disabled = true
}

function stop(){
    clearInterval(interval)

}
function reset(){
    min = 0
    sec = 0
    msec = 0
    minnum.innerHTML = min
    secnum.innerHTML = sec
    msecnum.innerHTML = msec
    stop()
}