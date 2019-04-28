import { DiaTreino, DiaTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: DETALHE
export abstract class DetalheDiaTreinoPageBase {
  
  protected item: DiaTreino;
  
  // filtro com parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  // filtro sem parametro id
  protected abstract filtroLoadOne() : LoopBackFilter;
  // chamada caso item nao tenha sido encontrado
  //protected abstract itemNaoEncontrado();
  
  // chamada antes e depois da inicializacao
  protected abstract posInicializaItem();
  protected abstract preInicializaItem();
  
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: DiaTreinoApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('DetalheDiaTreinoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('DetalheDiaTreinoPageBase:Id: ' , id);
			if (id) {
				console.log('DetalheDiaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId(id)));
				console.log('DiaTreino.findById');
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: DiaTreino) => {
							this.item = result;
							console.log('DetalheDiaTreinoPageBase.item: ' , this.item)
						},
						(erro: any) => console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('DetalheDiaTreinoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('DiaTreino.findOne');
				// se nao encontrar vai pro erro -> 404
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: DiaTreino) => {
							this.item = result;
							console.log('DetalheDiaTreinoPageBase.item: ' , this.item);
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}

  
	ionViewWillEnter() {
		console.log('ionViewWillEnter DetalheDiaTreinoPage<<DETALHE>>');
		this.preInicializaItem();
		this.inicializaItem();
		this.posInicializaItem();
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalheDiaTreinoPage<<DETALHE>>');
	}
}
    
    