

import { Exercicio, ExercicioApi } from '../../shared/sdk';
import { GrupoMuscular, GrupoMuscularApi } from '../../shared/sdk';
import { DiaTreino, DiaTreinoApi } from '../../shared/sdk';
import { Usuario, UsuarioApi } from '../../shared/sdk';

export abstract class ExercicioCadastroPagePageBase {

	protected item: Exercicio;

	protected abstract inicializacao();

	constructor(
		public srv: ExercicioApi,
		public srvGrupoMuscular: GrupoMuscularApi,
		public srvDiaTreino: DiaTreinoApi,
		public srvUsuario: UsuarioApi,
	  ) {
		
	  }
	

	ionViewWillEnter() {
		console.log('ionViewWillEnter ExercicioCadastroPage');
		this.inicializacao();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ExercicioCadastroPage');
	}

	protected listaGrupoMuscular: GrupoMuscular[];
	protected carregaGrupoMuscular() {
		this.srvGrupoMuscular.find()
			.subscribe((result: GrupoMuscular[]) => {
				console.log('ListaGrupoMuscular:' , result);
				this.listaGrupoMuscular = result;
			})
	}

	protected listaGrupoMuscularUsuario: GrupoMuscular[];
	protected carregaGrupoMuscularUsuario(idUsuario: number) {
		this.srvGrupoMuscular.find({ 'where': { 'idUsuario': idUsuario } })
			.subscribe((result: GrupoMuscular[]) => {
				this.listaGrupoMuscularUsuario = result;
			})
	}

	protected listaDiaTreino: DiaTreino[];
	protected carregaDiaTreino() {
		this.srvDiaTreino.find()
			.subscribe((result: DiaTreino[]) => {
				this.listaDiaTreino = result;
			})
	}

	protected listaDiaTreinoUsuario: DiaTreino[];
	protected carregaDiaTreinoUsuario(idUsuario: number) {
		this.srvDiaTreino.find({ 'where': { 'idUsuario': idUsuario } })
			.subscribe((result: DiaTreino[]) => {
				this.listaDiaTreinoUsuario = result;
			})
	}

	protected listaUsuario: Usuario[];
	protected carregaUsuario() {
		this.srvUsuario.find()
			.subscribe((result: Usuario[]) => {
				this.listaUsuario = result;
			})
	}

	protected listaUsuarioUsuario: Usuario[];
	protected carregaUsuarioUsuario(idUsuario: number) {
		this.srvUsuario.find({ 'where': { 'idUsuario': idUsuario } })
			.subscribe((result: Usuario[]) => {
				this.listaUsuarioUsuario = result;
			})
	}


}
