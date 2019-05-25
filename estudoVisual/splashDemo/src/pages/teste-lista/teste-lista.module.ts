import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteListaPage } from './teste-lista';

@NgModule({
  declarations: [
    TesteListaPage,
  ],
  imports: [
    IonicPageModule.forChild(TesteListaPage),
  ],
})
export class TesteListaPageModule {}
