

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DetalheDiaTreinoPage } from './detalhe-dia-treino';

@NgModule({
  declarations: [
    DetalheDiaTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheDiaTreinoPage),
    TranslateModule.forChild()
  ],
  exports: [
    DetalheDiaTreinoPage
  ]
})
export class DetalheDiaTreinoPageModule { }
