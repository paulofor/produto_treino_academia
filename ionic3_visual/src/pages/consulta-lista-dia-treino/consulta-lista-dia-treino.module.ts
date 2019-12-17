

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ConsultaListaDiaTreinoPage } from './consulta-lista-dia-treino';

@NgModule({
  declarations: [
    ConsultaListaDiaTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaListaDiaTreinoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ConsultaListaDiaTreinoPage
  ]
})
export class ConsultaListaDiaTreinoPageModule { }
