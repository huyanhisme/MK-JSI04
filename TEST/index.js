const statusSignIn = JSON.parse(localStorage.getItem('statusSignIn'));
if (statusSignIn == false) {
   location.assign("./SignIn/signIn.html");
} else {
    document.querySelector('button').onclick = () => {
        localStorage.setItem('statusSignIn', 'false');
        
    }
}