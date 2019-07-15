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
    console.log('test HttpCilent component' );
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
      console.log(posts, ' postys z UserId = 1'); // z paramss
    });
  }
  addPost() {
    const p: Post = ({
    userId: 1,
    id: null,
    title: 'Mój post',
    body: 'To jest post w angularze'
    });
    this.httpService.addPost(p).subscribe(post => {
      console.log(post, ' to jest post wyslany z servera');
    });
  }
  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'to jest put w anglularze',
      body: 'nowy wpis'
    });
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post, ' to jest Put post z servera');
    });
  }
  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post, ' delete post');
    })
  }
}
export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
