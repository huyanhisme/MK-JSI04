import SignUp from "./SignUp/SignUp.js";

const app = document.querySelector("#app");

const formSinUp = new SignUp();

formSinUp.renderForm(app);

//list localStorage:
let user = localStorage.getItem("user");
let userlist = [];
if (user) {
  userlist = JSON.parse(localStorage.getItem("user"));
}

//Sign Up :
let Signup = document.querySelector(".form-SignUp");
let accError = document.querySelector('.accError')
let passError = document.querySelector('.passError')
let rePassError = document.querySelector('.rePassError')

Signup.onsubmit = function (e) {
  e.preventDefault();

  let acc = Signup.account.value;
  let password = Signup.password.value;
  let rePassword = Signup.rePassword.value;

  let validate = true;

  if (!acc) {
    accError.innerHTML = "Please enter account";
    validate = false;
  }
  if (!password) {
    passError.innerHTML = "Please enter password";
    validate = false;
  }
  if (rePassword != password) {
    rePassError.innerHTML = 'Password is not match'
    validate = false;
  }
  

  if (validate) {
    let user = {
      acc: acc,
      password: password,
    };
    userlist.push(user);
    localStorage.setItem("user", JSON.stringify(userlist));
    location.assign("./Login/login.html");
  }
};
