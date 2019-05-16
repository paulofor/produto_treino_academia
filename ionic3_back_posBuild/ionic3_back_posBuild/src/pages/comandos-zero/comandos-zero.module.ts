

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComandosZeroPage } from './comandos-zero';

@NgModule({
  declarations: [
    ComandosZeroPage,
  ],
  imports: [
    IonicPageModule.forChild(ComandosZeroPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComandosZeroPage
  ]
})
export class ComandosZeroPageModule { }
