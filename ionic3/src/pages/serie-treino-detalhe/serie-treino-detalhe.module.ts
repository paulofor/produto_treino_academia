

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SerieTreinoDetalhePage } from './serie-treino-detalhe';

@NgModule({
  declarations: [
    SerieTreinoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(SerieTreinoDetalhePage),
    TranslateModule.forChild()
  ],
  exports: [
    SerieTreinoDetalhePage
  ]
})
export class SerieTreinoDetalhePageModule { }
