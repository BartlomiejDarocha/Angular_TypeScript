import { Component, OnInit } from '@angular/core';
import { ClickService } from '../service/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.sass'],
  providers: [ClickService]
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

}
