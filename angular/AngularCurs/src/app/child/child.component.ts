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
  eventTask = new EventEmitter <string>();  //tak musi być
  constructor() { }

  ngOnInit() {
  }
  select(task) {
    this.eventTask.emit(task); // emituje task do event
  }

}
