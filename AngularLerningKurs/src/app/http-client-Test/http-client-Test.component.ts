import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http-client-Test',
  templateUrl: './http-client-Test.component.html',
  styleUrls: ['./http-client-Test.component.sass']
})
export class HttpClientTestComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log('test');
  }
  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts, ' posts');
    });
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
