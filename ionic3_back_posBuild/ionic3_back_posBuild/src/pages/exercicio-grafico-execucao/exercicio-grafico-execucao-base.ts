import { Exercicio, ExercicioApi , LoopBackFilter, Usuario } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Tipo: GRAFICO_BARRA
export abstract class ExercicioGraficoExecucaoPageBase {
  
  protected item: Exercicio;
  
  protected usuario: Usuario;
  
  // filtro com parametro id
  protected abstract filtroLoadId(id:any) : LoopBackFilter;
  // filtro sem parametro id
  protected abstract filtroLoadOne() : LoopBackFilter;
  // chamada caso item nao tenha sido encontrado
  //protected abstract itemNaoEncontrado();
  
  // chamada antes e depois da inicializacao
  protected abstract posInicializaItem();
  protected abstract preInicializaItem();
  protected abstract existeDadosGrafico(): boolean;
  
 
  public rotulos: string[];
  public dados: any[];
 
  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ExercicioApi,
				protected storage: Storage) {
  } 
  
	private inicializaItem() {
		this.item = this.navParams.get('item');
		//console.log('ExercicioGraficoExecucaoPageBase:ItemParametro: ', this.item);
		if (!this.item) {
			var id = this.navParams.get('id');
			//console.log('ExercicioGraficoExecucaoPageBase:Id: ' , id);
			if (id) {
				console.log('Exercicio.findById: [' + id + '] , filtroLoadId:' , JSON.stringify(this.filtroLoadId(id)));
				this.srv.findById(id, this.filtroLoadId(id))
					.subscribe(
						(result: Exercicio) => {
							this.item = result;
							console.log('Result: ' , this.item)
							if (this.existeDadosGrafico()) this.trataGrafico();
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			} else  {
				console.log('Exercicio.findOne , filtroLoadOne: ' , JSON.stringify(this.filtroLoadOne()));
				// se nao encontrar vai pro erro -> 404
				this.srv.findOne(this.filtroLoadOne())
					.subscribe(
						(result: Exercicio) => {
							this.item = result;
							console.log('Result: ' , this.item);
							this.posInicializaItem();
							if (this.existeDadosGrafico()) this.trataGrafico();
							//if (!this.item) this.itemNaoEncontrado();
						},
						(erro: any) => console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ' , JSON.stringify(erro))
					)
			}
		}  
	}
	
	protected abstract getListaGrafico(): Array<any>;
	protected abstract extraiRotulo(detalhe: any): string;
	protected abstract extraiValores(detalhe: any): number[];
	protected abstract obtemTituloSerie(): string[];
	

	private trataGrafico() {
		this.trataRotuloSerieGrafico();
		this.trataDadosGrafico();
	}

	private trataRotuloSerieGrafico() {
		var listaGrafico = this.getListaGrafico();
		var saida: string[] = [];
		for (let i = 0; i < listaGrafico.length; i++) {
			var dado = this.extraiRotulo(listaGrafico[i]);
			saida.push(dado);
		}
		this.rotulos = saida;
	}

	private trataDadosGrafico() {
		var listaGrafico = this.getListaGrafico()
		var saida: any[] = [];
		var titulos: string[] = this.obtemTituloSerie();
		for (let i = 0; i < listaGrafico.length; i++) {
			var dados: number[] = this.extraiValores(listaGrafico[i]);
			if (i == 0) {
				// inicializando os dados
				for (let x = 0; x < titulos.length; x++) {
					if (!dados[x]) dados[x] = 0;
					var novoDado = { 'data': [dados[x]], 'label': titulos[x] };
					saida.push(novoDado);
				}
			} else {
				// obtendo cada serie e colocando mais um dado no vetor
				for (let x = 0; x < titulos.length; x++) {
					if (!dados[x]) dados[x] = 0;
					var itemDado: any = saida[x];
					itemDado.data.push(dados[x]);
				}
			}
		}
		this.dados = saida;
	}
  
  
	ionViewWillEnter() {
		console.log('');
		console.log('Tela: ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>> : Exercicio');
		this.carregaUsuario();
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>>');
	}
	
	carregaUsuario() {
		this.storage.get('user').then((val: Usuario) => {
			this.usuario = val;
			this.preInicializaItem();
			this.inicializaItem();
			//this.posInicializaItem();
		})
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
    
    