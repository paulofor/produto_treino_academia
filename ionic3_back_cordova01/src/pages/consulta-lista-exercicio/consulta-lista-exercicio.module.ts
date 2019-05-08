

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ConsultaListaExercicioPage } from './consulta-lista-exercicio';

@NgModule({
  declarations: [
    ConsultaListaExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaListaExercicioPage),
    TranslateModule.forChild()
  ],
  exports: [
    ConsultaListaExercicioPage
  ]
})
export class ConsultaListaExercicioPageModule { }
