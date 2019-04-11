

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExercicioCadastroPage } from './exercicio-cadastro';

@NgModule({
  declarations: [
    ExercicioCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioCadastroPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExercicioCadastroPage
  ]
})
export class ExercicioCadastroPageModule { }
