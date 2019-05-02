import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

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

  @ViewChild('childRef')
  childComponent: ChildComponent; // ponieważ jest to component

  @ViewChild('inputRef')
  input: ElementRef; // element ref ponieważ jest to element html elmentRef do importowania

  selectedTasks(taskFromChild: string): void {
    this.maintaksDone.push(taskFromChild);
    console.log(this.maintaksDone);
  }
  num2Printer(numToLog: number): void {
    console.log(numToLog, 'numt to log');
  }
  ////////////////Cykkl zycia componetu
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
  ///////////////////// Lokalne refernecje
  AddtextRef(input: HTMLInputElement) {
    this.title = input.value;
    this.childComponent.tasks = [];
    this.input.nativeElement.value = '';
  }
}


 export class Dog {
  // mozna tu napisac pola zaamisat w constructor
  constructor(public name: string, public age: number) {
  }
}

