

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CriaSeriePage } from './cria-serie';

@NgModule({
  declarations: [
    CriaSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(CriaSeriePage),
    TranslateModule.forChild()
  ],
  exports: [
    CriaSeriePage
  ]
})
export class CriaSeriePageModule { }
