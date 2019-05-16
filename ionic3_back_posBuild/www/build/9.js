webpackJsonp([9],{

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolhaSerieTreinoPageModule", function() { return EscolhaSerieTreinoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_serie_treino__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EscolhaSerieTreinoPageModule = /** @class */ (function () {
    function EscolhaSerieTreinoPageModule() {
    }
    EscolhaSerieTreinoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__escolha_serie_treino__["a" /* EscolhaSerieTreinoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__escolha_serie_treino__["a" /* EscolhaSerieTreinoPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__escolha_serie_treino__["a" /* EscolhaSerieTreinoPage */]
            ]
        })
    ], EscolhaSerieTreinoPageModule);
    return EscolhaSerieTreinoPageModule;
}());

//# sourceMappingURL=escolha-serie-treino.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_store__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_loader__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__translate_compiler__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__missing_translation_handler__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__translate_parser__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util__ = __webpack_require__(920);
















var USE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('USE_STORE');
var USE_DEFAULT_LANG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('USE_DEFAULT_LANG');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     */
    function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang, isolate) {
        if (useDefaultLang === void 0) { useDefaultLang = true; }
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = _this.compiler.compileTranslations(res, lang);
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        translations = this.compiler.compileTranslations(translations, lang);
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = Object(__WEBPACK_IMPORTED_MODULE_15__util__["c" /* mergeDeep */])(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param key
     * @param interpolateParams
     * @returns {any} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = function (key, interpolateParams) {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return this
            .get(key, interpolateParams)
            .concat(this.onLangChange.switchMap(function (event) {
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_15__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key, after compiling it
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    return TranslateService;
}());

TranslateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_10__translate_store__["a" /* TranslateStore */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__translate_loader__["b" /* TranslateLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_12__translate_compiler__["a" /* TranslateCompiler */], },
    { type: __WEBPACK_IMPORTED_MODULE_14__translate_parser__["b" /* TranslateParser */], },
    { type: __WEBPACK_IMPORTED_MODULE_13__missing_translation_handler__["b" /* MissingTranslationHandler */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_DEFAULT_LANG,] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
]; };


/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeDeep;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
/* tslint:disable */ function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}


/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateFakeLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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


var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());

/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));

TranslateFakeLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeLoader.ctorParameters = function () { return []; };


/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeCompiler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var TranslateCompiler = (function () {
    function TranslateCompiler() {
    }
    return TranslateCompiler;
}());

/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
var TranslateFakeCompiler = (function (_super) {
    __extends(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeCompiler.prototype.compile = function (value, lang) {
        return value;
    };
    TranslateFakeCompiler.prototype.compileTranslations = function (translations, lang) {
        return translations;
    };
    return TranslateFakeCompiler;
}(TranslateCompiler));

TranslateFakeCompiler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeCompiler.ctorParameters = function () { return []; };


/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeMissingTranslationHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());

/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return FakeMissingTranslationHandler;
}());

FakeMissingTranslationHandler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };


/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDefaultParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(920);
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


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());

var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = expr;
        }
        return result;
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target) && Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    TranslateDefaultParser.prototype.interpolateFunction = function (fn, params) {
        return fn(params);
    };
    TranslateDefaultParser.prototype.interpolateString = function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(r) ? r : substring;
        });
    };
    return TranslateDefaultParser;
}(TranslateParser));

TranslateDefaultParser.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () { return []; };


/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TranslateStore;
}());



/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(919);



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* equals */])(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.getContent = function (node) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    return TranslateDirective;
}());

TranslateDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[translate],[ngx-translate]'
            },] },
];
/** @nocollapse */
TranslateDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["a" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
TranslateDirective.propDecorators = {
    'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};


/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(920);



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(query, this.lastKey) && Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TranslatePipe;
}());

TranslatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };


/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_compiler__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_directive__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_pipe__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_translate_store__ = __webpack_require__(925);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */


















var TranslateModule = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateFakeLoader */] },
                config.compiler || { provide: __WEBPACK_IMPORTED_MODULE_5__src_translate_compiler__["a" /* TranslateCompiler */], useClass: __WEBPACK_IMPORTED_MODULE_5__src_translate_compiler__["b" /* TranslateFakeCompiler */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* FakeMissingTranslationHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__src_translate_store__["a" /* TranslateStore */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["c" /* USE_STORE */], useValue: config.isolate },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* USE_DEFAULT_LANG */], useValue: config.useDefaultLang },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* TranslateService */]
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateFakeLoader */] },
                config.compiler || { provide: __WEBPACK_IMPORTED_MODULE_5__src_translate_compiler__["a" /* TranslateCompiler */], useClass: __WEBPACK_IMPORTED_MODULE_5__src_translate_compiler__["b" /* TranslateFakeCompiler */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* FakeMissingTranslationHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["c" /* USE_STORE */], useValue: config.isolate },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* USE_DEFAULT_LANG */], useValue: config.useDefaultLang },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* TranslateService */]
            ]
        };
    };
    return TranslateModule;
}());

TranslateModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_7__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_directive__["a" /* TranslateDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_7__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_directive__["a" /* TranslateDirective */]
                ]
            },] },
];
/** @nocollapse */
TranslateModule.ctorParameters = function () { return []; };


/***/ })

});
//# sourceMappingURL=9.js.map