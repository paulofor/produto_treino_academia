import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioFluxoPage } from './inicio-fluxo';

@NgModule({
  declarations: [
    InicioFluxoPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioFluxoPage),
  ],
})
export class InicioFluxoPageModule {}
