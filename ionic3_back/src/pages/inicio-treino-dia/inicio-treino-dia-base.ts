import { SerieTreino, SerieTreinoApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: DETALHE
export abstract class InicioTreinoDiaPageBase {
  
  protected item: SerieTreino;
  
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
				public srv: SerieTreinoApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('InicioTreinoDiaPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('InicioTreinoDiaPageBase:Id: ' , id);
			if (id) {
				console.log('InicioTreinoDiaPageBase:filtro: ' , JSON.stringify(this.filtroLoadId(id)));
				console.log('SerieTreino.findById');
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('InicioTreinoDiaPageBase.item: ' , this.item)
						},
						(erro: any) => console.log('InicioTreinoDiaPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('InicioTreinoDiaPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('SerieTreino.findOne');
				// se nao encontrar vai pro erro -> 404
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: SerieTreino) => {
							this.item = result;
							console.log('InicioTreinoDiaPageBase.item: ' , this.item);
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('InicioTreinoDiaPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}

  
	ionViewWillEnter() {
		console.log('ionViewWillEnter InicioTreinoDiaPage<<DETALHE>>');
		this.preInicializaItem();
		this.inicializaItem();
		this.posInicializaItem();
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad InicioTreinoDiaPage<<DETALHE>>');
	}
}
    
    