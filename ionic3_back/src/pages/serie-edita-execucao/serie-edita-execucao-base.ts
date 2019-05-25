import { ItemSerie, ItemSerieApi , LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MSG_SEM_INTERNET } from '../../app/const';

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
  
  protected abstract posItemLoad();
  
  
  protected listaLoadOne : ItemSerie[];
  protected itemNaoEncontrado: boolean;
  
  
  protected erroMsg: string;
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi,
				protected storage: Storage) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		if (!this.item) {
			var id = this.navParams.get('id');
			if (id) {
				console.log('ItemSerie.findById: [' + id + '] , filtroLoadId:' , JSON.stringify(this.filtroLoadId(id)));
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: ItemSerie) => {
							this.item = result;
							this.posItemLoad();
							console.log('item: ' , this.item)
						},
						(erro: any) => {
							console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro));
							if (erro == 'Server error') {
								this.erroMsg = MSG_SEM_INTERNET;
							}
						}
					)
			} else  {
				console.log('ItemSerie.findOne , filtroLoadOne: ' , JSON.stringify(this.filtroLoadOne()));
				// se nao encontrar vai pro erro -> 404
				this.srv.find(this.filtroLoadOne())
					.subscribe(
						(result: ItemSerie[]) => {
							console.log('Tam Lista Result: ' , result.length);
							if (result.length>0) {
								this.item = result[0];
								this.listaLoadOne = result;
								console.log('item: ' , this.item);
								this.posItemLoad();
								this.itemNaoEncontrado = false;
							} else {
								this.itemNaoEncontrado = true;
							}
								//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => {
							console.log('SerieEditaExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro));
							if (erro == 'Server error') {
								this.erroMsg = MSG_SEM_INTERNET;
							}
						}
					)
			}
		} else {
			this.posItemLoad();
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
		console.log('');
		console.log('Tela: SerieEditaExecucaoPage<<DETALHE>> : ItemSerie');
		this.carregaUsuario();
	}
  
	ionViewDidLoad() {
	}
	
	protected verificaConexao(erro: any) {
		if (erro == 'Server error') {
			this.erroMsg = MSG_SEM_INTERNET;
		}
	}
}
    
    