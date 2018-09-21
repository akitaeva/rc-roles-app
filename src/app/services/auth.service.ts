import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import roles from '../roles'

@Injectable()
export class AuthService {

  errorMessage:any;
  roles = roles;

  constructor(private http: Http) { }

  handleError(e) {
    this.errorMessage = e.json().message;
    return Observable.throw(e.json().message);
  }

  register(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }



  getRoles() {

    return this.roles;
    // return this.http.get('http://demo1224749.mockable.io/roles')
    //   .map((res) => res.json())
    //   .catch(this.handleError);
  }
 
}