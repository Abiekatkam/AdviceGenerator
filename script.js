const adviceEl = document.getElementById("advice");
const numberEl = document.getElementById("number");

async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const adviceData = data.slip;
  displayAdvice(adviceData);
}

function displayAdvice(datas) {
  adviceEl.innerHTML = `${datas.advice}`;
  numberEl.innerHTML = ` ${datas.id}`;
}

getRandomAdvice();
