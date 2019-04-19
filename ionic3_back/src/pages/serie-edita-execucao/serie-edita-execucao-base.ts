import { ItemSerie, ItemSerieApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class SerieEditaExecucaoPageBase {
  
  protected item: ItemSerie;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
 
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi) {
  } 
  
  private inicializaItem() {
	this.item = this.navParams.get('item');
	console.log('SerieEditaExecucaoPageBase:ItemParametro: ', this.item);
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('SerieEditaExecucaoPageBase:Id: ' , id);
			console.log('SerieEditaExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
			this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							console.log('SerieEditaExecucaoPageBase:LoadId: ' , this.item)
						},
						(erro: any) => console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		} 
  }

  
  ionViewWillEnter() {
    console.log('ionViewWillEnter SerieEditaExecucaoPage');
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad SerieEditaExecucaoPage');
  }
}
    
    