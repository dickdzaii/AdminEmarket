import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-thongkethang',
  templateUrl: './thongkethang.component.html',
  styleUrls: ['./thongkethang.component.css']
})
export class ThongkethangComponent extends BaseComponent implements OnInit {
  mashop:any;thang:any;data:any; donvixuat:any; donvinhap:any;  doanhthu:any;
  chiphinhap:any;  dsdonhang:any;  dsphieunhap:any;  spbanchay:any;  doanhthuloai:any;
  tysuatloai:any;type:any;  options:any;
  constructor(injector:Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.mashop='s0001';let tg=new Date();
    this.thang = tg.getMonth()+1;//0 to 11
    this.chiphinhap=0;
    this._api.get('api/thongke/thang/'+this.mashop+'/'+this.thang).takeUntil(this.unsubscribe).subscribe(res => {
      this.data = res;
      this.donvixuat=this.data.totalAmount;
      this.doanhthu=this.data.totalValue;
      this.doanhthuloai=this.data.incomebycates;
      this.spbanchay=this.data.spbanchay;
      this.dsdonhang=this.data.dsdh;
     this.tysuatloai=this.doanhthutheoloai(this.doanhthuloai);
     console.log(this.tysuatloai)
      setTimeout(() => {
        this.loadScripts();
      }, );
    }, err => { });
    this.type="PieChart";
    this.options={is3D: true}
  }
  doanhthutheoloai(arr:any){
    let tg=[];
    arr.forEach(element => {
      let t=[element.tenLoai,Number.parseInt(element.income)]
      tg.push(t);
    });
return tg;
  }
}