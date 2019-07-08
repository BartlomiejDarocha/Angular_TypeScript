import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.sass']
})
export class HttpClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
