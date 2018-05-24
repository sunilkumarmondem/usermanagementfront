import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {ValidateService} from '../validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:ManageService,
  	private validser:ValidateService,
  	private flash:FlashMessagesService,
  	private route:ActivatedRoute) { }
  public groups:any;
  public users:any;
  username:String;
  email:String;
  password:String;
  firstname:String;
  lastname:String;
  dateofbirth:Date;
  group:String;
  private hiddenform:boolean=true;
  private hiddenbutton:boolean=false;
  private hiddenform2:boolean=false;

  ngOnInit() {
  	const gnm = this.route.snapshot.paramMap.get('gnm');
  	gnm == null? this.getuser() : this.getuserwithgroup(gnm);
  	this.groupnames();
  
  }

  groupnames(){
  	this.service.getgroups1().subscribe(data =>{
  		this.groups=data;
  	})

  }

  getuser(){
  	this.service.getusers().subscribe(data =>{
  		this.users=data;
  	})
  }

  newuser(){
	this.hiddenform=false;
	this.hiddenform2=true;
	this.hiddenbutton=true;
}

cancel(){
	this.hiddenform=true;
	this.hiddenform2=false;
	this.hiddenbutton=false;
}

adduser(){
	const user ={
		username:this.username,
		firstname:this.firstname,
		lastname:this.lastname,
		email:this.email,
		password:this.password,
		group:this.group,
		dateofbirth:this.dateofbirth
	}
	if(!this.validser.validuser(user)){
	this.flash.show('please fill all fields' ,{classes: ['alert', 'alert-danger'],timeout:1000});
  		return false;	
	}
	if(!this.validser.validuseremail(user.email)){
  		this.flash.show('please use valid email' ,{classes: ['alert', 'alert-danger'],timeout:1000});
  		return false;
  	}
  	this.service.addusers(user).subscribe(data =>{
  		this.users.push(data);
  		this.flash.show('user created successfully' ,{classes: ['alert', 'alert-success'],timeout:1000});
  		this.hiddenform=true;
  		this.hiddenform2=false;
  		this.hiddenbutton=false;
  		this.username=null;
  		this.firstname=null;
  		this.lastname=null;
  		this.email=null;
  		this.password=null;
  		this.group=null;
  		this.dateofbirth=null;
  		return false;
  	})
}

deleteuser(user){
	this.service.deleteusers(user).subscribe(data =>{
		this.flash.show('user deleted ' ,{classes: ['alert', 'alert-danger'],timeout:1000});
		this.getuser();
  		
	})
}

getuserwithgroup(gnm){
	this.service.getuserswithgroup(gnm).subscribe(data =>{
		this.users=data;
	})
}

}
