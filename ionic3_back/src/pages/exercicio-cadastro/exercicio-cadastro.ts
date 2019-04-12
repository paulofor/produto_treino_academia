import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Exercicio, ExercicioApi, GrupoMuscularApi, DiaTreinoApi, UsuarioApi } from '../../shared/sdk';
import { ExercicioCadastroPagePageBase } from './exercicio-cadastro-base';

@IonicPage()
@Component({
  selector: 'page-exercicio-cadastro',
  templateUrl: 'exercicio-cadastro.html'
})
export class ExercicioCadastroPage extends ExercicioCadastroPagePageBase {

  protected inicializacao() {
    this.carregaGrupoMuscular();
  }
  item: Exercicio;

  constructor(
    public srv: ExercicioApi,
    public srvGrupoMuscular: GrupoMuscularApi,
    public srvDiaTreino: DiaTreinoApi,
    public srvUsuario: UsuarioApi,
  ) {
    super(srv, srvGrupoMuscular, srvDiaTreino, srvUsuario);
  }

  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Exercicio) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }



}
