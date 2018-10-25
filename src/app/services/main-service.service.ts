import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials:true
};

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }


  getToDos (): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos', httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError('getToDos'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
