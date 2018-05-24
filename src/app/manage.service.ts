import { Injectable } from '@angular/core';
import {Group} from './group';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,tap,map} from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ManageService {

  constructor(private http:HttpClient) { }

  private getgroup='groups';
  private addgroup ='addgroup';
  private getusersurl ='users';
  private adduserurl ='adduser';
  private getuserwithgroupurl='users_group';


  getgroups():Observable<Group[]>{
  	return this.http.get<Group[]>(this.getgroup).pipe(tap(data =>console.log(data)));
  }

  addgroups(group):Observable<Group>{
  	return this.http.post<Group>(this.addgroup,group,httpOptions).pipe(tap(data =>console.log(data)));
  }

  deletegroups(group):Observable<Group>{
  	return this.http.delete<Group>(`${this.getgroup}/${group}`,httpOptions).pipe(tap(data =>console.log(data)));
  }

  editgroups(_id):Observable<Group>{
  	return this.http.get<Group>(`${this.getgroup}/${_id}`).pipe(tap(data =>console.log(data)));
  }

  updategroup(group):Observable<Group>{
  	return this.http.put<Group>(`${this.getgroup}/${group._id}`,group,httpOptions).pipe(tap(data =>console.log(data)));
  }

  getgroups1():Observable<any>{
  	return this.http.get<any>(this.getgroup).pipe(tap(data =>console.log(data)));
  }

  getusers():Observable<any>{
  	return this.http.get<any>(this.getusersurl).pipe(tap(data =>console.log(data)));
  }

  addusers(user):Observable<any>{
  	return this.http.post<any>(this.adduserurl,user,httpOptions).pipe(tap(data =>console.log(data)));

  }

  deleteusers(user):Observable<any>{
  	return this.http.delete<any>(`${this.getusersurl}/${user}`,httpOptions).pipe(tap(data =>console.log(data)));
  }

  getuserdetails(_id):Observable<any>{
  	return this.http.get<any>(`${this.getusersurl}/${_id}`).pipe(tap(data =>console.log(data)));
  }

  getuserdetailsforedit(_id):Observable<any>{
  	return this.http.get<any>(`${this.getusersurl}/${_id}`).pipe(tap(data =>console.log(data)));
  }

  saveupdateuser(user):Observable<any>{
  	return this.http.put<any>(`${this.getusersurl}/${user._id}`,user,httpOptions).pipe(tap(data =>console.log(data)));
  }

  getuserswithgroup(gnm):Observable<any>{
  	return this.http.get<any>(`${this.getuserwithgroupurl}/${gnm}`).pipe(tap(data =>console.log(data)));
  }

}
