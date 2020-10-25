import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongkethang',
  templateUrl: './thongkethang.component.html',
  styleUrls: ['./thongkethang.component.css']
})
export class ThongkethangComponent implements OnInit {
 data:any;
 type:any;
 options:any;
  constructor() { 
   
  }

  ngOnInit(): void {
    this.data= [
      ['Điện tử điện lạnh', 8136000],
      ['Thời Trang -Phụ Kiện', 8538000],
      ['Điện thoại-Máy Tính Bảng', 2244000],
      ['Văn Phòng Phẩm', 3470000],
      ['Mẹ Và Bé', 19500000],
      
    ];
    this.type="PieChart";
    this.options={is3D: true}
  }

}
