import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { GrupoMuscular, GrupoMuscularApi } from '../../shared/sdk';
import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';
import { Usuario, UsuarioApi } from '../../shared/sdk';
import { NavParams, NavController } from 'ionic-angular';

export abstract class ExercicioCadastroPageBase {
  
  protected item: Exercicio;
  
  protected abstract inicializacaoComplementos();
  protected abstract criaItem() : Exercicio;

  constructor(	public navParams: NavParams,
  				public navCtrl: NavController,
				public srv: ExercicioApi, 
				public srvGrupoMuscular : GrupoMuscularApi,
				public srvDiaTreino : DiaTreinoApi,
				public srvUsuario : UsuarioApi,
  				) {
  }


  private inicializaItem() {
	this.item = this.navParams.get('item');
	console.log('ExercicioCadastroPageBase:ItemParametro: ', this.item);
	if (!this.item) this.item = this.criaItem();
	console.log('ExercicioCadastroPageBase:ItemCriado: ', this.item);
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter ExercicioCadastroPage');
    this.inicializacaoComplementos();
    this.inicializaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ExercicioCadastroPage');
  }
  
	protected listaGrupoMuscular : GrupoMuscular[];
	protected carregaGrupoMuscular(){
		this.srvGrupoMuscular.find()
      		.subscribe((result:GrupoMuscular[]) => {
        		console.log('listaGrupoMuscular:' , result);
        		this.listaGrupoMuscular = result;
      	})
	}
	
	protected listaGrupoMuscularUsuario : GrupoMuscular[];
	protected carregaGrupoMuscularUsuario(idUsuario:number){
		this.srvGrupoMuscular.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:GrupoMuscular[]) => {
        		this.listaGrupoMuscularUsuario = result;
      	})
	}

	protected listaDiaTreino : DiaTreino[];
	protected carregaDiaTreino(){
		this.srvDiaTreino.find()
      		.subscribe((result:DiaTreino[]) => {
        		console.log('listaDiaTreino:' , result);
        		this.listaDiaTreino = result;
      	})
	}
	
	protected listaDiaTreinoUsuario : DiaTreino[];
	protected carregaDiaTreinoUsuario(idUsuario:number){
		this.srvDiaTreino.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:DiaTreino[]) => {
        		this.listaDiaTreinoUsuario = result;
      	})
	}

	protected listaUsuario : Usuario[];
	protected carregaUsuario(){
		this.srvUsuario.find()
      		.subscribe((result:Usuario[]) => {
        		console.log('listaUsuario:' , result);
        		this.listaUsuario = result;
      	})
	}
	
	protected listaUsuarioUsuario : Usuario[];
	protected carregaUsuarioUsuario(idUsuario:number){
		this.srvUsuario.find({'where' : {'idUsuario' : idUsuario} })
      		.subscribe((result:Usuario[]) => {
        		this.listaUsuarioUsuario = result;
      	})
	}

	protected submit() {
    	this.srv.submitExercicioCadastroPage(this.item)
      		.subscribe((resultado) => {
        		console.log('Resultado-SubmitExercicioCadastroPage: ' , resultado);
				this.navCtrl.pop();
      	})
	}
	
	protected submit() {
		console.log('ExercicioCadastroPageBase:Submit-Item:' , this.item);
    	this.srv.submitExercicioCadastroPage(this.item)
      		.subscribe((resultado) => {
        		console.log('ExercicioCadastroPageBase:Submit-Result: ' , resultado);
				this.navCtrl.pop();
      	})
	}
}
