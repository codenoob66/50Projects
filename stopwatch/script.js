let minutesCount = 0;
let secondsCount = 0;
let hourCount = 0;
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hour = document.getElementById("hour");
let secondsIntervalId;
const stopWatchBtn = document.getElementById("strtBtn");
const endStopWatch = document.getElementById("endStopWatch");
const docTitle = document.getElementById("docTitle");
const pauseBtn = document.getElementById("pauseBtn");
let hasStarted = false;

stopWatchBtn.addEventListener("click", function () {
  hasStarted = true;
  console.log("started");
  if (!secondsIntervalId) {
    secondsIntervalId = setInterval(secondsFunction, 1000);
  }
});

function secondsFunction() {
  secondsCount++;
  if (secondsCount === 60) {
    secondsCount = 0;
    minutesCount++;
  }
  if (minutesCount === 60) {
    minutesCount = 0;
    hourCount++;
  }
  seconds.textContent = padNum(secondsCount);
  minutes.textContent = padNum(minutesCount);
  hour.textContent = padNum(hourCount);
  docTitle.textContent = `${hour.textContent}:${minutes.textContent}:${seconds.textContent}`;
}
endStopWatch.addEventListener("click", () => {
  clearInterval(secondsIntervalId);
  secondsIntervalId = null;
  resetStopWatch();
  docTitle.textContent = "Stop Watch";
});

function padNum(num, length = 2) {
  return String(num).padStart(length, "0");
}

function resetStopWatch() {
  minutesCount = 0;
  minutes.textContent = padNum(minutesCount);
  secondsCount = 0;
  seconds.textContent = padNum(secondsCount);
  hourCount = 0;
  hour.textContent = padNum(hourCount);
  pauseBtn.textContent = "pause";
}

function pauseStopWatch() {
  if (secondsIntervalId) {
    pauseBtn.textContent = "resume";
    clearInterval(secondsIntervalId);
    secondsIntervalId = null;
  } else {
    pauseBtn.textContent = "pause";
    if (!secondsIntervalId) {
      secondsIntervalId = setInterval(secondsFunction, 1000);
    }
  }
}

pauseBtn.addEventListener("click", pauseStopWatch);
