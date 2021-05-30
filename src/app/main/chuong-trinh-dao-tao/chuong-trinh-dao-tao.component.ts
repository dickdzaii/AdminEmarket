import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/services/base.component';
declare var $: any;
@Component({
  selector: 'app-chuong-trinh-dao-tao',
  templateUrl: './chuong-trinh-dao-tao.component.html',
  styleUrls: ['./chuong-trinh-dao-tao.component.css']
})
export class ChuongTrinhDaoTaoComponent extends BaseComponent implements OnInit {
  response: any;
  showUpdateModal = false;
  doneSetupForm = false;
  isCreate: any;
  single_item: any;
  formdata: any;
  api = 'api/chuong-trinh-dao-tao';
  constructor(private injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadCTDT();
  }

  loadCTDT() {
    this._api.get(this.api + '/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.response = res;

    }, err => { });
  }
  

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.single_item = null;
    setTimeout(() => {
      $('#CTDTModal').modal('toggle');
      this.formdata = this.fb.group({
        'mactdt': ['', Validators.required],
        'tenctdt': ['', Validators.required],
        'chuyennganh': [''],
        'hedaotao': [1, Validators.required],
      });
      // this.formdata.get('ngaysinh').setValue(this.today);
      // this.formdata.get('gioitinh').setValue(this.genders[0].value); 
      // this.formdata.get('role').setValue(this.roles[0].value);
      this.doneSetupForm = true;
    });
  }

  closeModal() {
    $('#CTDTModal').closest('.modal').modal('hide');
  }
}
