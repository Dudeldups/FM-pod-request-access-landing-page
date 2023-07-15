const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".form__input");
const errorEl = document.querySelector(".form__error-message");

const isValidEmail = email => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

const setErrorMessage = msg => {
  errorEl.innerText = msg;
};

const setForm = newState => {
  formEl.setAttribute("data-validation", newState);
};

formEl.addEventListener("submit", e => {
  e.preventDefault();
  const email = inputEl.value.trim();
  if (email === "") {
    setForm("invalid");
    setErrorMessage("Oops! Please add your email!");
  } else if (!isValidEmail(email)) {
    setForm("invalid");
    setErrorMessage("Oops! Please check your email!");
  } else {
    inputEl.value = "";
    setForm("valid");
    setErrorMessage("Thanks for subscribing. We will notify you soon!");
  }
});
