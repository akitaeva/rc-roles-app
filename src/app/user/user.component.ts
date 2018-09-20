import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms'
import { Subscriber } from '../../../node_modules/rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  registerUser:any = {};

  theActualUser :any = {};

  theError:any;
  

  constructor(private authService: AuthService,
              private http: Http) { }

 tryToSignUp() {

  // console.log(this.signUpUser)
 
   this.authService.register(this.registerUser)
   .subscribe(
     res => {this.successCallback(res)},
     error => {this.errorCallback(error)}
    );
 }
 
getRoles() {
  return this.http.get('http://demo1224749.mockable.io/roles')
    .map((res) => res.json());
}

successCallback(userObject) {
  this.theActualUser = userObject;
  this.theError = null;

}

errorCallback(errorObject) {
  this.theError = errorObject;
  this.theActualUser = {};
}

  ngOnInit() {
   
  }

}
