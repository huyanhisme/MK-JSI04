import SignUp from "../SignUp/SignUp.js";

class Login extends SignUp {
  constructor(form, label, inputAcc, inputPass, btn) {
    super(form, label, inputAcc, inputPass, btn);

    this.label.innerHTML = "SIGN IN";
    this.forgotPassword = document.createElement("a");
    this.forgotPassword.innerHTML = "You do not have an account?";
    this.forgotPassword.href = "../index.html";
  }
  show(app) {
    this.form.appendChild(this.label);
    this.form.appendChild(this.inputAcc);
    this.form.appendChild(this.inputPass);
    this.form.appendChild(this.btn);
    this.form.appendChild(this.forgotPassword);

    app.appendChild(this.form);
  }
}

export default Login;

let app = document.querySelector("#app");

let login = new Login();
login.show(app);

let Signin = document.querySelector(".form-SignUp");

Signin.onsubmit = function (e) {
  e.preventDefault();

  let acc = Signin.account.value;
  let password = Signin.password.value;
  

  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].acc == acc) {
      if (userlist[i].password == password) {
        alert("Signed in successfully");

      } else {
        alert("This password is incorrect");
      }
      break;
    } else {
      alert("Email is not exist");
    }
  }
};


//list localStorage:
let user = localStorage.getItem("user");
let userlist = [];
if (user) {
  userlist = JSON.parse(localStorage.getItem("user"));
}

console.log(userlist);