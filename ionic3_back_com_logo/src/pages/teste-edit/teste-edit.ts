import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemSerie, Exercicio } from '../../shared/sdk/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the TesteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-edit',
  templateUrl: 'teste-edit.html',
})
export class TesteEditPage {

  protected item: ItemSerie;
  
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder) {
    this.item = new ItemSerie();
    this.item.exercicio = new Exercicio();

    this.myForm = this.fb.group({
      titulo: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteEditPage');
  }

  submit() {
    console.log('Chamou submit');
  }

}
