import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client-Test',
  templateUrl: './http-client-Test.component.html',
  styleUrls: ['./http-client-Test.component.sass']
})
export class HttpClientTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('test');
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
