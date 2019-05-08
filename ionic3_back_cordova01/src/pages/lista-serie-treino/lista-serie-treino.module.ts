

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListaSerieTreinoPage } from './lista-serie-treino';

@NgModule({
  declarations: [
    ListaSerieTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSerieTreinoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaSerieTreinoPage
  ]
})
export class ListaSerieTreinoPageModule { }
