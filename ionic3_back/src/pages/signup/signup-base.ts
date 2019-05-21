import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario, UsuarioApi } from "../../shared/sdk/index";
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';
import { ComandosZeroPage } from "../comandos-zero/comandos-zero";



export abstract class SignupPageBase {

  protected usuario: Usuario;
  protected signupForm: FormGroup;
  protected erroMsg: string;

  constructor(public navCtrl: NavController, protected formBuilder: FormBuilder, protected storage: Storage, protected srv: UsuarioApi) {
    this.signupForm = this.formBuilder.group({
      login: ['', Validators.email],
      senha1: ['' , Validators.compose( [Validators.minLength(8) , Validators.required]) ] ,
      senha2: ['', Validators.compose( [Validators.minLength(8) , Validators.required]) ]
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }
  
  ionViewWillEnter() {
    console.log('');
    console.log('Tela: SignupPage');
  }

  verificado(): boolean {
    let saida = (this.signupForm.get('login').valid) &&
      (this.signupForm.get('senha1').valid) &&
      (this.signupForm.get('senha2').valid);
    return saida;
  }

  onSubmit() {
    if (this.verificado()) {
      this.processaSubmit();
    }
  }


  processaSubmit() {
    this.usuario = new Usuario();
    this.usuario.email = this.signupForm.get("login").value;
    let senha1 = this.signupForm.get("senha1").value;
    let senha2 = this.signupForm.get("senha2").value;
    if (senha1!=senha2) {
      //console.log('Entrou diferente');
      this.erroMsg = 'Senhas diferentes';
      return;
    } else {
      this.usuario.senha = senha1;
      this.usuario.dataHoraCriacao = new Date();
      this.usuario.dataHoraUltimoAcesso = new Date();
      console.log('Usuario-Enviado: ' , this.usuario);
      this.srv.create(this.usuario)
        .subscribe(
          (result) => {
            this.storage.set('user' , this.usuario);
            console.log('SignUp: ' , result);
            this.navCtrl.push(ComandosZeroPage);
          },
          (error) => {
            console.log('Erro: ' , error);
            this.erroMsg = 'Ocorreu um erro, tente novamente';
          }
        )
     }
  }

}
