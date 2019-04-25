console.log('helloWorld');

class BasicType {
    name: string ='Reksio';
    age: number = 2;
    colors: string[] = ['czarny', 'biały'];
    dates: Array <Date> = [new Date, new Date];
    pair: [string, number] = ['poniedzialek', 1];
    zyx: any = null;
}
class ExampleFunction {
    msg: string = 'helloWosssrld';
    showMsg() : void {
        console.log(this.msg);
    }
    hello(): string {
        return 'hellow funckaj 1';
    }
    hellow2(message: string , message2 = 'test') {
        return message + message2
    }
}
 let exempale = new ExampleFunction();
 exempale.showMsg();
 console.log(exempale.hello());
 console.log(exempale.hellow2('dupa'));
 
 /////////INTERFACES!!!!!/////

class InterfacesTest {
    msg: string = 'xxx';

    constructor(msg:string){
        this.msg = msg;
    }
    print(): void {
        console.log(this.msg)
    }
}

let interFace1 = new InterfacesTest('bartek');
interFace1.print();

interface Dog {
    name: string;
    age: number;
    date?: Date;
    color: string;
}

let dog1: Dog  = ({
    name: 'Reksio', 
    age: 2, 
    color: 'black'
});
console.log(dog1.name);
console.log(dog1);

interface Cat {
    name: String,
    age: number,
    date?: Date,
    color: string,
    
}

let cat1: Cat = ({
    name:"rat",
    age:2,
    color:"Red",
})
console.log(cat1.color);

class Urname {
    name:string;
    constructor(enterName){
        this.name = enterName
    }
    funcPrint = ():void => {
        console.log(this.name);
    }
}

let myName = new Urname("tomke");
myName.funcPrint();


