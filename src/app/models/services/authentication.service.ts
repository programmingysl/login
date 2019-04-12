import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login} from '../Login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost/projects/AnnouncementBoard/users/teachersLogin';
  login: Login;
  jsonRes: any;

  constructor(private http: HttpClient) { }

  store(login: Login): Observable<Login> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
       });
    // const options = { Headers: headers };

    return this.http.post<Login>(this.baseUrl, { data: login }, { headers})
      .pipe(map((res) => {
        console.log(res);
        this.jsonRes = res;
        return this.jsonRes;
      }));
    // catchError(this.handleError));
  }





  getTeachers(): Observable<any> {

    return this.http.get<Login>(this.baseUrl);
  }

}


// return this.http.post('http://localhost:8000/api/v1/authenticate', null, options);
