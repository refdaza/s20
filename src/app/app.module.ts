import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInterceptor } from './interceptors/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    LogoutComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
    AppRoutingModule, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}

