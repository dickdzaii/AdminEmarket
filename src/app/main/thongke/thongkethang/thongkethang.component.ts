import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-thongkethang',
  templateUrl: './thongkethang.component.html',
  styleUrls: ['./thongkethang.component.css']
})
export class ThongkethangComponent extends BaseComponent implements OnInit {
  //this month and last month data
  thismonth:any; lastmonth:any;
  //static var
  mashop:any;thang:any;type:any;  options:any;
  //comparison
  tyledoanhthu:any;tyleloinhuan:any;tyledonhang:any;
  constructor(injector:Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.type="PieChart";
    this.options={is3D: true}
    this.thismonth=[];
    this.lastmonth=[];

    this.mashop='s0001';let tg=new Date();
    this.thang = tg.getMonth()+1;//0 to 11
    this.thismonth.chiphinhap=0;
    this._api.get('api/thongke/thang/'+this.mashop+'/'+this.thang).takeUntil(this.unsubscribe).subscribe(res => {
      this.thismonth.data = res;
      this.thismonth.donvixuat=this.thismonth.data.totalAmount;
      this.thismonth.doanhthu=this.thismonth.data.totalValue;
      this.thismonth.doanhthuloai=this.thismonth.data.incomebycates;
      this.thismonth.spbanchay=this.thismonth.data.spbanchay;
      this.thismonth.dsdonhang=this.thismonth.data.dsdh;
     this.thismonth.tysuatloai=this.doanhthutheoloai(this.thismonth.doanhthuloai);
     console.log(  this.thismonth.doanhthu);
      setTimeout(() => {
        this.loadScripts();
      }, );
    }, err => { });
    
    this.lastMonth(this.mashop,(this.thang-1));
    
    

  }
  doanhthutheoloai(arr:any){
    let tg=[];
    arr.forEach(element => {
      let t=[element.tenLoai,Number.parseInt(element.income)]
      tg.push(t);
    });
return tg;
  }
  lastMonth(mashop,currmonth){
    this.lastmonth=[];
    this.lastmonth.chiphinhap=0;
    this._api.get('api/thongke/thang/'+mashop+'/'+currmonth).takeUntil(this.unsubscribe).subscribe(res => {
      this.lastmonth.data = res;
      this.lastmonth.donvixuat=this.lastmonth.data.totalAmount;
      this.lastmonth.doanhthu=this.lastmonth.data.totalValue;
      this.lastmonth.doanhthuloai=this.lastmonth.data.incomebycates;
      this.lastmonth.spbanchay=this.lastmonth.data.spbanchay;
      this.lastmonth.dsdonhang=this.lastmonth.data.dsdh;
     this.lastmonth.tysuatloai=this.doanhthutheoloai(this.lastmonth.doanhthuloai);
   
   
    }, err => { });
  }
  xemchitietloai(){
    this._api.get('api/thongke/thang/').takeUntil(this.unsubscribe).subscribe(res => {
      this.lastmonth.data = res;});
  }
}