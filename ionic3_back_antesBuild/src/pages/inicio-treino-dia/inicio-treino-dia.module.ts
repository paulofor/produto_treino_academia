

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InicioTreinoDiaPage } from './inicio-treino-dia';

@NgModule({
  declarations: [
    InicioTreinoDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioTreinoDiaPage),
    TranslateModule.forChild()
  ],
  exports: [
    InicioTreinoDiaPage
  ]
})
export class InicioTreinoDiaPageModule { }
