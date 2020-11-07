import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }
menus:any;
  ngOnInit(): void {
    this.menus=[
      {
        'name':'quản lý sản phẩm','action':'qlsp','icon':'lnr-laptop-phone','children':
        [
          {'ten':'Danh Sách','link':'san-pham'},
         
          {'ten':'Kiểm kho','link':'kiem-kho'}
        ]
      },
      {
        'name':'quản lý đơn hàng','action':'qldh','icon':'lnr lnr-dice','children':
        [
          {'ten':'Danh Sách','link':'don-hang'},
          {'ten':'Thêm đơn mới','link':'them-don-hang'},
          {'ten':'ahjhj','link':'quan-ly-san-pham'}
        ]
      },
      {
        'name':'quản lý nhập hàng','action':'qlnh','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Danh Sách','link':'nhap-hang'},
          {'ten':'Thêm phiếu nhập','link':'nhap-hang/new'},
          {'ten':'Trả Hàng nhập','link':'tra-hang-nhap'}
        ]
      },
      {
        'name':'Thống kê','action':'tkbc','icon':'lnr lnr-chart-bars','children':
        [
          {'ten':'Báo cáo cuối ngày','link':'bao-cao-cuoi-ngay'},
          {'ten':'Báo cáo tháng','link':'thong-ke/thang/'},
          {'ten':'Tổng kết năm','link':'thong-ke/nam'}
        ]
      },
    ]
    this.loadScripts();
  }

}
