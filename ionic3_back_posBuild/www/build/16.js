webpackJsonp([16],{

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteForm01PageModule", function() { return TesteForm01PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teste_form01__ = __webpack_require__(930);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TesteForm01PageModule = /** @class */ (function () {
    function TesteForm01PageModule() {
    }
    TesteForm01PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teste_form01__["a" /* TesteForm01Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teste_form01__["a" /* TesteForm01Page */]),
            ],
        })
    ], TesteForm01PageModule);
    return TesteForm01PageModule;
}());

//# sourceMappingURL=teste-form01.module.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesteForm01Page; });
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


/**
 * Generated class for the TesteForm01Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TesteForm01Page = /** @class */ (function () {
    function TesteForm01Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TesteForm01Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TesteForm01Page');
    };
    TesteForm01Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teste-form01',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/teste-form01/teste-form01.html"*/'<!--\n  Generated template for the TesteForm01Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TesteForm01</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Item\n  </ion-item>\n  <ion-list-header>\n    List Header\n  </ion-list-header>\n  <ion-item-divider>\n    Item Divider\n  </ion-item-divider>\n  <button ion-item (click)="buttonClick()">\n    Button Item\n  </button>\n\n  <a ion-item href="https://www.ionicframework.com">\n    Anchor Item\n  </a>\n  <ion-item detail-push>\n    Item with Detail Arrow\n  </ion-item>\n\n  <button ion-item (click)="buttonClick()">\n    Button Item with Detail Arrow\n  </button>\n\n  <a ion-item detail-none href="https://www.ionicframework.com">\n    Anchor Item with no Detail Arrow\n  </a>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Header\n    </ion-list-header>\n\n    <ion-item>\n      Item\n    </ion-item>\n\n    <ion-item detail-push>\n      Item with Detail Arrow\n    </ion-item>\n\n    <button ion-item (click)="buttonClick()">\n      Button Item\n    </button>\n\n    <ion-item-divider color="secondary">\n      Item Divider\n    </ion-item-divider>\n\n    <button ion-item detail-none (click)="buttonClick()">\n      Button Item with no Detail Arrow\n    </button>\n\n    <a ion-item href="https://www.ionicframework.com">\n      Anchor Item\n    </a>\n\n    <ion-item no-lines>\n      Item with no border\n    </ion-item>\n\n    <ion-item text-wrap>\n      Multiline text that should wrap when it is too long to fit on one line in the item.\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <!-- List header with buttons on each side -->\n    <ion-list-header>\n      <button ion-button item-start (click)="buttonClick()">Button</button>\n      List Header\n      <button ion-button outline item-end (click)="buttonClick()">Outline</button>\n    </ion-list-header>\n\n    <!-- Loops through and creates multiple items -->\n    <ion-item *ngFor="let item of items">\n      Item {{item}}\n    </ion-item>\n\n    <!-- Button item with an icon on the left -->\n    <button ion-item>\n      <ion-icon name="star" item-start></ion-icon>\n      Button Item\n    </button>\n\n    <!-- Item with a label and content -->\n    <ion-item>\n      <ion-label>\n        Item Label\n      </ion-label>\n      <div item-content>\n        Item Content next to the label\n      </div>\n    </ion-item>\n\n    <!-- Item with left and right buttons -->\n    <ion-item>\n      <button ion-button item-start (click)="buttonClick()">Button</button>\n      Item\n      <button ion-button outline item-end (click)="buttonClick()">Outline</button>\n    </ion-item>\n\n    <!-- Item divider with a right button -->\n    <ion-item-divider color="secondary">\n      Item Divider\n      <button ion-button item-end>Button</button>\n    </ion-item-divider>\n\n    <!-- Disabled button item with left and right buttons -->\n    <button ion-item disabled>\n      <button ion-button item-start (click)="buttonClick()">\n        <ion-icon name="home"></ion-icon>\n        Left Icon\n      </button>\n      Disabled Button Item\n      <button ion-button outline item-end (click)="buttonClick()">\n        <ion-icon name="star"></ion-icon>\n        Left Icon\n      </button>\n    </button>\n\n    <!-- Item with an avatar on the left and button on the right -->\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/my-avatar.png">\n      </ion-avatar>\n      Avatar Item\n      <button ion-button outline item-end>View</button>\n    </ion-item>\n\n    <!-- Item with a thumbnail on the right -->\n    <ion-item>\n      <h2>Item</h2>\n      <p>Item Paragraph</p>\n      <ion-thumbnail item-end>\n        <img src="img/my-thumbnail.png">\n      </ion-thumbnail>\n    </ion-item>\n\n    <!-- Sliding item -->\n    <ion-item-sliding>\n      <ion-item>\n        Item\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="primary" (click)="archive()">Archive</button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n  <ion-item-sliding>\n      <ion-item>\n        Item 1\n      </ion-item>\n      <ion-item-options side="right" (ionSwipe)="saveItem(item)">\n        <button ion-button expandable (click)="saveItem(item)">\n          <ion-icon name="star"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/produto_treino_academia/ionic3_back/src/pages/teste-form01/teste-form01.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TesteForm01Page);
    return TesteForm01Page;
}());

//# sourceMappingURL=teste-form01.js.map

/***/ })

});
//# sourceMappingURL=16.js.map