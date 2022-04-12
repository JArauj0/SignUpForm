const email = document.getElementById("mail");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

firstName.addEventListener("input", function (event) {
  if (firstName.validity.valueMissing) {
    firstName.setCustomValidity("Please fill this field 123.");
    firstName.textContent='Hello';
    firstName.reportValidity();
  } else {
    firstName.setCustomValidity("");
  }
});

lastName.addEventListener("input", function (event) {
  if (lastName.validity.valueMissing) {
    lastName.setCustomValidity("Please fill this field.");
    lastName.reportValidity();
  } else {
    lastName.setCustomValidity("");
  }
});

