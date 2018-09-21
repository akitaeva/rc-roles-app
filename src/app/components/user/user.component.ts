import {Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms'
import { Subscriber } from '../../../../node_modules/rxjs';
import { Http } from '@angular/http';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

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
   this.availableRoles = this.authService.getRoles()
   .map(res => new CheckboxItem(res.id, res.name, true));
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