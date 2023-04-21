class Person {
    constructor(name,age,location) {
        this.name1=name
        this.age=age
        this.place=location 
    }
    printPerson(){
        console.log(this.name1,
            this.age,
            this.place);
    }
}
pe1=new Person("anu",20,"vypisn")
pe1.printPerson()

pe2=new Person("qwerty",23,"aluva")
pe2.printPerson()