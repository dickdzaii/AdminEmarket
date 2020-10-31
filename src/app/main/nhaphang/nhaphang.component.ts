import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';

@Component({
  selector: 'app-nhaphang',
  templateUrl: './nhaphang.component.html',
  styleUrls: ['./nhaphang.component.css']
})
export class NhaphangComponent extends BaseComponent  implements OnInit {

  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
