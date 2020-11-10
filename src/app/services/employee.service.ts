import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../interfaces/person';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  url = "http://localhost:3000/";
  posturl = "http://localhost:3000/data";
  constructor(public httpClient: HttpClient) { }

  sendGetRequest(): Observable<person[]> {
    return this.httpClient.get<person[]>(this.url).pipe(
      catchError(this.handleError)
     );
  }

  postUser(user) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    return this.httpClient.post(this.posturl, JSON.stringify(user), {
      headers: headers
    })
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
    }

}
