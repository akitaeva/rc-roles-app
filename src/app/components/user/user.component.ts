import {Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms'
import { Subscriber } from '../../../../node_modules/rxjs';
import { Http } from '@angular/http';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {



  registerUser:any = {
    firstName: '',
    lastName: '',
    email: '',
    roles: []
  };
  
  availableRoles:any;
  theError:any;
  show: boolean = false;
  tempRoles:any;

  constructor(private authService: AuthService,
              private http: Http,
              private myRouter: Router) { }

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
  
  // console.log('registerUser: ', this.registerUser)
  newUser = this.registerUser;
  console.log('newUser -----hey hey hey: ', newUser)  
  this.myRouter.navigate(["/review"]);
  
}


  ngOnInit(): void {
    setTimeout(() => {
    this.availableRoles = this.authService.getRoles()
    .map(res => { 
      this.tempRoles = res;
      return new CheckboxItem(this.tempRoles.roleId, this.tempRoles.name)});
    }, 100);
   console.log("availableRoles:  ",  this.availableRoles)
  }

  onRolesChange(value) {
    this.registerUser.roles = value;
    console.log('User roles:' , this.registerUser.roles);
   } 



}

export class CheckboxItem {
  value: string;
  label: string;
  checked: boolean;
 
  constructor(value: any, label: any, checked?: boolean) {
   this.value = value;
   this.label = label;
   this.checked = checked ? checked : false;
  }
 }

 export let newUser;

