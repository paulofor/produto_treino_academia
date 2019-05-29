import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioApi, AcaoApi } from '../../shared/sdk/index';
import { FormBuilder } from '@angular/forms';
import { LoginPageBase } from './login-base';
import { Storage } from '@ionic/storage';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ComandosZeroPage } from '../comandos-zero/comandos-zero';


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




  getPaginaInicial(): Page {
    var proxima = ComandosZeroPage;
    console.log('Proxima: ' , proxima);
    return proxima;
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, 
    protected formBuilder: FormBuilder, protected srv: UsuarioApi, protected srvACao: AcaoApi, protected storage: Storage) {
    super(navCtrl, navParams, formBuilder, srv, srvACao, storage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
