const button = document.querySelector(".js-button");
console.log(button.classList.contains("js-button"));

function toggle(value) {
  const button = document.querySelector(value);
  if (!button.classList.contains("is-toggle")) {
    turnOffButton();
    button.classList.add("is-toggle");
  } else {
    button.classList.remove("is-toggle");
  }
}

function turnOffButton() {
  const allButton = document.querySelector(".is-toggle");
  if (allButton) {
    allButton.classList.remove("is-toggle");
  }
}
