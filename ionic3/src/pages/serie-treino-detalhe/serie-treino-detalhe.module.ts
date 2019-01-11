

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SerieTreinoDetalhePage } from './serie-treino-detalhe';

@NgModule({
  declarations: [
    SerieTreinoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(SerieTreinoDetalhePage)
  ],
  exports: [
    SerieTreinoDetalhePage
  ]
})
export class SerieTreinoDetalhePageModule { }
