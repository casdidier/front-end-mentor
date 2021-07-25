const form = document.getElementById("form");
const email = document.getElementById("email-input");

const validateEmail = (email) => {
  const emailRegex =
    /^([A-Za-zÀ-ÖØ-öø-ÿ\d\._-]+)@([A-Za-zÀ-ÖØ-öø-ÿ\d-]+)\.([A-Za-zÀ-ÖØ-öø-ÿ]{2,66})(\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,8})?$/;

  return emailRegex.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = email;
  if (!validateEmail(value)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
