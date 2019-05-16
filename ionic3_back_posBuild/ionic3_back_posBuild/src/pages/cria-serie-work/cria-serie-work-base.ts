import { ItemSerie, ItemSerieApi , LoopBackFilter, Usuario } from '../../shared/sdk';
import { SerieTreino, SerieTreinoApi } from '../../shared/sdk';
import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: EDITA
export abstract class CriaSerieWorkPageBase {

  protected usuario: Usuario;
  
  // Objeto principal para a edicao
  protected item: ItemSerie;
  
  // chamar os metodos de carga de combos
  protected abstract inicializacaoComplementos();
  
  // se nao tiver nem parametro item nem id
  protected abstract criaItem() : ItemSerie;
  
  // chamada apos o submit
  protected abstract executaNavegacao(navCtrl: NavController, result: ItemSerie);
  
  // filtro para ser usado quando temos o parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  
  // quando existe parametro item
  protected abstract complementaItem(novo:ItemSerie) : ItemSerie;



  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ItemSerieApi, 
				protected storage: Storage,
				public srvSerieTreino : SerieTreinoApi,
				public srvExercicio : ExercicioApi,
  				) {
  }
  private inicializaItem() {
	this.item = this.navParams.get('item');
	
	if (!this.item) {
		var id = this.navParams.get('id');
		if (id) {
			console.log('ItemSerie.findById: [' + id + ']');
			this.srv.findById(id, this.filtroLoadId(id))
				.subscribe((result:ItemSerie) => {
					this.item = result;
					console.log('Result: ' , this.item);
				})
		} else {
			this.item = this.criaItem();
			console.log('Item(posCriaItem): ', this.item);
		}
	} else {
	 		console.log('ItemParametro: ', this.item);
		this.item = this.complementaItem(this.item);
		console.log('ItemPrametro(posComplementaItem): ' , this.item);
	}
  }
  ionViewWillEnter() {
	console.log('');
	console.log('Tela: CriaSerieWorkPage<<EDITA>> : ItemSerie');

    this.carregaUsuario();


  }
  ionViewDidLoad() {
  	//console.log('ionViewDidLoad CriaSerieWorkPage<<EDITA>>');
  }
  carregaUsuario() {
	this.storage.get('user').then((val: Usuario) => {
		this.usuario = val;
		this.inicializacaoComplementos();
		this.inicializaItem();
	})
  }
  
	protected listaSerieTreino : SerieTreino[];
	protected carregaSerieTreino(){
		this.srvSerieTreino.find()
      		.subscribe((result:SerieTreino[]) => {
        		console.log('listaSerieTreino:' , result);
        		this.listaSerieTreino = result;
      	})
	}
	protected listaSerieTreinoUsuario : SerieTreino[];
	protected carregaSerieTreinoUsuario(idUsuario:number){
		this.srvSerieTreino.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:SerieTreino[]) => {
        		this.listaSerieTreinoUsuario = result;
      	})
	}
	protected listaExercicio : Exercicio[];
	protected carregaExercicio(){
		this.srvExercicio.find()
      		.subscribe((result:Exercicio[]) => {
        		console.log('listaExercicio:' , result);
        		this.listaExercicio = result;
      	})
	}
	protected listaExercicioUsuario : Exercicio[];
	protected carregaExercicioUsuario(idUsuario:number){
		this.srvExercicio.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:Exercicio[]) => {
        		this.listaExercicioUsuario = result;
      	})
	}
	protected submit() {
		console.log('ItemSerieApi.submitCriaSerieWorkPage:' , JSON.stringify(this.item));
    	this.srv.submitCriaSerieWorkPage(this.item)
      		.subscribe((resultado:ItemSerie) => {
        		console.log('CriaSerieWorkPageBase:Submit-Result: ' , JSON.stringify(resultado));
				this.executaNavegacao(this.navCtrl,resultado);
      	})
	}
}
