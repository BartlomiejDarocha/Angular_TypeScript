import { Injectable } from '@angular/core';
import { Post } from '../http-client-Test/http-client-Test.component';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getPosts0();
   }
  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();
  getPosts0() {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.postsObs.next(posts);
    },
    err => {
      console.log(err);
    });
  }

  // to jest metoda z 3 razy proba pobrania z danych z servera na rxjs Oprators
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').pipe(// dodac do link xyx zeby zadzialoa retry
      tap(), retry(3), // powtórka 3 razy wstawic w tap(() => console.log('https://jsonplaceholder.typicode.com/postxyx  test tap url')) 
      catchError(err => {
        console.log(err, ' <---error');
        return of(null);
      })
      // ten zakomentowa kod służy do przechywytwania błędów, ale wyżej http-clietn-TEST jest juz podobna metoda
      // ta wydaje się być lepsza
    );
  }
  //warto zobaczyć pełna dokumenracje w Anagula doc.
  getPost2(): Observable<HttpResponse<Response>> { /// dodbieranie sie do opcji tego zapytania
    // jako drugi argument to jest obiekt w którym ustawiam opcje ponziej ustawnie opcji na params.
    // mozna przestawić observale na reposne i zamiast Jsona dostane obiekt typu reponse
    // RESPONSE JEST TO PEŁNY OBIEKT ODPOWIEDZI Z SERVERA
    return this.http.get<Response>('https://jsonplaceholder.typicode.com/posts',
    { observe: 'response'});
  }
  getPost3(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {responseType: 'text'});
  }
   // nie jeset koniecze dodawnaie Observable na koncu bo to blokuje zorbienie uniwersanlej metody
   //  http.get samo w soobie zwraca observable
  getPost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  // pobieranie wszysktie posty usera podajac w parametrze jegp userID (wszystkie posty o Id 1)
  getPostByUser(id: number): Observable<Array<Post>> {
    const params = new HttpParams().set('userId', id + ''); // tak zeby number stał sie stringiemm dodaj do number pusty string
    const tempid = id.toString();
    const params2 = {'userId': tempid } ;// tak tez działa nie trzeba robic specialnego obiektu HttpParams
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: params2});
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
