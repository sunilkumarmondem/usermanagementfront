import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private flash:FlashMessagesService,
  	private authservice:AuthenticationService,
  	private router:Router) { }

  username:String;
  password:String;

  ngOnInit() {
  }

  login(){
  	const user ={
  		username:this.username,
  		password:this.password
  	}
  	this.authservice.loginuser(user).subscribe(data =>{
  		if(data.success){
  			this.authservice.storeuserdata(data.token,data.user);
  			this.flash.show('you are logged in' ,{classes: ['alert', 'alert-success'],timeout:3000});
  			this.router.navigate(['/groups']);

  		}else{
  			this.flash.show(data.msg ,{classes: ['alert', 'alert-danger'],timeout:3000});
  			this.router.navigate(['/login']);
  		}
  	})
  }



}
