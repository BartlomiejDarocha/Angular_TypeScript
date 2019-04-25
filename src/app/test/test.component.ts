import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  title = 'Angulara';
  pi = 3.142321562354235;
  data =  new Date();
  dog1 =  new Dog('Rekosp2', 2);
  days = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];
  dogs = new Array <Dog>();
  dog2 = new Dog('Okularnik', 5);
  dogs2 = new Array <Dog>();
  dog5;
  testobject = {
    key1: 2,
    key2: 'gosc',
    key3: (arg) => {
      console.log(arg);
    },
    key4: true,
  };
  constructor() {
    this.dogs.push(new Dog('reks', 1), new Dog('Tred', 2), new Dog('Max', 5));
    this.dogs2.push(new Dog('tata', 1), new Dog ('mama', 2), new Dog('max2', 10), new Dog('Max3', 12), new Dog('robert', 4));
  }
  ngOnInit() {
  }
  showHide(): void {
    this.testobject.key4 = !this.testobject.key4;
  }
  showDog = (dog: Dog) => {
    return `Moj pies to ${dog.name} ma ${dog.age} lata!`;
  }
  addDogs(): void {
    let tempArray = new Array <Dog>();
    tempArray.push(new Dog('reks', 1), new Dog('Tred', 2), new Dog('Max', 5));
    this.dogs = tempArray;
  }
  removeDogs(): void {
    this.dogs = [];
  }
}


 class Dog {
   // mozna tu napisac pola zaamisat w constructor
   constructor(public name: string, public age: number) {

   }
 }
