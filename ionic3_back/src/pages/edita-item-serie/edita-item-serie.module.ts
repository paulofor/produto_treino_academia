

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { EditaItemSeriePage } from './edita-item-serie';

@NgModule({
  declarations: [
    EditaItemSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(EditaItemSeriePage),
    TranslateModule.forChild()
  ],
  exports: [
    EditaItemSeriePage
  ]
})
export class EditaItemSeriePageModule { }
