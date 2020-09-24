import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageloiComponent } from './layouts/pageloi/pageloi.component';
import { BaseComponent } from './services/base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DanhsachComponent,
    HeaderComponent,
    FooterComponent,
    PageloiComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
