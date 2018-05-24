import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,tap,map} from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

  constructor(private http:HttpClient ) { }
  authtoken:any;
  user:any;

  private registerurl='register';
  private loginurl='authenticate';
  private profileurl='profile';

  registeruser(user):Observable<any>{
  	return this.http.post<any>(this.registerurl,user,httpOptions).pipe(tap(data =>console.log(data)));
  }

  loginuser(user):Observable<any>{
  	return this.http.post<any>(this.loginurl,user,httpOptions).pipe(tap(data =>console.log(data)));
  }

  storeuserdata(token,user){
  	localStorage.setItem('id_token',token);
  	localStorage.setItem('user',JSON.stringify(user));
  	this.authtoken=token;
  	this.user=user;

  }

  logout(){
  	this.authtoken=null;
  	this.user=null;
  	localStorage.clear();
  }

  loggedin(){
  	return !!localStorage.getItem('id_token');
  }

  


}

  /*getprofile(){
  	
  	this.loadtoken();
  	const httpOptions1 = {
    
    headers1: new HttpHeaders({'Authorization':this.authtoken}),
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  	
  	return this.http.get<any>(this.profileurl,httpOptions1).pipe(tap(data =>console.log(data)));
  }

  loadtoken(){
  	const token = localStorage.getItem('id_token');
  	this.authtoken=token;
  }*/


