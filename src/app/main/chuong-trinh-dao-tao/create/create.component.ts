import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/services/base.component';
declare var $: any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {
  formdata: any; submitted: any;
  dsNganh: any;
  dsHeDT: any;
  formMonHoc: any;
  dsMonHoc: any;
  allMonHoc: any;
  len: any;
  tongSoTC: any;
  tongSoTCBatBuoc: any;
  doneSetupForm: any;
  constructor(private injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildCreateForm();
    this.loadMonHoc();
    this.showMonHoc();
    this.loadNganh();
    this.loadHeDT();
  }
  buildCreateForm() {
    this.formdata = this.fb.group({
      'maCTDT': ['', Validators.required],
      'tenCTDT': ['', Validators.required],
      'maChuyenNganh': ['', Validators.required],
      'maHe': ['', Validators.required],
      'namApDung': [new Date().getFullYear, Validators.required],
      'nguoiKy': ['', Validators.required]
    });
  }

  addMonHoc(monhoc) {
    this._ctdt.addtoList(monhoc);
  }

  showMonHoc() {
    this._ctdt.items.subscribe((res) => {
      this.dsMonHoc = res;
      let [all, lt, th] = [0, 0, 0];//tong/lt/th
      this.tongSoTCBatBuoc = 0;
      this.len = this.dsMonHoc.length;
      if (this.dsMonHoc.length == 0) return;
      for (let x of this.dsMonHoc) {
        all += x.soTCLyThuyet + x.soTCThucHanh;
        lt += x.soTCLyThuyet;
        th += x.soTCThucHanh;
      }
      this.tongSoTC = [all, lt, th];
    });
  }

  createModal() {
    this.doneSetupForm = false;
    setTimeout(() => {
      $('#MonHocModal').modal('toggle');
      this.formMonHoc = this.fb.group({
        'mamon': ['', Validators.required],
        'tenmon': ['', Validators.required],
        'khoikienthuc': [''],
        'sotclt': [1, Validators.required],
        'sotcth': [1, Validators.required],
      });
      // this.formdata.get('ngaysinh').setValue(this.today);
      // this.formdata.get('gioitinh').setValue(this.genders[0].value); 
      // this.formdata.get('role').setValue(this.roles[0].value);
      this.doneSetupForm = true;
    });
  }
  get f() { return this.formMonHoc.controls; }
  loadNganh() {
    this._api.get('api/chuyenNganh' + '/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.dsNganh = res;

    }, err => { });
  }

  loadHeDT() {
    this._api.get('api/HeDaoTao' + '/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.dsHeDT = res;

    }, err => { });
  }
  onSubmit(value) {
    this.submitted = true;
    if (this.formMonHoc.invalid) {
      return;
    } {

      let tmp = {
        maMon: value.mamon,
        tenMon: value.tenmon,
        khoiKienThuc: value.khoikienthuc,
        soTCLyThuyet: Number.parseFloat(value.sotclt),
        soTCThucHanh: Number.parseFloat(value.sotcth)

      };
      this._api.post('api/MonHoc' + '/create', tmp).takeUntil(this.unsubscribe).subscribe(res => {
        this.addMonHoc(tmp);
        this.closeModal();
        this.submitted = false;
      });

    }
  }
  reset() {
    this.formdata = this.fb.group({
      'mamon': ['', Validators.required],
      'tenmon': ['', Validators.required],
      'khoikienthuc': [''],
      'sotclt': [0, Validators.required],
      'sotcth': [0, Validators.required]
    });
    this.xoaTatCaMonHoc();
    this.showMonHoc();
  }
  xoaTatCaMonHoc() {
    this._ctdt.removeAllItems();
  }
  loadMonHoc() {
    this._api.get('api/monhoc/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.allMonHoc = res;

    }, err => { });
  }
  closeModal() {
    $('#MonHocModal').closest('.modal').modal('hide');
  }
}
