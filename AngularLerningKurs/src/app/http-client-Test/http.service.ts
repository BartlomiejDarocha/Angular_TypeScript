import { Injectable } from '@angular/core';
import { Post } from '../http-client-Test/http-client-Test.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // to jest metoda z 3 razy proba pobrania z danych z servera na rxjs Oprators
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/postxyx').pipe(
      tap(() => console.log('https://jsonplaceholder.typicode.com/postxyx  test tap url')), retry(3) // powtórka 3 razy
      // catchError(err => {
      //   console.log(err, 'dupa');
      //   return of(null);
      // })
      // ten zakomentowa kod służy do przechywytwania błędów, ale wyżej http-clietn-TEST jest juz podobna metoda
      // ta wydaje się być lepsza
    );
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
  updatePost (post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: number): Observable <Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }


}
