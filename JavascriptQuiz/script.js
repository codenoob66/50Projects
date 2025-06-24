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

let scoreCount = 0;

const scoreDisplay = document.getElementById("score-id");

const btns = document.querySelectorAll("button");

const inputFields = document.querySelectorAll(".input-field");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    checkAnswer(btn, i);
  });
});

function disableButton(btn) {
  btn.disabled = true;
}

function checkAnswer(btn, i) {
  if (inputFields[i].value === answerArray[i]) {
    inputFields[i].style.backgroundColor = "green";
    console.log("correct");
    disableButton(btn);
    scoreCount++;
    scoreDisplay.textContent = `Score: ${scoreCount}`;
  } else {
    console.log("incorrect");
    disableButton(btn);
    inputFields[i].style.backgroundColor = "red";
  }
}

inputFields.forEach((input, i) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer(event.target, i);
    }
  });
});
