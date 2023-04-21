class Person {
    setPerson(name,age,location) {
        this.name1=name
        this.age=age
        this.place=location 
    }
    printPerson(){
        console.log(this.name1,this.age,this.place);
    }
}
pe1=new Person()
pe1.setPerson("anu",20,"vypin")
pe1.printPerson()

pe2=new Person()
pe2.setPerson("qwerty",23,"aluva")
pe2.printPerson()