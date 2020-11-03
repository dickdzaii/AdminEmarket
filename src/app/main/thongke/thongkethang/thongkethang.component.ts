import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-thongkethang',
  templateUrl: './thongkethang.component.html',
  styleUrls: ['./thongkethang.component.css']
})
export class ThongkethangComponent extends BaseComponent implements OnInit {
  mashop:any;thang:any
  data:any;
 tysuatloai:any;
 type:any;
 options:any;
 total:any;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.mashop='s0001';let tg=new Date();
    this.thang = tg.getMonth();//0 to 11
    this._api.get('api/thongke/thang/'+this.mashop+'/'+this.thang).takeUntil(this.unsubscribe).subscribe(res => {
      this.data = res;
      setTimeout(() => {
        this.loadScripts();
      }, );
    

    
    }, err => { });
this.data.incomebycates.forEach(e => {
  let tg=new DoanhThuLoai(e.tenLoai,e.income);
  this.tysuatloai.push(tg);
});
   
    this.type="PieChart";
    this.options={is3D: true}
  }

}
export class DoanhThuLoai{
  tenLoai:any;
  income:any;
  constructor(tenloai:any,doanhthu:any){
    this.tenLoai=tenloai;
    this.income=doanhthu;
  }
}
