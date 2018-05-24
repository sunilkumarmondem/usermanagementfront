import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private service:AuthenticationService,
		private router:Router){}

	canActivate():boolean{
		if(this.service.loggedin()){
			return true;
		}else{
			this.router.navigate(['/login']);
			return false;
		}
	}
 
}
