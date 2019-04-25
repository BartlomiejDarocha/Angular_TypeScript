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
var InterfacesTest = /** @class */ (function () {
    function InterfacesTest(msg) {
        this.msg = 'xxx';
        this.msg = msg;
    }
    InterfacesTest.prototype.print = function () {
        console.log(this.msg);
    };
    return InterfacesTest;
}());
var interFace1 = new InterfacesTest('bartek');
interFace1.print();
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
var myName = new Urname("tomke");
myName.funcPrint();

var testfuc = function() {
    console.log('test Wroks');
}
module.exports.someFunction = function () {
    console.log('hi');
  };