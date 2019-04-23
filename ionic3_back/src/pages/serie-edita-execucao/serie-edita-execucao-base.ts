import { ItemSerie, ItemSerieApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class SerieEditaExecucaoPageBase {
  
  protected item: ItemSerie;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
  protected abstract filtroLoadOne() : LoopBackFilter;
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('SerieEditaExecucaoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('SerieEditaExecucaoPageBase:Id: ' , id);
			if (id) {
				console.log('SerieEditaExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
				console.log('ItemSerie.findById');
				this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							console.log('SerieEditaExecucaoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('SerieEditaExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('ItemSerie.findOne');
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							console.log('SerieEditaExecucaoPageBase.item: ' , JSON.stringify(this.item))
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
    
    