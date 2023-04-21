//  polymorphism
// many forms
// methods 
//  over loading -methods are same diff no of arguments (not support in js)
// over ridding - mentode are same and same no of arguments 


// over loading
class A {
    methodn (n) {
        this.n=n
        console.log("incide A cls ",this.n);
    }
}
class B extends A {
    methodn( ){
        console.log("inside b clzz");
    }
}

objb=new B()
objb.methodn()
objb.methodn(74)


// over ridding
// class A {
//     methodn () {
//         console.log("incide A cls ",);
//     }
// }
// class B extends A {
//     methodn(){
//         console.log("inside b clzz");
//     }
// }
// objb=new B()
// objb.methodn()
// objb.methodn()