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
  }
  getsum(): Observable<number> {
    return this.sum.asObservable();
  }
  getlog(num: number) {
    this.log.logger(num);
  }





  //zabawa tak sie tego nie robi to jest zabwa
  stringPrinting(toPrint: string) {
    console.log(toPrint);
  }
  multipeTwoNum(first: number, second: number) {
    console.log(first * second);
  }
}
