const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailContainer = document.getElementById("emailContainer");
const passwordContainer = document.getElementById("passwordContainer");
const forms = document.getElementById("signupForm");
let emailFlag = false;
let passwordFlag = false;

emailInput.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  const txt = obj.value;
  const regex = /^.{4,}@.*\..*$/;

  if (regex.test(txt)) {
    emailFlag = true;
    const msg = document.getElementById("emailMsg");
    if (msg) {
      msg.remove();
    }
  } else {
    emailFlag = false;

    const error = "Make sure email is more than 3 characters and has @ and a .";

    const pr = document.createElement("p");
    pr.innerText = error;
    pr.style.color = "red";
    pr.id = "emailMsg";

    const msg = document.getElementById("emailMsg");
    if (!msg) {
      emailContainer.appendChild(pr);
    }
  }
});

passwordInput.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  const txt = obj.value;
  const regex = /^.{8,}$/;

  if (regex.test(txt)) {
    passwordFlag = true;
    const msg = document.getElementById("passwordMsg");
    if (msg) {
      msg.remove();
    }
  } else {
    passwordFlag = false;
    const error = "Make sure password is more than 8 characters.";

    const pr = document.createElement("p");
    pr.innerText = error;
    pr.style.color = "red";
    pr.id = "passwordMsg";

    const msg = document.getElementById("passwordMsg");
    if (!msg) {
      passwordContainer.appendChild(pr);
    }
  }
});

forms.addEventListener("change", (e) => {
  e.preventDefault();

  if (emailFlag && passwordFlag) {
    const error = "All good to go!";
    const pr = document.createElement("p");
    pr.innerText = error;
    pr.style.color = "green";
    pr.id = "formMsg";

    const msg = document.getElementById("formMsg");
    if (!msg) {
      passwordContainer.appendChild(pr);
    } else {
      const ms = document.getElementById("formMsg");
      ms.remove();
    }
  }
});

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = e.currentTarget;
  if (emailFlag && passwordFlag) {
    const confimStatus = confirm("Are you sure you want to proceed?");
    emailFlag = false;
    passwordFlag = false;

    if (confimStatus) {
      alert("Successful signup!");
    } else {
      window.location.href = "#";
    }
    const msg = document.getElementById("formMsg");
    if (msg) {
      msg.remove();
    }
    obj.reset();
  }
});
