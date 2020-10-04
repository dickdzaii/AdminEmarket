import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import {Routes,RouterModule} from '@angular/router';
import { MainComponent } from './main.component';
const routes: Routes = [
  {path:'',component:MainComponent
}
];
@NgModule({
  declarations: [
    DashboardComponent,
    SanphamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
