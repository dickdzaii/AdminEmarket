import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageloiComponent } from './layouts/pageloi/pageloi.component';
import { MainComponent } from './main/main.component';
// import { MainModule } from './main/main.module';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageloiComponent,
    // MainComponent,
    LoginComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
