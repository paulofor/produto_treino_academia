

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioListaPage } from './exercicio-lista';

@NgModule({
  declarations: [
    ExercicioListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioListaPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExercicioListaPage
  ]
})
export class ExercicioListaPageModule { }
