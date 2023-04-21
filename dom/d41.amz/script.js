function register(){

    reg_name=regname.value
    localStorage.setItem("user_name",reg_name)

    reg_psw=regpsw.value
    localStorage.setItem("password",reg_psw)

    window.location="index.html"
}

function login(){
    loginName=u1.value
    loginPassword=p1.value

    getUname=localStorage.getItem('user_name')
    getUpsw=localStorage.getItem('password')

    if(loginName == getUname){
        if(loginPassword==getUpsw) {
            window.location="productPage.html"
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("incorrect login details")
    }
}

function addProduct() {
    product={
         pro_name:pnm.value,
         pro_id:pid.value,
         pro_price:ppr.value,
         pro_quantity:pqt.value 
    }

    if(product.pro_name in localStorage) {
        alert("product allready present")
    }
    else{
        localStorage.setItem(product.pro_name,JSON.stringify(product))
    }

}

function search() {
    psearch=s1.value
    if(psearch in localStorage){
        product=JSON.parse(localStorage.getItem(psearch))

        res.innerHTML= `
            <p class="m-1 font-bold">${product.pro_name}</p>
            <p class="m-1 font-bold">${product.pro_id}</p>
            <p class="m-1 font-bold">${product.pro_price}</p>
            <p class="m-1 font-bold">${product.pro_quantity}</p>
            `
    }
    else{
        alert("product not available")
    }
}