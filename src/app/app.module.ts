import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
