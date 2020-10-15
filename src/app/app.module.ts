import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageloiComponent } from './layouts/pageloi/pageloi.component';
// import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageloiComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MainModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
