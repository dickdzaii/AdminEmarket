import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SanphamComponent } from './sanpham/sanpham.component';



@NgModule({
  declarations: [DashboardComponent, SanphamComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
