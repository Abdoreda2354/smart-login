var signIn = document.getElementById('signIn');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var errorMess1 = document.getElementById('errorMess1');
var errorMess2 = document.getElementById('errorMess2');
var closeEye = document.getElementById('closeEye')
var openEye = document.getElementById('openEye')
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
    signIn.style.cssText = `
    box-shadow: 0px 0px 0px 4px #17a3b87a;
    `
}
signIn.addEventListener('click', function() {
    signInfun();
});

closeEye.addEventListener('click' , function(){
    signinPassword.type = 'text';
    closeEye.classList.add("d-none")
    openEye.classList.remove("d-none")
});
openEye.addEventListener('click' , function(){
    signinPassword.type = 'password';
    openEye.classList.add("d-none")
    closeEye.classList.remove("d-none")

});

