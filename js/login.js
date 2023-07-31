var signIn = document.getElementById('signIn');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var errorMess1 = document.getElementById('errorMess1');
var errorMess2 = document.getElementById('errorMess2');
var usersList = [];
if (localStorage.getItem('user') != null) {
    usersList = JSON.parse(localStorage.getItem('user'));
}

function signInfun() {
    var userLogin = {
        Email: signinEmail.value,
        password: signinPassword.value,
    };
    if ((userLogin.Email == '') || (userLogin.password == '')) {
        errorMess1.classList.remove('d-none');
        errorMess2.classList.add('d-none');
    } else if (!usersList.some(e => e.Email === userLogin.Email && e.password === userLogin.password)) {
        errorMess1.classList.add('d-none');
        errorMess2.classList.remove('d-none');

    } else {
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].Email == userLogin.Email) {
                
               var name =  usersList[i].name;
        localStorage.setItem("Name", name)
                
            }
        }
        window.location = './pages/home.html';

    }
}
signIn.addEventListener('click', function() {
    signInfun();
});

