import { Component, OnInit } from '@angular/core';

import {ManageService} from '../manage.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private service:ManageService,
  	private route:ActivatedRoute,
  	private location:Location) { }
  users ={};

  ngOnInit() {
  	this.getuserdetail();
  }

  getuserdetail(){
  	const _id=this.route.snapshot.paramMap.get('_id');
  	this.service.getuserdetails(_id).subscribe(data =>{
  		this.users=data;
  	})
  }

  goback(){
  this.location.back();
  }

}
