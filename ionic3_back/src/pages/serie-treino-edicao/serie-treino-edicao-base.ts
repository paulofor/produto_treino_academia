import { SerieTreino, SerieTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class SerieTreinoEdicaoPageBase {
  
  protected item: SerieTreino;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
  protected abstract filtroLoadOne() : LoopBackFilter;
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: SerieTreinoApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('SerieTreinoEdicaoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('SerieTreinoEdicaoPageBase:Id: ' , id);
			if (id) {
				console.log('SerieTreinoEdicaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
				console.log('SerieTreino.findById');
				this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('SerieTreinoEdicaoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('SerieTreinoEdicaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('SerieTreinoEdicaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('SerieTreino.findOne');
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('SerieTreinoEdicaoPageBase.item: ' , JSON.stringify(this.item))
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
    
    