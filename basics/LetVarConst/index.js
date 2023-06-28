console.log("var let const")
// before es6 var is use widely
// after es6 var is not preferd to use insted of var use let keyword
var a = "ankur"
console.log(a)
var a = "ankur singh";
console.log(a)
console.log("***********************************")
var b = "Ram"
console.log(b)
if(true){
    var b = "sita"
    console.log(b)
}
console.log(b)
console.log("***********************************")
let c = "Singh"
// let c = "singh"
// variable c is defined as let so that can not redfine variable c 
console.log(c)
if(true){
    // inside if block c is again created but not throw error because it is block levet variable
    let c = "Ankur songh"
    console.log(c)
    // c inside ifblock did not change that c variable that is outside of the block.....
}
console.log(c)
// c can not be redfine but can change data od that variable as singh to sighala
c = "singhala"
console.log(c)
console.log("***********************************")
const d = 5;
console.log(d)
// talking about const it neither be refine and nor be redeclared and be declared at definition time
// d=6
// cont e;
