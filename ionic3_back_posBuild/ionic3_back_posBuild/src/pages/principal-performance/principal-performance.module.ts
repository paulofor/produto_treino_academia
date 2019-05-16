

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PrincipalPerformancePage } from './principal-performance';

@NgModule({
  declarations: [
    PrincipalPerformancePage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPerformancePage),
    TranslateModule.forChild()
  ],
  exports: [
    PrincipalPerformancePage
  ]
})
export class PrincipalPerformancePageModule { }
