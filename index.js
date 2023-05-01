timeDisplay = document.getElementById('timeDisplay');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let startTime = 0;
let elapedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;


start.addEventListener('click', () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapedTime;
        intervalId = setInterval(upDateTime, 1000);
    }
});
pause.addEventListener('click', () => {
    if(!paused) {
        paused = true;
        elapedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
reset.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 25;
    elapedTime = 0;
    currentTime = 0;
    hrs = 0;
    min = 0;
    sec = 0;
    timeDisplay.textContent = "00:00:00"
    
});

function upDateTime(){
    elapedTime = Date.now() - startTime;

    sec = Math.floor(elapedTime / 1000 % 60);
    min = Math.floor((elapedTime / (1000 * 60)) % 60);
    hrs = Math.floor(elapedTime / (1000 * 60 * 60) % 60);

    sec = addZero(sec);
    min = addZero(min);
    hrs = addZero(hrs);

        timeDisplay.textContent = `${hrs}:${min}:${sec}`;

    function addZero(unit){
            return (("0") + unit).length > 2 ? unit : "0" + unit;
    }


}
