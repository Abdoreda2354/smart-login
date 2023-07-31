var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var btnSignUp = document.getElementById('btnSignUp');
var successMess = document.getElementById('SuccessMess')
var errorMess1 = document.getElementById('errorMess1')
var errorMess2 = document.getElementById('errorMess2')
var usersList = [];
if (localStorage.getItem("user") != null) {
    usersList = JSON.parse(localStorage.getItem("user"))
}
function signUp() {
    var user = {
        name: signupName.value,
        Email: signupEmail.value,
        password: signupPassword.value,
    }
    if ((user.name == "") || (user.Email == "") || (user.password == "")) {
        errorMess1.classList.remove('d-none')
        successMess.classList.add('d-none')
        errorMess2.classList.add('d-none')
    }
    else if (usersList.some(e => e.Email == user.Email && e.name == user.name)) {

        successMess.classList.add('d-none')
        errorMess1.classList.add('d-none')
        errorMess2.classList.remove('d-none')
        errorMess3.classList.add('d-none')
        errorMess4.classList.add('d-none')

    }
    else if(regexEmail.test((signupEmail.value).toLowerCase()) !=true){
        successMess.classList.add('d-none')
        errorMess1.classList.add('d-none')
        errorMess2.classList.add('d-none')
        errorMess3.classList.remove('d-none')
        errorMess4.classList.add('d-none')

    }
    else if(regexPassword.test(signupPassword.value) !=true){
        successMess.classList.add('d-none')
        errorMess1.classList.add('d-none')
        errorMess2.classList.add('d-none')
        errorMess3.classList.add('d-none')
        errorMess4.classList.remove('d-none')
    }
    else {
        usersList.push(user)
        localStorage.setItem("user", JSON.stringify(usersList))
        successMess.classList.remove('d-none')
        errorMess2.classList.add('d-none')
        errorMess1.classList.add('d-none')
        errorMess3.classList.add('d-none')
        errorMess4.classList.add('d-none')
    }

    btnSignUp.style.cssText = `
    box-shadow: 0px 0px 0px 4px #17a3b87a;
    `
}
btnSignUp.addEventListener('click', function () {
    signUp();
})
var regexEmail = /([a-z]{2,15}|[A-Z]{2,15})@(gmail|yahoo|google)\.com/
var regexPassword = /^(?=.*[a-z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z0-9\d@$!%*?&#]{8,}$/



