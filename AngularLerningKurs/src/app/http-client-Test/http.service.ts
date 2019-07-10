import { Injectable } from '@angular/core';
import { Post } from '../http-client-Test/http-client-Test.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');

  
  }

  getPost(id: number) {}

  getPostByUser(id: number) {}

  addPost(post: Post) {}

  deletePost(id: number) {}
  
  changePost(post: Post) {}


}
