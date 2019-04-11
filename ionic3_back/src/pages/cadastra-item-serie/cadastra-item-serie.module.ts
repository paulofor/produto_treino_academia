

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastraItemSeriePage } from './cadastra-item-serie';

@NgModule({
  declarations: [
    CadastraItemSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraItemSeriePage),
    TranslateModule.forChild()
  ],
  exports: [
    CadastraItemSeriePage
  ]
})
export class CadastraItemSeriePageModule { }
