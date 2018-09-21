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

  registerUser:any = {
    firstName: '',
    lasttName: '',
    email: '',
    roles: []
  };
  
  availableRoles:any;
  theError:any;
  show: boolean = false;

  constructor(private authService: AuthService,
              private http: Http) { }

// tryRegister() {
//    this.authService.register(this.registerUser)
//    .subscribe(

//     );
//  }
 
 firstPhase(userInfo){
  console.log('userinfo: ', userInfo)
  this.registerUser = userInfo;
  this.show = !this.show;
}

review() {
  console.log('registerUser: ', this.registerUser)
    
}

  ngOnInit() {
   this.availableRoles = this.authService.getRoles();
   console.log("availableRoles:  ",  this.availableRoles)
  }

}
