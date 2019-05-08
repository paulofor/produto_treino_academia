import { ItemSerie, ItemSerieApi , LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: DETALHE
export abstract class SerieEditaExecucaoPageBase {

  protected usuario: Usuario;
  
  protected item: ItemSerie;
  
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
				public srv: ItemSerieApi,
				protected storage: Storage) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('SerieEditaExecucaoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('SerieEditaExecucaoPageBase:Id: ' , id);
			if (id) {
				console.log('SerieEditaExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId(id)));
				console.log('ItemSerie.findById');
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							console.log('SerieEditaExecucaoPageBase.item: ' , this.item)
						},
						(erro: any) => console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('SerieEditaExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('ItemSerie.findOne');
				// se nao encontrar vai pro erro -> 404
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							console.log('SerieEditaExecucaoPageBase.item: ' , this.item);
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}
	carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.preInicializaItem();
			this.inicializaItem();
			this.posInicializaItem();
		})
	}
  
	ionViewWillEnter() {
		console.log('ionViewWillEnter SerieEditaExecucaoPage<<DETALHE>>');
		this.carregaUsuario();
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad SerieEditaExecucaoPage<<DETALHE>>');
	}
}
    
    