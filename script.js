const messageButton = document.querySelector("#messageButton");
const message = document.querySelector("#message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

messageButton.addEventListener("click", () => {
  message.textContent = "Your JavaScript is working!";
});
