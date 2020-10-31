import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-themphieunhap',
  templateUrl: './themphieunhap.component.html',
  styleUrls: ['./themphieunhap.component.css']
})
export class ThemphieunhapComponent extends BaseComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.loadScripts();
  }

}
