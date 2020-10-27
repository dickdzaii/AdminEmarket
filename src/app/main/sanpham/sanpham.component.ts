import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
declare var $: any;
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent extends BaseComponent implements OnInit {
list_item:any;
index:any;
size:any;
public single_item: any;
public totalRecords:any;
public pageSize = 3;
public page = 1;
public uploadedFiles: any[] = [];
public formsearch: any;
public formdata: any;
public doneSetupForm: any;  
public showUpdateModal:any;
public isCreate:any;
submitted = false;
  constructor( private fb: FormBuilder, injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.index=1;this.size=20;
    
      this._api.get('api/QLSanPham/all-with-details/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res;

    
    }, err => { });
  }
loadPage(page){
  
  this._api.get('api/QLSanPham/all-with-details/'+page+'/'+this.size)
  .takeUntil(this.unsubscribe).subscribe(res => {
    this.list_item = res;
  });
}
pwdCheckValidator(control){
  var filteredStrings = {search:control.value, select:'@#!$%&*'}
  var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
  if(control.value.length < 6 || !result){
      return {matkhau: true};
  }
}
get f() { return this.formdata.controls; }
createModal() {
  this.doneSetupForm = false;
  this.showUpdateModal = true;
  this.isCreate = true;
  this.single_item = null;
  setTimeout(() => {
    $('#SanphamModal').modal('toggle');
    this.formdata = this.fb.group({
      'tensanpham': ['', Validators.required],
      'maloai2': ['', Validators.required],
      'mota': [''],
      'ghichu': [''],
      'giaban': [0, Validators.required],
      'gianhap': [0, Validators.required],
      'soluong':[0],
    });
    // this.formdata.get('ngaysinh').setValue(this.today);
    // this.formdata.get('gioitinh').setValue(this.genders[0].value); 
    // this.formdata.get('role').setValue(this.roles[0].value);
    this.doneSetupForm = true;
  });
}
xoasp(ma){
  if(confirm("bạn có muốn xóa sản phẩm?")){
  this._api.get('api/QLSanPham/xoa/'+ma)
  .takeUntil(this.unsubscribe).subscribe(res => {
    
  });}
}
reset(){
  this.single_item = null;
  this.formdata = this.fb.group({
    'tensanpham': ['', Validators.required],
    'maloai2': ['', Validators.required],
    'mota': [''],
    'ghichu': [''],
    'giaban': [0, Validators.required],
    'gianhap': [0, Validators.required]
    
  });
}

closeModal() {
  $('#SanphamModal').closest('.modal').modal('hide');
}

}
