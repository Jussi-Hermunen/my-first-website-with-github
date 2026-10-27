const helloButton = document.querySelector("#hello-button");
const greeting = document.querySelector("#greeting");
const buttonPlayground = document.querySelector("#button-playground");
const dodgeButton = document.querySelector("#dodge-button");
const dodgeMessage = document.querySelector("#dodge-message");

helloButton.addEventListener("click", () => {
  greeting.textContent = "Hello there! Thanks for stopping by. 👋";
});

const positionDodgeButtonAtCenter = () => {
  dodgeButton.style.left = `${(buttonPlayground.clientWidth - dodgeButton.offsetWidth) / 2}px`;
  dodgeButton.style.top = `${(buttonPlayground.clientHeight - dodgeButton.offsetHeight) / 2}px`;
};

const moveDodgeButton = (event) => {
  if (event.pointerType !== "mouse") {
    return;
  }

  const maxLeft = buttonPlayground.clientWidth - dodgeButton.offsetWidth;
  const maxTop = buttonPlayground.clientHeight - dodgeButton.offsetHeight;

  dodgeButton.style.left = `${Math.random() * maxLeft}px`;
  dodgeButton.style.top = `${Math.random() * maxTop}px`;
};

positionDodgeButtonAtCenter();
window.addEventListener("resize", positionDodgeButtonAtCenter);
dodgeButton.addEventListener("pointerenter", moveDodgeButton);
dodgeButton.addEventListener("click", () => {
  dodgeMessage.textContent = "You got me!";
});
