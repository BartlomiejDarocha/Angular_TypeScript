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
  days = ['pon', 'wt', 'sro', 'czw', 'pt', 'so', 'nd'];
  dogs = new Array <Dog>();

  showDog = (dog: Dog) => {
    return `Moj pies to ${dog.name} ma ${dog.age} lata!`;
  }
  constructor() {
    this.dogs.push(new Dog('reks', 1), new Dog('Tred', 2), new Dog('Max', 5));
  }
  ngOnInit() {
  }

}
 class Dog {
   // mozna tu napisac pola zaamisat w constructor
   constructor(public name: string, public age: number) {

   }
 }
