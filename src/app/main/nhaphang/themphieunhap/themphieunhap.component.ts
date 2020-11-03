import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-themphieunhap',
  templateUrl: './themphieunhap.component.html',
  styleUrls: ['./themphieunhap.component.css']
})
export class ThemphieunhapComponent extends BaseComponent implements OnInit {
  response:any;
  allsp:any;
  tong:any;
  list_ij:any;
  list_ij_sum:any;
  Cost:any;
  today=new Date();
  strtoday:any;
  index:any;
  size:any;
  tongdanhmuc:any;
  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.index=1;this.size=20;
    this.strtoday=(this.today.getDay()+1)+'/'+(this.today.getMonth()+1)+'/'+this.today.getFullYear();
    this._api.get('api/QLSanPham/all-by-shop/emarket-shop/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.response = res;
      this.allsp=this.response.data;
      this.tong=this.response.totalItems;
 this.loadlist_item();
  });
}
loadlist_item(){
  this._iventoryreceiving.items.subscribe((res) => {
    this.list_ij = res;
    this.list_ij_sum=0;
    this.Cost = 0;
    for(let x of this.list_ij){
      x.money=0; 
      x.money = x.quantity * x.giahientai.gia;
      this.Cost += x.quantity * x.giahientai.gia;
      this.list_ij_sum+=Number.parseInt(x.quantity);
    } 
    this.tongdanhmuc=this.list_ij.length;
  });
}
loadPage(page){
  
  this._api.get('api/QLSanPham/all-by-shop/emarket-shop/'+page+'/'+this.size)
  .takeUntil(this.unsubscribe).subscribe(res => {
    this.response = res;
      this.allsp=this.response.data;
      this.tong=this.response.totalItems;
  });
}
addToList(item){
this._iventoryreceiving.addtoList(item);
}
removeItem(item){
  this._iventoryreceiving.deleteItem(item.maSanPham);
}
removeAll(){
  if(confirm('bạn có muốn xóa toàn bộ danh sách không?'))
  this._iventoryreceiving.removeAllItems();
}
changeQuantity(quantity,item){
  if(quantity<=0){
    if(confirm('bạn có muốn xóa sản phẩm này không?')){
      this.removeItem(item);
    } else this.changeQuantity(1,item);
  }else{
  item.quantity =  quantity;
  item.money = item.quantity *  item.giahientai.gia;
this._iventoryreceiving.addQty(item);
}
}
}
