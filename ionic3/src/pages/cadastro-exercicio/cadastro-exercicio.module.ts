import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroExercicioPage } from './cadastro-exercicio';

@NgModule({
  declarations: [
    CadastroExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroExercicioPage),
  ],
})
export class CadastroExercicioPageModule {}
