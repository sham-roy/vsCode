

class Bank {
    constructor (name, acno) {
        this.name=name 
        this.acno=acno
        this.balance=0
    }
    deposit(amount){
        this.amount=amount
        this.balance+=this.amount
        console.log("ac has credited with amount ",this.amount);
        console.log("the avaliable balace is ",this.balance);
    }
    withdraw(amnt){
        this.amnt=amnt
        if(this.amnt<=this.balance) {
            this.balance-=this.amnt
            console.log("ur acc has been debited with amount",amnt);
            console.log("balance is",this.balance);
        }
        else {
            console.log("insucfficient balance");
        }
    }
}

ac1=new Bank("anu",100001)
ac1.deposit(100)
ac1.withdraw(10)
ac1.deposit(1000)
ac1.withdraw(10000)