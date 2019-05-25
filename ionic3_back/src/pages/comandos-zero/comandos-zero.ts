import { IonicPage, NavController } from "ionic-angular";
import { Component } from "@angular/core";
import { ComandosZeroPageBase } from "./comandos-zero-base";
import { Storage } from '@ionic/storage';
import { ListaSerieTreinoPage } from "../lista-serie-treino/lista-serie-treino";
import { SerieTreinoApi, SerieTreino, DiaTreinoApi } from "../../shared/sdk";
import { InicioTreinoDiaPage } from "../inicio-treino-dia/inicio-treino-dia";
import { PrincipalPerformancePage } from "../principal-performance/principal-performance";

/**
 * Generated class for the GeradorDigicom
 *
 */

@IonicPage()
@Component({
  selector: 'page-comandos-zero',
  templateUrl: 'comandos-zero.html',
})
export class ComandosZeroPage extends ComandosZeroPageBase {



  existeConsulta = false;
  existeDiaTreino = false;
  existeSerie = true;

  constructor(public navCtrl: NavController, protected storage: Storage,
    private srvSerie: SerieTreinoApi, private srvDiaTreino: DiaTreinoApi) {
    super(storage);
  }

  protected inicializacao() {
    this.verificaConsulta();
    this.verificaDiaTreino();
  }

  verificaConsulta() {
    this.srvSerie.find(
      { "limit": 1, "where": { "and": [{ "usuarioId": this.usuario.id, "ativo": 1 }] } }
    )
      .subscribe(
        (result: SerieTreino[]) => {
          this.existeDiaTreino = (result.length > 0);
        },
        (erro: any) => {
          this.verificaConexao(erro);
        }
      )
  }

  verificaDiaTreino() {
    this.srvDiaTreino.find(
      { "limit": 1, "where": { "and": [{ "usuarioId": this.usuario.id }] } }
    )
      .subscribe(
        (result: SerieTreino[]) => {
          this.existeConsulta = (result.length > 0);
        },
        (erro: any) => {
          this.verificaConexao(erro);
        }
      )
  }





  protected getNomeAplicacao(): string {
    return "Treino 365";
  }


  executaConsulta() {
    this.navCtrl.push(PrincipalPerformancePage, {

    });
  }


  executaDiaTreino() {
    this.navCtrl.push(InicioTreinoDiaPage, {

    });
  }


  executaSerie() {
    this.navCtrl.push(ListaSerieTreinoPage, {

    });
  }





}
