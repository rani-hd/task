import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard/auth.guard';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
{path:'home-page',component:HomePageComponent},
{path:'blog-page',component:BlogpageComponent,canActivate: [AuthGuard]},
{path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
{path:'signup',component:SignupComponent},//,canActivate: [AuthGuard]
{path:'login',component:LoginComponent},
{path:"",redirectTo:'/home-page',pathMatch:"full"}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [ HomePageComponent,SignupComponent,LoginComponent ]