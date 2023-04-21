pro=new Promise((res,rej)=>{
    lotNum=7
    //      0-5
    priceNum=Math.floor(Math.random()*10)
    if (lotNum==priceNum){
        res('you won the lottery')
    }
    else if(lotNum!=priceNum){
        rej("better luck next time")
    }
})

pro.then(msg=>console.log(msg)).catch(msg=>console.log(msg))
