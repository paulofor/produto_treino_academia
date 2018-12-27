

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioDetalhePage } from './exercicio-detalhe';

@NgModule({
  declarations: [
    ExercicioDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioDetalhePage),
    TranslateModule.forChild()
  ],
  exports: [
    ExercicioDetalhePage
  ]
})
export class ExercicioDetalhePageModule { }
