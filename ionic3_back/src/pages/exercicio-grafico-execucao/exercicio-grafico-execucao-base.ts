import { Exercicio, ExercicioApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: DETALHE
export abstract class ExercicioGraficoExecucaoPageBase {
  
  protected item: Exercicio;
  
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
				public srv: ExercicioApi) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		console.log('ExercicioGraficoExecucaoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			console.log('ExercicioGraficoExecucaoPageBase:Id: ' , id);
			if (id) {
				console.log('ExercicioGraficoExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadId(id)));
				console.log('Exercicio.findById');
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: Exercicio) => {
							this.item = result;
							console.log('ExercicioGraficoExecucaoPageBase.item: ' , this.item)
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('ExercicioGraficoExecucaoPageBase:filtro: ' , JSON.stringify(this.filtroLoadOne()));
				console.log('Exercicio.findOne');
				// se nao encontrar vai pro erro -> 404
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: Exercicio) => {
							this.item = result;
							console.log('ExercicioGraficoExecucaoPageBase.item: ' , this.item);
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}

  
	ionViewWillEnter() {
		console.log('ionViewWillEnter ExercicioGraficoExecucaoPage<<DETALHE>>');
		this.preInicializaItem();
		this.inicializaItem();
		this.posInicializaItem();
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad ExercicioGraficoExecucaoPage<<DETALHE>>');
	}
}
    
    