(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./azeris/azeris.component */ "./src/app/azeris/azeris.component.ts");





const routes = [
    { path: '**', component: _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_2__["AzerisComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'project-azeris';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./azeris/azeris.component */ "./src/app/azeris/azeris.component.ts");
/* harmony import */ var _azeris_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./azeris/classic/classic.component */ "./src/app/azeris/classic/classic.component.ts");
/* harmony import */ var _azeris_glow_glow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./azeris/glow/glow.component */ "./src/app/azeris/glow/glow.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__["AzerisComponent"],
        _azeris_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__["ClassicComponent"],
        _azeris_glow_glow_component__WEBPACK_IMPORTED_MODULE_7__["GlowComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__["AzerisComponent"],
                    _azeris_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__["ClassicComponent"],
                    _azeris_glow_glow_component__WEBPACK_IMPORTED_MODULE_7__["GlowComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/azeris/azeris.component.ts":
/*!********************************************!*\
  !*** ./src/app/azeris/azeris.component.ts ***!
  \********************************************/
/*! exports provided: AzerisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzerisComponent", function() { return AzerisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_Tipus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tipus */ "./src/app/model/Tipus.ts");
/* harmony import */ var _model_Megkotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Megkotes */ "./src/app/model/Megkotes.ts");
/* harmony import */ var _model_Jutsu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Jutsu */ "./src/app/model/Jutsu.ts");
/* harmony import */ var _glow_glow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glow/glow.component */ "./src/app/azeris/glow/glow.component.ts");






class AzerisComponent {
    /**
     * <iframe src="localhost:4200" title="W3Schools Free Online Web Tutorials"></iframe>
     */
    constructor() {
        /**
         * Típusok:
         * Sima
         * Katon
         * Suiton
         * Fuuton
         * Doton
         * Raiton
         * Senjutsu
         * Titkos
         * Fuuin
         * Bijuu
         * Iryou
         * Suanagakure
         * Yami
         * Kugutsu
         * Kinjutsu
         * Hoshigakure
         * Genjutsu
         * Taijutsu
         * Kenjutsu
         * Jiton
         * Suchiruton
         * Shakuton
         * Ketsuiton
         * Bakuton
         * Mokuton
         * Hikariton
         * Tenseigan
         * Youton
         * Yugeton
         * Meimeikyan
         * Byakugan
         * Akuton
         * Jinton
         * Shiruhi
         * Sharingan
         * Midoriyugan
         * Hyoton
         * Ranmaru
         * Rinnegan
         * Souma no Kou
         * Shikotsumyaku
         */
        this.suiton = new _model_Tipus__WEBPACK_IMPORTED_MODULE_1__["Tipus"]('suiton', 'Víz', '水', '#00FFFF');
        this.moderatori = new _model_Megkotes__WEBPACK_IMPORTED_MODULE_2__["Megkotes"]('Bunshin no Jutsu', _model_Megkotes__WEBPACK_IMPORTED_MODULE_2__["Engedely"].MODERATORI);
        this.url = [
            new URL('https://de.narutopedia.eu/images/thumb/e/e1/Hijutsukirisame.png/250px-Hijutsukirisame.png'),
            // tslint:disable-next-line:max-line-length
            new URL('https://vignette.wikia.nocookie.net/denaruto3/images/d/d5/Kirisame01.PNG/revision/latest/top-crop/width/360/height/450?cb=20100205182000&path-prefix=de'),
        ];
        this.kirisame = new _model_Jutsu__WEBPACK_IMPORTED_MODULE_3__["Jutsu"]('Hijutsu: Kirisame', 'Titkos Technika: Szitáló Eső', 800, 'S', 'Kos, Kutya, Patkány', 
        // tslint:disable-next-line:max-line-length
        'Ez a jutsu Kirigakure egyik titkos technikája, melyet az Oinin-ek előszeretettel használnak. Szükséges hozzá a Kirigakure no Jutsu ismerete. Ha a köd már elég sűrű, ezt a technikát használva a köd víztartalmát kipárologtatva a ködfelhőn belül esőt hozhatunk létre, mely meggátolja az ellenfél mozgását, összezavarja, és a jutsuk hatásfokát, korlátozza: A technikák amivel az esőcseppek érintkezésbe kerülnek, ezáltal a bennük tárolódó chakra is, folyamatosan veszítenek a chakratartalmukból, így a gyengébb technikák létre sem jönnek, az erősebbek pedig gyengébbek lesznek.', 'Megjegyzes teszt', 'figyelmeztetes teszt', this.suiton, this.moderatori, 'Kirigakure Oinin', this.url);
    }
    ngOnInit() {
    }
}
AzerisComponent.ɵfac = function AzerisComponent_Factory(t) { return new (t || AzerisComponent)(); };
AzerisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AzerisComponent, selectors: [["app-azeris"]], decls: 1, vars: 1, consts: [[3, "jutsu"]], template: function AzerisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-glow", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jutsu", ctx.kirisame);
    } }, directives: [_glow_glow_component__WEBPACK_IMPORTED_MODULE_4__["GlowComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F6ZXJpcy9hemVyaXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzerisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-azeris',
                templateUrl: './azeris.component.html',
                styleUrls: ['./azeris.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/azeris/classic/classic.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/azeris/classic/classic.component.ts ***!
  \*****************************************************/
/*! exports provided: ClassicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicComponent", function() { return ClassicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ClassicComponent {
    constructor() {
    }
    ngOnInit() {
    }
    setHeaderStyle() {
        const styles = {
            'background-image': `linear-gradient(to right, ${this.jutsu.tipus.color}, rgba(255,0,0,0)`,
            margin: '-0.1rem'
        };
        return styles;
    }
    setKanjiStyle() {
        const style = {
            'background-color': `${this.jutsu.tipus.color}`,
            padding: '0.3rem',
            'border-radius': '1rem 1rem 1rem 1rem'
        };
        return style;
    }
}
ClassicComponent.ɵfac = function ClassicComponent_Factory(t) { return new (t || ClassicComponent)(); };
ClassicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassicComponent, selectors: [["app-classic"]], inputs: { jutsu: "jutsu" }, decls: 9, vars: 5, consts: [[1, "main-container"], [3, "ngStyle"], [1, "nev-mezo", 3, "ngStyle"]], template: function ClassicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setKanjiStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jutsu.tipus.kanji, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setHeaderStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.jutsu.japanNev, " // ", ctx.jutsu.magyarNev, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".main-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.nev-mezo[_ngcontent-%COMP%] {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXplcmlzL2NsYXNzaWMvY2xhc3NpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9hemVyaXMvY2xhc3NpYy9jbGFzc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5ldi1tZXpvIHtcblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-classic',
                templateUrl: './classic.component.html',
                styleUrls: ['./classic.component.css']
            }]
    }], function () { return []; }, { jutsu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/azeris/glow/glow.component.ts":
/*!***********************************************!*\
  !*** ./src/app/azeris/glow/glow.component.ts ***!
  \***********************************************/
/*! exports provided: GlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlowComponent", function() { return GlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class GlowComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    get valueAsStyle() {
        return this.sanitizer.bypassSecurityTrustStyle(`--color-var: ${this.jutsu.tipus.color}`);
    }
    ngOnInit() {
        console.log(this.jutsu.kep);
    }
    titleStyling() {
        const style = {
            'background-image': `linear-gradient(to right, #363636, rgba(255, 0, 0, 0)`,
        };
        return style;
    }
}
GlowComponent.ɵfac = function GlowComponent_Factory(t) { return new (t || GlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
GlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlowComponent, selectors: [["app-glow"]], hostVars: 1, hostBindings: function GlowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("style", ctx.valueAsStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
    } }, inputs: { jutsu: "jutsu" }, decls: 8, vars: 4, consts: [[1, "main-container"], [1, "kanji-container"], ["aria-hidden", "true", 1, "fa", "fa-arrows"], [1, "nev", 3, "ngStyle"]], template: function GlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jutsu.tipus.kanji, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.titleStyling());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.jutsu.japanNev, " // ", ctx.jutsu.magyarNev, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["element[_ngcontent-%COMP%] {\n  --color-var: attr;\n}\n\n\n.nev[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  margin-left: -0.5rem;\n  font-size: larger;\n  font-weight: bolder;\n  color: #FAEBD7;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n}\n\n\n.jutsu-image[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-height: 200px;\n}\n\n\n.main-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n\n.kep-container[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\n\n.kanji-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  background: #666;\n  border-radius: 50%;\n  font-size: 30px;\n  color: #A9A9A9;\n  transition: .5s;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.kanji-container[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  border-radius:50%;\n  \n  transition: .5s;\n  transform: scale(.9);\n  z-index: -1;\n}\n\n\n.kanji-container[_ngcontent-%COMP%]:hover:before {\n  transform: scale(1.2);\n  \n  box-shadow: 0 0 15px var(--color-var);\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n\n\n.kanji-container[_ngcontent-%COMP%]:hover {\n  color: var(--color-var); \n  box-shadow: 0 0 15px var(--color-var);\n  text-shadow: 0 0 15px var(--color-var);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXplcmlzL2dsb3cvZ2xvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUVBLFlBQVk7OztBQUNaLHdCQUF3Qjs7O0FBQ3hCLG9CQUFvQjs7O0FBQ3BCLGlCQUFpQjs7O0FBQ2pCLGtCQUFrQjs7O0FBQ2xCLHdCQUF3Qjs7O0FBQ3hCLHVCQUF1Qjs7O0FBQ3ZCLHlCQUF5Qjs7O0FBQ3pCLHdCQUF3Qjs7O0FBQ3hCLHFCQUFxQjs7O0FBQ3JCLGlCQUFpQjs7O0FBQ2pCLHFCQUFxQjs7O0FBQ3JCLElBQUk7OztBQUVKO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQTBEO0VBQzFELHFDQUFxQztFQUNyQyx5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHVCQUF1QixFQUFFLGVBQWU7RUFDeEMscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2F6ZXJpcy9nbG93L2dsb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImVsZW1lbnQge1xuICAtLWNvbG9yLXZhcjogYXR0cjtcbn1cblxuXG4ubmV2IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjRkFFQkQ3O1xuICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufVxuXG4uanV0c3UtaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmtlcC1jb250YWluZXIge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuXG4ua2FuamktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0E5QTlBOTtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4vKnVsIGxpIGEgeyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKiAgZGlzcGxheTogYmxvY2s7Ki9cbi8qICB3aWR0aDogNjBweDsqL1xuLyogIGhlaWdodDogNjBweDsqL1xuLyogIHRleHQtYWxpZ246IGNlbnRlcjsqL1xuLyogIGxpbmUtaGVpZ2h0OiA2MHB4OyovXG4vKiAgYmFja2dyb3VuZDogIzE3MTUxNTsqL1xuLyogIGJvcmRlci1yYWRpdXM6IDUwJTsqL1xuLyogIGZvbnQtc2l6ZTogMzBweDsqL1xuLyogIGNvbG9yOiAjNjY2OyovXG4vKiAgdHJhbnNpdGlvbjogLjVzOyovXG4vKn0qL1xuXG4ua2FuamktY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgLypiYWNrZ3JvdW5kOiAjZDM1NDAwOyAhKiBrw7xsc8WRIHN6w61uICohKi9cbiAgdHJhbnNpdGlvbjogLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5rYW5qaS1jb250YWluZXI6aG92ZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAvKmJveC1zaGFkb3c6IDAgMCAxNXB4ICNkMzU0MDA7ICEqIGvDvGxzxZEgc3rDrW4gw6F0bWVuZXRiZSohKi9cbiAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tY29sb3ItdmFyKTtcbiAgZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5rYW5qaS1jb250YWluZXI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdmFyKTsgLyogS2Fuamkgc3rDrW4gKi9cbiAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tY29sb3ItdmFyKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWNvbG9yLXZhcik7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glow',
                templateUrl: './glow.component.html',
                styleUrls: ['./glow.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { jutsu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueAsStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.style']
        }] }); })();


/***/ }),

/***/ "./src/app/model/Jutsu.ts":
/*!********************************!*\
  !*** ./src/app/model/Jutsu.ts ***!
  \********************************/
/*! exports provided: Jutsu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jutsu", function() { return Jutsu; });
class Jutsu {
    constructor(japanNev, magyarNev, chakraszint, besorolas, kezpecseket, leiras, megjegyzes, figyelmeztetes, tipus, megkotes, hasznaloja, kep) {
        this.japanNev = japanNev;
        this.magyarNev = magyarNev;
        this.chakraszint = chakraszint;
        this.besorolas = besorolas;
        this.kezpecsetek = kezpecseket;
        this.leiras = leiras;
        this.megjegyzes = megjegyzes;
        this.figyelmeztetes = figyelmeztetes;
        this.tipus = tipus;
        this.megjegyzes = megjegyzes;
        this.megkotes = megkotes;
        this.hasznaloja = hasznaloja;
        this.kep = kep;
    }
}


/***/ }),

/***/ "./src/app/model/Megkotes.ts":
/*!***********************************!*\
  !*** ./src/app/model/Megkotes.ts ***!
  \***********************************/
/*! exports provided: Megkotes, Engedely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Megkotes", function() { return Megkotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engedely", function() { return Engedely; });
class Megkotes {
    constructor(megkotes, engedely) {
        this.megkotes = megkotes;
        this.engedely = engedely;
    }
}
var Engedely;
(function (Engedely) {
    Engedely[Engedely["ENGEDELYES"] = 0] = "ENGEDELYES";
    Engedely[Engedely["MODERATORI"] = 1] = "MODERATORI";
    Engedely[Engedely["SIMA"] = 2] = "SIMA";
})(Engedely || (Engedely = {}));


/***/ }),

/***/ "./src/app/model/Tipus.ts":
/*!********************************!*\
  !*** ./src/app/model/Tipus.ts ***!
  \********************************/
/*! exports provided: Tipus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipus", function() { return Tipus; });
class Tipus {
    constructor(id, tipus, kanji, color) {
        this.id = id;
        this.tipus = tipus;
        this.kanji = kanji || '忍';
        this.color = color || '#171717';
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gergomarcellturi/Documents/gundan/project-azeris/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map