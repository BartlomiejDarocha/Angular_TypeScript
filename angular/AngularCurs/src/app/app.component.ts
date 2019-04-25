import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tytul 1';
  maintasks = ['mainTask', 'mycie', 'gotwanie', 'naprawa auta', 'nauka angulara'];
  maintaksDone = [];
  myDog = new Dog('reks', 2);
  show = true;

  selectedTasks(taskFromChild: string): void {
    this.maintaksDone.push(taskFromChild);
    console.log(this.maintaksDone);
  }
  num2Printer(numToLog: number): void {
    console.log(numToLog, 'numt to log');
  }
  changeTitle() {
    this.title = 'nowy tytuł';
  }
  changeDog() {
    //this.myDog.name = 'Matrix';// nie zimie sie onChanges bo nie zmienia referencji;
    this.myDog = new Dog('Neo', 4);// onchanges zmien sie bo pies na inna referencje;
  }
  nothing() {
  }
  destroy() {
    this.show = !this.show;
  }
}

 export class Dog {
  // mozna tu napisac pola zaamisat w constructor
  constructor(public name: string, public age: number) {
  }
}

