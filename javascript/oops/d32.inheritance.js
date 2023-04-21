// inheritance
// 1-single
// 2-multiple inheritance
// 3-multilevel inheritance

class A{
    methoda (){
        console.log("inside a");
    }
}
class B extends A {
    methodb() {
        console.log("inside B classs");
    }
}

objb=new B()
objb.methodb()
objb.methoda()