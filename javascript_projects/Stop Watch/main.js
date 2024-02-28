let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${padStart(hours, 2)}:${padStart(minutes, 2)}:${padStart(seconds, 2)}`;
}

function padStart(value, length) {
    return String(value).padStart(length, '0');
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);

        document.getElementById('startStopBtn').textContent = 'Stop';
    } else {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    }

    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startStopBtn').textContent = 'Start';
}

document.getElementById('startStopBtn').addEventListener('click', startStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);