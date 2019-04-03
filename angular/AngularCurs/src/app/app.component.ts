import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Inny tytul';
  maintasks = ['mainTask', 'mycie', 'gotwanie', 'naprawa auta', 'nauka angulara'];
  secetedTask(task: string): void {
    console.log(task, '-task z outPuta');
  }

}
