import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

{
  path: "home",
  component: HomeComponent
},
{
  path: "post",
  component: PostComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "logout",
  component: LogoutComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
