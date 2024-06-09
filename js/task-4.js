const form = document.querySelector(".login-form");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  const user = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(user);
  form.reset();
});
