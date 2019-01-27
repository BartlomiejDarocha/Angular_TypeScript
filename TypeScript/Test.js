"use strict";
exports.__esModule = true;
console.log('hello world');
var Robot = /** @class */ (function () {
    function Robot() {
        this.name = "Clark";
        this.old = 5;
        this.colors = ['black', 'red'];
        this.dates = [new Date(), new Date()];
        this.pari = ['poniedzłek', 1];
    }
    return Robot;
}());
var test = new Robot();
console.log(test.name);
console.log(test.old);
console.log(test.colors);
console.log(test.dates);
console.log(test.pari);
var FunctionTests = /** @class */ (function () {
    function FunctionTests() {
        var _this = this;
        this.msg = "Witaj swiecie test";
        this.helolo5 = function (text) { return console.log(text, " ", _this.msg); };
    }
    FunctionTests.prototype.showMsg = function () {
        console.log(this.msg);
    };
    FunctionTests.prototype.hellow = function () {
        return "ta funkcja zwraca String";
    };
    FunctionTests.prototype.hello2 = function (msg) {
        console.log(msg);
    };
    FunctionTests.prototype.hello3 = function (msg, num) {
        console.log(msg, " ", num);
    };
    FunctionTests.prototype.hello4 = function (msg, num) {
        if (num === void 0) { num = 10; }
        console.log(msg, " ", num);
    };
    return FunctionTests;
}());
exports.FunctionTests = FunctionTests;
var test2 = new FunctionTests();
test2.showMsg();
console.log(test2.hellow());
test2.hello2("spdaja");
test2.hello3("narka", 2);
test2.hello3("narka2");
test2.hello4("nakra 3");
test2.helolo5("dawaj dawaj");
var ClassZConstructorem = /** @class */ (function () {
    function ClassZConstructorem(name) {
        var _this = this;
        this.print = function () {
            _this.name === "" ? (_this.name = "dupa") : (_this.name = _this.name);
            console.log(_this.name);
        };
        this.name = name;
    }
    return ClassZConstructorem;
}());
exports.ClassZConstructorem = ClassZConstructorem;
var clAndContr = new ClassZConstructorem("");
clAndContr.print();
var dog1 = ({
    name: 'Rex',
    age: 3,
    color: 'szary'
});
console.log(dog1);
console.log(dog1.name);
var json = '{ "name": "max", "age": 4, "color": "red"}';
var myDog = JSON.parse(json);
console.log(myDog);
console.log(myDog.name);
