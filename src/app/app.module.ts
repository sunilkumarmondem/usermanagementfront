import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GroupComponent } from './group/group.component';
import {ValidateService} from './validate.service';
import { FlashMessagesModule } from 'ngx-flash-messages';
import {AuthenticationService} from './authentication.service';
import {ManageService} from './manage.service';

import {AuthGuard} from './auth.guard';
import { EditgroupComponent } from './editgroup/editgroup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EdituserComponent } from './edituser/edituser.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    GroupComponent,
    EditgroupComponent,
    UserdetailComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule
   
  ],
  providers: [ValidateService,AuthenticationService,AuthGuard,ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
