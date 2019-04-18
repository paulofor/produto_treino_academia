import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Exercicio, ExercicioApi, GrupoMuscularApi, DiaTreinoApi, UsuarioApi } from '../../shared/sdk';
import { ExercicioCadastroPageBase } from './exercicio-cadastro-base';

@IonicPage()
@Component({
  selector: 'page-exercicio-cadastro',
  templateUrl: 'exercicio-cadastro.html'
})
export class ExercicioCadastroPage extends ExercicioCadastroPageBase {


  protected inicializacaoComplementos() {
    this.carregaGrupoMuscular();
  }
  protected criaItem(): Exercicio {
    return new Exercicio();
  }


 


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public srv: ExercicioApi,
    public srvGrupoMuscular: GrupoMuscularApi,
    public srvDiaTreino: DiaTreinoApi,
    public srvUsuario: UsuarioApi,
  ) {
    super(navParams, navCtrl, srv, srvGrupoMuscular, srvDiaTreino, srvUsuario);
  }



}
