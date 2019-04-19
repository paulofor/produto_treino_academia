import { SerieTreino, SerieTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class SerieTreinoEdicaoPageBase {
  
  protected item: SerieTreino;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
 
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: SerieTreinoApi) {
  } 
  
  private inicializaItem() {
	this.item = this.navParams.get('item');
	console.log('SerieTreinoEdicaoPageBase:ItemParametro: ', this.item);
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('SerieTreinoEdicaoPageBase:Id: ' , id);
			console.log('Filtro: ' , JSON.stringify(this.filtroLoadId()));
			this.srv.findById(id, this.filtroLoadId())
				.subscribe(
					res => {
						console.log('SerieTreinoEdicaoPageBase:LoadId: ' , res),
							(					error: any) => {
						console.log('SerieTreinoEdicaoPageBase:LoadId(Erro): ' , error)
					}
				})
		} 
	}
  }
  
  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieTreinoEdicaoPage');
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieTreinoEdicaoPage');
  }
}
    
    