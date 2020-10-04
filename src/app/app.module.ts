import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageloiComponent } from './layouts/pageloi/pageloi.component';
// import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PageloiComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
