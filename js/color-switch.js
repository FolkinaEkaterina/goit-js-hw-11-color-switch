const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener("click", onClickBtnStart);

function onClickBtnStart() {
  const intervalId = setInterval(changeColor, 1000);
  refs.btnStart.setAttribute("disabled", "disabled");

  refs.btnStop.addEventListener("click", onClickBtnStop);

  function onClickBtnStop() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
  }
}

function changeColor() {
  let currentColorIndex = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[currentColorIndex];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
