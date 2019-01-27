console.log('hello world');

class Robot {
    name = "Clark";
    old = 5;
    colors: string [] = ['black', 'red'];
    dates: Array<Date> =[new Date(), new Date()];
    pari: [string, number] =['poniedzłek', 1];
    
}
let test =  new Robot();
console.log(test.name);
console.log(test.old);
console.log(test.colors);
console.log(test.dates);
console.log(test.pari);

export class FunctionTests {
    msg:string = "Witaj swiecie test";

    showMsg(): void {
        console.log(this.msg);
    }
    hellow():string {
        return "ta funkcja zwraca String";
    }
    hello2(msg:string){
        console.log(msg);
    }
    hello3(msg:string, num?:number){
        console.log(msg, " ", num);
    }
    hello4(msg:string, num = 10){
        console.log(msg, " ", num);
    }
    helolo5 =(text:string)=> console.log(text, " ", this.msg);
}
let test2 =  new FunctionTests();
test2.showMsg();
console.log(test2.hellow());
test2.hello2("spdaja");
test2.hello3("narka" ,2);
test2.hello3("narka2");
test2.hello4("nakra 3");
test2.helolo5("dawaj dawaj");



export class ClassZConstructorem{
    name:string
    constructor(name?:string,){
        this.name = name;
    }
    print =()=>{
        this.name===""?(this.name="dupa"):(this.name =this.name);
        console.log(this.name);
    }
}
let clAndContr = new ClassZConstructorem("");
clAndContr.print();

interface Dog {
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dog1: Dog =({
    name:'Rex', 
    age: 3, 
    color:'szary'
})
console.log(dog1);
console.log(dog1.name);

let json  = '{ "name": "max", "age": 4, "color": "red"}';
let myDog: Dog = JSON.parse(json);
console.log(myDog);
console.log(myDog.name);