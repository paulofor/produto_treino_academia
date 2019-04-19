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
			console.log('SerieTreinoEdicaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
			console.log('SerieTreino.findById');
			this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('SerieTreinoEdicaoPageBase:LoadId: ' , this.item)
						},
						(erro: any) => console.log('SerieTreinoEdicaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
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
    
    