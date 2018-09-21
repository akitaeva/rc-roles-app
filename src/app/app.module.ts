import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './components/user/user.component';
import { ReviewComponent } from './components/review/review.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';

// routes:
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:UserComponent
  },  
  {
    path:'review',
    component:ReviewComponent
  },
]  

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReviewComponent,
    CheckboxGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
