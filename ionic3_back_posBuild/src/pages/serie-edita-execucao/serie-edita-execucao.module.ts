

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SerieEditaExecucaoPage } from './serie-edita-execucao';

@NgModule({
  declarations: [
    SerieEditaExecucaoPage,
  ],
  imports: [
    IonicPageModule.forChild(SerieEditaExecucaoPage),
    TranslateModule.forChild()
  ],
  exports: [
    SerieEditaExecucaoPage
  ]
})
export class SerieEditaExecucaoPageModule { }
