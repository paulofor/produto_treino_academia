import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Usuario, UsuarioApi, LoopBackFilter } from '../../shared/sdk';
import { Page } from 'ionic-angular/navigation/nav-util';



export abstract class LoginPageBase {

  protected usuario: Usuario;
  protected loginForm: FormGroup;
  protected erroMsg: string;
  
  abstract getPaginaInicial() : Page;
  abstract getMensagemNaoEncontrado() : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    protected formBuilder: FormBuilder, protected srv: UsuarioApi, protected storage: Storage) {
    this.loginForm = this.formBuilder.group({
      login: '',
      senha: ''
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onSubmit() {
    var email = this.loginForm.get("login").value;
    var senha = this.loginForm.get("senha").value;
    var filtro:LoopBackFilter = {
      'where' : { 'and' : [{'email' : email} , {'senha' : senha }]}
    }
    this.srv.findOne(filtro)
      .subscribe(
        (result:Usuario) => {
          console.log('UserLogin: ' , result);
          this.storage.set('user' , result);
          this.mudaTela();
        },
        (erro) => {
          console.log('Erro login: ' , erro);
          this.erroMsg = this.getMensagemNaoEncontrado();
        }
      )
  }

  mudaTela() {
    this.navCtrl.push(this.getPaginaInicial()).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
    });
  }



}
