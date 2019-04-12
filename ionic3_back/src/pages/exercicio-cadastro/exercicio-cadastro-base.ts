import { Exercicio, ExercicioApi } from '../../shared/sdk';


export abstract class ExercicioCadastroPagePageBase {
  
  protected item: Exercicio;

  constructor(	public navCtrl: NavController, 
  				public srv: ExercicioApi, 
  				) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioCadastroPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioCadastroPage');
  }
  

  
}
