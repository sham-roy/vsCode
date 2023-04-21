// employee
// name id desig salary

class Emp{
    constructor(name,id,desig,salary) {
        this.name=name
        this.id=id
        this.desig=desig
        this.salary=salary
    }
    printEmp(){
        console.log(this.name,this.id,this.desig,this.salary);
    }
}

emp1=new Emp("anu",01,"dev",20000)
emp1.printEmp()

emp2=new Emp("qwert",02,"analist",200000)
emp2.printEmp()

emp1=new Emp("tanu",01,"dev",20000)
emp1.printEmp()