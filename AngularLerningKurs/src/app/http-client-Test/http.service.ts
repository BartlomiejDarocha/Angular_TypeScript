import { Injectable } from '@angular/core';
import { Post } from '../http-client-Test/http-client-Test.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
   // nie jeset koniecze dodawnaie Observable na koncu bo to blokuje zorbienie uniwersanlej metody 
   //  http.get samo w soobie zwraca observable
  getPost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  //: Observable<Post>  <Post>
  // pobieranie wszysktie posty usera podajac w parametrze jegp userID (wszystkie posty o Id 1)
  getPostByUser(id: number): Observable<Array<Post>> {
    const params = new HttpParams().set('userId', id + ''); // tak zeby number stał sie stringiemm dodaj do number pusty string
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: params});
  }
  //dodwanie nowego postu
  addPost(post: Post): Observable <Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost(id: number) {}
  
  changePost(post: Post) {}


}
