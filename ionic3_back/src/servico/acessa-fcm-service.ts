import { Injectable, Inject } from "@angular/core";
import { FCM } from "@ionic-native/fcm";
import { VisitanteApi } from "../shared/sdk/services/custom/Visitante";
import { Visitante } from "../shared/sdk/models/Visitante";
import { DispositivoUsuarioApi } from "../shared/sdk/services/custom/DispositivoUsuario";
import { DispositivoUsuario } from "../shared/sdk/models/DispositivoUsuario";
import { VisitaAppApi } from "../shared/sdk/services/custom/VisitaApp";
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { NotificacaoAppApi } from "../shared/sdk/services/custom/NotificacaoApp";


@Injectable()
export class AcessaFcmService {



    constructor(
        @Inject(FCM) protected fcm: FCM,
        @Inject(DispositivoUsuarioApi) protected dispositivoUsuarioSrv: DispositivoUsuarioApi,
        @Inject(VisitaAppApi) protected visitaAppSrv: VisitaAppApi,
        @Inject(VisitanteApi) protected visitanteSrv: VisitanteApi,
        @Inject(Storage) protected storage: Storage,
        @Inject(Device) protected device: Device,
        @Inject(NotificacaoAppApi) protected notificacaoAppSrv: NotificacaoAppApi
    ) {
    }


    public carregaUsuario() {

    }


    // Chamada externa
    public registraVisitaPagina(chavePagina) {
        this.storage.get("chave").then((chaveUsuario) => {
            if (chaveUsuario) {
                this.visitaAppSrv.RegistraVisitaTelaApp(chaveUsuario, chavePagina)
                    .subscribe((resultado: any) => {
                        //console.log('Resultado-VisitaPagina' , resultado);
                    })
            }
        });
    }



    public executaValidacao(versaoAppId: number) {
        //alert('executaValidacao(versaoAppId: number)');
        this.storage.get("chave").then((dado) => {
            if (dado) {
                console.log('Possui chaveCliente:', dado);
                //alert('Recuperou Chave');
                this.ligaReceptorNotificacao();
                this.registraVisitaApp(dado, versaoAppId);
            } else {
                console.log('Não possui chaveClient');
                //alert('Dado null');
                //this.obtemTokenDispostivoUsuario(versaoAppId);
                this.executaValidacaoRemote(versaoAppId);
            }
        });
    }


    public executaValidacaoRemote(versaoAppId: number) {
        let filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } }
        console.log('Tentativa recuperação chave por uuid: ', this.device.uuid);
        this.dispositivoUsuarioSrv.findOneItem(filtro)
            .subscribe(
                (dispositvo: DispositivoUsuario) => {
                    console.log('Encontrou usuario por uuid');
                    this.ligaReceptorNotificacao();
                    this.registraMobile(dispositvo.usuarioProduto.chave,versaoAppId);
                    this.registraVisitaApp(dispositvo.usuarioProduto.chave, versaoAppId);
                },
                erro => {
                    console.log('Não encontrou usuario por uuid');
                    this.inscreveFcm(versaoAppId)
                }
            )
    }




    private registraMobile(chave, versaoAppId) {
        this.storage.set("chave", chave).then((successData) => {
            this.registraVisitaApp(chave, versaoAppId);
        })
    }

    private registraVisitaApp(chave, versaoAppId) {
        console.log('Passou em visita: ', chave);
        this.visitaAppSrv.RegistraVisitaVersaoApp(chave, versaoAppId)
            .subscribe((resultado: any) => {
                console.log('Resultado-VisitaApp', resultado);
            })
    }


    private inscreveFcm(versaoAppId: number) {
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(token => {
            this.registraTokenFcm(token, versaoAppId);

        });
        this.ligaReceptorNotificacao();
        this.fcm.onTokenRefresh().subscribe(token => {
            this.registraTokenFcm(token, versaoAppId);
        });
    }

    private registraTokenFcm(token, versaoAppId) {
        let dispositivoUsuario: DispositivoUsuario = new DispositivoUsuario();
        dispositivoUsuario.tokenFcm = token;
        dispositivoUsuario.versaoAppId = versaoAppId;
        dispositivoUsuario.codigoDispositivo = this.device.model;
        dispositivoUsuario.versaoSo = this.device.version;
        dispositivoUsuario.fabricante = this.device.manufacturer;
        dispositivoUsuario.serial = this.device.serial;
        dispositivoUsuario.uuid = this.device.uuid;
        this.criaComUsuario(dispositivoUsuario, versaoAppId);
    }

    public criaComUsuario(dispositivo: DispositivoUsuario, versaoApp) {
        this.dispositivoUsuarioSrv.CriaComUsuario(dispositivo)
            .subscribe((resultado: any) => {
                this.registraMobile(resultado, versaoApp);
            })
    }


    private ligaReceptorNotificacao() {
        //alert('ligaReceptorNotificacao()');
        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                this.notificacaoAppSrv.RegistraAcesso(data.tokenNotificacao)
                    .subscribe((resultado) => {
                        //console.log('Resultado: ', resultado);
                    });
            }
        });
    }


    /*
    .subscribe(
                (dispositvo:DispositivoUsuario) => {
                    this.ligaReceptorNotificacao();
                    this.registraVisitaApp(dispositvo.usuarioProduto.chave, versaoAppId);
                },
                erro => {
                    this.inscreveFcm(versaoAppId)
                }
            )
    */

}
