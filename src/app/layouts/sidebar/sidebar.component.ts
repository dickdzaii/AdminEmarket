import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
menus:any;
  ngOnInit(): void {
    this.menus=[
      {
        'name':'quản lý sản phẩm','action':'qlsp','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Danh Sách','link':'san-pham'},
          {'ten':'Giá Bán','link':'gia-ban'},
          {'ten':'Kiểm kho','link':'kiem-kho'}
        ]
      },
      {
        'name':'quản lý đơn hàng','action':'qldh','icon':'lnr lnr-file-empty','children':
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
          {'ten':'Thêm phiếu nhập','link':'them-phieu-nhap'},
          {'ten':'Trả Hàng nhập','link':'tra-hang-nhap'}
        ]
      },
      {
        'name':'Thống kê','action':'tkbc','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Báo cáo cuối ngày','link':'bao-cao-cuoi-ngay'},
          {'ten':'Báo cáo tháng','link':'cuoi-thang/'},
          {'ten':'Tổng kết năm','link':'cuoi-nam'}
        ]
      },
    ]
  }

}
