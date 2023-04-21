class A{
    function_a (){
        console.log("inside a");
    }
}
class B extends A {
    function_b() {
        console.log("inside B classs");
    }
}
class c extends B {
    function_c () {
        console.log("incide c class");
    }
}

Obj=new c()
Obj.function_c()
Obj.function_b()
Obj.function_a()