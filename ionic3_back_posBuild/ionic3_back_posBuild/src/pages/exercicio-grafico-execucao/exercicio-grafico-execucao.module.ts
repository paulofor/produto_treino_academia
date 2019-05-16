

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioGraficoExecucaoPage } from './exercicio-grafico-execucao';

@NgModule({
  declarations: [
    ExercicioGraficoExecucaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioGraficoExecucaoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExercicioGraficoExecucaoPage
  ]
})
export class ExercicioGraficoExecucaoPageModule { }
