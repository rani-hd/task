import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard/auth.guard';

const routes: Routes = [
// {path:'search',component:SearchComponent,canActivate: [AuthGuard]},
{path:'home-page',component:HomePageComponent},
{path:'singup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:"",redirectTo:'/singup',pathMatch:"full"}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [ HomePageComponent,SignupComponent,LoginComponent ]