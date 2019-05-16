webpackJsonp([17],{

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteEditPageModule", function() { return TesteEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teste_edit__ = __webpack_require__(929);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TesteEditPageModule = /** @class */ (function () {
    function TesteEditPageModule() {
    }
    TesteEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teste_edit__["a" /* TesteEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teste_edit__["a" /* TesteEditPage */]),
            ],
        })
    ], TesteEditPageModule);
    return TesteEditPageModule;
}());

//# sourceMappingURL=teste-edit.module.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesteEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
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
 * Generated class for the TesteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TesteEditPage = /** @class */ (function () {
    function TesteEditPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["m" /* ItemSerie */]();
        this.item.exercicio = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["i" /* Exercicio */]();
        this.myForm = this.fb.group({
            titulo: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        });
    }
    TesteEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TesteEditPage');
    };
    TesteEditPage.prototype.submit = function () {
        console.log('Chamou submit');
    };
    TesteEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teste-edit',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/teste-edit/teste-edit.html"*/'<!--\n  Generated template for the TesteEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TesteEdit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="myForm" novalidate (submit)="submit()">\n\n    <ion-item>\n      <ion-label floating>Nome do Exercício</ion-label>\n      <ion-input required [(ngModel)]="item.exercicio.titulo" name="titulo" type="text" formControlName="titulo"></ion-input>\n    </ion-item>\n\n\n    <button ion-button type="submit" block  [disabled]="myForm.invalid">Adicionar</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/teste-edit/teste-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], TesteEditPage);
    return TesteEditPage;
}());

//# sourceMappingURL=teste-edit.js.map

/***/ })

});
//# sourceMappingURL=17.js.map