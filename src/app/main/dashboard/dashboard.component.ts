import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
donhangs:any;
index:any;
size:any;

  constructor(injector:Injector) {
    super(injector) }
  ngOnInit(): void {
    
    this._api.get('api/QLSanPham/all-with-details/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.donhangs = res;

      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  
  }

}
