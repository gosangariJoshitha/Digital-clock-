
// DIGITAL CLOCK
// -----------------------

function updateClock(){

let now = new Date()

let h = String(now.getHours()).padStart(2,'0')
let m = String(now.getMinutes()).padStart(2,'0')
let s = String(now.getSeconds()).padStart(2,'0')

document.getElementById("digitalClock").textContent = `${h}:${m}:${s}`

}

setInterval(updateClock,1000)

updateClock()



// ----------
// STOPWATCH
// ----------

let startTime = 0
let elapsedTime = 0
let timerInterval


function startStopwatch(){

startTime = Date.now() - elapsedTime

timerInterval = setInterval(function(){

elapsedTime = Date.now() - startTime

displayTime()

},10)

}



function stopStopwatch(){

clearInterval(timerInterval)

saveHistory()

}



function resetStopwatch(){

clearInterval(timerInterval)

elapsedTime = 0

displayTime()

document.getElementById("historyList").innerHTML = ""

}



function displayTime(){

let ms = elapsedTime % 1000
let sec = Math.floor(elapsedTime / 1000) % 60
let min = Math.floor(elapsedTime / (1000*60)) % 60
let hr = Math.floor(elapsedTime / (1000*60*60))

ms = String(ms).padStart(3,'0')
sec = String(sec).padStart(2,'0')
min = String(min).padStart(2,'0')
hr = String(hr).padStart(2,'0')

document.getElementById("stopwatch").textContent =
`${hr}:${min}:${sec}:${ms}`

}



// -----------------------
// SAVE HISTORY WHEN STOP CLICKED
// -----------------------

function saveHistory(){

let time = document.getElementById("stopwatch").textContent

let li = document.createElement("li")

li.textContent = time

document.getElementById("historyList").appendChild(li)

}
