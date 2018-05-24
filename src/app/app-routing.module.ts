import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GroupComponent } from './group/group.component';
import { EditgroupComponent } from './editgroup/editgroup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EdituserComponent } from './edituser/edituser.component';

import {AuthGuard} from './auth.guard';


const routes: Routes = [
{path:'',redirectTo:'/users',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'users',component:UsersComponent},
{path:'groups',component:GroupComponent,canActivate:[AuthGuard]},
{path:'editgroup/:_id',component:EditgroupComponent},
{path:'userdetail/:_id',component:UserdetailComponent},
{path:'edituser/:_id',component:EdituserComponent},
{path:'users/:gnm',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
