import { ItemSerie, ItemSerieApi } from '../../shared/sdk';


export abstract class CadastraItemSeriePagePageBase {
  
  protected item: ItemSerie;

  constructor(	public navCtrl: NavController, 
  				public srv: ItemSerieApi, 
  				) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastraItemSeriePage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad CadastraItemSeriePage');
  }
  

  
}
