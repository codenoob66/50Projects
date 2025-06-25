const answerArray = [
  "Mars",
  "Tokyo",
  "William Shakespeare",
  "Blue Whale",
  "1912",
  "Au",
  "Japan",
  "Leonardo da Vinci",
  "Diamond",
  "Hydrogen",
];

let wrongCount = 0;

let scoreCount = 0;

const MAX_WRONG = 3;

const scoreDisplay = document.getElementById("score-id");

const btns = document.querySelectorAll("button");

const inputFields = document.querySelectorAll(".input-field");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    checkAnswer(btn, i);
  });
});

function disableElement(btn) {
  btn.disabled = true;
}

function checkAnswer(btn, i) {
  if (inputFields[i].value === answerArray[i]) {
    inputFields[i].style.backgroundColor = "green";
    console.log("correct");
    disableElement(btn);
    disableElement(inputFields[i]);
    scoreCount++;
    scoreDisplay.textContent = `Score: ${scoreCount}`;
  } else {
    console.log("incorrect");
    disableElement(btn);
    inputFields[i].style.backgroundColor = "red";
    wrongCount++;
    console.log(wrongCount);
    wrongCounter();
  }
}

inputFields.forEach((input, i) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer(event.target, i);
      disableElement(btns[i]);
    }
  });
});

function wrongCounter() {
  if (MAX_WRONG === wrongCount) {
    alert("you have reach the maximum no. of mistakes");
    disableAll();
  }
}

function disableAll() {
  btns.forEach((btn) => {
    disableElement(btn);
  });
  inputFields.forEach((input) => {
    disableElement(input);
  });
}
