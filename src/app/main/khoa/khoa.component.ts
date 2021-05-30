import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/services/base.component';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { FileUpload } from 'primeng/fileupload';
import { element } from 'protractor';
declare var $: any;


@Component({
  selector: 'app-khoa',
  templateUrl: './khoa.component.html',
  styleUrls: ['./khoa.component.css']
})
export class KhoaComponent  extends BaseComponent implements OnInit {
  api = 'api/khoa';
  response: any;
  loais: any; loai1s: any; loai2s: any;
  list_item: any;
  index: any;
  size: any;
  public single_item: any;
  public totalRecords: any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formSearch: any;
  public formdata: any;
  public formlsgia: any;
  public doneSetupForm: any;
  public showUpdateModal: any;
  public isCreate: any;
  submitted:any
  constructor(private injector:Injector,private fb:FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
   this.loadKhoa();
  }
  loadKhoa(){
    this._api.get('api/khoa/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.response = res;
    
    }, err => { });
  }
  loadPage(page) {
    let keyWord = this.formSearch.get('tenSp') && this.formSearch.get('tenSp').value.trim() != '' ? this.formSearch.get('tenSp').value.trim() : '%20';
    let maloai1 = this.formSearch.get('loai1') && this.formSearch.get('loai1').value.trim() != '' ? this.formSearch.get('loai1').value.trim() : '%20';
    let maloai2 = this.formSearch.get('loai2') && this.formSearch.get('loai2').value.trim() ? this.formSearch.get('loai2').value.trim() : '%20';
    let lowToHighPrice = this.formSearch.get('lowToHighPrice').value ?? null;    //let newestFirst = this.formSearch.get('ten').value.toString() ?? null;
    let min = this.formSearch.get('giaMin') && this.formSearch.get('giaMin').value.trim() != '' ? parseInt(this.formSearch.get('giaMin').value) : 0;
    let max = this.formSearch.get('giaMax') && this.formSearch.get('giaMax').value.trim() != '' ? parseInt(this.formSearch.get('giaMax').value) : 0;
    let maloai = this.formSearch.get('loai') && this.formSearch.get('loai').value.trim() != '' ? parseInt(this.formSearch.get('loai').value) : 0;
    this._api.get(this.api + '/search/result/' + keyWord + '/' + '%20' + '/' + maloai + '/' + maloai1 + '/' + maloai2 + '/' + min + '/' + max + '/' + page + '/' + this.size + '/' + lowToHighPrice)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.response = res;
        this.list_item = this.response.data;
        this.totalRecords = this.response.totalItems;
      });
  }


  pwdCheckValidator(control) {
    var filteredStrings = { search: control.value, select: '@#!$%&*' }
    var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
    if (control.value.length < 6 || !result) {
      return { matkhau: true };
    }
  }

  search() {
    let keyWord = this.formSearch.get('tenSp') && this.formSearch.get('tenSp').value.trim() != '' ? this.formSearch.get('tenSp').value.trim() : '%20';
    let maloai1 = this.formSearch.get('loai1') && this.formSearch.get('loai1').value.trim() != '' ? this.formSearch.get('loai1').value.trim() : '%20';
    let maloai2 = this.formSearch.get('loai2') && this.formSearch.get('loai2').value.trim() ? this.formSearch.get('loai2').value.trim() : '%20';
    let lowToHighPrice = this.formSearch.get('lowToHighPrice').value ?? null;
    //let newestFirst = this.formSearch.get('ten').value.toString() ?? null;
    let min = this.formSearch.get('giaMin') && this.formSearch.get('giaMin').value.trim() != '' ? parseInt(this.formSearch.get('giaMin').value) : 0;
    let max = this.formSearch.get('giaMax') && this.formSearch.get('giaMax').value.trim() != '' ? parseInt(this.formSearch.get('giaMax').value) : 0;
    let maloai = this.formSearch.get('loai') && this.formSearch.get('loai').value.trim() != '' ? parseInt(this.formSearch.get('loai').value) : 0;
    this._api.get(this.api + '/search/result/' + keyWord + '/' + '%20' + '/' + maloai + '/' + maloai1 + '/' + maloai2 + '/' + min + '/' + max + '/' + this.index + '/' + this.size + '/' + lowToHighPrice)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.response = res;
        this.list_item = this.response.data;
        this.totalRecords = this.response.totalItems;
      });
  }

  resetSearchForm() {
    this.formSearch = this.fb.group({
      'tenSp': [''],
      'giaMin': [''],
      'giaMax': [''],
      'loai': [''],
      'loai1': [''],
      'loai2': [''],
      'lowToHighPrice': ['']
    });
  }

  get f() { return this.formdata.controls; }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.single_item = null;
    setTimeout(() => {
      $('#khoaModal').modal('toggle');
      this.formdata = this.fb.group({
        'makhoa': ['', Validators.required],
        'tenkhoa': ['', Validators.required],
        'sdt': [''],
      });
      this.doneSetupForm = true;
    });
  }

  onSubmit(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
    if (this.isCreate) {
        let tmp = {
          maKhoa: value.makhoa,
          tenKhoa: value.tenkhoa,
          soDienThoai: value.sdt,
        };
        this._api.post(this.api + '/create', tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.loadKhoa();
          this.closeModal();
        }); 
    } else { 
        let tmp = { 
          maKhoa: value.makhoa,
          tenKhoa: value.tenkhoa,
          soDienThoai: value.sdt,
        };
        this._api.post(this.api + '/update', tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.loadKhoa();
          this.closeModal();
        });
    }
  }

  xoaKhoa(ma) {
    if (confirm("bạn có muốn xóa?")) {
      this._api.get(this.api + '/delete/' + ma)
        .takeUntil(this.unsubscribe).subscribe(res => {
this.loadKhoa();
        });
    }
    
  }

  reset() {
    this.single_item = null;
    this.formdata = this.fb.group({
      'makhoa': ['', Validators.required],
      'tenkhoa': ['', Validators.required],
      'sdt': [''],
    });
  }

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#khoaModal').modal('toggle');
      this._api.get(this.api + '/get-by-id/' + row.makhoa).takeUntil(this.unsubscribe).subscribe((res: any) => {
        this.single_item = res;
        // let ngaysinh = new Date(this.single_item.ngaysinh);
        this.formdata = this.fb.group({
          'makhoa': [this.single_item.makhoa, Validators.required],
          'tenkhoa': [this.single_item.tenkhoa, Validators.required],
          'sdt': [this.single_item.soDienThoai],
        
        });
        this.doneSetupForm = true;
      });
    }, 700);
  }

  closeModal() {
    $('#khoaModal').closest('.modal').modal('hide');
  }

}



