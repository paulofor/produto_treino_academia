

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { EscolhaSerieTreinoPage } from './escolha-serie-treino';

@NgModule({
  declarations: [
    EscolhaSerieTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolhaSerieTreinoPage),
    TranslateModule.forChild()
  ],
  exports: [
    EscolhaSerieTreinoPage
  ]
})
export class EscolhaSerieTreinoPageModule { }
