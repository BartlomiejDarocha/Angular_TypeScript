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
  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post, 'post');
    });
  }
  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(posts => {
      console.log(posts, ' postys z id 1');
    });
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
