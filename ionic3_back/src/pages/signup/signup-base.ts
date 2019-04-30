import { NavController } from "ionic-angular";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Usuario, UsuarioApi } from "../../shared/sdk/index";
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';



export abstract class SignupPageBase {

  protected usuario: Usuario;
  protected signupForm: FormGroup;

  constructor(public navCtrl: NavController, protected formBuilder: FormBuilder, protected storage:Storage, protected srv: UsuarioApi) {
    this.signupForm = this.formBuilder.group({
      login: '',
      senha1: '' ,
      senha2: ''
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onSubmit() {
    this.usuario = new Usuario();
    this.usuario.email = this.signupForm.get("login").value;
    this.usuario.senha = this.signupForm.get("senha1").value;
    this.srv.create(this.usuario)
      .subscribe((result) => {
        this.storage.set('user' , this.usuario);
        console.log('SignUp: ' , result);
        this.navCtrl.push(HomePage);
      })
  }


}
