import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  errorMessage:any;

  constructor(private http: Http) { }

  handleError(e) {
    this.errorMessage = e.json().message;
    return Observable.throw(e.json().message);
  }

  register(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

 
}