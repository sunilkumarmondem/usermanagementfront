import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name:String;
	username:String;
	email:String;
	password:String;


  constructor(private service:ValidateService,
  	private flash:FlashMessagesService,
  	private authservice:AuthenticationService,
  	private router:Router) { }

  ngOnInit() {
  }

  register(){
  	const user ={
  		name:this.name,
  		username:this.username,
  		email:this.email,
  		password:this.password
  	}
  	if(!this.service.validregister(user)){
  		this.flash.show('please fill all fields' ,{classes: ['alert', 'alert-danger'],timeout:3000});
  		return false;
  	}
  	if(!this.service.validemail(user.email)){
  		this.flash.show('please use valid email' ,{classes: ['alert', 'alert-danger'],timeout:3000});
  		return false;
  	}
  	this.authservice.registeruser(user).subscribe(data =>{
  		if(data.success){
  			this.flash.show('you are registered successfully' ,{classes: ['alert', 'alert-success'],timeout:3000});
  			this.router.navigate(['/login']);
  		}
  		else{
  			this.flash.show('something went wrong' ,{classes: ['alert', 'alert-danger'],timeout:3000});
  			this.router.navigate(['/register']);
  		}
  	})
  }

}
