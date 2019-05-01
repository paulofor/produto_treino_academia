import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../shared/sdk/index';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginPageBase } from './login-base';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends LoginPageBase {



  constructor(public navCtrl: NavController, public navParams: NavParams, protected formBuilder: FormBuilder) {
    super(navCtrl, navParams, formBuilder);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  criarConta() {
    this.navCtrl.push(SignupPage);
  }
}
