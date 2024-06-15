var timer = 60;
var score = 0;
var hitRandomNumber = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitRandomNumber = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitRandomNumber;
}


function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var randomNumber = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {

        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over Buddy!!</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm")
addEventListener("click", function (details) {
    var clickedNum = (Number(details.target.textContent));
    if (clickedNum === hitRandomNumber) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


getNewHit();
makeBubble();
runTimer();