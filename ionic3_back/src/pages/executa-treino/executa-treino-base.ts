import { DiaTreino, DiaTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: DETALHE
export abstract class ExecutaTreinoPageBase {
  
  protected item: DiaTreino;
  
  // filtro com parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  // filtro sem parametro id
  protected abstract filtroLoadOne() : LoopBackFilter;
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: DiaTreinoApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('ExecutaTreinoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('ExecutaTreinoPageBase:Id: ' , id);
			if (id) {
				console.log('ExecutaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId(id)));
				console.log('DiaTreino.findById');
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: DiaTreino) => {
							this.item = result;
							console.log('ExecutaTreinoPageBase.item: ' , JSON.stringify(this.item))
						},
						(erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('ExecutaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('DiaTreino.findOne');
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: DiaTreino) => {
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
    
    