

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CriaSerieWorkPage } from './cria-serie-work';

@NgModule({
  declarations: [
    CriaSerieWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaSerieWorkPage),
    TranslateModule.forChild()
  ],
  exports: [
    CriaSerieWorkPage
  ]
})
export class CriaSerieWorkPageModule { }
