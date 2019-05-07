

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExecutaTreinoPage } from './executa-treino';

@NgModule({
  declarations: [
    ExecutaTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutaTreinoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExecutaTreinoPage
  ]
})
export class ExecutaTreinoPageModule { }
