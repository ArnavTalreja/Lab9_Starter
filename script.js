let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });
const sampleData = { name: "Lab 9", topic: "Error Handling", features: ["try/catch", "console", "TrackJS"] };

const errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

errorBtns[0].addEventListener('click', () => console.log("Console Log Demo"));
errorBtns[1].addEventListener('click', () => console.error("Console Error Demo"));
errorBtns[2].addEventListener('click', () => console.count("Console Count"));
errorBtns[3].addEventListener('click', () => console.warn("Console Warn: Just a heads-up!"));
errorBtns[4].addEventListener('click', () => console.assert(false, "Console Assert: Assertion failed"));
errorBtns[5].addEventListener('click', () => console.clear());
errorBtns[6].addEventListener('click', (e) => {
  console.dir(e.target);
});
errorBtns[7].addEventListener('click', (e) => {
  console.dirxml(e.target);
});
errorBtns[8].addEventListener('click', () => {
  console.group("Console Group Start");
  console.log("This is inside the group");
});
errorBtns[9].addEventListener('click', () => console.groupEnd());
errorBtns[10].addEventListener('click', () =>
  console.table([
    { name: "Alice", score: 95 },
    { name: "Bob", score: 88 }
  ])
);
errorBtns[11].addEventListener('click', () => console.time("Timer"));
errorBtns[12].addEventListener('click', () => console.timeEnd("Timer"));
errorBtns[13].addEventListener('click', () => console.trace("Console Trace Example"));


document.addEventListener('DOMContentLoaded', () => {
  try {
    const el = document.querySelector('#non-existent-element').textContent;
  } catch (err) {
    console.error("Try/Catch Example: Failed to access non-existent element:", err);
  } finally {
    console.log("Try/Catch: Done attempting to read missing element");
  }
});



class CalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CalculationError";
  }
}

document.querySelector('form').addEventListener('submit', (e) => {
  const operator = document.querySelector('#operator').value;
  const secondNum = document.querySelector('#second-num').value;

  if (operator === '/' && secondNum === '0') {
    throw new CalculationError("Division by zero is invalid");
  }
});

window.onerror = function (message, source, lineno, colno, error) {
  console.log("Sorry something bad happened my friend");
  console.error("Uncaught Error:", message);
  return true;
};

errorBtns[14].addEventListener("click", () => {
  boom;
});

