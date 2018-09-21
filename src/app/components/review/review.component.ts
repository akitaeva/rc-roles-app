import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { newUser, UserComponent } from '../user/user.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  @Input() newUser = newUser;
  @Output() edit = new EventEmitter();

  constructor( private myRouter: Router ) { }

  ngOnInit() {
    console.log("this the something BEFORE ", this.newUser);
  }

  editUser(theUser){  //on click "back" attach editUser()  -- 
   console.log("this the something EditUser", this.newUser);
   this.edit.emit(theUser);
   this.myRouter.navigate(["/"]);
  }


}
