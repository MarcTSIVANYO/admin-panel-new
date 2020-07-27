import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { UsersComponent } from './components/users/users.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { SecteurComponent } from './components/secteur/secteur.component';
import { BlogComponent } from './components/blog/blog.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { NavComponent } from './components/nav/nav.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponsePasswordResetComponent } from './components/password/response-password-reset/response-password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ErrorComponent,
    UsersComponent,
    ConfigurationComponent,
    SecteurComponent,
    BlogComponent,
    AlbumComponent,
    PhotoComponent,
    NavComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    HomeComponent,
    NotFoundComponent,
    RequestResetComponent,
    ResponsePasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
