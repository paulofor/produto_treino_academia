import { DiaTreino, ExecucaoItemSerie,  DiaTreinoApi , ExecucaoItemSerieApi, LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: GETPUT
export abstract class ExecutaTreinoPageBase {
  
  protected item: DiaTreino;
  
  protected usuario: Usuario;
  
  // filtro com parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  // filtro sem parametro id
  protected abstract filtroLoadOne() : LoopBackFilter;
  // chamada depois do submit e de nova inicializacao
  protected abstract resultadoSubmit(result:ExecucaoItemSerie)
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: DiaTreinoApi, 
				public srvPut: ExecucaoItemSerieApi,
				protected storage: Storage) {
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
							console.log('ExecutaTreinoPageBase.item: ' , this.item)
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
							console.log('ExecutaTreinoPageBase.item: ' , this.item)
						},
						(erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}

  
  ionViewWillEnter() {
	console.log('');
	console.log('Tela: ExecutaTreinoPage<<GETPUT>> : DiaTreino');
    this.carregaUsuario();
    
  }
  ionViewDidLoad() {
  	//console.log('ionViewDidLoad ExecutaTreinoPage<<GETPUT>>');
  }
  carregaUsuario() {
	this.storage.get('user').then((val: Usuario) => {
		this.usuario = val;
		this.inicializaItem();
	})
  }
  
	protected submit(itemSubmit:ExecucaoItemSerie ) {
		console.log('ExecutaTreinoPageBase:Submit-Item:' , itemSubmit);
		console.log('ExecucaoItemSerie:submitExecutaTreinoPage:' , JSON.stringify(itemSubmit));
		this.srvPut.submitExecutaTreinoPage(itemSubmit)
			.subscribe((resultado:ExecucaoItemSerie) => {
				console.log('ExecutaTreinoPageBase:Submit-Result: ' , resultado);
				this.resultadoSubmit(resultado);
				this.inicializaItem();
			})
	}
}
    
    