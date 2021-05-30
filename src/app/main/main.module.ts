import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';

import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { KhoaComponent } from './khoa/khoa.component';
import { ChuongTrinhDaoTaoComponent } from './chuong-trinh-dao-tao/chuong-trinh-dao-tao.component';
import { NganhComponent } from './nganh/nganh.component';
import { ChuongTrinhDaoTaoModule } from './chuong-trinh-dao-tao/chuong-trinh-dao-tao.module';
import { ChuyenNganhComponent } from './chuyen-nganh/chuyen-nganh.component';


@NgModule({
  declarations: [
    DashboardComponent, MainComponent,
    NavbarComponent, SidebarComponent, MonHocComponent, KhoaComponent, NganhComponent, ChuyenNganhComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    LayoutsModule,
    ChuongTrinhDaoTaoModule


  ]
})
export class MainModule { }
