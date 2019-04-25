import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {
  inPutText = 'Pole tekstowe';
  inPutText2Way = '';
  butttonDisable = true;
  showClick = '';
  inputlast = '';

  firstInput = 'test1';
  secondInput = 'test2';
  constructor() { }

  ngOnInit() {
  }
  focus() {
    this.showClick = 'Przycisk aktywny';
    this.butttonDisable = false;
  }
  mouseMoveHandler(event) {
    console.log(`x: ${event.clientX} y: ${event.clientY}`);
  }
  focusout() {
    this.showClick = 'Przycisk nie aktywny';
    this.butttonDisable = true;
  }
  onClickTwo(event) {
    console.log(event, ' evnet');
  }


  saveFirst(event) {
    this.firstInput = event.target.value;
  }
  saveSec(event) {
    this.secondInput = event.target.value;
  }
}
