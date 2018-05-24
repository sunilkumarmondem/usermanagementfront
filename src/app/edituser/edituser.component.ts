import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';
import { FlashMessagesService } from 'ngx-flash-messages';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
	users={};

  constructor(private service:ManageService,
  	private route:ActivatedRoute,
  	private location:Location,
  	private flash:FlashMessagesService) { }

  ngOnInit() {
  	this.getuserdetailforedit();
  }

  getuserdetailforedit(){
  	const _id=this.route.snapshot.paramMap.get('_id');
  	this.service.getuserdetailsforedit(_id).subscribe(data =>{
  		this.users=data;
  	})
  };

   goback(){
  this.location.back();
  }

  save(){
  	this.service.saveupdateuser(this.users).subscribe(data =>{
  		this.flash.show('user updated successfully' ,{classes: ['alert', 'alert-success'],timeout:1000});
  		this.goback();
  	})
  }

}
