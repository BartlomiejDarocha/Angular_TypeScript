import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  sumClicks = 0;
  constructor() { }

  addClick() {
    this.sumClicks ++;
    console.log(this.sumClicks, ' suma klikniec');
  }
}
