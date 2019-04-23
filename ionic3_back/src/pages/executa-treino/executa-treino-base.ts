import { SerieTreino, SerieTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';


export abstract class ExecutaTreinoPageBase {
  
  protected item: SerieTreino;
  
  
  protected abstract filtroLoadId() : LoopBackFilter;
  protected abstract filtroLoadOne() : LoopBackFilter;
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: SerieTreinoApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('ExecutaTreinoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('ExecutaTreinoPageBase:Id: ' , id);
			if (id) {
				console.log('ExecutaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId()));
				console.log('SerieTreino.findById');
				this.srv.findById(id, this.filtroLoadId())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('ExecutaTreinoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('ExecutaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('SerieTreino.findOne');
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('ExecutaTreinoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}

  
  ionViewWillEnter() {
    console.log('ionViewWillEnter ExecutaTreinoPage');
    this.inicializaItem();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExecutaTreinoPage');
  }
}
    
    