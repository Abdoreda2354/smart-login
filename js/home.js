var logout = document.getElementById('logout')
var welcome = document.getElementById('welcome')
var userName = localStorage.getItem("Name");
welcome.innerHTML = "Welcome"+" " + userName;

logout.addEventListener('click' , function(){
    window.location = '../index.html'
})





