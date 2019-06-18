import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ClickService } from './service/click.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'tytul 1';
  maintasks = ['mainTask', 'mycie', 'gotwanie', 'naprawa auta', 'nauka angulara'];
  maintaksDone = [];
  myDog = new Dog('reks', 2);
  show = true;
  allClick;

  @ViewChild('childRef')
  childComponent: ChildComponent; // ponieważ jest to component

  @ViewChild('inputRef')
  input: HTMLInputElement; // element ref ponieważ jest to element html elmentRef do importowania
  @ViewChild('box')
  box: ElementRef;
  @ViewChild('h1')
  h1: HTMLElement;
  constructor (private clickService: ClickService) {
  }
  ngOnInit(): void {
    this.clickService.getsum().subscribe((data) => {
      this.allClick = data;
    });
    this.input.setAttribute('value', 'dupa');
    //console.log(this.box);
    this.box.nativeElement.classList.add('active');
    //console.log(this.h1.style);
  }

  selectedTasks(taskFromChild: string): void {
    this.maintaksDone.push(taskFromChild);
    console.log(this.maintaksDone);
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
  //// klikacz
}


 export class Dog {
  // mozna tu napisac pola zaamisat w constructor
  constructor(public name: string, public age: number) {
  }
}

