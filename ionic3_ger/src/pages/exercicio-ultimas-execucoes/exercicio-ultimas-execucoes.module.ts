

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioUltimasExecucoesPage } from './exercicio-ultimas-execucoes';

@NgModule({
  declarations: [
    ExercicioUltimasExecucoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioUltimasExecucoesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExercicioUltimasExecucoesPage
  ]
})
export class ExercicioUltimasExecucoesPageModule { }
