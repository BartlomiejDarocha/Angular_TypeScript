console.log('helloWorld');

class BasicType {
    name: string = 'Reksio';
    age: number = 2;
    colors: string[] = ['czarny', 'biały'];
    dates: Array<Date> = [new Date, new Date];
    pair: [string, number] = ['poniedzialek', 1];
    zyx: any = null;
}
class ExampleFunction {
    msg: string = 'helloWosssrld';
    showMsg(): void {
        console.log(this.msg);
    }
    hello(): string {
        return 'hellow funckaj 1';
    }
    hellow2(message: string, message2 = 'test') {
        return message + message2
    }
}
let exempale = new ExampleFunction();
exempale.showMsg();
console.log(exempale.hello());
console.log(exempale.hellow2('dupa'));

/////////INTERFACES!!!!!/////

class FucTest {
    msg: string = 'xxx';

    constructor(msg: string) {
        this.msg = msg;
    }
    print(): void {
        console.log(this.msg)
    }
}
class funcConstruto {
    name: string;
    size: number;
    dateTask: Date;
    pry: number

    constructor(name: string, size: number, dateTask: Date = null, pry: number) {
        this.name = name;
        this.size = size;
        this.dateTask = dateTask;
        this.pry = pry;
    }
    insideInfo() {
        console.log(`Zadanie: ${this.name}`);
        console.log(`ilość cykli ${this.size}`);
        console.log(`pryrioryted  ${this.pry}`);
    }
    endLine(){
        console.log(`=====================`);
    }
    printInfo() {
        if (!this.dateTask) {
            this.insideInfo();
            this.endLine();
        } else {
            this.insideInfo();
            console.log(`czas do zakoczenia zadania ${this.dateTask}`);
            this.endLine();
        }
    }
}


interface Zadnaie {
    name: string,
    size: number,
    date?: Date,
    priorytet: number,
}

interface Dog {
    name: string;
    age: number;
    date?: Date;
    color: string;
}

let dog1: Dog = ({
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
    name: "rat",
    age: 2,
    color: "Red",
})
console.log(cat1.color);

class Urname {
    name: string;
    constructor(enterName) {
        this.name = enterName
    }
    funcPrint = (): void => {
        console.log(this.name);
    }
}

let myName = new Urname("Tomek");
myName.funcPrint();

let zadanie1: Zadnaie = ({
    name: 'kodzenie po pijaku',
    size: 3,
    date: new Date(),
    priorytet: 1,
});
let zadanie2: Zadnaie = ({
    name: 'kodznie po pijaku dwa',
    size: 2,
    priorytet: 2,
});
let myPrinter1 = new funcConstruto(zadanie1.name, zadanie1.size, zadanie1.date, zadanie1.priorytet);
myPrinter1.printInfo();

let myPrinter2 = new funcConstruto(zadanie2.name, zadanie2.size, null, zadanie2.priorytet);
myPrinter2.printInfo();





