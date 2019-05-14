import { DiaTreino, DiaTreinoApi , LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: DETALHE
export abstract class DetalheDiaTreinoPageBase {

  protected usuario: Usuario;
  
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
  
  
  protected listaLoadOne : DiaTreino[];
  protected itemNaoEncontrado: boolean;
  
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: DiaTreinoApi,
				protected storage: Storage) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		if (!this.item) {
			var id = this.navParams.get('id');
			if (id) {
				console.log('DiaTreino.findById: [' + id + '] , filtroLoadId:' , JSON.stringify(this.filtroLoadId(id)));
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: DiaTreino) => {
							this.item = result;
							console.log('Result: ' , this.item)
						},
						(erro: any) => console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('DiaTreino.findOne , filtroLoadOne: ' , JSON.stringify(this.filtroLoadOne()));
				// se nao encontrar vai pro erro -> 404
				this.srv.find(this.filtroLoadOne())
					.subscribe(
						(result: DiaTreino[]) => {
							console.log('Tam Lista Result: ' , result.length);
							if (result.length>0) {
								this.item = result[0];
								this.listaLoadOne = result;
								console.log('Result: ' , this.item);
								this.itemNaoEncontrado = false;
							} else {
								this.itemNaoEncontrado = true;
							}
								//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
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
		console.log('');
		console.log('Tela: DetalheDiaTreinoPage<<DETALHE>> : DiaTreino');
		this.carregaUsuario();
	}
  
	ionViewDidLoad() {
	}
}
    
    