import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }
  menus: any;
  ngOnInit(): void {
    this.menus = [
      {
        name: 'Khoa', 'action': 'khoa', 'children':
          [
            { 'ten': 'Danh Sách', 'link': 'khoa' },
          ]
      },
      {
        'name': 'Ngành', 'action': 'nganh', 'icon': 'lnr-laptop-phone',
        'children':
          [
            { 'ten': 'Danh Sách', 'link': 'nganh' },
          ]
      },
      {
        'name': 'Chuyên ngành', 'action': 'cnganh', 'icon': 'lnr-laptop-phone',
        'children':
          [
            { 'ten': 'Danh Sách', 'link': 'chuyen-nganh' },
          ]
      },
      {
        'name': 'Môn học', 'action': 'monHoc', 'icon': 'lnr-laptop-phone',
        'children':
          [
            { 'ten': 'Danh Sách', 'link': 'mon-hoc' },
          ]
      }
      , {
        'name': 'Chương trình đào tạo', 'action': 'ctDT', 'icon': 'lnr-laptop-phone',
        'children':
          [
            { 'ten': 'Danh Sách', 'link': 'chuong-trinh-dao-tao' },
            { 'ten': 'Thêm chương trình', 'link': 'chuong-trinh-dao-tao/create' },
          ]
      }
    ]
    this.loadScripts();
  }

}
