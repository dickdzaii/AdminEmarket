
import { Injector, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf, Subject } from 'rxjs';
import { ApiService } from './api.service';
export class BaseComponent {
   public unsubscribe = new Subject();
   public _renderer:any;
   public genders: any;
   public roles: any;
   public locale_vn:any;
   public today: any;
   public dateFormat: any;
   public _api: ApiService;
   public _route: ActivatedRoute;
   constructor(injector: Injector) {  
      this._renderer = injector.get(Renderer2);
      this._api = injector.get(ApiService);
      this._route = injector.get(ActivatedRoute);
      } 
   public loadScripts() {
         this.renderExternalScript('assets/vendor/jquery/jquery.min.js').onload = () => {
         }
	this.renderExternalScript('assets/vendor/bootstrap/js/bootstrap.min.js').onload = () => {
         }
	this.renderExternalScript('assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js').onload = () => {
         }
	this.renderExternalScript('assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js').onload = () => {
         }
	this.renderExternalScript('assets/vendor/chartist/js/chartist.min.js').onload = () => {
         }
	this.renderExternalScript('assets/scripts/klorofil-common.js').onload = () => {
         }
       }
   public renderExternalScript(src: string): HTMLScriptElement {
         const script = document.createElement('script');
         script.type = 'text/javascript';
         script.src = src;
         script.async = true;
         script.defer = true;
         this._renderer.appendChild(document.body, script);
         return script;
       }
}