import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent extends BaseComponent implements OnInit {
index:any;
size:any;
val:any;
donhangs:any;
total:any;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.index=1;this.size=20;
    this.donhangs=[];
    this.total=0;
      this._api.get('api/QLDonHang/getbyshop/s0001/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.val = res;
      this.donhangs=this.val.data;
      this.total=this.val.totalItems;
    
    }, err => { });
  }
  loadPage(page){
    this._api.get('api/QLDonHang/getbyshop/s0001/'+page+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.val = res;
      this.donhangs=this.val.data;
      this.total=this.val.totalItems;

    }, err => { });
  }
  changeStatus(madon){
    this._api.get('api/QLDonHang/change-stt/'+madon).takeUntil(this.unsubscribe).subscribe(res => {
      this.val = res;
      this.loadPage(1);

    }, err => { });
  }
}
