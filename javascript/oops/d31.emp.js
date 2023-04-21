// employee
// name id desig salary

class Emp{
    setEmp(name,id,desig,salary) {
        this.name=name
        this.id=id
        this.desig=desig
        this.salary=salary
    }
    printEmp(){
        console.log(this.name,this.id,this.desig,this.salary);
    }
}

emp1=new Emp()
emp1.setEmp("anu",01,"dev",20000)
emp1.printEmp()

emp2=new Emp()
emp2.setEmp("qwert",02,"analist",200000)
emp2.printEmp()

emp1=new Emp()
emp1.setEmp("tanu",01,"dev",20000)
emp1.printEmp()