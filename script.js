let all = document.querySelectorAll("img");
let scoreH = document.querySelector(".div4");
let scoreR = document.querySelector(".div5");
let reset = document.querySelector(".div6");
let message = document.querySelector(".div7");
let robotChoice = document.querySelector(".div8");
let humanChoice = document.querySelector(".div9");

scoreH.innerHTML = 0;
scoreR.innerHTML = 0;

reset.addEventListener("click", () => {
  scoreH.innerHTML = 0;
  scoreR.innerHTML = 0;
  message.innerHTML = "";
  humanChoice.innerHTML = "";
  robotChoice.innerHTML = "";
});

[...all].map((i) => {
  i.addEventListener("click", () => {
    let input = i.alt;
    let robot = ["rock", "paper", "scissors"][Math.trunc(Math.random() * 3)];

    let result =
      input === "rock" && robot === "paper"
        ? "Robot win"
        : input === "rock" && robot === "scissors"
        ? "Human win"
        : input === "paper" && robot === "rock"
        ? "Human win"
        : input === "paper" && robot === "scissors"
        ? "Robot win"
        : input === "scissors" && robot === "rock"
        ? "Robot win"
        : input === "scissors" && robot === "paper"
        ? "Human win"
        : "Tie";

    message.innerHTML = result;
    humanChoice.innerHTML = "You: " + input;
    robotChoice.innerHTML = "Robot: " + robot;

    const calc = (str, val) => +val + (str === result ? 1 : 0);

    scoreH.innerHTML = calc("Human win", scoreH.innerHTML);
    scoreR.innerHTML = calc("Robot win", scoreR.innerHTML);
  });
});
