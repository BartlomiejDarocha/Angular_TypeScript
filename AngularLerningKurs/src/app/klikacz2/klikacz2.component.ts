import { Component, OnInit } from '@angular/core';
import { ClickService } from '../service/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.sass']
  //providers: [ClickService] // wstanie providersa sprawi ze powstanie nowa instacja servisu nalezy umiesic to w glonwym MODULE
  // czyli w app.module.ts w tablice porviders sprawi to ze ze servis rozleje sie po całej apkilacji i nie bedzie wielu klas wiekszy opsis
  // w notatkach
})
export class Klikacz2Component implements OnInit {

  constructor(private clickService: ClickService) { }
  click = 0;
  ngOnInit() {
  }
  add() {
    this.click++;
    this.clickService.addClick();
  }
  print() {
    this.clickService.stringPrinting('dupa');
  }
  multiple() {
    this.clickService.multipeTwoNum(2, 5);
  }

}
