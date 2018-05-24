import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flash:FlashMessagesService,
  	private authservice:AuthenticationService,
  	private router:Router) { }

  ngOnInit() {
  }

  logoutuser(){
  	this.authservice.logout();

  	this.flash.show("you are logged out" ,{classes: ['alert', 'alert-danger'],timeout:3000});
  			this.router.navigate(['/login']);
  			return false;
  }

}
