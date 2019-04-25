import { Component, OnInit, Input, OnChanges,  SimpleChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Dog } from '../app.component';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.sass']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() title: string;
  @Input() dog: Dog;

  constructor() { }
  //uruchamia się przed oninit
  //sprawdza czy zmieniły się zbindowen pola Komponetu np title lub dog
  // odpali sie poniewaz dog  ani title nie jest zdeklarowany
  //musi się zmienić referencja np nowy inny pies a nie jego imię
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomine -1');
    console.log(changes);
  }
  //uruchamia się jeden raz po inicalizacji komponentu
  // uruchamia sie po po konstruktorze i po ngOnChanges
  ngOnInit() {
    console.log('ngOnInit - uruchomine -2');
  }
  // uruchamia się po każdej zmianie wywołania eventu etc
  ngDoCheck() {
    console.log('ngDoCheck - uruchomine -3')
  }
  //uruchamia się po inicjalzacji ng-contetn
  ngAfterContentInit(): void {
    console.log('AfterContentInit - uruchomine -4');
  }
  //uruchamia się po kazdej zmianie ng-contetn
  //przydatne do zmiany refernaci #ref tak sie mozna do tego dobrać
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked - uruchomine -5');
  }
   //uruchamia się po inicjalzacji widoku
  ngAfterViewInit(): void {
    console.log('AfterViewInit - uruchomine -6');
  }
   //uruchamia się po kazdej zmianie widoku
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked - uruchomine -7');
  }
  //pod koniec zniszcznei komponteu ale komponte zapamietauje referecnje np dog
  // czyli jak zmienisz psa to ten pies zmieniony zostanie
  ngOnDestroy() {
    console.log('ngOnDestroy - uruchomine -8')
  }



}

