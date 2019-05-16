webpackJsonp([18],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandosZeroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comandos_zero_base__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_serie_treino_lista_serie_treino__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inicio_treino_dia_inicio_treino_dia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__principal_performance_principal_performance__ = __webpack_require__(175);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the GeradorDigicom
 *
 */
var ComandosZeroPage = /** @class */ (function (_super) {
    __extends(ComandosZeroPage, _super);
    function ComandosZeroPage(navCtrl, storage, srvSerie, srvDiaTreino) {
        var _this = _super.call(this, storage) || this;
        _this.navCtrl = navCtrl;
        _this.storage = storage;
        _this.srvSerie = srvSerie;
        _this.srvDiaTreino = srvDiaTreino;
        _this.existeConsulta = false;
        _this.existeDiaTreino = false;
        _this.existeSerie = true;
        return _this;
    }
    ComandosZeroPage.prototype.inicializacao = function () {
        this.verificaConsulta();
        this.verificaDiaTreino();
    };
    ComandosZeroPage.prototype.verificaConsulta = function () {
        var _this = this;
        this.srvSerie.find({ "limit": 1, "where": { "and": [{ "usuarioId": this.usuario.id, "ativo": 1 }] } })
            .subscribe(function (result) {
            _this.existeDiaTreino = (result.length > 0);
        });
    };
    ComandosZeroPage.prototype.verificaDiaTreino = function () {
        var _this = this;
        this.srvDiaTreino.find({ "limit": 1, "where": { "and": [{ "usuarioId": this.usuario.id }] } })
            .subscribe(function (result) {
            _this.existeConsulta = (result.length > 0);
        });
    };
    ComandosZeroPage.prototype.getNomeAplicacao = function () {
        return "Treino 365";
    };
    ComandosZeroPage.prototype.executaConsulta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__principal_performance_principal_performance__["a" /* PrincipalPerformancePage */], {});
    };
    ComandosZeroPage.prototype.executaDiaTreino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__inicio_treino_dia_inicio_treino_dia__["a" /* InicioTreinoDiaPage */], {});
    };
    ComandosZeroPage.prototype.executaSerie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lista_serie_treino_lista_serie_treino__["a" /* ListaSerieTreinoPage */], {});
    };
    ComandosZeroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-comandos-zero',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/comandos-zero/comandos-zero.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="titulo">\n    <ion-title>{{getNomeAplicacao()}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="quadroBase" *ngIf="usuario">\n\n  <div class="quadro30">\n\n  </div>\n\n  <ion-list class="quadro70">\n\n    <ion-item class="quadroBase">\n      <button (click)="executaSerie()" [disabled]="!existeSerie" ion-button block large icon-start>\n        <ion-icon name="create"></ion-icon><label>Administrar Séries</label>\n      </button>\n    </ion-item>\n\n    <ion-item class="quadroBase">\n      <button (click)="executaDiaTreino()" [disabled]="!existeDiaTreino" ion-button block large icon-start>\n        <ion-icon name="body"></ion-icon><label>Iniciar Dia de Treino</label>\n      </button>\n    </ion-item>\n\n    <ion-item class="quadroBase">\n      <button (click)="executaConsulta()" [disabled]="!existeConsulta"  ion-button block large icon-start>\n        <ion-icon name="stats"></ion-icon><label>Consultar Performances</label>\n      </button>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/comandos-zero/comandos-zero.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["t" /* SerieTreinoApi */], __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["d" /* DiaTreinoApi */]])
    ], ComandosZeroPage);
    return ComandosZeroPage;
}(__WEBPACK_IMPORTED_MODULE_2__comandos_zero_base__["a" /* ComandosZeroPageBase */]));

//# sourceMappingURL=comandos-zero.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSerieTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_serie_treino_base__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaSerieTreinoPage = /** @class */ (function (_super) {
    __extends(ListaSerieTreinoPage, _super);
    function ListaSerieTreinoPage(navCtrl, srv, storage, alertCtrl) {
        var _this = _super.call(this, navCtrl, srv, storage) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.alertCtrl = alertCtrl;
        return _this;
    }
    ListaSerieTreinoPage.prototype.inicializacao = function () {
    };
    ListaSerieTreinoPage.prototype.getFiltro = function () {
        //console.log('Usuario' , this.usuario);
        return { 'where': { 'usuarioId': this.usuario.id }, 'counts': 'listaItemSerie' };
    };
    ListaSerieTreinoPage.prototype.novo = function () {
        var _this = this;
        var serieNova = new __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["s" /* SerieTreino */]();
        serieNova.dataCriacao = new Date();
        serieNova.ativa = 1;
        serieNova.qtdeExecucao = 0;
        serieNova.usuarioId = this.usuario.id;
        this.srv.create(serieNova)
            .subscribe(function (result) {
            _this.navCtrl.push(_this.getPageEdicao(), {
                id: result.id
            });
        });
    };
    ListaSerieTreinoPage.prototype.getSituacao = function (item) {
        if (item.ativa == 1)
            return 'ativa';
        else
            return 'desativa';
    };
    ListaSerieTreinoPage.prototype.excluirId = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirma exclusão',
            message: 'Deseja realmente retirar essa série ?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.srv.deleteById(item.id)
                            .subscribe(function (result) {
                            _this.carregaUsuario();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListaSerieTreinoPage.prototype.exibeAlterar = function (item) {
        return true;
    };
    ListaSerieTreinoPage.prototype.exibeExcluir = function (item) {
        return (item.listaItemSerieCount == 0);
    };
    ListaSerieTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-serie-treino',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/lista-serie-treino/lista-serie-treino.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Séries</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhuma série de treino encontrada\n      </ion-card-header>\n      <ion-card-content>\n        Crie sua primeira série para começar.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n      <ion-item *ngFor="let item of listaItem">\n        <h3 class="linha1">Criado em {{item.dataCriacao | date: \'dd/MM/yyyy\'}}</h3>\n        <h3 class="linhan">Quantidade execuções {{item.qtdeExecucao}}</h3>\n        <h3 class="linhan">Última execução em {{item.dataCriacao | date: \'dd/MM/yyyy\'}}</h3>\n        <h3 class="linhan">Situação: {{getSituacao(item)}}</h3>\n        <h3 class="linhan">Quantidade exercícios: {{item.listaItemSerieCount}}</h3>\n        <button *ngIf="exibeAlterar(item)" ion-button clear item-end style="margin: 2px" (click)="alterarId(item)">alterar</button>\n        <button *ngIf="exibeExcluir(item)" ion-button clear item-end style="margin: 2px" (click)="excluirId(item)">excluir</button>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="novo()">\n      Criar\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/lista-serie-treino/lista-serie-treino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["t" /* SerieTreinoApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListaSerieTreinoPage);
    return ListaSerieTreinoPage;
}(__WEBPACK_IMPORTED_MODULE_2__lista_serie_treino_base__["a" /* ListaSerieTreinoPageBase */]));

//# sourceMappingURL=lista-serie-treino.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioTreinoDiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_treino_dia_base__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__executa_treino_executa_treino__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InicioTreinoDiaPage = /** @class */ (function (_super) {
    __extends(InicioTreinoDiaPage, _super);
    function InicioTreinoDiaPage(navParams, navCtrl, srv, srvDia, storage) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.srvDia = srvDia;
        _this.storage = storage;
        _this.QUATRO_HORAS = 4 * 60 * 60 * 1000;
        return _this;
    }
    InicioTreinoDiaPage.prototype.filtroLoadId = function (id) {
        return {};
    };
    InicioTreinoDiaPage.prototype.filtroLoadOne = function () {
        //return {"where" : {"data" :  {gt: Date.now() - this.QUATRO_HORAS} }};
        return {
            "where": { 'and': [{ 'usuarioId': this.usuario.id }, { "ativa": "1" }] },
            "order": "dataUltimaExecucao"
        };
    };
    InicioTreinoDiaPage.prototype.posInicializaItem = function () {
    };
    InicioTreinoDiaPage.prototype.preInicializaItem = function () {
        var _this = this;
        // findOne da erro quando nao encontra
        this.srvDia.find(this.getFiltroDia(this.usuario))
            .subscribe(function (result) {
            console.log('Dia recuperado: ', result);
            if (result.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__executa_treino_executa_treino__["a" /* ExecutaTreinoPage */], {
                    id: result[0].id
                });
            }
        });
    };
    InicioTreinoDiaPage.prototype.getFiltroDia = function (usuario) {
        return {
            "where": {
                'and': [
                    { 'usuarioId': usuario.id },
                    { "data": { gt: Date.now() - this.QUATRO_HORAS } }
                ]
            },
            "order": "data desc"
        };
    };
    InicioTreinoDiaPage.prototype.iniciaDia = function () {
        var _this = this;
        var novo = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["c" /* DiaTreino */]();
        novo.concluido = 0;
        novo.data = new Date();
        novo.serieTreinoId = this.item.id;
        novo.usuarioId = this.usuario.id;
        this.srvDia.create(novo)
            .subscribe(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__executa_treino_executa_treino__["a" /* ExecutaTreinoPage */], {
                id: result.id
            });
        });
    };
    InicioTreinoDiaPage.prototype.existeMaisSerie = function () {
        return false;
        //return this.listaLoadOne.length > 1;
    };
    InicioTreinoDiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio-treino-dia',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/inicio-treino-dia/inicio-treino-dia.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Dia Treino</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="item">\n\n    <ion-card>\n      <h2 class="linha1">Série de Hoje:</h2>\n      <h2 class="linhan">Criada em {{item.dataCriacao | date : \'dd/MM/yyyy\'}}</h2>\n      <h2 class="linhan">Quantidade Execuções:{{item.qtdeExecucao}}</h2>\n      <h2 class="linhan">Última Execução:{{item.dataUltimaExecucao | date : \'dd/MM/yyyy\'}}</h2>\n      <button style="margin: 2px" ion-button outline (click)="iniciaDia()">Iniciar</button>\n      <button *ngIf="existeMaisSerie()" style="margin: 2px" ion-button outline (click)="iniciaDia()">Alterar</button>\n    </ion-card>\n\n  </ng-container>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/inicio-treino-dia/inicio-treino-dia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["t" /* SerieTreinoApi */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["d" /* DiaTreinoApi */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], InicioTreinoDiaPage);
    return InicioTreinoDiaPage;
}(__WEBPACK_IMPORTED_MODULE_3__inicio_treino_dia_base__["a" /* InicioTreinoDiaPageBase */]));

//# sourceMappingURL=inicio-treino-dia.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaListaDiaTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consulta_lista_dia_treino_base__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultaListaDiaTreinoPage = /** @class */ (function (_super) {
    __extends(ConsultaListaDiaTreinoPage, _super);
    function ConsultaListaDiaTreinoPage(navCtrl, srv, storage) {
        var _this = _super.call(this, navCtrl, srv, storage) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    ConsultaListaDiaTreinoPage.prototype.inicializacao = function () {
    };
    ConsultaListaDiaTreinoPage.prototype.getFiltro = function () {
        return {
            "include": "serieTreino",
            "order": "data desc",
            "where": { "usuarioId": this.usuario.id }
        };
    };
    ConsultaListaDiaTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consulta-lista-dia-treino',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/consulta-lista-dia-treino/consulta-lista-dia-treino.html"*/'\n\n<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Dias de Treino</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum dia de treino encontrado\n      </ion-card-header>\n      <ion-card-content>\n        Volte a consultar após seu primeiro dia\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n      <ion-item *ngFor="let item of listaItem">\n        <h3 class="linha1">{{item.data | date : \'dd/MM/yyyy hh:mm\'}}</h3>\n        <h3 class="linhan"></h3>\n        <button ion-button clear item-end (click)="detalheId(item)">Detalhe</button>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/consulta-lista-dia-treino/consulta-lista-dia-treino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["d" /* DiaTreinoApi */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ConsultaListaDiaTreinoPage);
    return ConsultaListaDiaTreinoPage;
}(__WEBPACK_IMPORTED_MODULE_2__consulta_lista_dia_treino_base__["a" /* ConsultaListaDiaTreinoPageBase */]));

//# sourceMappingURL=consulta-lista-dia-treino.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaListaExercicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consulta_lista_exercicio_base__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultaListaExercicioPage = /** @class */ (function (_super) {
    __extends(ConsultaListaExercicioPage, _super);
    function ConsultaListaExercicioPage(navCtrl, srv, storage) {
        var _this = _super.call(this, navCtrl, srv, storage) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    ConsultaListaExercicioPage.prototype.inicializacao = function () {
    };
    ConsultaListaExercicioPage.prototype.getFiltro = function () {
        return {
            'where': { 'usuarioId': this.usuario.id }
        };
    };
    ConsultaListaExercicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consulta-lista-exercicio',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/consulta-lista-exercicio/consulta-lista-exercicio.html"*/'\n\n<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Exercícios Cadastrados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum exercício encontrado\n      </ion-card-header>\n      <ion-card-content>\n        Crie uma série de treino completa.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n      <ion-item *ngFor="let item of listaItem">\n        <h3 class="linha1">{{item.titulo}}</h3>\n        <h3 class="linhan"></h3>\n        <button ion-button clear item-bottom (click)="detalheId(item)">execucoes</button>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/consulta-lista-exercicio/consulta-lista-exercicio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["j" /* ExercicioApi */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ConsultaListaExercicioPage);
    return ConsultaListaExercicioPage;
}(__WEBPACK_IMPORTED_MODULE_2__consulta_lista_exercicio_base__["a" /* ConsultaListaExercicioPageBase */]));

//# sourceMappingURL=consulta-lista-exercicio.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_core_real_time__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_custom_User__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_custom_Container__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_custom_GrupoMuscular__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_SerieTreino__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_Exercicio__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_ExecucaoItemSerie__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_CargaPlanejada__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_DiaTreino__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_custom_ItemSerie__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_custom_RegistroPeso__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_custom_Usuario__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_custom_ExecucaoCarga__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__models_index__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_24__models_index__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_index__ = __webpack_require__(855);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_25__services_index__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lb_config__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a"]; });
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
























/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_11__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_12__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_13__services_custom_Container__["a" /* ContainerApi */],
                __WEBPACK_IMPORTED_MODULE_14__services_custom_GrupoMuscular__["a" /* GrupoMuscularApi */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_SerieTreino__["a" /* SerieTreinoApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_Exercicio__["a" /* ExercicioApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_ExecucaoItemSerie__["a" /* ExecucaoItemSerieApi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_CargaPlanejada__["a" /* CargaPlanejadaApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_DiaTreino__["a" /* DiaTreinoApi */],
                __WEBPACK_IMPORTED_MODULE_20__services_custom_ItemSerie__["a" /* ItemSerieApi */],
                __WEBPACK_IMPORTED_MODULE_21__services_custom_RegistroPeso__["a" /* RegistroPesoApi */],
                __WEBPACK_IMPORTED_MODULE_22__services_custom_Usuario__["a" /* UsuarioApi */],
                __WEBPACK_IMPORTED_MODULE_23__services_custom_ExecucaoCarga__["a" /* ExecucaoCargaApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__["a" /* StorageBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXERCICIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EXERCICIO_EXERCICIOGRAFICOEXECUCAOPAGE; });
/* unused harmony export EXERCICIO_EXERCICIOULTIMASEXECUCOESPAGE */
/* unused harmony export EXERCICIO_EXERCICIOCADASTROPAGE */
/* unused harmony export EXERCICIO_LISTAEXERCICIOPAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EXERCICIO_CONSULTALISTAEXERCICIOPAGE; });
var EXERCICIO = [];
var EXERCICIO_EXERCICIOGRAFICOEXECUCAOPAGE = {};
var EXERCICIO_EXERCICIOULTIMASEXECUCOESPAGE = {};
var EXERCICIO_EXERCICIOCADASTROPAGE = {};
var EXERCICIO_LISTAEXERCICIOPAGE = {};
var EXERCICIO_CONSULTALISTAEXERCICIOPAGE = {};
//# sourceMappingURL=exercicio.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieTreinoEdicaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serie_treino_edicao_base__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cria_serie_cria_serie__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SerieTreinoEdicaoPage = /** @class */ (function (_super) {
    __extends(SerieTreinoEdicaoPage, _super);
    function SerieTreinoEdicaoPage(navParams, navCtrl, srv, storage, srvItemSerie, alertCtrl) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.srvItemSerie = srvItemSerie;
        _this.alertCtrl = alertCtrl;
        return _this;
    }
    SerieTreinoEdicaoPage.prototype.posInicializaItem = function () {
    };
    SerieTreinoEdicaoPage.prototype.preInicializaItem = function () {
    };
    SerieTreinoEdicaoPage.prototype.filtroLoadOne = function () {
        return {};
    };
    SerieTreinoEdicaoPage.prototype.filtroLoadId = function () {
        return {
            'counts': 'listaDiaTreino',
            'include': {
                'relation': 'listaItemSerie', scope: {
                    'include': [
                        'exercicio',
                        { 'relation': 'listaCargaPlanejada', 'order': 'ordemRepeticao' }
                    ]
                }
            }
        };
    };
    SerieTreinoEdicaoPage.prototype.novoRelacionado = function () {
        var novoRel = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["m" /* ItemSerie */]();
        novoRel.serieTreinoId = this.item.id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cria_serie_cria_serie__["a" /* CriaSeriePage */], {
            item: novoRel
        });
    };
    SerieTreinoEdicaoPage.prototype.altera = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cria_serie_cria_serie__["a" /* CriaSeriePage */], {
            item: item
        });
    };
    SerieTreinoEdicaoPage.prototype.exclui = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirma exclusão',
            message: 'Deseja realmente retirar esse item da série ?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.srvItemSerie.deleteById(item.id)
                            .subscribe(function (result) {
                            _this.carregaUsuario();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SerieTreinoEdicaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-serie-treino-edicao',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/serie-treino-edicao/serie-treino-edicao.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Alterando Série</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n  <ion-card *ngIf="item">\n\n    <ion-item>\n      <h3 class="linha1">Série criada em: {{item.dataCriacao | date : \'dd/MM/yyyy\'}}</h3>\n      <h3 *ngIf="item.listaItemSerie.length>0" class="linhan">Quantidade de Itens: {{item.listaItemSerie.length}}</h3>\n      <h3 *ngIf="item.listaItemSerie.length==0" class="linhan">Adicione exercícios</h3>\n    </ion-item>\n\n    <ion-list *ngIf="item.listaItemSerie.length>0">\n      <ion-item *ngFor="let itemSerie of item.listaItemSerie">\n        <h2 class="linha1">{{itemSerie.exercicio.titulo}}</h2>\n        <ion-grid style=\'padding: 0px\'>\n        <ion-row *ngFor="let carga of itemSerie.listaCargaPlanejada">\n          <ion-col><h2>Carga: {{carga.valorCarga}}</h2></ion-col>\n          <ion-col><h2>Repetições: {{carga.quantidadeRepeticao}}</h2></ion-col>\n        </ion-row>\n      </ion-grid>\n      <button *ngIf="(item.qtdeExecucao==0)" style="margin: 2px" ion-button (click)="altera(itemSerie)">Alterar</button>\n      <button *ngIf="(item.qtdeExecucao==0)" style="margin: 2px" ion-button (click)="exclui(itemSerie)">Excluir</button>\n      </ion-item>\n      <hr/>\n    </ion-list>\n\n\n\n  </ion-card>\n  <ion-fab right bottom>\n    <button ion-fab mini (click)="novoRelacionado()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/serie-treino-edicao/serie-treino-edicao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["t" /* SerieTreinoApi */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["n" /* ItemSerieApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SerieTreinoEdicaoPage);
    return SerieTreinoEdicaoPage;
}(__WEBPACK_IMPORTED_MODULE_3__serie_treino_edicao_base__["a" /* SerieTreinoEdicaoPageBase */]));

//# sourceMappingURL=serie-treino-edicao.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cria_serie_base__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CriaSeriePage = /** @class */ (function (_super) {
    __extends(CriaSeriePage, _super);
    function CriaSeriePage(navParams, navCtrl, srv, srvSerieTreino, srvExercicio, srvGrupoMuscular, storage, fb) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.srvSerieTreino = srvSerieTreino;
        _this.srvExercicio = srvExercicio;
        _this.srvGrupoMuscular = srvGrupoMuscular;
        _this.storage = storage;
        _this.fb = fb;
        _this.qtdeExecucao = 0;
        _this.novo = false;
        _this.passo1 = true;
        _this.passo2 = false;
        _this.passo3 = false;
        _this.passo4 = false;
        return _this;
        //this.myForm = this.fb.group({
        //  titulo: ['' , [Validators.required]],
        //  grupoMuscularId : ['' , [Validators.required]],
        //  qtdeExecucao : [3, [Validators.required]],
        //  valorCarga : new FormArray([])
        //})
    }
    // Validation error messages that will be displayed for each form field with errors.
    CriaSeriePage.prototype.getQtdeExecucao = function () {
        return 0;
    };
    CriaSeriePage.prototype.complementaItem = function (item) {
        if (!item.exercicio) {
            item.exercicio = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["i" /* Exercicio */]();
            item.exercicio.usuarioId = this.usuario.id;
        }
        if (!item.listaCargaPlanejada) {
            item.listaCargaPlanejada = [];
            //var carga1 = new CargaPlanejada();
            //carga1.ordemRepeticao = 1;
            //item.listaCargaPlanejada.push(carga1);
            //var carga2 = new CargaPlanejada();
            //carga2.ordemRepeticao = 2;
            //item.listaCargaPlanejada.push(carga2);
            //var carga3 = new CargaPlanejada();
            //carga3.ordemRepeticao = 3;
            //item.listaCargaPlanejada.push(carga3);
        }
        this.qtdeExecucao = item.listaCargaPlanejada.length;
        return item;
    };
    CriaSeriePage.prototype.filtroLoadId = function () {
        return {};
    };
    CriaSeriePage.prototype.executaNavegacao = function (navCtrl, result) {
        navCtrl.pop();
    };
    CriaSeriePage.prototype.inicializacaoComplementos = function () {
        this.carregaGrupoMuscular();
    };
    CriaSeriePage.prototype.criaItem = function () {
        var item = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["m" /* ItemSerie */]();
        item.exercicio = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["i" /* Exercicio */]();
        item.exercicio.usuarioId = this.usuario.id;
        item.listaCargaPlanejada = [];
        //var carga1 = new CargaPlanejada();
        //carga1.ordemRepeticao = 1;
        //carga1.valorCarga = 0;
        //carga1.quantidadeRepeticao = 0;
        //item.listaCargaPlanejada.push(carga1);
        //var carga2 = new CargaPlanejada();
        //carga2.ordemRepeticao = 2;
        //carga2.valorCarga = 0;
        //carga2.quantidadeRepeticao = 0;
        //item.listaCargaPlanejada.push(carga2);
        //var carga3 = new CargaPlanejada();
        //carga3.ordemRepeticao = 3;
        //carga3.valorCarga = 0;
        //carga3.quantidadeRepeticao = 0;
        //item.listaCargaPlanejada.push(carga3);
        //item.serieTreinoId = '';
        return item;
    };
    CriaSeriePage.prototype.carregaExercicio = function () {
        var _this = this;
        this.srvExercicio.find({
            'where': {
                'and': [
                    { 'usuarioId': this.usuario.id },
                    { 'grupoMuscularId': this.item.exercicio.grupoMuscularId }
                ]
            }
        })
            .subscribe(function (result) {
            console.log('Result-Exercicio: ', result);
            _this.listaExercicio = result;
        });
    };
    CriaSeriePage.prototype.carregaGrupoMuscular = function () {
        var _this = this;
        this.srvGrupoMuscular.find()
            .subscribe(function (result) {
            console.log('Result-GrupoMuscular: ', result);
            _this.listaGrupo = result;
        });
    };
    CriaSeriePage.prototype.alteraQuantidade = function (qtde) {
        console.log('Qtde: ', JSON.stringify(qtde));
        this.passo3 = false;
        if (qtde > this.item.listaCargaPlanejada.length) {
            for (var i = this.item.listaCargaPlanejada.length; i < qtde; i++) {
                var novo = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["a" /* CargaPlanejada */]();
                novo.ordemRepeticao = (i + 1);
                novo.valorCarga = 0;
                novo.quantidadeRepeticao = 0;
                this.item.listaCargaPlanejada.push(novo);
            }
        }
        if (qtde < this.item.listaCargaPlanejada.length) {
            for (var i = this.item.listaCargaPlanejada.length; i > qtde; i--) {
                this.item.listaCargaPlanejada.splice(i - 1, 1);
            }
        }
        console.log('ListaCarga:', this.item.listaCargaPlanejada);
    };
    CriaSeriePage.prototype.onEscolheGrupo = function ($event) {
        console.log('onEscolheGrupo()');
        this.passo1 = false;
        this.passo2 = true;
        this.carregaExercicio();
    };
    CriaSeriePage.prototype.onEscolheExercicio = function ($event) {
        console.log('onEscolheExercicio()');
        this.passo2 = false;
        this.passo3 = true;
        this.novo = this.item.exercicio.id === '0';
        console.log('item:', this.item);
        console.log('novo: ', this.novo);
    };
    CriaSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cria-serie',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/cria-serie/cria-serie.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Adicionando Exercício</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n  <ion-card *ngIf="item && listaGrupo">\n    <form novalidate #itemSerieForm="ngForm" (submit)="submit()">\n\n\n      <ion-item>\n        <ion-label floating>Grupo Muscular</ion-label>\n        <ion-select (ionChange)="onEscolheGrupo($event);" [(ngModel)]="item.exercicio.grupoMuscularId"\n          name="grupoMuscularId" #grupoMuscularId="ngModel" required>\n          <ion-option *ngFor="let grupo of listaGrupo" value="{{grupo.id}}">{{grupo.nome}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="passo1">\n        <p style="color: rgb(8, 65, 158)">Escolha o grupo muscular do exercício.</p>\n      </ion-item>\n\n\n      <ion-item *ngIf="!novo">\n        <ion-label floating>Exercicio</ion-label>\n        <ion-select (ionChange)="onEscolheExercicio($event);" [(ngModel)]="item.exercicio.id" name="exercicioId"\n          #exercicioId="ngModel">\n          <ion-option value="0">Novo</ion-option>\n          <ion-option *ngFor="let exercicio of listaExercicio" value="{{exercicio.id}}">{{exercicio.titulo}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="passo2">\n        <p style="color: rgb(8, 65, 158)">Selecione o exercicio ou a opção \'novo\' para criar um.</p>\n      </ion-item>\n\n\n      <ion-item *ngIf="novo">\n        <ion-label floating>Nome do Exercício</ion-label>\n        <ion-input name="titulo" type="text" [(ngModel)]="item.exercicio.titulo" #tituloExercicio="ngModel" required>\n        </ion-input>\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n        <ion-label floating>Execuções</ion-label>\n        <ion-select (ionChange)="alteraQuantidade($event);" [(ngModel)]="qtdeExecucao"\n          [ngModelOptions]="{standalone: true}">\n          <ion-option>0</ion-option>\n          <ion-option>1</ion-option>\n          <ion-option>2</ion-option>\n          <ion-option>3</ion-option>\n          <ion-option>4</ion-option>\n          <ion-option>5</ion-option>\n          <ion-option>6</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="passo3">\n        <p style="color: rgb(8, 65, 158)">Selecione quantas execuções do exercício</p>\n      </ion-item>\n\n      <ion-item-group *ngFor="let carga of item.listaCargaPlanejada">\n        <ion-item-divider color="light">\n          <ion-label>Execução {{carga.ordemRepeticao}}</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label floating>Carga (Kg)</ion-label>\n          <ion-input type="number" [(ngModel)]="carga.valorCarga" name="valorCarga"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Repetições (Qtde)</ion-label>\n          <ion-input type="number" [(ngModel)]="carga.quantidadeRepeticao" name="quantidadeRepeticao"></ion-input>\n        </ion-item>\n      </ion-item-group>\n\n\n\n      <button ion-button type="submit" block [disabled]="itemSerieForm.form.invalid">Enviar</button>\n    </form>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/cria-serie/cria-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["n" /* ItemSerieApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["t" /* SerieTreinoApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["j" /* ExercicioApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["k" /* GrupoMuscularApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], CriaSeriePage);
    return CriaSeriePage;
}(__WEBPACK_IMPORTED_MODULE_3__cria_serie_base__["a" /* CriaSeriePageBase */]));

//# sourceMappingURL=cria-serie.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutaTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__executa_treino_base__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExecutaTreinoPage = /** @class */ (function (_super) {
    __extends(ExecutaTreinoPage, _super);
    function ExecutaTreinoPage(navParams, navCtrl, storage, srv, srvPut) {
        var _this = _super.call(this, navParams, navCtrl, srv, srvPut, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.storage = storage;
        _this.srv = srv;
        _this.srvPut = srvPut;
        var index = _this.navCtrl.length() - 1;
        _this.navCtrl.remove(index);
        return _this;
    }
    ExecutaTreinoPage.prototype.resultadoSubmit = function (result) {
        //throw new Error("Method not implemented.");
    };
    ExecutaTreinoPage.prototype.filtroLoadId = function (id) {
        return {
            "include": {
                "relation": "serieTreino", "scope": {
                    "include": {
                        "relation": "listaItemSerie", "scope": {
                            "include": [
                                {
                                    "relation": "exercicio"
                                },
                                {
                                    "relation": "listaExecucaoItemSerie", "scope": { "where": { "diaTreinoId": id } }
                                },
                                {
                                    "relation": "listaCargaPlanejada", "scope": { "order": "ordemRepeticao" }
                                }
                            ]
                        }
                    }
                }
            }
        };
    };
    ExecutaTreinoPage.prototype.filtroLoadOne = function () {
        return {};
    };
    ExecutaTreinoPage.prototype.concluido = function (itemSerie) {
        console.log('Item: ', itemSerie);
        var execucao = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["g" /* ExecucaoItemSerie */]();
        execucao.diaTreinoId = this.item.id;
        execucao.exercicioId = itemSerie.exercicioId;
        execucao.itemSerieId = itemSerie.id;
        execucao.dataHoraFinalizacao = new Date();
        execucao.listaExecucaoCarga = [];
        execucao.usuarioId = this.usuario.id;
        itemSerie.listaCargaPlanejada.forEach(function (carga) {
            var exeCarga = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["e" /* ExecucaoCarga */]();
            exeCarga.dataHora = execucao.dataHoraFinalizacao;
            exeCarga.valorCarga = carga.valorCarga;
            exeCarga.repeticao = carga.quantidadeRepeticao;
            exeCarga.sequencia = carga.ordemRepeticao;
            execucao.listaExecucaoCarga.push(exeCarga);
        });
        console.log('Execucao', execucao);
        this.submit(execucao);
    };
    /*
    carregaItem() {
      console.log('ExecutaTreinoPageBase:filtro: ', JSON.stringify(this.filtroLoadId(this.item.id)));
      console.log('DiaTreino.findById');
      this.srv.findById(this.item.id, this.filtroLoadId(this.item.id))
        .subscribe(
          (result: DiaTreino) => {
            this.item = result;
            console.log('ExecutaTreinoPageBase.item: ', this.item)
          },
          (erro: any) => console.log('ExecutaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro))
        )
    }
    */
    ExecutaTreinoPage.prototype.getQuantidadeExecutado = function () {
        var total = 0;
        this.item.serieTreino.listaItemSerie.forEach(function (itemSerie) {
            if (itemSerie.listaExecucaoItemSerie.length > 0)
                total++;
        });
        return total;
    };
    ExecutaTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-executa-treino',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/executa-treino/executa-treino.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title *ngIf="item">Executando Série  - {{ getQuantidadeExecutado() }} de {{item.serieTreino.listaItemSerie.length}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n\n\n  <ion-card *ngIf="item">\n\n    <ion-item>\n      <h3 class="linha1">Série de: {{item.serieTreino.dataCriacao | date : \'dd/MM/yyyy\'}}</h3>\n      <h3 class="linhan" *ngIf="item.serieTreino.listaItemSerie.length==0">Nenhum exercício nessa série</h3>\n    </ion-item>\n\n    <ion-item>\n      <h3 class="linhan">Hora Inicio : {{item.data | date: \'hh:mm:ss\'}}</h3>\n    </ion-item>\n\n    <ion-list *ngIf="item.serieTreino.listaItemSerie.length>0">\n      <ion-item *ngFor="let itemSerie of item.serieTreino.listaItemSerie">\n        <h2 class="linha1">{{itemSerie.exercicio.titulo}}</h2>\n        <ng-container *ngFor="let carga of itemSerie.listaCargaPlanejada">\n          <h2>Carga: {{carga.valorCarga}}, Repetições: {{carga.quantidadeRepeticao}}</h2>\n        </ng-container>\n        <button *ngIf="itemSerie.listaExecucaoItemSerie.length==0" ion-button outline (click)="concluido(itemSerie)">concluir</button>\n      </ion-item>\n    </ion-list>\n\n\n\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/executa-treino/executa-treino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["d" /* DiaTreinoApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["h" /* ExecucaoItemSerieApi */]])
    ], ExecutaTreinoPage);
    return ExecutaTreinoPage;
}(__WEBPACK_IMPORTED_MODULE_3__executa_treino_base__["a" /* ExecutaTreinoPageBase */]));

//# sourceMappingURL=executa-treino.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPerformancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_performance_base__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consulta_lista_dia_treino_consulta_lista_dia_treino__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consulta_lista_exercicio_consulta_lista_exercicio__ = __webpack_require__(105);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrincipalPerformancePage = /** @class */ (function (_super) {
    __extends(PrincipalPerformancePage, _super);
    function PrincipalPerformancePage(navParams, navCtrl, storage) {
        var _this = _super.call(this, navParams, navCtrl, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.storage = storage;
        return _this;
    }
    PrincipalPerformancePage.prototype.inicializacao = function () {
    };
    PrincipalPerformancePage.prototype.consultaData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__consulta_lista_dia_treino_consulta_lista_dia_treino__["a" /* ConsultaListaDiaTreinoPage */]);
    };
    PrincipalPerformancePage.prototype.consultaExercicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__consulta_lista_exercicio_consulta_lista_exercicio__["a" /* ConsultaListaExercicioPage */]);
    };
    PrincipalPerformancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-principal-performance',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/principal-performance/principal-performance.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Performance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="quadroBase" *ngIf="usuario">\n\n    <div class="quadro30">\n  \n    </div>\n  \n    <ion-list class="quadro70">\n  \n      <ion-item class="quadroBase">\n        <button (click)="consultaExercicio()" ion-button block large icon-start>\n          <label>Por exercícios</label>\n        </button>\n      </ion-item>\n  \n      <ion-item class="quadroBase">\n        <button (click)="consultaData()" ion-button block large icon-start>\n          <label>Por datas</label>\n        </button>\n      </ion-item>\n  \n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/principal-performance/principal-performance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PrincipalPerformancePage);
    return PrincipalPerformancePage;
}(__WEBPACK_IMPORTED_MODULE_2__principal_performance_base__["a" /* PrincipalPerformancePageBase */]));

//# sourceMappingURL=principal-performance.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheDiaTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_dia_treino_base__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__["a" /* default */]);
var DetalheDiaTreinoPage = /** @class */ (function (_super) {
    __extends(DetalheDiaTreinoPage, _super);
    function DetalheDiaTreinoPage(navParams, navCtrl, srv, storage) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    DetalheDiaTreinoPage.prototype.posInicializaItem = function () {
    };
    DetalheDiaTreinoPage.prototype.preInicializaItem = function () {
    };
    DetalheDiaTreinoPage.prototype.filtroLoadId = function (id) {
        return {
            "include": {
                "relation": "serieTreino", "scope": {
                    "include": {
                        "relation": "listaItemSerie", "scope": {
                            "include": [
                                {
                                    "relation": "exercicio"
                                },
                                {
                                    "relation": "listaExecucaoItemSerie", "scope": {
                                        "where": { "diaTreinoId": id },
                                        "include": {
                                            "relation": "listaExecucaoCarga", "scope": { "order": "sequencia" }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        };
        ;
    };
    DetalheDiaTreinoPage.prototype.filtroLoadOne = function () {
        return {};
    };
    DetalheDiaTreinoPage.prototype.getHoraExecucao = function (listaExecucao) {
        if (listaExecucao.length == 0)
            return '-';
        else
            return new __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]('pt-BR').transform(listaExecucao[0].dataHoraFinalizacao, 'hh:mm:ss');
        ;
    };
    DetalheDiaTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-dia-treino',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/detalhe-dia-treino/detalhe-dia-treino.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title *ngIf="item">{{item.data | date: \'dd-MM-yyyy\'}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n  <ng-container *ngIf="item">\n\n    <ion-card>\n      <div class="card-title">Início: {{item.data | date : \'hh:mm:ss\'}}</div>\n      <div class="card-subtitle">Quantidade de Exercícios: {{item.serieTreino.listaItemSerie.length}}</div>\n      <div class="card-subtitle">Série criada em : {{item.serieTreino.dataCriacao | date : \'dd-MM-yyyy\'}}</div>\n\n      <div class="card-content">\n        <ion-list>\n          <ion-item *ngFor="let itemSerie of item.serieTreino.listaItemSerie">\n            <h2 class="linha1">Exercício: {{itemSerie.exercicio.titulo}}</h2>\n            <h2 class="linhan">Hora Execução: {{itemSerie.listaExecucaoItemSerie[0].dataHoraFinalizacao | date : \'hh:mm:ss\'}}</h2>\n            <ng-container *ngFor="let cargaExecucao of itemSerie.listaExecucaoItemSerie[0].listaExecucaoCarga">\n              <h2>Carga: {{cargaExecucao.valorCarga}} - Repetições: {{cargaExecucao.repeticao}}</h2>\n            </ng-container>\n          </ion-item>\n        </ion-list>\n      </div>\n\n\n    </ion-card>\n\n\n  </ng-container>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/detalhe-dia-treino/detalhe-dia-treino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["d" /* DiaTreinoApi */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], DetalheDiaTreinoPage);
    return DetalheDiaTreinoPage;
}(__WEBPACK_IMPORTED_MODULE_2__detalhe_dia_treino_base__["a" /* DetalheDiaTreinoPageBase */]));

//# sourceMappingURL=detalhe-dia-treino.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercicioGraficoExecucaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exercicio_grafico_execucao_base__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__["a" /* default */]);
var ExercicioGraficoExecucaoPage = /** @class */ (function (_super) {
    __extends(ExercicioGraficoExecucaoPage, _super);
    function ExercicioGraficoExecucaoPage(navParams, navCtrl, srv, storage) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    ExercicioGraficoExecucaoPage.prototype.existeDadosGrafico = function () {
        return this.item.listaExecucaoItemSerie.length > 0;
    };
    ExercicioGraficoExecucaoPage.prototype.extraiValores = function (detalhe) {
        var saida = [];
        for (var i = 0; i < detalhe.listaExecucaoCarga.length; i++) {
            saida.push(detalhe.listaExecucaoCarga[i].valorCarga);
        }
        return saida;
    };
    ExercicioGraficoExecucaoPage.prototype.obtemTituloSerie = function () {
        var saida = [];
        for (var i = 0; i < this.item.listaExecucaoItemSerie[0].listaExecucaoCarga.length; i++) {
            saida.push('Repetição ' + (i + 1));
        }
        return saida;
    };
    ExercicioGraficoExecucaoPage.prototype.getListaGrafico = function () {
        return this.item.listaExecucaoItemSerie;
    };
    ExercicioGraficoExecucaoPage.prototype.extraiRotulo = function (detalhe) {
        var dado = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]('pt-BR').transform(detalhe.dataHoraFinalizacao, 'dd/MM');
        return dado;
    };
    ExercicioGraficoExecucaoPage.prototype.filtroLoadId = function (id) {
        return {
            "include": {
                "relation": "listaExecucaoItemSerie",
                "scope": {
                    "order": "dataHoraFinalizacao desc",
                    "include": {
                        "relation": "listaExecucaoCarga", "scope": { "order": "sequencia" }
                    }
                }
            }
        };
    };
    ExercicioGraficoExecucaoPage.prototype.filtroLoadOne = function () {
        return {};
    };
    ExercicioGraficoExecucaoPage.prototype.posInicializaItem = function () {
        //var saida:string[] = [];
        //for (let i=0; i<this.item.listaExecucaoItemSerie.length; i++) {
        //  var dado = new DatePipe('pt-BR').transform(this.item.listaExecucaoItemSerie[i].dataHoraFinalizacao, 'dd/MM');
        //  saida.push(dado);
        //}
        //this.rotulos=  saida;
        //console.log('rotulos:' , this.rotulos);
        // -------
        //var saida2:any[] = [];
        //for (let i=0; i<this.item.listaExecucaoItemSerie.length; i++) {
        //  for (let x=0; x<this.item.listaExecucaoItemSerie[i].listaExecucaoCarga.length;x++) {
        //    var valor:number = this.item.listaExecucaoItemSerie[i].listaExecucaoCarga[x].valorCarga;
        //    if (i==0) {
        //      var novoDado = {'data' : [valor] , 'label' : 'Repeticao ' + (x+1)};
        //      saida2.push(novoDado);
        //    } else {
        //      var itemDado:any = saida2[x];
        //      itemDado.data.push(valor);
        //    }
        //  } 
        //}
        //this.dados = saida2;
        //console.log('dados:', JSON.stringify(this.dados));
    };
    ExercicioGraficoExecucaoPage.prototype.preInicializaItem = function () {
    };
    ExercicioGraficoExecucaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exercicio-grafico-execucao',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/exercicio-grafico-execucao/exercicio-grafico-execucao.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title *ngIf="item">{{item.titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="item">\n\n    <ion-card *ngIf="item.listaExecucaoItemSerie.length==0">\n      <ion-card-header>\n        Exercício não teve ainda nenhuma execução\n      </ion-card-header>\n      <ion-card-content>\n        Inicie um treino com ele em sua série.\n      </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-grid *ngIf="item.listaExecucaoItemSerie.length>0">\n\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <h2>{{item.titulo}}</h2>\n              <h2>{{item.subtitulo}}</h2>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-header>\n              <p>Execuções: {{item.listaExecucaoItemSerie.length}}</p>\n              <p>Data mais recente: {{item.listaExecucaoItemSerie[0].dataHoraFinalizacao | date : \'dd/MM/yyyy\'}}</p>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id="item">\n          <ion-card>\n            <canvas id="cv01" baseChart height="250" [datasets]="dados" [labels]="rotulos"\n              [options]="barChartOptions" [legend]="barChartLegend" [chartType]="barChartType"></canvas>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/exercicio-grafico-execucao/exercicio-grafico-execucao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["j" /* ExercicioApi */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ExercicioGraficoExecucaoPage);
    return ExercicioGraficoExecucaoPage;
}(__WEBPACK_IMPORTED_MODULE_2__exercicio_grafico_execucao_base__["a" /* ExercicioGraficoExecucaoPageBase */]));

//# sourceMappingURL=exercicio-grafico-execucao.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSerieWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cria_serie_work_base__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CriaSerieWorkPage = /** @class */ (function (_super) {
    __extends(CriaSerieWorkPage, _super);
    function CriaSerieWorkPage(navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio) {
        var _this = _super.call(this, navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.srvSerieTreino = srvSerieTreino;
        _this.srvExercicio = srvExercicio;
        return _this;
    }
    CriaSerieWorkPage.prototype.inicializacaoComplementos = function () {
        throw new Error("Method not implemented.");
    };
    CriaSerieWorkPage.prototype.criaItem = function () {
        throw new Error("Method not implemented.");
    };
    CriaSerieWorkPage.prototype.executaNavegacao = function (navCtrl, result) {
        throw new Error("Method not implemented.");
    };
    CriaSerieWorkPage.prototype.filtroLoadId = function (id) {
        throw new Error("Method not implemented.");
    };
    CriaSerieWorkPage.prototype.complementaItem = function (novo) {
        throw new Error("Method not implemented.");
    };
    CriaSerieWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cria-serie-work',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/cria-serie-work/cria-serie-work.html"*/'\n<ion-header >\n  <ion-navbar color="titulo">\n    <ion-title (click)="testaFoto()">CriaSerieWorkPage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n <ion-card>\n    <form>\n    \n      <ion-item>\n        <ion-label floating>Grupo Muscular</ion-label>\n        <ion-select>\n          <ion-option value="f">Peitoral</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label floating>Carga</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <button ion-button type="submit" block>Adicionar</button>\n    </form>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/cria-serie-work/cria-serie-work.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["n" /* ItemSerieApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["t" /* SerieTreinoApi */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["j" /* ExercicioApi */]])
    ], CriaSerieWorkPage);
    return CriaSerieWorkPage;
}(__WEBPACK_IMPORTED_MODULE_2__cria_serie_work_base__["a" /* CriaSerieWorkPageBase */]));

//# sourceMappingURL=cria-serie-work.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_base__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comandos_zero_comandos_zero__ = __webpack_require__(101);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, formBuilder, srv, storage) {
        var _this = _super.call(this, navCtrl, navParams, formBuilder, srv, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.getPaginaInicial = function () {
        var proxima = __WEBPACK_IMPORTED_MODULE_7__comandos_zero_comandos_zero__["a" /* ComandosZeroPage */];
        console.log('Proxima: ', proxima);
        return proxima;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.criarConta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/login/login.html"*/'<ion-content>\n\n  <div id="logo">\n    <img width="100%" heigth="100%" src="assets/imgs/LogoTreino.png" />\n  </div>\n\n\n  <form  padding [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="login" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" formControlName="senha" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="erroMsg">\n        <p style="color:red">{{erroMsg}}</p>\n      </ion-item>\n    </ion-list>\n    <div width="100%" style="align-content: center; margin: 6px">\n      <button ion-button round class="botaoPrincipal" type="submit">Entrar</button>\n    </div>\n\n  </form>\n\n\n  <div padding id="criaEsquece">\n      <button padding ion-button (click)="criarConta()" color="primary" style="margin-top: 20px" outline float-right >Primeiro Acesso</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["v" /* UsuarioApi */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_4__login_base__["a" /* LoginPageBase */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_base__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(navCtrl, formBuilder, storage, srv) {
        var _this = _super.call(this, navCtrl, formBuilder, storage, srv) || this;
        _this.navCtrl = navCtrl;
        _this.formBuilder = formBuilder;
        _this.storage = storage;
        _this.srv = srv;
        return _this;
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/signup/signup.html"*/'<ion-content padding>\n\n  <div id="logo">\n    <img width="100%" heigth="100%" src="assets/imgs/LogoTreino.png" />\n  </div>\n\n\n  <form padding [formGroup]="signupForm" (ngSubmit)="onSubmit()" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="login"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'login\').invalid && signupForm.get(\'login\').dirty">\n        <p style="color:red">\n          Digite seu email.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" formControlName="senha1"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'senha1\').invalid && signupForm.get(\'senha1\').dirty">\n        <p style="color:red">\n          Digite uma senha de pelo menos 8 caracteres.\n        </p>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Repetir Senha</ion-label>\n        <ion-input type="password" formControlName="senha2"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'senha2\').invalid && signupForm.get(\'senha2\').dirty">\n        <p style="color:red">\n          Digite uma senha de pelo menos 8 caracteres.\n        </p>\n      </ion-item>\n\n      <ion-item *ngIf="erroMsg">\n        <p style="color:red">{{erroMsg}}</p>\n      </ion-item>\n\n    </ion-list>\n\n    <div width="100%" style="align-content: center; margin: 12px">\n      <button ion-button round class="botaoPrincipal" type="submit" [disabled]="signupForm.invalid">Enviar</button>\n    </div>\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["v" /* UsuarioApi */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_2__signup_base__["a" /* SignupPageBase */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comandos-zero/comandos-zero.module": [
		901,
		15
	],
	"../pages/consulta-lista-dia-treino/consulta-lista-dia-treino.module": [
		902,
		14
	],
	"../pages/consulta-lista-exercicio/consulta-lista-exercicio.module": [
		903,
		13
	],
	"../pages/cria-serie-work/cria-serie-work.module": [
		904,
		12
	],
	"../pages/cria-serie/cria-serie.module": [
		905,
		11
	],
	"../pages/detalhe-dia-treino/detalhe-dia-treino.module": [
		906,
		10
	],
	"../pages/escolha-serie-treino/escolha-serie-treino.module": [
		907,
		9
	],
	"../pages/executa-treino/executa-treino.module": [
		908,
		8
	],
	"../pages/exercicio-grafico-execucao/exercicio-grafico-execucao.module": [
		909,
		7
	],
	"../pages/inicio-treino-dia/inicio-treino-dia.module": [
		910,
		6
	],
	"../pages/lista-serie-treino/lista-serie-treino.module": [
		911,
		5
	],
	"../pages/login/login.module": [
		912,
		4
	],
	"../pages/principal-performance/principal-performance.module": [
		913,
		3
	],
	"../pages/serie-edita-execucao/serie-edita-execucao.module": [
		914,
		2
	],
	"../pages/serie-treino-edicao/serie-treino-edicao.module": [
		915,
		1
	],
	"../pages/signup/signup.module": [
		916,
		0
	],
	"../pages/teste-edit/teste-edit.module": [
		917,
		17
	],
	"../pages/teste-form01/teste-form01.module": [
		918,
		16
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//validacao.kinghost.net:21189';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());

//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());

//# sourceMappingURL=BaseModels.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* tslint:disable */
var Container = /** @class */ (function () {
    function Container(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Container`.
     */
    Container.getModelName = function () {
        return "Container";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Container for dynamic purposes.
    **/
    Container.factory = function (data) {
        return new Container(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Container.getModelDefinition = function () {
        return {
            name: 'Container',
            plural: 'Containers',
            path: 'Containers',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Container;
}());

//# sourceMappingURL=Container.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoMuscular; });
var GrupoMuscular = /** @class */ (function () {
    function GrupoMuscular(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    GrupoMuscular.getModelName = function () {
        return "GrupoMuscular";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of GrupoMuscular for dynamic purposes.
    **/
    GrupoMuscular.factory = function (data) {
        return new GrupoMuscular(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    GrupoMuscular.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_GrupoMuscular',
            plural: 'TreinoAcademia_GrupoMusculars',
            path: 'TreinoAcademia_GrupoMusculars',
            idName: 'id',
            properties: {
                "nome": {
                    name: "nome",
                    type: "string"
                },
                "id": {
                    name: "id",
                    type: "number"
                },
                "imagem": {
                    name: "imagem",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return GrupoMuscular;
}());

//# sourceMappingURL=GrupoMuscular.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieTreino; });
var SerieTreino = /** @class */ (function () {
    function SerieTreino(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    SerieTreino.getModelName = function () {
        return "SerieTreino";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of SerieTreino for dynamic purposes.
    **/
    SerieTreino.factory = function (data) {
        return new SerieTreino(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    SerieTreino.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_SerieTreino',
            plural: 'TreinoAcademia_SerieTreinos',
            path: 'TreinoAcademia_SerieTreinos',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "dataCriacao": {
                    name: "dataCriacao",
                    type: "Date"
                },
                "ativa": {
                    name: "ativa",
                    type: "number"
                },
                "dataUltimaExecucao": {
                    name: "dataUltimaExecucao",
                    type: "Date"
                },
                "qtdeExecucao": {
                    name: "qtdeExecucao",
                    type: "number"
                },
                "nome": {
                    name: "nome",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return SerieTreino;
}());

//# sourceMappingURL=SerieTreino.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercicio; });
var Exercicio = /** @class */ (function () {
    function Exercicio(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    Exercicio.getModelName = function () {
        return "Exercicio";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of Exercicio for dynamic purposes.
    **/
    Exercicio.factory = function (data) {
        return new Exercicio(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Exercicio.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_Exercicio',
            plural: 'TreinoAcademia_Exercicios',
            path: 'TreinoAcademia_Exercicios',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "descricao": {
                    name: "descricao",
                    type: "string"
                },
                "imagem": {
                    name: "imagem",
                    type: "string"
                },
                "titulo": {
                    name: "titulo",
                    type: "string"
                },
                "subtitulo": {
                    name: "subtitulo",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return Exercicio;
}());

//# sourceMappingURL=Exercicio.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecucaoItemSerie; });
var ExecucaoItemSerie = /** @class */ (function () {
    function ExecucaoItemSerie(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    ExecucaoItemSerie.getModelName = function () {
        return "ExecucaoItemSerie";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of ExecucaoItemSerie for dynamic purposes.
    **/
    ExecucaoItemSerie.factory = function (data) {
        return new ExecucaoItemSerie(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ExecucaoItemSerie.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_ExecucaoItemSerie',
            plural: 'TreinoAcademia_ExecucaoItemSeries',
            path: 'TreinoAcademia_ExecucaoItemSeries',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "dataHoraInicio": {
                    name: "dataHoraInicio",
                    type: "Date"
                },
                "dataHoraFinalizacao": {
                    name: "dataHoraFinalizacao",
                    type: "Date"
                },
                "cargaUtilizada": {
                    name: "cargaUtilizada",
                    type: "number"
                },
                "sucessoRepeticoes": {
                    name: "sucessoRepeticoes",
                    type: "number"
                },
                "numeroSerie": {
                    name: "numeroSerie",
                    type: "number"
                },
                "quantidadeRepeticao": {
                    name: "quantidadeRepeticao",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return ExecucaoItemSerie;
}());

//# sourceMappingURL=ExecucaoItemSerie.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Container__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_GrupoMuscular__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_SerieTreino__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Exercicio__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_ExecucaoItemSerie__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_CargaPlanejada__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_DiaTreino__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_ItemSerie__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_RegistroPeso__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_Usuario__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_ExecucaoCarga__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            GrupoMuscular: __WEBPACK_IMPORTED_MODULE_3__models_GrupoMuscular__["a" /* GrupoMuscular */],
            SerieTreino: __WEBPACK_IMPORTED_MODULE_4__models_SerieTreino__["a" /* SerieTreino */],
            Exercicio: __WEBPACK_IMPORTED_MODULE_5__models_Exercicio__["a" /* Exercicio */],
            ExecucaoItemSerie: __WEBPACK_IMPORTED_MODULE_6__models_ExecucaoItemSerie__["a" /* ExecucaoItemSerie */],
            CargaPlanejada: __WEBPACK_IMPORTED_MODULE_7__models_CargaPlanejada__["a" /* CargaPlanejada */],
            DiaTreino: __WEBPACK_IMPORTED_MODULE_8__models_DiaTreino__["a" /* DiaTreino */],
            ItemSerie: __WEBPACK_IMPORTED_MODULE_9__models_ItemSerie__["a" /* ItemSerie */],
            RegistroPeso: __WEBPACK_IMPORTED_MODULE_10__models_RegistroPeso__["a" /* RegistroPeso */],
            Usuario: __WEBPACK_IMPORTED_MODULE_11__models_Usuario__["a" /* Usuario */],
            ExecucaoCarga: __WEBPACK_IMPORTED_MODULE_12__models_ExecucaoCarga__["a" /* ExecucaoCarga */],
            User: __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */],
            Container: __WEBPACK_IMPORTED_MODULE_1__models_Container__["a" /* Container */]
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaPlanejada; });
var CargaPlanejada = /** @class */ (function () {
    function CargaPlanejada(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    CargaPlanejada.getModelName = function () {
        return "CargaPlanejada";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of CargaPlanejada for dynamic purposes.
    **/
    CargaPlanejada.factory = function (data) {
        return new CargaPlanejada(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    CargaPlanejada.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_CargaPlanejada',
            plural: 'TreinoAcademia_CargaPlanejadas',
            path: 'TreinoAcademia_CargaPlanejadas',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "valorCarga": {
                    name: "valorCarga",
                    type: "number"
                },
                "dataInicio": {
                    name: "dataInicio",
                    type: "Date"
                },
                "dataFinal": {
                    name: "dataFinal",
                    type: "Date"
                },
                "quantidadeRepeticao": {
                    name: "quantidadeRepeticao",
                    type: "number"
                },
                "ativa": {
                    name: "ativa",
                    type: "number"
                },
                "ordemRepeticao": {
                    name: "ordemRepeticao",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return CargaPlanejada;
}());

//# sourceMappingURL=CargaPlanejada.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaTreino; });
var DiaTreino = /** @class */ (function () {
    function DiaTreino(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    DiaTreino.getModelName = function () {
        return "DiaTreino";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of DiaTreino for dynamic purposes.
    **/
    DiaTreino.factory = function (data) {
        return new DiaTreino(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    DiaTreino.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_DiaTreino',
            plural: 'TreinoAcademia_DiaTreinos',
            path: 'TreinoAcademia_DiaTreinos',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "data": {
                    name: "data",
                    type: "Date"
                },
                "concluido": {
                    name: "concluido",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return DiaTreino;
}());

//# sourceMappingURL=DiaTreino.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSerie; });
var ItemSerie = /** @class */ (function () {
    function ItemSerie(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    ItemSerie.getModelName = function () {
        return "ItemSerie";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of ItemSerie for dynamic purposes.
    **/
    ItemSerie.factory = function (data) {
        return new ItemSerie(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ItemSerie.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_ItemSerie',
            plural: 'TreinoAcademia_ItemSeries',
            path: 'TreinoAcademia_ItemSeries',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "ordemExecucao": {
                    name: "ordemExecucao",
                    type: "number"
                },
                "parametros": {
                    name: "parametros",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return ItemSerie;
}());

//# sourceMappingURL=ItemSerie.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPeso; });
var RegistroPeso = /** @class */ (function () {
    function RegistroPeso(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    RegistroPeso.getModelName = function () {
        return "RegistroPeso";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of RegistroPeso for dynamic purposes.
    **/
    RegistroPeso.factory = function (data) {
        return new RegistroPeso(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    RegistroPeso.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_RegistroPeso',
            plural: 'TreinoAcademia_RegistroPesos',
            path: 'TreinoAcademia_RegistroPesos',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "data": {
                    name: "data",
                    type: "Date"
                },
                "valor": {
                    name: "valor",
                    type: "number"
                },
                "obs": {
                    name: "obs",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return RegistroPeso;
}());

//# sourceMappingURL=RegistroPeso.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    Usuario.getModelName = function () {
        return "Usuario";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of Usuario for dynamic purposes.
    **/
    Usuario.factory = function (data) {
        return new Usuario(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Usuario.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_Usuario',
            plural: 'TreinoAcademia_Usuarios',
            path: 'TreinoAcademia_Usuarios',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "nome": {
                    name: "nome",
                    type: "string"
                },
                "senha": {
                    name: "senha",
                    type: "string"
                },
                "email": {
                    name: "email",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecucaoCarga; });
var ExecucaoCarga = /** @class */ (function () {
    function ExecucaoCarga(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    ExecucaoCarga.getModelName = function () {
        return "ExecucaoCarga";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of ExecucaoCarga for dynamic purposes.
    **/
    ExecucaoCarga.factory = function (data) {
        return new ExecucaoCarga(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ExecucaoCarga.getModelDefinition = function () {
        return {
            name: 'TreinoAcademia_ExecucaoCarga',
            plural: 'TreinoAcademia_ExecucaoCargas',
            path: 'TreinoAcademia_ExecucaoCargas',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "dataHora": {
                    name: "dataHora",
                    type: "Date"
                },
                "valorCarga": {
                    name: "valorCarga",
                    type: "number"
                },
                "repeticao": {
                    name: "repeticao",
                    type: "number"
                },
                "sequencia": {
                    name: "sequencia",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return ExecucaoCarga;
}());

//# sourceMappingURL=ExecucaoCarga.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());

//# sourceMappingURL=socket.driver.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        //return throwError(errorResponse.error.error || 'Server error');
        console.log('ErroHttp: ', errorResponse);
        return null;
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());

//# sourceMappingURL=socket.connections.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (res) { return res.body; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_service__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_1__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());

//# sourceMappingURL=real.time.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GrupoMuscular__ = __webpack_require__(246);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SerieTreino__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__SerieTreino__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exercicio__ = __webpack_require__(248);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__Exercicio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExecucaoItemSerie__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__ExecucaoItemSerie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CargaPlanejada__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__CargaPlanejada__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DiaTreino__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__DiaTreino__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ItemSerie__ = __webpack_require__(252);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__ItemSerie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RegistroPeso__ = __webpack_require__(253);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Usuario__ = __webpack_require__(254);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__Usuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExecucaoCarga__ = __webpack_require__(255);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__ExecucaoCarga__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Container__ = __webpack_require__(245);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__BaseModels__ = __webpack_require__(243);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FireLoopRef__ = __webpack_require__(848);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__FireLoopRef__["a"]; });













//# sourceMappingURL=index.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Container` model.
 */
var ContainerApi = /** @class */ (function (_super) {
    __extends(ContainerApi, _super);
    function ContainerApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainers = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.createContainer = function (options, customHeaders) {
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` �?? `{}` -
     */
    ContainerApi.prototype.destroyContainer = function (container, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainer = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFiles = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFile = function (container, file, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` �?? `{}` -
     */
    ContainerApi.prototype.removeFile = function (container, file, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {object} data Request data.
     *
     *  - `req` �?? `{object}` -
     *
     *  - `res` �?? `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` �?? `{object}` -
     */
    ContainerApi.prototype.upload = function (container, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/upload";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @param {object} req
     *
     * @param {object} res
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContainerApi.prototype.download = function (container, file, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/download/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Container`.
     */
    ContainerApi.prototype.getModelName = function () {
        return "Container";
    };
    ContainerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ContainerApi);
    return ContainerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Container.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoMuscularApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_grupoMuscular__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var GrupoMuscularApi = /** @class */ (function (_super) {
    __extends(GrupoMuscularApi, _super);
    function GrupoMuscularApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    GrupoMuscularApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/grupoMusculars";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    GrupoMuscularApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/grupoMusculars/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    GrupoMuscularApi.prototype.getModelName = function () {
        return "GrupoMuscular";
    };
    GrupoMuscularApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_grupoMuscular__["a" /* GRUPOMUSCULAR */][0]);
    };
    GrupoMuscularApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_grupoMuscular__["a" /* GRUPOMUSCULAR */]);
    };
    GrupoMuscularApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_grupoMuscular__["a" /* GRUPOMUSCULAR */][filter.where.id]);
    };
    GrupoMuscularApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], GrupoMuscularApi);
    return GrupoMuscularApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=GrupoMuscular.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieTreinoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic





/**
 * Api services for the `Aplicacao` model.
 */
var SerieTreinoApi = /** @class */ (function (_super) {
    __extends(SerieTreinoApi, _super);
    function SerieTreinoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    SerieTreinoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/serieTreinos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    SerieTreinoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/serieTreinos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    SerieTreinoApi.prototype.getModelName = function () {
        return "SerieTreino";
    };
    SerieTreinoApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["a" /* SERIETREINO */][0]);
    };
    SerieTreinoApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["a" /* SERIETREINO */]);
    };
    SerieTreinoApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["a" /* SERIETREINO */][filter.where.id]);
    };
    SerieTreinoApi.prototype.getListaSerieTreinoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["d" /* SERIETREINO_LISTASERIETREINOPAGE */]);
    };
    SerieTreinoApi.prototype.getInicioTreinoDiaPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["c" /* SERIETREINO_INICIOTREINODIAPAGE */]);
    };
    SerieTreinoApi.prototype.getSerieTreinoEdicaoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["e" /* SERIETREINO_SERIETREINOEDICAOPAGE */]);
    };
    SerieTreinoApi.prototype.getEscolhaSerieTreinoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_serieTreino__["b" /* SERIETREINO_ESCOLHASERIETREINOPAGE */]);
    };
    SerieTreinoApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], SerieTreinoApi);
    return SerieTreinoApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=SerieTreino.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercicioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_exercicio__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic



/**
 * Api services for the `Aplicacao` model.
 */
var ExercicioApi = /** @class */ (function (_super) {
    __extends(ExercicioApi, _super);
    function ExercicioApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    ExercicioApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/exercicios";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    ExercicioApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/exercicios/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    ExercicioApi.prototype.getModelName = function () {
        return "Exercicio";
    };
    ExercicioApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_exercicio__["a" /* EXERCICIO */][0]);
    };
    ExercicioApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_exercicio__["a" /* EXERCICIO */]);
    };
    ExercicioApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_exercicio__["a" /* EXERCICIO */][filter.where.id]);
    };
    ExercicioApi.prototype.getExercicioGraficoExecucaoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_exercicio__["c" /* EXERCICIO_EXERCICIOGRAFICOEXECUCAOPAGE */]);
    };
    ExercicioApi.prototype.getConsultaListaExercicioPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_exercicio__["b" /* EXERCICIO_CONSULTALISTAEXERCICIOPAGE */]);
    };
    ExercicioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ExercicioApi);
    return ExercicioApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Exercicio.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecucaoItemSerieApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_execucaoItemSerie__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var ExecucaoItemSerieApi = /** @class */ (function (_super) {
    __extends(ExecucaoItemSerieApi, _super);
    function ExecucaoItemSerieApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    ExecucaoItemSerieApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/execucaoItemSeries";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    ExecucaoItemSerieApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/execucaoItemSeries/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    ExecucaoItemSerieApi.prototype.getModelName = function () {
        return "ExecucaoItemSerie";
    };
    ExecucaoItemSerieApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoItemSerie__["a" /* EXECUCAOITEMSERIE */][0]);
    };
    ExecucaoItemSerieApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoItemSerie__["a" /* EXECUCAOITEMSERIE */]);
    };
    ExecucaoItemSerieApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoItemSerie__["a" /* EXECUCAOITEMSERIE */][filter.where.id]);
    };
    ExecucaoItemSerieApi.prototype.submitExecutaTreinoPage = function (item, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TreinoAcademia_ExecucaoItemSeries/submitExecutaTreinoPage";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof item !== 'undefined' && item !== null)
            _urlParams.item = item;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    ExecucaoItemSerieApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ExecucaoItemSerieApi);
    return ExecucaoItemSerieApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=ExecucaoItemSerie.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargaPlanejadaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_cargaPlanejada__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var CargaPlanejadaApi = /** @class */ (function (_super) {
    __extends(CargaPlanejadaApi, _super);
    function CargaPlanejadaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    CargaPlanejadaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/cargaPlanejadas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    CargaPlanejadaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/cargaPlanejadas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    CargaPlanejadaApi.prototype.getModelName = function () {
        return "CargaPlanejada";
    };
    CargaPlanejadaApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_cargaPlanejada__["a" /* CARGAPLANEJADA */][0]);
    };
    CargaPlanejadaApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_cargaPlanejada__["a" /* CARGAPLANEJADA */]);
    };
    CargaPlanejadaApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_cargaPlanejada__["a" /* CARGAPLANEJADA */][filter.where.id]);
    };
    CargaPlanejadaApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], CargaPlanejadaApi);
    return CargaPlanejadaApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=CargaPlanejada.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaTreinoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic




/**
 * Api services for the `Aplicacao` model.
 */
var DiaTreinoApi = /** @class */ (function (_super) {
    __extends(DiaTreinoApi, _super);
    function DiaTreinoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    DiaTreinoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/diaTreinos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    DiaTreinoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/diaTreinos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    DiaTreinoApi.prototype.getModelName = function () {
        return "DiaTreino";
    };
    DiaTreinoApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["a" /* DIATREINO */][0]);
    };
    DiaTreinoApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["a" /* DIATREINO */]);
    };
    DiaTreinoApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["a" /* DIATREINO */][filter.where.id]);
    };
    DiaTreinoApi.prototype.getConsultaListaDiaTreinoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["b" /* DIATREINO_CONSULTALISTADIATREINOPAGE */]);
    };
    DiaTreinoApi.prototype.getExecutaTreinoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["d" /* DIATREINO_EXECUTATREINOPAGE */]);
    };
    DiaTreinoApi.prototype.getDetalheDiaTreinoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_diaTreino__["c" /* DIATREINO_DETALHEDIATREINOPAGE */]);
    };
    DiaTreinoApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], DiaTreinoApi);
    return DiaTreinoApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=DiaTreino.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSerieApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic




/**
 * Api services for the `Aplicacao` model.
 */
var ItemSerieApi = /** @class */ (function (_super) {
    __extends(ItemSerieApi, _super);
    function ItemSerieApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    ItemSerieApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/itemSeries";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    ItemSerieApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/itemSeries/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    ItemSerieApi.prototype.getModelName = function () {
        return "ItemSerie";
    };
    ItemSerieApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["a" /* ITEMSERIE */][0]);
    };
    ItemSerieApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["a" /* ITEMSERIE */]);
    };
    ItemSerieApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["a" /* ITEMSERIE */][filter.where.id]);
    };
    ItemSerieApi.prototype.getSerieEditaExecucaoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["d" /* ITEMSERIE_SERIEEDITAEXECUCAOPAGE */]);
    };
    ItemSerieApi.prototype.getCriaSerieWorkPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["c" /* ITEMSERIE_CRIASERIEWORKPAGE */]);
    };
    ItemSerieApi.prototype.getCriaSeriePageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_itemSerie__["b" /* ITEMSERIE_CRIASERIEPAGE */]);
    };
    ItemSerieApi.prototype.submitCriaSerieWorkPage = function (item, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TreinoAcademia_ItemSeries/submitCriaSerieWorkPage";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof item !== 'undefined' && item !== null)
            _urlParams.item = item;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    ItemSerieApi.prototype.submitCriaSeriePage = function (item, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TreinoAcademia_ItemSeries/submitCriaSeriePage";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof item !== 'undefined' && item !== null)
            _urlParams.item = item;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    ItemSerieApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ItemSerieApi);
    return ItemSerieApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=ItemSerie.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPesoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_registroPeso__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var RegistroPesoApi = /** @class */ (function (_super) {
    __extends(RegistroPesoApi, _super);
    function RegistroPesoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    RegistroPesoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/registroPesos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    RegistroPesoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/registroPesos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    RegistroPesoApi.prototype.getModelName = function () {
        return "RegistroPeso";
    };
    RegistroPesoApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_registroPeso__["a" /* REGISTROPESO */][0]);
    };
    RegistroPesoApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_registroPeso__["a" /* REGISTROPESO */]);
    };
    RegistroPesoApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_registroPeso__["a" /* REGISTROPESO */][filter.where.id]);
    };
    RegistroPesoApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], RegistroPesoApi);
    return RegistroPesoApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=RegistroPeso.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_usuario__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic


/**
 * Api services for the `Aplicacao` model.
 */
var UsuarioApi = /** @class */ (function (_super) {
    __extends(UsuarioApi, _super);
    function UsuarioApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    UsuarioApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/usuarios";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    UsuarioApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/usuarios/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    UsuarioApi.prototype.getModelName = function () {
        return "Usuario";
    };
    UsuarioApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */][0]);
    };
    UsuarioApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */]);
    };
    UsuarioApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */][filter.where.id]);
    };
    UsuarioApi.prototype.getPrincipalPerformancePageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["b" /* USUARIO_PRINCIPALPERFORMANCEPAGE */]);
    };
    UsuarioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UsuarioApi);
    return UsuarioApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USUARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USUARIO_PRINCIPALPERFORMANCEPAGE; });
var USUARIO = [];
var USUARIO_PRINCIPALPERFORMANCEPAGE = {};
//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecucaoCargaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_execucaoCarga__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var ExecucaoCargaApi = /** @class */ (function (_super) {
    __extends(ExecucaoCargaApi, _super);
    function ExecucaoCargaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    ExecucaoCargaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/execucaoCargas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    ExecucaoCargaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/execucaoCargas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    ExecucaoCargaApi.prototype.getModelName = function () {
        return "ExecucaoCarga";
    };
    ExecucaoCargaApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoCarga__["a" /* EXECUCAOCARGA */][0]);
    };
    ExecucaoCargaApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoCarga__["a" /* EXECUCAOCARGA */]);
    };
    ExecucaoCargaApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_execucaoCarga__["a" /* EXECUCAOCARGA */][filter.where.id]);
    };
    ExecucaoCargaApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ExecucaoCargaApi);
    return ExecucaoCargaApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=ExecucaoCarga.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaSerieTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escolha_serie_treino_base__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EscolhaSerieTreinoPage = /** @class */ (function (_super) {
    __extends(EscolhaSerieTreinoPage, _super);
    function EscolhaSerieTreinoPage(navCtrl, srv, storage) {
        var _this = _super.call(this, navCtrl, srv, storage) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        return _this;
    }
    EscolhaSerieTreinoPage.prototype.inicializacao = function () {
    };
    EscolhaSerieTreinoPage.prototype.getFiltro = function () {
        return {};
    };
    EscolhaSerieTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-escolha-serie-treino',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/escolha-serie-treino/escolha-serie-treino.html"*/'\n\n<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>EscolhaSerieTreinoPage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum ... encontrada\n      </ion-card-header>\n      <ion-card-content>\n        Crie \n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n      <ion-item *ngFor="let item of listaItem">\n        <h3 class="linha1"></h3>\n        <h3 class="linhan"></h3>\n        <button ion-button clear item-end (click)="alterarId(item)">alterar</button>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="novo()">Criar</button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/escolha-serie-treino/escolha-serie-treino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["t" /* SerieTreinoApi */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], EscolhaSerieTreinoPage);
    return EscolhaSerieTreinoPage;
}(__WEBPACK_IMPORTED_MODULE_2__escolha_serie_treino_base__["a" /* EscolhaSerieTreinoPageBase */]));

//# sourceMappingURL=escolha-serie-treino.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieEditaExecucaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SerieEditaExecucaoPage = /** @class */ (function () {
    function SerieEditaExecucaoPage(navCtrl, srv, screenshot, modalCtrl) {
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.screenshot = screenshot;
        this.modalCtrl = modalCtrl;
    }
    SerieEditaExecucaoPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter SerieEditaExecucaoPage');
        this.carregaItem();
    };
    SerieEditaExecucaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SerieEditaExecucaoPage');
    };
    SerieEditaExecucaoPage.prototype.carregaItem = function () {
        var _this = this;
        var filtro = { 'where': { 'id': 1 } };
        this.srv.obtemElemento(filtro)
            .subscribe(function (result) {
            console.log('Result', JSON.stringify(result));
            _this.item = result;
        });
    };
    SerieEditaExecucaoPage.prototype.testaFoto = function () {
        this.screenshot.save('jpg', 100, 'SerieEditaExecucaoPage');
    };
    SerieEditaExecucaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-serie-edita-execucao',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/serie-edita-execucao/serie-edita-execucao.html"*/'\n<ion-header >\n  <ion-navbar color="titulo">\n    <ion-title (click)="testaFoto()">SerieEditaExecucaoPage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n  <ng-container *ngIf="item">\n    <ion-card>\n      <div class="card-title"></div>\n      <div class="card-subtitle"></div>\n    </ion-card>\n\n\n  </ng-container>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/serie-edita-execucao/serie-edita-execucao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["n" /* ItemSerieApi */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SerieEditaExecucaoPage);
    return SerieEditaExecucaoPage;
}());

//# sourceMappingURL=serie-edita-execucao.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(549);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_sockets_socket_driver__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comandos_zero_comandos_zero__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_brmasker_ionic_3__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_serie_edita_execucao_serie_edita_execucao__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_exercicio_grafico_execucao_exercicio_grafico_execucao__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_consulta_lista_dia_treino_consulta_lista_dia_treino__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cria_serie_work_cria_serie_work__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_lista_serie_treino_lista_serie_treino__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cria_serie_cria_serie__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_inicio_treino_dia_inicio_treino_dia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_serie_treino_edicao_serie_treino_edicao__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_executa_treino_executa_treino__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_consulta_lista_exercicio_consulta_lista_exercicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_dia_treino_detalhe_dia_treino__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_escolha_serie_treino_escolha_serie_treino__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_principal_performance_principal_performance__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_comandos_zero_comandos_zero__["a" /* ComandosZeroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_serie_edita_execucao_serie_edita_execucao__["a" /* SerieEditaExecucaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exercicio_grafico_execucao_exercicio_grafico_execucao__["a" /* ExercicioGraficoExecucaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_consulta_lista_dia_treino_consulta_lista_dia_treino__["a" /* ConsultaListaDiaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cria_serie_work_cria_serie_work__["a" /* CriaSerieWorkPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_serie_treino_lista_serie_treino__["a" /* ListaSerieTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cria_serie_cria_serie__["a" /* CriaSeriePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_inicio_treino_dia_inicio_treino_dia__["a" /* InicioTreinoDiaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_serie_treino_edicao_serie_treino_edicao__["a" /* SerieTreinoEdicaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_executa_treino_executa_treino__["a" /* ExecutaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_consulta_lista_exercicio_consulta_lista_exercicio__["a" /* ConsultaListaExercicioPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_dia_treino_detalhe_dia_treino__["a" /* DetalheDiaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_escolha_serie_treino_escolha_serie_treino__["a" /* EscolhaSerieTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_principal_performance_principal_performance__["a" /* PrincipalPerformancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comandos-zero/comandos-zero.module#ComandosZeroPageModule', name: 'ComandosZeroPage', segment: 'comandos-zero', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consulta-lista-dia-treino/consulta-lista-dia-treino.module#ConsultaListaDiaTreinoPageModule', name: 'ConsultaListaDiaTreinoPage', segment: 'consulta-lista-dia-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consulta-lista-exercicio/consulta-lista-exercicio.module#ConsultaListaExercicioPageModule', name: 'ConsultaListaExercicioPage', segment: 'consulta-lista-exercicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cria-serie-work/cria-serie-work.module#CriaSerieWorkPageModule', name: 'CriaSerieWorkPage', segment: 'cria-serie-work', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cria-serie/cria-serie.module#CriaSeriePageModule', name: 'CriaSeriePage', segment: 'cria-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-dia-treino/detalhe-dia-treino.module#DetalheDiaTreinoPageModule', name: 'DetalheDiaTreinoPage', segment: 'detalhe-dia-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolha-serie-treino/escolha-serie-treino.module#EscolhaSerieTreinoPageModule', name: 'EscolhaSerieTreinoPage', segment: 'escolha-serie-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/executa-treino/executa-treino.module#ExecutaTreinoPageModule', name: 'ExecutaTreinoPage', segment: 'executa-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exercicio-grafico-execucao/exercicio-grafico-execucao.module#ExercicioGraficoExecucaoPageModule', name: 'ExercicioGraficoExecucaoPage', segment: 'exercicio-grafico-execucao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-treino-dia/inicio-treino-dia.module#InicioTreinoDiaPageModule', name: 'InicioTreinoDiaPage', segment: 'inicio-treino-dia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-serie-treino/lista-serie-treino.module#ListaSerieTreinoPageModule', name: 'ListaSerieTreinoPage', segment: 'lista-serie-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal-performance/principal-performance.module#PrincipalPerformancePageModule', name: 'PrincipalPerformancePage', segment: 'principal-performance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-edita-execucao/serie-edita-execucao.module#SerieEditaExecucaoPageModule', name: 'SerieEditaExecucaoPage', segment: 'serie-edita-execucao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-treino-edicao/serie-treino-edicao.module#SerieTreinoEdicaoPageModule', name: 'SerieTreinoEdicaoPage', segment: 'serie-treino-edicao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teste-edit/teste-edit.module#TesteEditPageModule', name: 'TesteEditPage', segment: 'teste-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teste-form01/teste-form01.module#TesteForm01PageModule', name: 'TesteForm01Page', segment: 'teste-form01', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["q" /* SDKBrowserModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_comandos_zero_comandos_zero__["a" /* ComandosZeroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_serie_edita_execucao_serie_edita_execucao__["a" /* SerieEditaExecucaoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exercicio_grafico_execucao_exercicio_grafico_execucao__["a" /* ExercicioGraficoExecucaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_consulta_lista_dia_treino_consulta_lista_dia_treino__["a" /* ConsultaListaDiaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cria_serie_work_cria_serie_work__["a" /* CriaSerieWorkPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_serie_treino_lista_serie_treino__["a" /* ListaSerieTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cria_serie_cria_serie__["a" /* CriaSeriePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_inicio_treino_dia_inicio_treino_dia__["a" /* InicioTreinoDiaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_serie_treino_edicao_serie_treino_edicao__["a" /* SerieTreinoEdicaoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_executa_treino_executa_treino__["a" /* ExecutaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_consulta_lista_exercicio_consulta_lista_exercicio__["a" /* ConsultaListaExercicioPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_dia_treino_detalhe_dia_treino__["a" /* DetalheDiaTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_escolha_serie_treino_escolha_serie_treino__["a" /* EscolhaSerieTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_principal_performance_principal_performance__["a" /* PrincipalPerformancePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__shared_sdk_sockets_socket_driver__["a" /* SocketDriver */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["r" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["o" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["l" /* InternalStorage */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["k" /* GrupoMuscularApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["t" /* SerieTreinoApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["j" /* ExercicioApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["h" /* ExecucaoItemSerieApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["b" /* CargaPlanejadaApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["d" /* DiaTreinoApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["n" /* ItemSerieApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["p" /* RegistroPesoApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["v" /* UsuarioApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["f" /* ExecucaoCargaApi */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__["a" /* Screenshot */],
                Storage
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandosZeroPageBase; });
var ComandosZeroPageBase = /** @class */ (function () {
    function ComandosZeroPageBase(storage) {
        this.storage = storage;
    }
    ComandosZeroPageBase.prototype.ionViewWillEnter = function () {
        var _this = this;
        //console.log('ionViewDidLoad ComandosZeroPageBase');
        console.log('');
        console.log('Tela: ComandosZeroPage');
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.inicializacao();
        });
    };
    return ComandosZeroPageBase;
}());

//# sourceMappingURL=comandos-zero-base.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSerieTreinoPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__serie_treino_edicao_serie_treino_edicao__ = __webpack_require__(172);

// Tipo: LISTA_ITEM
var ListaSerieTreinoPageBase = /** @class */ (function () {
    function ListaSerieTreinoPageBase(navCtrl, srv, storage) {
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    ListaSerieTreinoPageBase.prototype.getPageEdicao = function () {
        return __WEBPACK_IMPORTED_MODULE_0__serie_treino_edicao_serie_treino_edicao__["a" /* SerieTreinoEdicaoPage */];
    };
    ListaSerieTreinoPageBase.prototype.getPageDetalhe = function () {
        return __WEBPACK_IMPORTED_MODULE_0__serie_treino_edicao_serie_treino_edicao__["a" /* SerieTreinoEdicaoPage */];
    };
    ListaSerieTreinoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ListaSerieTreinoPage<<LISTA_ITEM>> : SerieTreino');
        this.carregaUsuario();
        this.inicializacao();
    };
    ListaSerieTreinoPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('SerieTreino.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
        });
    };
    ListaSerieTreinoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ListaSerieTreinoPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ListaSerieTreinoPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ListaSerieTreinoPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    return ListaSerieTreinoPageBase;
}());

//# sourceMappingURL=lista-serie-treino-base.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERIETREINO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SERIETREINO_LISTASERIETREINOPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SERIETREINO_SERIETREINOEDICAOPAGE; });
/* unused harmony export SERIETREINO_EXECUTATREINOPAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SERIETREINO_INICIOTREINODIAPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERIETREINO_ESCOLHASERIETREINOPAGE; });
var SERIETREINO = [];
var SERIETREINO_LISTASERIETREINOPAGE = {};
var SERIETREINO_SERIETREINOEDICAOPAGE = {};
var SERIETREINO_EXECUTATREINOPAGE = {};
var SERIETREINO_INICIOTREINODIAPAGE = {};
var SERIETREINO_ESCOLHASERIETREINOPAGE = {};
//# sourceMappingURL=serieTreino.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());

//# sourceMappingURL=io.service.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(348);
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["f" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());

//# sourceMappingURL=FireLoop.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__);
/* tslint:disable */


//import { merge } from 'rxjs';
//versao ionic

/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__["merge"])(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(function (error) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());

//# sourceMappingURL=FireLoopRef.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` �?? `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` �?? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` �?? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * O corpo de resposta contém propriedades do AccessToken criado no login.
     * Dependendo do valor do parâmetro `include`, o corpo poderá conter propriedades adicionais:
     *
     *   - `user` - `U+007BUserU+007D` - Dados do usuário com login efetuado atualmente. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` �?? `{string}` -
     *
     *  - `newPassword` �?? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` �?? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRUPOMUSCULAR; });
var GRUPOMUSCULAR = [];
//# sourceMappingURL=grupoMuscular.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXECUCAOITEMSERIE; });
var EXECUCAOITEMSERIE = [];
//# sourceMappingURL=execucaoItemSerie.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARGAPLANEJADA; });
var CARGAPLANEJADA = [];
//# sourceMappingURL=cargaPlanejada.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REGISTROPESO; });
var REGISTROPESO = [];
//# sourceMappingURL=registroPeso.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXECUCAOCARGA; });
var EXECUCAOCARGA = [];
//# sourceMappingURL=execucaoCarga.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(856);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(857);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["k"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(33);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__real_time__ = __webpack_require__(347);
/* unused harmony namespace reexport */
/* tslint:disable */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GrupoMuscular__ = __webpack_require__(350);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__GrupoMuscular__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SerieTreino__ = __webpack_require__(351);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__SerieTreino__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exercicio__ = __webpack_require__(352);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__Exercicio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExecucaoItemSerie__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__ExecucaoItemSerie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CargaPlanejada__ = __webpack_require__(354);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__CargaPlanejada__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DiaTreino__ = __webpack_require__(355);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__DiaTreino__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ItemSerie__ = __webpack_require__(356);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__ItemSerie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RegistroPeso__ = __webpack_require__(357);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__RegistroPeso__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Usuario__ = __webpack_require__(358);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__Usuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExecucaoCarga__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__ExecucaoCarga__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Container__ = __webpack_require__(349);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SDKModels__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__SDKModels__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logger_service__ = __webpack_require__(244);
/* unused harmony namespace reexport */













//# sourceMappingURL=index.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieTreinoEdicaoPageBase; });
// Tipo: DETALHE
var SerieTreinoEdicaoPageBase = /** @class */ (function () {
    function SerieTreinoEdicaoPageBase(navParams, navCtrl, srv, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    SerieTreinoEdicaoPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        if (!this.item) {
            var id = this.navParams.get('id');
            if (id) {
                console.log('SerieTreino.findById: [' + id + '] , filtroLoadId:', JSON.stringify(this.filtroLoadId(id)));
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                }, function (erro) { return console.log('SerieTreinoEdicaoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
            else {
                console.log('SerieTreino.findOne , filtroLoadOne: ', JSON.stringify(this.filtroLoadOne()));
                // se nao encontrar vai pro erro -> 404
                this.srv.find(this.filtroLoadOne())
                    .subscribe(function (result) {
                    console.log('Tam Lista Result: ', result.length);
                    if (result.length > 0) {
                        _this.item = result[0];
                        _this.listaLoadOne = result;
                        console.log('Result: ', _this.item);
                        _this.itemNaoEncontrado = false;
                    }
                    else {
                        _this.itemNaoEncontrado = true;
                    }
                    //if (!this.item) this.itemNaoEncontrado();
                }, function (erro) { return console.log('SerieTreinoEdicaoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
        }
    };
    SerieTreinoEdicaoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.preInicializaItem();
            _this.inicializaItem();
            _this.posInicializaItem();
        });
    };
    SerieTreinoEdicaoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: SerieTreinoEdicaoPage<<DETALHE>> : SerieTreino');
        this.carregaUsuario();
    };
    SerieTreinoEdicaoPageBase.prototype.ionViewDidLoad = function () {
    };
    return SerieTreinoEdicaoPageBase;
}());

//# sourceMappingURL=serie-treino-edicao-base.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSeriePageBase; });
// Tipo: EDITA
var CriaSeriePageBase = /** @class */ (function () {
    function CriaSeriePageBase(navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
        this.srvSerieTreino = srvSerieTreino;
        this.srvExercicio = srvExercicio;
    }
    CriaSeriePageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        if (!this.item) {
            var id = this.navParams.get('id');
            if (id) {
                console.log('ItemSerie.findById: [' + id + ']');
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                });
            }
            else {
                this.item = this.criaItem();
                console.log('Item(posCriaItem): ', this.item);
            }
        }
        else {
            console.log('ItemParametro: ', this.item);
            this.item = this.complementaItem(this.item);
            console.log('ItemPrametro(posComplementaItem): ', this.item);
        }
    };
    CriaSeriePageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: CriaSeriePage<<EDITA>> : ItemSerie');
        this.carregaUsuario();
    };
    CriaSeriePageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CriaSeriePage<<EDITA>>');
    };
    CriaSeriePageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.inicializacaoComplementos();
            _this.inicializaItem();
        });
    };
    CriaSeriePageBase.prototype.carregaSerieTreino = function () {
        var _this = this;
        this.srvSerieTreino.find()
            .subscribe(function (result) {
            console.log('listaSerieTreino:', result);
            _this.listaSerieTreino = result;
        });
    };
    CriaSeriePageBase.prototype.carregaSerieTreinoUsuario = function (idUsuario) {
        var _this = this;
        this.srvSerieTreino.find({ 'where': { 'idUsuario': idUsuario } })
            .subscribe(function (result) {
            _this.listaSerieTreinoUsuario = result;
        });
    };
    CriaSeriePageBase.prototype.carregaExercicio = function () {
        var _this = this;
        this.srvExercicio.find()
            .subscribe(function (result) {
            console.log('listaExercicio:', result);
            _this.listaExercicio = result;
        });
    };
    CriaSeriePageBase.prototype.carregaExercicioUsuario = function (idUsuario) {
        var _this = this;
        this.srvExercicio.find({ 'where': { 'idUsuario': idUsuario } })
            .subscribe(function (result) {
            _this.listaExercicioUsuario = result;
        });
    };
    CriaSeriePageBase.prototype.submit = function () {
        var _this = this;
        console.log('ItemSerieApi.submitCriaSeriePage:', JSON.stringify(this.item));
        this.srv.submitCriaSeriePage(this.item)
            .subscribe(function (resultado) {
            console.log('CriaSeriePageBase:Submit-Result: ', JSON.stringify(resultado));
            _this.executaNavegacao(_this.navCtrl, resultado);
        });
    };
    return CriaSeriePageBase;
}());

//# sourceMappingURL=cria-serie-base.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioTreinoDiaPageBase; });
// Tipo: DETALHE
var InicioTreinoDiaPageBase = /** @class */ (function () {
    function InicioTreinoDiaPageBase(navParams, navCtrl, srv, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    InicioTreinoDiaPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        if (!this.item) {
            var id = this.navParams.get('id');
            if (id) {
                console.log('SerieTreino.findById: [' + id + '] , filtroLoadId:', JSON.stringify(this.filtroLoadId(id)));
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                }, function (erro) { return console.log('InicioTreinoDiaPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
            else {
                console.log('SerieTreino.findOne , filtroLoadOne: ', JSON.stringify(this.filtroLoadOne()));
                // se nao encontrar vai pro erro -> 404
                this.srv.find(this.filtroLoadOne())
                    .subscribe(function (result) {
                    console.log('Tam Lista Result: ', result.length);
                    if (result.length > 0) {
                        _this.item = result[0];
                        _this.listaLoadOne = result;
                        console.log('Result: ', _this.item);
                        _this.itemNaoEncontrado = false;
                    }
                    else {
                        _this.itemNaoEncontrado = true;
                    }
                    //if (!this.item) this.itemNaoEncontrado();
                }, function (erro) { return console.log('InicioTreinoDiaPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
        }
    };
    InicioTreinoDiaPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.preInicializaItem();
            _this.inicializaItem();
            _this.posInicializaItem();
        });
    };
    InicioTreinoDiaPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: InicioTreinoDiaPage<<DETALHE>> : SerieTreino');
        this.carregaUsuario();
    };
    InicioTreinoDiaPageBase.prototype.ionViewDidLoad = function () {
    };
    return InicioTreinoDiaPageBase;
}());

//# sourceMappingURL=inicio-treino-dia-base.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecutaTreinoPageBase; });
// Tipo: GETPUT
var ExecutaTreinoPageBase = /** @class */ (function () {
    function ExecutaTreinoPageBase(navParams, navCtrl, srv, srvPut, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.srvPut = srvPut;
        this.storage = storage;
    }
    ExecutaTreinoPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        console.log('ExecutaTreinoPageBase:ItemParametro: ', this.item);
        if (!this.item) {
            var id = this.navParams.get('id');
            console.log('ExecutaTreinoPageBase:Id: ', id);
            if (id) {
                console.log('ExecutaTreinoPageBase:filtro: ', JSON.stringify(this.filtroLoadId(id)));
                console.log('DiaTreino.findById');
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('ExecutaTreinoPageBase.item: ', _this.item);
                }, function (erro) { return console.log('ExecutaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
            else {
                console.log('ExecutaTreinoPageBase:filtro: ', JSON.stringify(this.filtroLoadOne()));
                console.log('DiaTreino.findOne');
                this.srv.findOne(this.filtroLoadOne())
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('ExecutaTreinoPageBase.item: ', _this.item);
                }, function (erro) { return console.log('ExecutaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
        }
    };
    ExecutaTreinoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ExecutaTreinoPage<<GETPUT>> : DiaTreino');
        this.carregaUsuario();
    };
    ExecutaTreinoPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ExecutaTreinoPage<<GETPUT>>');
    };
    ExecutaTreinoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.inicializaItem();
        });
    };
    ExecutaTreinoPageBase.prototype.submit = function (itemSubmit) {
        var _this = this;
        console.log('ExecutaTreinoPageBase:Submit-Item:', itemSubmit);
        console.log('ExecucaoItemSerie:submitExecutaTreinoPage:', JSON.stringify(itemSubmit));
        this.srvPut.submitExecutaTreinoPage(itemSubmit)
            .subscribe(function (resultado) {
            console.log('ExecutaTreinoPageBase:Submit-Result: ', resultado);
            _this.resultadoSubmit(resultado);
            _this.inicializaItem();
        });
    };
    return ExecutaTreinoPageBase;
}());

//# sourceMappingURL=executa-treino-base.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPerformancePageBase; });
// Tipo: GENERICA
var PrincipalPerformancePageBase = /** @class */ (function () {
    function PrincipalPerformancePageBase(navParams, navCtrl, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    PrincipalPerformancePageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.inicializacao();
        });
    };
    PrincipalPerformancePageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: PrincipalPerformancePage<<GENERICA>> ');
        this.carregaUsuario();
    };
    PrincipalPerformancePageBase.prototype.ionViewDidLoad = function () {
    };
    return PrincipalPerformancePageBase;
}());

//# sourceMappingURL=principal-performance-base.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaListaDiaTreinoPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_dia_treino_detalhe_dia_treino__ = __webpack_require__(176);

// Tipo: LISTA_ITEM
var ConsultaListaDiaTreinoPageBase = /** @class */ (function () {
    function ConsultaListaDiaTreinoPageBase(navCtrl, srv, storage) {
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    ConsultaListaDiaTreinoPageBase.prototype.getPageEdicao = function () {
        return __WEBPACK_IMPORTED_MODULE_0__detalhe_dia_treino_detalhe_dia_treino__["a" /* DetalheDiaTreinoPage */];
    };
    ConsultaListaDiaTreinoPageBase.prototype.getPageDetalhe = function () {
        return __WEBPACK_IMPORTED_MODULE_0__detalhe_dia_treino_detalhe_dia_treino__["a" /* DetalheDiaTreinoPage */];
    };
    ConsultaListaDiaTreinoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ConsultaListaDiaTreinoPage<<LISTA_ITEM>> : DiaTreino');
        this.carregaUsuario();
        this.inicializacao();
    };
    ConsultaListaDiaTreinoPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('DiaTreino.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
        });
    };
    ConsultaListaDiaTreinoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ConsultaListaDiaTreinoPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ConsultaListaDiaTreinoPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ConsultaListaDiaTreinoPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    return ConsultaListaDiaTreinoPageBase;
}());

//# sourceMappingURL=consulta-lista-dia-treino-base.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheDiaTreinoPageBase; });
// Tipo: DETALHE
var DetalheDiaTreinoPageBase = /** @class */ (function () {
    function DetalheDiaTreinoPageBase(navParams, navCtrl, srv, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    DetalheDiaTreinoPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        if (!this.item) {
            var id = this.navParams.get('id');
            if (id) {
                console.log('DiaTreino.findById: [' + id + '] , filtroLoadId:', JSON.stringify(this.filtroLoadId(id)));
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                }, function (erro) { return console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
            else {
                console.log('DiaTreino.findOne , filtroLoadOne: ', JSON.stringify(this.filtroLoadOne()));
                // se nao encontrar vai pro erro -> 404
                this.srv.find(this.filtroLoadOne())
                    .subscribe(function (result) {
                    console.log('Tam Lista Result: ', result.length);
                    if (result.length > 0) {
                        _this.item = result[0];
                        _this.listaLoadOne = result;
                        console.log('Result: ', _this.item);
                        _this.itemNaoEncontrado = false;
                    }
                    else {
                        _this.itemNaoEncontrado = true;
                    }
                    //if (!this.item) this.itemNaoEncontrado();
                }, function (erro) { return console.log('DetalheDiaTreinoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
        }
    };
    DetalheDiaTreinoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.preInicializaItem();
            _this.inicializaItem();
            _this.posInicializaItem();
        });
    };
    DetalheDiaTreinoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: DetalheDiaTreinoPage<<DETALHE>> : DiaTreino');
        this.carregaUsuario();
    };
    DetalheDiaTreinoPageBase.prototype.ionViewDidLoad = function () {
    };
    return DetalheDiaTreinoPageBase;
}());

//# sourceMappingURL=detalhe-dia-treino-base.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaListaExercicioPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exercicio_grafico_execucao_exercicio_grafico_execucao__ = __webpack_require__(177);

// Tipo: LISTA_ITEM
var ConsultaListaExercicioPageBase = /** @class */ (function () {
    function ConsultaListaExercicioPageBase(navCtrl, srv, storage) {
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    ConsultaListaExercicioPageBase.prototype.getPageEdicao = function () {
        return __WEBPACK_IMPORTED_MODULE_0__exercicio_grafico_execucao_exercicio_grafico_execucao__["a" /* ExercicioGraficoExecucaoPage */];
    };
    ConsultaListaExercicioPageBase.prototype.getPageDetalhe = function () {
        return __WEBPACK_IMPORTED_MODULE_0__exercicio_grafico_execucao_exercicio_grafico_execucao__["a" /* ExercicioGraficoExecucaoPage */];
    };
    ConsultaListaExercicioPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ConsultaListaExercicioPage<<LISTA_ITEM>> : Exercicio');
        this.carregaUsuario();
        this.inicializacao();
    };
    ConsultaListaExercicioPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('Exercicio.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
        });
    };
    ConsultaListaExercicioPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ConsultaListaExercicioPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ConsultaListaExercicioPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ConsultaListaExercicioPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    return ConsultaListaExercicioPageBase;
}());

//# sourceMappingURL=consulta-lista-exercicio-base.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercicioGraficoExecucaoPageBase; });
// Tipo: GRAFICO_BARRA
var ExercicioGraficoExecucaoPageBase = /** @class */ (function () {
    function ExercicioGraficoExecucaoPageBase(navParams, navCtrl, srv, storage) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
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
    ExercicioGraficoExecucaoPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        //console.log('ExercicioGraficoExecucaoPageBase:ItemParametro: ', this.item);
        if (!this.item) {
            var id = this.navParams.get('id');
            //console.log('ExercicioGraficoExecucaoPageBase:Id: ' , id);
            if (id) {
                console.log('Exercicio.findById: [' + id + '] , filtroLoadId:', JSON.stringify(this.filtroLoadId(id)));
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                    if (_this.existeDadosGrafico())
                        _this.trataGrafico();
                }, function (erro) { return console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
            else {
                console.log('Exercicio.findOne , filtroLoadOne: ', JSON.stringify(this.filtroLoadOne()));
                // se nao encontrar vai pro erro -> 404
                this.srv.findOne(this.filtroLoadOne())
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                    _this.posInicializaItem();
                    if (_this.existeDadosGrafico())
                        _this.trataGrafico();
                    //if (!this.item) this.itemNaoEncontrado();
                }, function (erro) { return console.log('ExercicioGraficoExecucaoPageBase:LoadId(Erro): ', JSON.stringify(erro)); });
            }
        }
    };
    ExercicioGraficoExecucaoPageBase.prototype.trataGrafico = function () {
        this.trataRotuloSerieGrafico();
        this.trataDadosGrafico();
    };
    ExercicioGraficoExecucaoPageBase.prototype.trataRotuloSerieGrafico = function () {
        var listaGrafico = this.getListaGrafico();
        var saida = [];
        for (var i = 0; i < listaGrafico.length; i++) {
            var dado = this.extraiRotulo(listaGrafico[i]);
            saida.push(dado);
        }
        this.rotulos = saida;
    };
    ExercicioGraficoExecucaoPageBase.prototype.trataDadosGrafico = function () {
        var listaGrafico = this.getListaGrafico();
        var saida = [];
        var titulos = this.obtemTituloSerie();
        for (var i = 0; i < listaGrafico.length; i++) {
            var dados = this.extraiValores(listaGrafico[i]);
            if (i == 0) {
                // inicializando os dados
                for (var x = 0; x < titulos.length; x++) {
                    if (!dados[x])
                        dados[x] = 0;
                    var novoDado = { 'data': [dados[x]], 'label': titulos[x] };
                    saida.push(novoDado);
                }
            }
            else {
                // obtendo cada serie e colocando mais um dado no vetor
                for (var x = 0; x < titulos.length; x++) {
                    if (!dados[x])
                        dados[x] = 0;
                    var itemDado = saida[x];
                    itemDado.data.push(dados[x]);
                }
            }
        }
        this.dados = saida;
    };
    ExercicioGraficoExecucaoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>> : Exercicio');
        this.carregaUsuario();
    };
    ExercicioGraficoExecucaoPageBase.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExercicioGraficoExecucaoPage<<GRAFICO_BARRA>>');
    };
    ExercicioGraficoExecucaoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.preInicializaItem();
            _this.inicializaItem();
            //this.posInicializaItem();
        });
    };
    ExercicioGraficoExecucaoPageBase.prototype.criaImagem = function () {
    };
    return ExercicioGraficoExecucaoPageBase;
}());

//# sourceMappingURL=exercicio-grafico-execucao-base.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSerieWorkPageBase; });
// Tipo: EDITA
var CriaSerieWorkPageBase = /** @class */ (function () {
    function CriaSerieWorkPageBase(navParams, navCtrl, srv, storage, srvSerieTreino, srvExercicio) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
        this.srvSerieTreino = srvSerieTreino;
        this.srvExercicio = srvExercicio;
    }
    CriaSerieWorkPageBase.prototype.inicializaItem = function () {
        var _this = this;
        this.item = this.navParams.get('item');
        if (!this.item) {
            var id = this.navParams.get('id');
            if (id) {
                console.log('ItemSerie.findById: [' + id + ']');
                this.srv.findById(id, this.filtroLoadId(id))
                    .subscribe(function (result) {
                    _this.item = result;
                    console.log('Result: ', _this.item);
                });
            }
            else {
                this.item = this.criaItem();
                console.log('Item(posCriaItem): ', this.item);
            }
        }
        else {
            console.log('ItemParametro: ', this.item);
            this.item = this.complementaItem(this.item);
            console.log('ItemPrametro(posComplementaItem): ', this.item);
        }
    };
    CriaSerieWorkPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: CriaSerieWorkPage<<EDITA>> : ItemSerie');
        this.carregaUsuario();
    };
    CriaSerieWorkPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CriaSerieWorkPage<<EDITA>>');
    };
    CriaSerieWorkPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.inicializacaoComplementos();
            _this.inicializaItem();
        });
    };
    CriaSerieWorkPageBase.prototype.carregaSerieTreino = function () {
        var _this = this;
        this.srvSerieTreino.find()
            .subscribe(function (result) {
            console.log('listaSerieTreino:', result);
            _this.listaSerieTreino = result;
        });
    };
    CriaSerieWorkPageBase.prototype.carregaSerieTreinoUsuario = function (idUsuario) {
        var _this = this;
        this.srvSerieTreino.find({ 'where': { 'idUsuario': idUsuario } })
            .subscribe(function (result) {
            _this.listaSerieTreinoUsuario = result;
        });
    };
    CriaSerieWorkPageBase.prototype.carregaExercicio = function () {
        var _this = this;
        this.srvExercicio.find()
            .subscribe(function (result) {
            console.log('listaExercicio:', result);
            _this.listaExercicio = result;
        });
    };
    CriaSerieWorkPageBase.prototype.carregaExercicioUsuario = function (idUsuario) {
        var _this = this;
        this.srvExercicio.find({ 'where': { 'idUsuario': idUsuario } })
            .subscribe(function (result) {
            _this.listaExercicioUsuario = result;
        });
    };
    CriaSerieWorkPageBase.prototype.submit = function () {
        var _this = this;
        console.log('ItemSerieApi.submitCriaSerieWorkPage:', JSON.stringify(this.item));
        this.srv.submitCriaSerieWorkPage(this.item)
            .subscribe(function (resultado) {
            console.log('CriaSerieWorkPageBase:Submit-Result: ', JSON.stringify(resultado));
            _this.executaNavegacao(_this.navCtrl, resultado);
        });
    };
    return CriaSerieWorkPageBase;
}());

//# sourceMappingURL=cria-serie-work-base.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaSerieTreinoPageBase; });
// Tipo: LISTA_ITEM
var EscolhaSerieTreinoPageBase = /** @class */ (function () {
    function EscolhaSerieTreinoPageBase(navCtrl, srv, storage) {
        this.navCtrl = navCtrl;
        this.srv = srv;
        this.storage = storage;
    }
    EscolhaSerieTreinoPageBase.prototype.getPageEdicao = function () {
        throw new Error("EscolhaSerieTreinoPage sem tela de edicao.");
    };
    EscolhaSerieTreinoPageBase.prototype.getPageDetalhe = function () {
        throw new Error("EscolhaSerieTreinoPage sem tela de detalhe.");
    };
    EscolhaSerieTreinoPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: EscolhaSerieTreinoPage<<LISTA_ITEM>> : SerieTreino');
        this.carregaUsuario();
        this.inicializacao();
    };
    EscolhaSerieTreinoPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('SerieTreino.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
        });
    };
    EscolhaSerieTreinoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    EscolhaSerieTreinoPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    EscolhaSerieTreinoPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    EscolhaSerieTreinoPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    return EscolhaSerieTreinoPageBase;
}());

//# sourceMappingURL=escolha-serie-treino-base.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageBase; });
var LoginPageBase = /** @class */ (function () {
    function LoginPageBase(navCtrl, navParams, formBuilder, srv, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.srv = srv;
        this.storage = storage;
        this.loginForm = this.formBuilder.group({
            login: '',
            senha: ''
        });
    }
    LoginPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    LoginPageBase.prototype.onSubmit = function () {
        var _this = this;
        var email = this.loginForm.get("login").value;
        var senha = this.loginForm.get("senha").value;
        var filtro = {
            'where': { 'and': [{ 'email': email }, { 'senha': senha }] }
        };
        this.srv.findOne(filtro)
            .subscribe(function (result) {
            console.log('UserLogin: ', result);
            _this.storage.set('user', result);
            _this.mudaTela();
        }, function (erro) {
            console.log('Erro login: ', erro);
            _this.erroMsg = 'Usuario nao encontrado';
        });
    };
    LoginPageBase.prototype.mudaTela = function () {
        var _this = this;
        this.navCtrl.push(this.getPaginaInicial()).then(function () {
            var index = 0;
            _this.navCtrl.remove(index);
        });
    };
    return LoginPageBase;
}());

//# sourceMappingURL=login-base.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comandos_zero_comandos_zero__ = __webpack_require__(101);



var SignupPageBase = /** @class */ (function () {
    function SignupPageBase(navCtrl, formBuilder, storage, srv) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.srv = srv;
        this.signupForm = this.formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].email],
            senha1: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(8)],
            senha2: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(8)]
        });
    }
    SignupPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    SignupPageBase.prototype.onSubmit = function () {
        var _this = this;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__shared_sdk_index__["u" /* Usuario */]();
        this.usuario.email = this.signupForm.get("login").value;
        var senha1 = this.signupForm.get("senha1").value;
        var senha2 = this.signupForm.get("senha2").value;
        if (senha1 != senha2) {
            //console.log('Entrou diferente');
            this.erroMsg = 'Senhas diferentes';
            return;
        }
        console.log('Usuario-Enviado: ', this.usuario);
        this.srv.create(this.usuario)
            .subscribe(function (result) {
            _this.storage.set('user', _this.usuario);
            console.log('SignUp: ', result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comandos_zero_comandos_zero__["a" /* ComandosZeroPage */]);
        }, function (error) {
            console.log('Erro: ', error);
            _this.erroMsg = 'Ocorreu um erro, tente novamente';
        });
    };
    return SignupPageBase;
}());

//# sourceMappingURL=signup-base.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_consulta_lista_dia_treino_consulta_lista_dia_treino__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cria_serie_work_cria_serie_work__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lista_serie_treino_lista_serie_treino__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_treino_dia_inicio_treino_dia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_consulta_lista_exercicio_consulta_lista_exercicio__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Consulta Dia*', component: __WEBPACK_IMPORTED_MODULE_5__pages_consulta_lista_dia_treino_consulta_lista_dia_treino__["a" /* ConsultaListaDiaTreinoPage */] },
            { title: 'Cria Serie Work', component: __WEBPACK_IMPORTED_MODULE_6__pages_cria_serie_work_cria_serie_work__["a" /* CriaSerieWorkPage */] },
            { title: 'Series*', component: __WEBPACK_IMPORTED_MODULE_7__pages_lista_serie_treino_lista_serie_treino__["a" /* ListaSerieTreinoPage */] },
            { title: 'Inicia Treino*', component: __WEBPACK_IMPORTED_MODULE_8__pages_inicio_treino_dia_inicio_treino_dia__["a" /* InicioTreinoDiaPage */] },
            { title: 'Consulta Exerc*', component: __WEBPACK_IMPORTED_MODULE_9__pages_consulta_lista_exercicio_consulta_lista_exercicio__["a" /* ConsultaListaExercicioPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 405,
	"./af.js": 405,
	"./ar": 406,
	"./ar-dz": 407,
	"./ar-dz.js": 407,
	"./ar-kw": 408,
	"./ar-kw.js": 408,
	"./ar-ly": 409,
	"./ar-ly.js": 409,
	"./ar-ma": 410,
	"./ar-ma.js": 410,
	"./ar-sa": 411,
	"./ar-sa.js": 411,
	"./ar-tn": 412,
	"./ar-tn.js": 412,
	"./ar.js": 406,
	"./az": 413,
	"./az.js": 413,
	"./be": 414,
	"./be.js": 414,
	"./bg": 415,
	"./bg.js": 415,
	"./bm": 416,
	"./bm.js": 416,
	"./bn": 417,
	"./bn.js": 417,
	"./bo": 418,
	"./bo.js": 418,
	"./br": 419,
	"./br.js": 419,
	"./bs": 420,
	"./bs.js": 420,
	"./ca": 421,
	"./ca.js": 421,
	"./cs": 422,
	"./cs.js": 422,
	"./cv": 423,
	"./cv.js": 423,
	"./cy": 424,
	"./cy.js": 424,
	"./da": 425,
	"./da.js": 425,
	"./de": 426,
	"./de-at": 427,
	"./de-at.js": 427,
	"./de-ch": 428,
	"./de-ch.js": 428,
	"./de.js": 426,
	"./dv": 429,
	"./dv.js": 429,
	"./el": 430,
	"./el.js": 430,
	"./en-SG": 431,
	"./en-SG.js": 431,
	"./en-au": 432,
	"./en-au.js": 432,
	"./en-ca": 433,
	"./en-ca.js": 433,
	"./en-gb": 434,
	"./en-gb.js": 434,
	"./en-ie": 435,
	"./en-ie.js": 435,
	"./en-il": 436,
	"./en-il.js": 436,
	"./en-nz": 437,
	"./en-nz.js": 437,
	"./eo": 438,
	"./eo.js": 438,
	"./es": 439,
	"./es-do": 440,
	"./es-do.js": 440,
	"./es-us": 441,
	"./es-us.js": 441,
	"./es.js": 439,
	"./et": 442,
	"./et.js": 442,
	"./eu": 443,
	"./eu.js": 443,
	"./fa": 444,
	"./fa.js": 444,
	"./fi": 445,
	"./fi.js": 445,
	"./fo": 446,
	"./fo.js": 446,
	"./fr": 447,
	"./fr-ca": 448,
	"./fr-ca.js": 448,
	"./fr-ch": 449,
	"./fr-ch.js": 449,
	"./fr.js": 447,
	"./fy": 450,
	"./fy.js": 450,
	"./ga": 451,
	"./ga.js": 451,
	"./gd": 452,
	"./gd.js": 452,
	"./gl": 453,
	"./gl.js": 453,
	"./gom-latn": 454,
	"./gom-latn.js": 454,
	"./gu": 455,
	"./gu.js": 455,
	"./he": 456,
	"./he.js": 456,
	"./hi": 457,
	"./hi.js": 457,
	"./hr": 458,
	"./hr.js": 458,
	"./hu": 459,
	"./hu.js": 459,
	"./hy-am": 460,
	"./hy-am.js": 460,
	"./id": 461,
	"./id.js": 461,
	"./is": 462,
	"./is.js": 462,
	"./it": 463,
	"./it-ch": 464,
	"./it-ch.js": 464,
	"./it.js": 463,
	"./ja": 465,
	"./ja.js": 465,
	"./jv": 466,
	"./jv.js": 466,
	"./ka": 467,
	"./ka.js": 467,
	"./kk": 468,
	"./kk.js": 468,
	"./km": 469,
	"./km.js": 469,
	"./kn": 470,
	"./kn.js": 470,
	"./ko": 471,
	"./ko.js": 471,
	"./ku": 472,
	"./ku.js": 472,
	"./ky": 473,
	"./ky.js": 473,
	"./lb": 474,
	"./lb.js": 474,
	"./lo": 475,
	"./lo.js": 475,
	"./lt": 476,
	"./lt.js": 476,
	"./lv": 477,
	"./lv.js": 477,
	"./me": 478,
	"./me.js": 478,
	"./mi": 479,
	"./mi.js": 479,
	"./mk": 480,
	"./mk.js": 480,
	"./ml": 481,
	"./ml.js": 481,
	"./mn": 482,
	"./mn.js": 482,
	"./mr": 483,
	"./mr.js": 483,
	"./ms": 484,
	"./ms-my": 485,
	"./ms-my.js": 485,
	"./ms.js": 484,
	"./mt": 486,
	"./mt.js": 486,
	"./my": 487,
	"./my.js": 487,
	"./nb": 488,
	"./nb.js": 488,
	"./ne": 489,
	"./ne.js": 489,
	"./nl": 490,
	"./nl-be": 491,
	"./nl-be.js": 491,
	"./nl.js": 490,
	"./nn": 492,
	"./nn.js": 492,
	"./pa-in": 493,
	"./pa-in.js": 493,
	"./pl": 494,
	"./pl.js": 494,
	"./pt": 495,
	"./pt-br": 496,
	"./pt-br.js": 496,
	"./pt.js": 495,
	"./ro": 497,
	"./ro.js": 497,
	"./ru": 498,
	"./ru.js": 498,
	"./sd": 499,
	"./sd.js": 499,
	"./se": 500,
	"./se.js": 500,
	"./si": 501,
	"./si.js": 501,
	"./sk": 502,
	"./sk.js": 502,
	"./sl": 503,
	"./sl.js": 503,
	"./sq": 504,
	"./sq.js": 504,
	"./sr": 505,
	"./sr-cyrl": 506,
	"./sr-cyrl.js": 506,
	"./sr.js": 505,
	"./ss": 507,
	"./ss.js": 507,
	"./sv": 508,
	"./sv.js": 508,
	"./sw": 509,
	"./sw.js": 509,
	"./ta": 510,
	"./ta.js": 510,
	"./te": 511,
	"./te.js": 511,
	"./tet": 512,
	"./tet.js": 512,
	"./tg": 513,
	"./tg.js": 513,
	"./th": 514,
	"./th.js": 514,
	"./tl-ph": 515,
	"./tl-ph.js": 515,
	"./tlh": 516,
	"./tlh.js": 516,
	"./tr": 517,
	"./tr.js": 517,
	"./tzl": 518,
	"./tzl.js": 518,
	"./tzm": 519,
	"./tzm-latn": 520,
	"./tzm-latn.js": 520,
	"./tzm.js": 519,
	"./ug-cn": 521,
	"./ug-cn.js": 521,
	"./uk": 522,
	"./uk.js": 522,
	"./ur": 523,
	"./ur.js": 523,
	"./uz": 524,
	"./uz-latn": 525,
	"./uz-latn.js": 525,
	"./uz.js": 524,
	"./vi": 526,
	"./vi.js": 526,
	"./x-pseudo": 527,
	"./x-pseudo.js": 527,
	"./yo": 528,
	"./yo.js": 528,
	"./zh-cn": 529,
	"./zh-cn.js": 529,
	"./zh-hk": 530,
	"./zh-hk.js": 530,
	"./zh-tw": 531,
	"./zh-tw.js": 531
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 897;

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIATREINO; });
/* unused harmony export DIATREINO_SERIELISTAEXECUCAOPAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DIATREINO_EXECUTATREINOPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIATREINO_CONSULTALISTADIATREINOPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DIATREINO_DETALHEDIATREINOPAGE; });
var DIATREINO = [];
var DIATREINO_SERIELISTAEXECUCAOPAGE = {};
var DIATREINO_EXECUTATREINOPAGE = {};
var DIATREINO_CONSULTALISTADIATREINOPAGE = {};
var DIATREINO_DETALHEDIATREINOPAGE = {};
//# sourceMappingURL=diaTreino.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMSERIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ITEMSERIE_SERIEEDITAEXECUCAOPAGE; });
/* unused harmony export ITEMSERIE_CADASTRAITEMSERIEPAGE */
/* unused harmony export ITEMSERIE_EDITAITEMSERIEPAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ITEMSERIE_CRIASERIEPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ITEMSERIE_CRIASERIEWORKPAGE; });
var ITEMSERIE = [];
var ITEMSERIE_SERIEEDITAEXECUCAOPAGE = {};
var ITEMSERIE_CADASTRAITEMSERIEPAGE = {};
var ITEMSERIE_EDITAITEMSERIEPAGE = {};
var ITEMSERIE_CRIASERIEPAGE = {};
var ITEMSERIE_CRIASERIEWORKPAGE = {};
//# sourceMappingURL=itemSerie.js.map

/***/ })

},[544]);
//# sourceMappingURL=main.js.map