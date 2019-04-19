import { Exercicio, ExercicioApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class ExercicioGraficoExecucaoPageBase {
  
  protected item: Exercicio;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
 
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ExercicioApi) {
  } 
  
  private inicializaItem() {
	this.item = this.navParams.get('item');
	console.log('ExercicioGraficoExecucaoPageBase:ItemParametro: ', this.item);
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('ExercicioGraficoExecucaoPageBase:Id: ' , id);
			console.log('ExercicioGraficoExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
			console.log('Exercicio.findById');
			this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: Exercicio) => {
							this.item = result;
							console.log('ExercicioGraficoExecucaoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		} 
  }

  
  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioGraficoExecucaoPage');
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioGraficoExecucaoPage');
  }
}
    
    