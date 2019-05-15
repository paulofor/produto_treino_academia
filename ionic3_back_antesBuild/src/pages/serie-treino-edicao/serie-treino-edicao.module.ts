

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SerieTreinoEdicaoPage } from './serie-treino-edicao';

@NgModule({
  declarations: [
    SerieTreinoEdicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(SerieTreinoEdicaoPage),
    TranslateModule.forChild()
  ],
  exports: [
    SerieTreinoEdicaoPage
  ]
})
export class SerieTreinoEdicaoPageModule { }
