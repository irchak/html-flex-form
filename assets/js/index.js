"use strict";

const INPUTS_FORM = {
  "first name": /^[A-Z][a-z]*$/,
  "last name": /^[A-Z][a-z]{1,31}(-[A-Z][a-z]{1,31})?$/,
  "user-email": /^.+@.+$/,
  "user-phone-1": /^\d{3}$/,
  "user-phone-2": /^\d{3}$/,
  "user-phone-3": /^\d{4}$/,
};

const correctInputs = document.querySelectorAll("input");

correctInputs.forEach(i => i.addEventListener("input", checkInputsCorrect));

function checkInputsCorrect(e) {
  if (INPUTS_FORM[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}

document
  .getElementById("form-html")
  .addEventListener("submit", () => alert("Форму відправлено!"));

function submitData(e) {
  e.preventDefault();

  const firstName = e.target["first-name"].value;
  const lastName = e.target["last-name"].value;
  const email = e.target["user-email"].value;
  const phone1 = e.target["user-phone-1"].value;
  const phone2 = e.target["user-phone-2"].value;
  const phone3 = e.target["user-phone-3"].value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;

  const phone = `${phone1}${phone2}${phone3}`;

  const form = {
    name: `${firstName}${lastName}`,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  console.log(form);
}
