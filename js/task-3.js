const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (evt) => {
  const inputText = evt.currentTarget.value.trim();
  textOutput.textContent = inputText ? inputText : "Anonymous";
});
