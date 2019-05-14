import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<number>();
  constructor(private log: LogService) { }// wstrzykiwanie serwisu do serwisu

  addClick() {
    this.sumClicks++;
    this.sum.next(this.sumClicks);
    this.log.logger('kliknęcie');
  }
  getsum(): Observable<number> {
    return this.sum.asObservable();
  }





  //zabawa tak sie tego nie robi to jest zabwa
  stringPrinting(toPrint: string) {
    console.log(toPrint);
  }
  multipeTwoNum(first: number, second: number) {
    console.log(first * second);
  }
}
