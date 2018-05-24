import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';
import {Group} from '../group';
import {ValidateService} from '../validate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private service:ManageService,
  	private router:Router,
  	private validser:ValidateService,
  	private flash:FlashMessagesService) { }

  groups:Group[];
  name:String;

  private hiddenform:boolean=true;
  private hiddenbutton:boolean=false;

  ngOnInit() {
  	this.getgroupsfrom();
  }

  getgroupsfrom(){
  	this.service.getgroups().subscribe(data =>{
  		this.groups=data;
  	})
  };

  newgroup(){
  	this.hiddenform=false;
  	this.hiddenbutton=true;
  }

  cancel(){
  	this.hiddenform=true;
  	this.hiddenbutton=false;
  }

  addgroup(){
  	const group ={
  		name:this.name
  	}
  	if(!this.validser.validgroup(group)){
  		this.flash.show('please fill group name' ,{classes: ['alert', 'alert-danger'],timeout:1000});
  		return false;
  	}
  	this.service.addgroups(group).subscribe(data =>{
  		this.groups.push(data);
  		this.hiddenform=true;
  		this.hiddenbutton=false;
  		this.flash.show('Group created successfully' ,{classes: ['alert', 'alert-success'],timeout:1000});
  		this.name=null;
  		return false;
  	

  	})
  }

  delete(group){
  	this.service.deletegroups(group).subscribe(data =>{
  		this.getgroupsfrom();
  		this.flash.show('Group deleted ' ,{classes: ['alert', 'alert-danger'],timeout:1000});


  	})
  }


}
