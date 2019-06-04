import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Usuario, UsuarioApi, LoopBackFilter, AcaoApi, Acao } from '../../shared/sdk';
import { Page } from 'ionic-angular/navigation/nav-util';
import { MSG_SEM_INTERNET, MSG_ERRO_LOGIN } from '../../app/const';



export abstract class LoginPageBase {

  protected usuario: Usuario;
  protected loginForm: FormGroup;
  protected erroMsg: string;
  
  abstract getPaginaInicial() : Page;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    protected formBuilder: FormBuilder, protected srv: UsuarioApi, protected srvAcao: AcaoApi, protected storage: Storage) {
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
          this.executouLogin(result);
          this.storage.set("user",result).then((successData)=>{
            this.mudaTela();
          })
        },
        (erro: any) => {
          console.log('Erro login: ' , erro);
          if (erro=='Server error') {
             this.erroMsg = MSG_SEM_INTERNET;
          } else {
            if (erro.status==404) {
               this.erroMsg = MSG_ERRO_LOGIN;
               this.errouLogin();
            }
          }
          		         
        }
      )
  }

  executouLogin(usuario: Usuario) {
    let acao:Acao = new Acao();
    acao.dataHora = new Date();
    acao.nome = 'LoginOk';
    acao.usuarioId = usuario.id;
    acao.objeto = 'Login';
    console.log('Acao: ' , JSON.stringify(acao));
    this.srvAcao.create(acao)
      .subscribe(result => {
        console.log('Result: ' , result);
      })
  }

  errouLogin() {
    let acao:Acao = new Acao();
    acao.dataHora = new Date();
    acao.nome = 'LoginErro';
    //acao.usuarioId = usuario.id;
    acao.objeto = 'Login';
    console.log('Acao: ' , JSON.stringify(acao));
    this.srvAcao.create(acao)
      .subscribe(result => {
        console.log('Result: ' , result);
      })
  }

  mudaTela() {
    this.navCtrl.push(this.getPaginaInicial()).then(() => {
      let index = 0;
      this.navCtrl.remove(index);
    });
  }



}