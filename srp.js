const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";

const IMG_S = "<img src='img/s.png' alt='Scissors'>";
const IMG_R = "<img src='img/r.png' alt='Scissors'>";
const IMG_P = "<img src='img/p.png' alt='Scissors'>";

let cscore = 0;
let uscore = 0;
let result = "GAME START";

function onButtonClick(userInput) {
  var comInput;
  var rnd = Math.random();

  if (rnd < 0.33) {
    comInput = SCISSORS;
  } else if (rnd < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }

  if (userInput === SCISSORS) {
    document.getElementById("usel").innerHTML = IMG_S;
    if (comInput === SCISSORS) {
      document.getElementById("csel").innerHTML = IMG_S;
      result = "TIE";
    } else if (comInput === ROCK) {
      document.getElementById("csel").innerHTML = IMG_R;
      result = "LOSE";
    } else {
      document.getElementById("csel").innerHTML = IMG_P;
      result = "WIN";
    }
  } else if (userInput === ROCK) {
    document.getElementById("usel").innerHTML = IMG_R;
    if (comInput === SCISSORS) {
      document.getElementById("csel").innerHTML = IMG_S;
      result = "WIN";
    } else if (comInput === ROCK) {
      document.getElementById("csel").innerHTML = IMG_R;
      result = "TIE";
    } else {
      document.getElementById("csel").innerHTML = IMG_P;
      result = "LOSE";
    }
  } else {
    document.getElementById("usel").innerHTML = IMG_P;
    if (comInput === SCISSORS) {
      document.getElementById("csel").innerHTML = IMG_S;
      result = "LOSE";
    } else if (comInput === ROCK) {
      document.getElementById("csel").innerHTML = IMG_R;
      result = "WIN";
    } else {
      document.getElementById("csel").innerHTML = IMG_P;
      result = "TIE";
    }
  }

  // 문제> score 출력

  
  // 문제> 결과 메세지 출력
  // alert(result);

}

// 문제> onReset() 함수 정의

