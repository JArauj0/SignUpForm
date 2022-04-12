const email = document.getElementById("mail");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phone = document.getElementById("phone");
const pwd = document.getElementById("password");
const sndpwd = document.getElementById("confirmpassword");

firstName.addEventListener("invalid", function (event) {
  if (firstName.validity.valueMissing) {
    firstName.setCustomValidity("Please fill this field.");
  } else {
    firstName.setCustomValidity("");
  }
});

lastName.addEventListener("invalid", function (event) {
  if (lastName.validity.valueMissing) {
    lastName.setCustomValidity("Please fill this field.");
  } else {
    lastName.setCustomValidity("");
  }
});

email.addEventListener("invalid", function (event) {
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

phone.addEventListener("invalid", function (event) {
  if (phone.validity.valueMissing) {
    phone.setCustomValidity("Please fill this field.");
  } else {
    phone.setCustomValidity("");
  }
});

pwd.addEventListener("invalid", function (event) {
  if (pwd.validity.valueMissing) {
    pwd.setCustomValidity("Please fill this field.");
  } else {
    pwd.setCustomValidity("");
  }
});

sndpwd.addEventListener("invalid", function (event) {
  if (sndpwd.validity.valueMissing) {
    sndpwd.setCustomValidity("Please fill this field.");
  } else {
    sndpwd.setCustomValidity("");
  }
});