

const bubble = () => {
    var clutter = " ";

    for (var a = 1; a <= 116; a++) {

        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`
    }

    document.querySelector(".p-btm").innerHTML = clutter;

}


var timer = 60;
const runtimer = () => {
    setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            timer = 0;
            document.querySelector('.p-btm').innerHTML = `<h1>The Game Is Over</h1>  <h2>Your Score Is :- ${score}</h2>`;
        }
    }, 1000);
}


var newh = 0;
const newHit = () => {

    newh = Math.floor(Math.random() * 10);

    document.getElementById('hitval').textContent = newh;
}


var score = 0;
function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



bubble();
runtimer();
newHit();

document.querySelector('.p-btm').addEventListener("click", function (d) {
    var clicked = Number(d.target.textContent)

    if (clicked === newh) {
        incScore();
        bubble();
        newHit();
    }else {
        vibrateDevice()
    }
})

function vibrateDevice() {
    if ('vibrate' in navigator) {
      
      navigator.vibrate(200);
    } 
  }

function clicked() {
    timer = 60;
    newHit();
    var upScore = 0;
    document.querySelector("#scoreval").textContent = upScore;
    var clutter = " ";

    for (var a = 1; a <= 116; a++) {

        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${num}</div>`
    }

    document.querySelector(".p-btm").innerHTML = clutter;
}



