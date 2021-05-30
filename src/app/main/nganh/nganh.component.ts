import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/services/base.component';
declare var $: any;
@Component({
  selector: 'app-nganh',
  templateUrl: './nganh.component.html',
  styleUrls: ['./nganh.component.css']
})
export class NganhComponent extends BaseComponent implements OnInit {
  formdata: any;
  dsKhoa: any;
  response: any;
  doneSetupForm = false;
  submitted = false;
  isCreate: any;
  single_item: any;
  showUpdateModal: any;
  api = 'api/nganh';
  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadNganh();

  }
  get f() { return this.formdata.controls; }
  loadNganh() {
    this._api.get(this.api + '/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.response = res;

    }, err => { });
  }
  loadPage(page) {

  }
  loadKhoa() {
    this._api.get('api/khoa' + '/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.dsKhoa = res;

    }, err => { });
  }
  createModal() {
    this.loadKhoa();
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.single_item = null;
    setTimeout(() => {
      $('#NganhModal').modal('toggle');
      this.formdata = this.fb.group({
        'manganh': ['', Validators.required],
        'tennganh': ['', Validators.required],
        'khoa': ['', Validators.required,Validators.minLength(2)],
      });
      // this.formdata.get('ngaysinh').setValue(this.today);
      // this.formdata.get('gioitinh').setValue(this.genders[0].value); 
      // this.formdata.get('role').setValue(this.roles[0].value);
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
        maNganh: value.manganh,
        tenNganh: value.tennganh,
        makhoa: value.khoa,
      };
      console.log(tmp);
      
      this._api.post(this.api + '/create', tmp).takeUntil(this.unsubscribe).subscribe(res => {
        alert('Thêm thành công');
        this.loadNganh();
        this.closeModal();
      });

    } else {
      let tmp = {
        maNganh: value.manganh,
        tenNganh: value.tennganh,
        makhoa: value.khoa,
      };
      this._api.post(this.api + '/update', tmp).takeUntil(this.unsubscribe).subscribe(res => {
        alert('Cập nhật thành công');
        this.loadNganh();
        this.closeModal();
      });

    }
  }
  xoaNganh(ma) {
    if (confirm("bạn có muốn xóa?")) {
      this._api.get(this.api + '/delete/' + ma)
        .takeUntil(this.unsubscribe).subscribe(res => {
          this.loadNganh();
        });
    }
  }

  reset() {
    this.single_item = null;
    this.formdata = this.fb.group({
      'manganh': ['', Validators.required],
      'tennganh': ['', Validators.required],
      'khoa': ['',Validators.required],
    });
  }

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#NganhModal').modal('toggle');
      this._api.get(this.api + '/get-by-id/' + row.maNganh).takeUntil(this.unsubscribe).subscribe((res: any) => {
        this.single_item = res;
        // let ngaysinh = new Date(this.single_item.ngaysinh);
        this.formdata = this.fb.group({
          'manganh': [this.single_item.maNganh, Validators.required],
          'tennganh': [this.single_item.tenNganh, Validators.required],
          'khoa': [this.single_item.maKhoa],
        });
        this.doneSetupForm = true;
      });
    }, 700);
  }

  closeModal() {
    $('#NganhModal').closest('.modal').modal('hide');
  }

  checkSameValue(value, compareToValue) {
    return value === compareToValue;
  }
}
