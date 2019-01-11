

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RegistroPesoListaPage } from './registro-peso-lista';

@NgModule({
  declarations: [
    RegistroPesoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPesoListaPage)
  ],
  exports: [
    RegistroPesoListaPage
  ]
})
export class RegistroPesoListaPageModule { }
