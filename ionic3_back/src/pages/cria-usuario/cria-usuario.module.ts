import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaUsuarioPage } from './cria-usuario';

@NgModule({
  declarations: [
    CriaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaUsuarioPage),
  ],
})
export class CriaUsuarioPageModule {}
