

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioDetalhePage } from './exercicio-detalhe';

@NgModule({
  declarations: [
    ExercicioDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioDetalhePage)
  ],
  exports: [
    ExercicioDetalhePage
  ]
})
export class ExercicioDetalhePageModule { }
