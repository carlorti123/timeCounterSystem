//global variables//
const time_el = document.querySelector("#timerDisplay");
const playBtn = document.querySelector("#Play");
const pause_btn = document.querySelector("#Pause");
const Accept_btn = document.querySelector("#Accept");
const Discard_btn = document.querySelector("#Discard");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let mins = 0;
let secs = 0;

playBtn.addEventListener("click", () => {
    if (paused){
       paused = false;
       startTime = Date.now() - elapsedTime;
       intervalId = setInterval(updateTime, 75);
    }
});
pause_btn.addEventListener("click", () => {});
Accept_btn.addEventListener("click", () => {});
Discard_btn.addEventListener("click", () => {});

function updateTime () {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    time_el.textContent `${hrs}:${mins}:${secs}`;
}

