function register() {

    acnum=acno.value
    username=uname.value
    password=psw.value

    acdetails={acnum, username, password, balance:0}

    if(acnum in localStorage) {
        alert("ac already present")
        window.location = "login.html"
    }
    else {
        localStorage.setItem(acnum,JSON.stringify(acdetails))
        window.location = "login.html"
    }

}

function login(){
    acnum=acno.value
    pswd=psw.value
    if(acnum in localStorage){
        data=JSON.parse(localStorage.getItem(acnum))
        if(pswd==data["password"] ) {
            window.location="home.html"
            alert("login sucess")
        }
        else{
            alert("incorrect")
        }
    }
    else{
        alert("incorreect ac.no")
    }
}