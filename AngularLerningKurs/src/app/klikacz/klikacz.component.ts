import { Component, OnInit } from '@angular/core';
import { ClickService } from '../service/click.service';

@Component({
  selector: 'app-klikacz',
  templateUrl: './klikacz.component.html',
  styleUrls: ['./klikacz.component.sass'],
  providers: [ClickService]

})
export class KlikaczComponent implements OnInit {

  constructor(private clickService: ClickService) { }
  click = 0;
  ngOnInit() {
  }
  add() {
  this.click++;
  this.clickService.addClick();
  }
}
