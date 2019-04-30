import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Usuario, UsuarioApi } from '../../shared/sdk';



export abstract class LoginPageBase {

  usuario: Usuario;
  loginForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private formBuilder: FormBuilder, private storage: Storage,
    private usuarioAppSrv: UsuarioApi) {
    this.loginForm = this.formBuilder.group({
      login: '',
      senha: ''
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onSubmit() {
    this.usuario = new Usuario();
    this.usuario.email = this.loginForm.get("login").value;
    this.usuario.senha = this.loginForm.get("senha").value;
    this.usuario.id = 1;
    this.storage.set('user', this.usuario);
    console.log("form:", this.usuario);
  }

  mudaTela() {
    this.navCtrl.push(HomePage, {}, { animate: true });
  }



}
