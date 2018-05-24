import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validregister(user){
  	if(user.name == undefined || user.email ==undefined || user.username==undefined ||user.password==undefined){
  		return false;
  	}
  	else{
  		return true;
  	}
  }

  validemail(email){
  	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }

  validgroup(group){
  	if(group.name == undefined){
  		return false;
  	}
  	else{
  		return true;
  	}
  }

  validuser(user){
    if(user.username == undefined || user.firstname == undefined || user.lastname == undefined ||user.email ==undefined ||
      user.password ==undefined){
      return false;
    }else{
      return true;
    }
  }

  validuseremail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
