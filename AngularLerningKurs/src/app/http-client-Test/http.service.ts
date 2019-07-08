import { Injectable } from '@angular/core';
import { Post } from '../http-client-Test/http-client-Test.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts() {}

  getPost(id: number) {}

  getPostByUser(id: number) {}

  addPost(post: Post) {}

  deletePost(id: number) {}
  
  changePost(post: Post) {}


}
