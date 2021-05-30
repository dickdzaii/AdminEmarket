import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { ChuyenNganhComponent } from './chuyen-nganh/chuyen-nganh.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KhoaComponent } from './khoa/khoa.component';
import { MainComponent } from './main.component';
import { MonHocComponent } from './mon-hoc/mon-hoc.component';
import { NganhComponent } from './nganh/nganh.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children:
      [
        { path: 'khoa', component: KhoaComponent },
        { path: 'mon-hoc', component: MonHocComponent },
        {path:'nganh',component:NganhComponent},
        {path:'chuyen-nganh',component:ChuyenNganhComponent},
        { path: 'chuong-trinh-dao-tao', loadChildren: () => import('./chuong-trinh-dao-tao/chuong-trinh-dao-tao.module').then(x => x.ChuongTrinhDaoTaoModule) }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
