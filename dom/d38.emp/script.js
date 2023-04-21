function addEmployee(){
    employee={ename:ename.value, id:eid.value, designation:desig.value, salary:salary.value, experience:exp.value}

    if(employee.id in localStorage) {
        alert("employee already exist")
        window.location="homepage.html"
    }
    else{
    localStorage.setItem(employe.id,JSON.stringify(employee))
    window.location="homepage.html"
    }
}

function search(){

    keyid=s1.value

    if(keyid in localStorage){
        // localStorage.getItem(keyid)
        emp=JSON.parse(localStorage.getItem(keyid))
        // console.log(emp);

        result.innerHTML=`<p> ${emp.ename}</p>`

    }
    else {
        alert("not present")
        result.innerHTML=""
    }
}