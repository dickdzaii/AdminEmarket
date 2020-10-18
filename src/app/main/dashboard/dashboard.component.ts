import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
hnay:any;
  constructor(injector:Injector) {
    super(injector) }
  ngOnInit(): void {
    this.hnay=Date.now();
    setTimeout(() => {
      this.loadScripts();
    },);
  }

}
