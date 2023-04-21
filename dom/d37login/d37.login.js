function login() {
    uname=v1.value
    localStorage.setItem("uname",uname)

    window.location="d37.welcome.html"
}
username=localStorage.getItem("uname")
// inner html
d1.innerHTML=username

function logout() {
    window.location="d37login.html"
    localStorage.removeItem("uname")    
}