import { ItemSerie, ItemSerieApi } from "../../shared/sdk";
import { NavController } from "ionic-angular";
import { Screenshot } from "@ionic-native/screenshot";


export abstract class SerieListaExecucaoPageBase {
    protected listaItem: ItemSerie[];

    constructor(protected navCtrl: NavController, protected srv: ItemSerieApi,
        protected screenshot: Screenshot) {

    }

    protected carregaLista() {
        this.srv.obtemLista()
            .subscribe((result: ItemSerie[]) => {
                console.log('Result', JSON.stringify(result));
                this.listaItem = result;
            });
    }


    protected testaFoto() {
        this.screenshot.save('jpg', 100, 'SerieListaExecucaoPage');
    }
}