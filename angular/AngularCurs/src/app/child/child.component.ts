import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  //@Input('taskProp') // ale raczej się tak nie robi
  @Input()
  tasks;

  @Output()
  etask = new EventEmitter <string>(); //tak musi być
  @Output()
  num2 = new EventEmitter <number>(); // tak musi być;
  //na samym początku towrzenie polo @oututa
  //potem w widoku tworzemy element i dajemy mu event z element do przekazania lub bez argumentow
  //potem w contolerze oblsugujmey metoda z pkt wyzej ale musi ona działać na filmie outpuce tak jak
  // w przyaadku metody select 2 zawiera(arg) i go eminute do etask a potem wysala dalej
  // nastepnie w widoku parenta ustawia się (pole) w tym przyadku (etaks)="metoda($event)"
  // w przypadku selecet 2
  // w kontolrze rodzcia obsluguje się ta metode ale w evencie musi przyjmnować jako argumnet elemet z dziecka w tym przypadku task

  ngOnInit() {
  }
  select2(task):void {
    this.etask.emit(task);// task
  }
  num2Handler():void {
    this.num2.emit(2);
  }



}
