import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LoaiComponent } from './loai/loai.component';
import { KhachhangComponent } from './khachhang/khachhang.component';



@NgModule({
  declarations: [SanphamComponent, LoaiComponent, KhachhangComponent],
  imports: [
    CommonModule
  ]
})
export class DanhsachModule { }
