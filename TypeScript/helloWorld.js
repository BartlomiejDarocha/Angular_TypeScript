console.log('helloWorld');
var BasicType = /** @class */ (function () {
    function BasicType() {
        this.name = 'Reksio';
        this.age = 2;
        this.colors = ['czarny', 'biały'];
        this.dates = [new Date, new Date];
        this.pair = ['poniedzialek', 1];
        this.zyx = null;
    }
    return BasicType;
}());
var ExampleFunction = /** @class */ (function () {
    function ExampleFunction() {
        this.msg = 'helloWosssrld';
    }
    ExampleFunction.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunction.prototype.hello = function () {
        return 'hellow funckaj 1';
    };
    ExampleFunction.prototype.hellow2 = function (message, message2) {
        if (message2 === void 0) { message2 = 'test'; }
        return message + message2;
    };
    return ExampleFunction;
}());
var exempale = new ExampleFunction();
exempale.showMsg();
console.log(exempale.hello());
console.log(exempale.hellow2('dupa'));
/////////INTERFACES!!!!!/////
var FucTest = /** @class */ (function () {
    function FucTest(msg) {
        this.msg = 'xxx';
        this.msg = msg;
    }
    FucTest.prototype.print = function () {
        console.log(this.msg);
    };
    return FucTest;
}());
var funcConstruto = /** @class */ (function () {
    function funcConstruto(name, size, dateTask, pry) {
        if (dateTask === void 0) { dateTask = null; }
        this.name = name;
        this.size = size;
        this.dateTask = dateTask;
        this.pry = pry;
    }
    funcConstruto.prototype.insideInfo = function () {
        console.log("Zadanie: " + this.name);
        console.log("ilo\u015B\u0107 cykli " + this.size);
        console.log("pryrioryted  " + this.pry);
    };
    funcConstruto.prototype.endLine = function () {
        console.log("=====================");
    };
    funcConstruto.prototype.printInfo = function () {
        if (!this.dateTask) {
            this.insideInfo();
            this.endLine();
        }
        else {
            this.insideInfo();
            console.log("czas do zakoczenia zadania " + this.dateTask);
            this.endLine();
        }
    };
    return funcConstruto;
}());
var dog1 = ({
    name: 'Reksio',
    age: 2,
    color: 'black'
});
console.log(dog1.name);
console.log(dog1);
var cat1 = ({
    name: "rat",
    age: 2,
    color: "Red"
});
console.log(cat1.color);
var Urname = /** @class */ (function () {
    function Urname(enterName) {
        var _this = this;
        this.funcPrint = function () {
            console.log(_this.name);
        };
        this.name = enterName;
    }
    return Urname;
}());
var myName = new Urname("Tomek");
myName.funcPrint();
var zadanie1 = ({
    name: 'kodzenie po pijaku',
    size: 3,
    date: new Date(),
    priorytet: 1
});
var zadanie2 = ({
    name: 'kodznie po pijaku dwa',
    size: 2,
    priorytet: 2
});
var myPrinter1 = new funcConstruto(zadanie1.name, zadanie1.size, zadanie1.date, zadanie1.priorytet);
myPrinter1.printInfo();
var myPrinter2 = new funcConstruto(zadanie2.name, zadanie2.size, null, zadanie2.priorytet);
myPrinter2.printInfo();
