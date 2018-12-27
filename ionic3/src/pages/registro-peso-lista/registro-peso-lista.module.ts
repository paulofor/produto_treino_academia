

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RegistroPesoListaPage } from './registro-peso-lista';

@NgModule({
  declarations: [
    RegistroPesoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPesoListaPage),
    TranslateModule.forChild()
  ],
  exports: [
    RegistroPesoListaPage
  ]
})
export class RegistroPesoListaPageModule { }
