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
        'name':'Quản lý sản phẩm','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Danh Sách'},
          {'ten':'Giá Bán'},
          {'ten':'Kiểm kho'}
        ]
      },
      {
        'name':'Quản lý đơn hàng','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Danh Sách'},
          {'ten':'Thêm đơn mới'},
          {'ten':'ahjhj'}
        ]
      },
      {
        'name':'Quản lý nhập hàng','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Danh Sách'},
          {'ten':'Thêm phiếu nhập'},
          {'ten':'Trả Hàng nhập'}
        ]
      },
      {
        'name':'Thống kê','icon':'lnr lnr-file-empty','children':
        [
          {'ten':'Báo cáo cuối ngày'},
          {'ten':'Báo cáo tháng'},
          {'ten':'Tổng kết năm'}
        ]
      },
    ]
  }

}
