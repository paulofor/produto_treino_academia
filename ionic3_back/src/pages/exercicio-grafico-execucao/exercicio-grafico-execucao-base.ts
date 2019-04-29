import { Exercicio, ExercicioApi , LoopBackFilter } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

// Tipo: GRAFICO_BARRA
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
  
 
  public rotulos: string[];
  public dados: any[];
 
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
							console.log('ExercicioGraficoExecucaoPageBase.item: ' , this.item);
							this.posInicializaItem();
							this.trataGrafico();
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
							this.posInicializaItem();
							this.trataGrafico();
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}
	
	protected abstract getListaGrafico() : Array<any>;
	protected abstract extraiRotulo(detalhe:any) : string;

    private trataGrafico() {
    	var listaGrafico = this.getListaGrafico();
    	var saida:string[] = [];
    	for (let i=0; i< listaGrafico.length; i++) {
      		//var dado = new DatePipe('pt-BR').transform(this.item.listaExecucaoItemSerie[i].dataHoraFinalizacao, 'dd/MM');
      		var dado = this.extraiRotulo(listaGrafico[i]);
      		saida.push(dado);
    	}
    	this.rotulos=  saida;
    }
  
  
	ionViewWillEnter() {
		console.log('ionViewWillEnter ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>>');
		this.preInicializaItem();
		this.inicializaItem();
		
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>>');
	}
	
  protected criaImagem() {
  }
  
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  
  public barChartOptions: any = {
    legend: {
      display: true,
      labels: {
        boxWidth: 20,
        boxHeight: 2
      }
    },
    animation: {
      onComplete: this.criaImagem
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  
  

}
    
    