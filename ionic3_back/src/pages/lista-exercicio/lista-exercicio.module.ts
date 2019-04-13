

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaExercicioPage } from './lista-exercicio';

@NgModule({
  declarations: [
    ListaExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaExercicioPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaExercicioPage
  ]
})
export class ListaExercicioPageModule { }
