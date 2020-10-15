import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,MainComponent,
    SanphamComponent,NavbarComponent,SidebarComponent
  ],
  imports: [
    CommonModule,MainRoutingModule,FormsModule
  ]
})
export class MainModule { }
