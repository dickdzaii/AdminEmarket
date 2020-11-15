import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-thongkenam',
  templateUrl: './thongkenam.component.html',
  styleUrls: ['./thongkenam.component.css']
})
export class ThongkenamComponent extends BaseComponent implements OnInit {
  //this year and last year data
  thisyear:any; lastyear:any;
  //static var
  mashop:any;nam:any;type:any;  options:any;
  //comparison
  tyledoanhthu:any;tyleloinhuan:any;tyledonhang:any;
  constructor(injector:Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.type="PieChart";
    this.options={is3D: true}
    this.thisyear=[];
    this.lastyear=[];

    this.mashop='s0001';let tg=new Date();
    this.nam = tg.getFullYear();//0 to 11
    this.thisyear.chiphinhap=0;
    this._api.get('api/thongke/nam/'+this.mashop+'/'+this.nam).takeUntil(this.unsubscribe).subscribe(res => {
      this.thisyear.data = res;
      this.thisyear.donvixuat=this.thisyear.data.totalAmount;
      this.thisyear.doanhthu=this.thisyear.data.totalValue;
      this.thisyear.doanhthuloai=this.thisyear.data.incomebycates;
      this.thisyear.spbanchay=this.thisyear.data.spbanchay;
      this.thisyear.dsdonhang=this.thisyear.data.dsdh;
     this.thisyear.tysuatloai=this.doanhthutheoloai(this.thisyear.doanhthuloai);
     console.log(  this.thisyear.doanhthu);
      setTimeout(() => {
        this.loadScripts();
      }, );
    }, err => { });
    
    this.lastYear(this.mashop,(this.nam-1));
    
    

  }
  doanhthutheoloai(arr:any){
    let tg=[];
    arr.forEach(element => {
      let t=[element.tenLoai,Number.parseInt(element.income)]
      tg.push(t);
    });
return tg;
  }
  lastYear(mashop,curryear){
    this.lastyear=[];
    this.lastyear.chiphinhap=0;
    this._api.get('api/thongke/nam/'+mashop+'/'+curryear).takeUntil(this.unsubscribe).subscribe(res => {
      this.lastyear.data = res;
      this.lastyear.donvixuat=this.lastyear.data.totalAmount;
      this.lastyear.doanhthu=this.lastyear.data.totalValue;
      this.lastyear.doanhthuloai=this.lastyear.data.incomebycates;
      this.lastyear.spbanchay=this.lastyear.data.spbanchay;
      this.lastyear.dsdonhang=this.lastyear.data.dsdh;
     this.lastyear.tysuatloai=this.doanhthutheoloai(this.lastyear.doanhthuloai);
   
   
    }, err => { });
  }
  xemchitietloai(){
    this._api.get('api/thongke/nam/').takeUntil(this.unsubscribe).subscribe(res => {
      this.lastyear.data = res;});
  }
}