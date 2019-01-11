import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaSeriePage } from './cria-serie';

@NgModule({
  declarations: [
    CriaSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(CriaSeriePage),
  ],
})
export class CriaSeriePageModule {}
