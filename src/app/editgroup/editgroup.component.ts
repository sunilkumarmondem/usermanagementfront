import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';
import {Group} from '../group';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';

import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {

  constructor(private service:ManageService,
  	private router:Router,
  	
  	private flash:FlashMessagesService,
  	private route:ActivatedRoute,
  	private location:Location) { }

  group={};

  ngOnInit() {
  	this.editgroup();
  }

  editgroup(){
  	const _id=this.route.snapshot.paramMap.get('_id');
  	this.service.editgroups(_id).subscribe(data =>{
  		this.group=data;
  	})
  }
  goback(){
  this.location.back();
  }

  save(){
  	this.service.updategroup(this.group).subscribe(data =>{
  		this.flash.show('updated successfuuly' ,{classes: ['alert', 'alert-success'],timeout:1000});
  		this.goback();
  	})
  }

}
