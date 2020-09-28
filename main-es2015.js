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
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






const routes = [
    { path: ':lang/calculator', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"] },
    { path: '**', redirectTo: `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultLanguage}/calculator`, pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                declarations: []
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
        this.title = 'Cosmic Calculator';
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
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculator_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calculator/sidebar/sidebar.component */ "./src/app/calculator/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
















function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](httpClient, 'assets/translations/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                defaultLanguage: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultLanguage,
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"],
        _calculator_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"],
                    _calculator_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        defaultLanguage: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultLanguage,
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cache.service */ "./src/app/services/cache.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/calculator/sidebar/sidebar.component.ts");










class CalculatorComponent {
    constructor(translateService, elementRef, cacheService, eventService) {
        this.translateService = translateService;
        this.elementRef = elementRef;
        this.cacheService = cacheService;
        this.eventService = eventService;
        this.menuState = 'out';
        this.inputString = '';
        this.resultString = '';
        this.calcHistory = [];
    }
    ngOnInit() {
        this.eventService.sidebarclick.subscribe(this.historyEventHandler.bind(this));
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#112';
        this.cursorEffect();
        this.getHistoryFromCache();
    }
    cursorEffect() {
        const border = this.elementRef.nativeElement.ownerDocument.querySelector('.highlight');
        this.elementRef.nativeElement.ownerDocument.querySelector('.calculator-container')
            .addEventListener('mousemove', (ev) => {
            const x = ev.pageX;
            const y = ev.pageY;
            const bounding = border.getBoundingClientRect();
            border.style.webkitMaskPosition = `${x - bounding.x - 160}px ${y - bounding.y - 160}px`;
        });
    }
    toggleMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
    input(char) {
        this.inputString += this.isOperator(char) && this.isOperator(this.inputString[this.inputString.length - 1]) ? '' : char;
    }
    evaluateExpression(fromHistory) {
        this.corrigateInput();
        this.resultString = `= ${mathjs__WEBPACK_IMPORTED_MODULE_2__["parse"](this.inputString).evaluate()}`;
        this.cacheService.addCalcHistory(this.inputString);
        if (!fromHistory) {
            this.addToCalcHistory(this.inputString);
        }
    }
    deleteChar() {
        this.inputString = this.inputString.slice(0, -1);
        if ((this.isOperator(this.inputString[this.inputString.length - 1]) ||
            this.inputString[this.inputString.length - 1] === ' ') && this.inputString.length !== 0) {
            this.deleteChar();
        }
    }
    getHistoryFromCache() {
        this.cacheService.getCalcHistory.forEach(value => this.calcHistory = [
            ...this.calcHistory, { expression: value, value: mathjs__WEBPACK_IMPORTED_MODULE_2__["parse"](value).evaluate() }
        ]);
    }
    clearInput() {
        this.inputString = '';
    }
    isOperator(char) {
        return char === '/' || char === '*' || char === '+' || char === '-' || char === undefined;
    }
    corrigateInput() {
        this.inputString = this.inputString.replace(/\s/g, '');
        this.inputString = this.inputString.replace(this.getSearchExpression(), (operator) => {
            return ` ${operator} `;
        });
    }
    getSearchExpression() {
        return /[+/*-]/gi;
    }
    addToCalcHistory(resultString) {
        this.calcHistory = [{ expression: resultString, value: mathjs__WEBPACK_IMPORTED_MODULE_2__["parse"](resultString).evaluate() }, ...this.calcHistory];
    }
    historyEventHandler(history) {
        this.inputString = history.expression;
        this.evaluateExpression(true);
    }
    changeLanguage(lang) {
        this.translateService.use(lang);
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"])); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 89, vars: 10, consts: [[3, "click"], ["langMenu", ""], ["mat-menu-item", "", 3, "click"], [3, "matMenuTriggerFor"], ["href", "https://fonts.googleapis.com/css?family=Archivo+Black&display=swap", "rel", "stylesheet"], [1, "title", "logo-1"], [1, "calculator-container"], [1, "input-container"], [3, "value", "readOnly", "click"], [1, "result-text", 3, "value", "readOnly"], [1, "calculator-body"], [1, "grid-container", "highlight"], [1, "grid-item"], [1, "grid-item", "hidden"], [1, "grid-container", "number-layer"], [1, "grid-item", 3, "click", "keyup.7"], [1, "grid-item", 3, "click", "keyup.8"], [1, "grid-item", 3, "click", "keyup.9"], [1, "grid-item", 3, "click", "keyup.escape"], [1, "grid-item", 3, "click", "keyup.4"], [1, "grid-item", 3, "click", "keyup.5"], [1, "grid-item", 3, "click", "keyup.6"], [1, "grid-item", 3, "click", "keyup.*"], [1, "grid-item", 3, "click", "keyup.1"], [1, "grid-item", 3, "click", "keyup.2"], [1, "grid-item", 3, "click", "keyup.3"], [1, "grid-item", 3, "click", "keyup.-"], [1, "grid-item", 3, "click", "keyup.enter"], [1, "grid-item", 3, "click", "keyup.0"], [1, "grid-item", 3, "click", "keyup.+"], [1, "grid-item", 3, "click", "keyup.backspace"], [3, "calcHistory"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_5_listener() { return ctx.changeLanguage("hu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Magyar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_7_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_input_click_18_listener() { return ctx.deleteChar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_40_listener() { return ctx.input("7"); })("keyup.7", function CalculatorComponent_Template_div_keyup_7_40_listener() { return ctx.input("7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_43_listener() { return ctx.input("8"); })("keyup.8", function CalculatorComponent_Template_div_keyup_8_43_listener() { return ctx.input("8"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_46_listener() { return ctx.input("9"); })("keyup.9", function CalculatorComponent_Template_div_keyup_9_46_listener() { return ctx.input("9"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_49_listener() { return ctx.input("/"); })("keyup.escape", function CalculatorComponent_Template_div_keyup_escape_49_listener() { return ctx.input("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_52_listener() { return ctx.input("4"); })("keyup.4", function CalculatorComponent_Template_div_keyup_4_52_listener() { return ctx.input("4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_55_listener() { return ctx.input("5"); })("keyup.5", function CalculatorComponent_Template_div_keyup_5_55_listener() { return ctx.input("5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_58_listener() { return ctx.input("6"); })("keyup.6", function CalculatorComponent_Template_div_keyup_6_58_listener() { return ctx.input("6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_61_listener() { return ctx.input("*"); })("keyup.*", function CalculatorComponent_Template_div_keyup___61_listener() { return ctx.input("*"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_64_listener() { return ctx.input("1"); })("keyup.1", function CalculatorComponent_Template_div_keyup_1_64_listener() { return ctx.input("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_67_listener() { return ctx.input("2"); })("keyup.2", function CalculatorComponent_Template_div_keyup_2_67_listener() { return ctx.input("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_70_listener() { return ctx.input("3"); })("keyup.3", function CalculatorComponent_Template_div_keyup_3_70_listener() { return ctx.input("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_73_listener() { return ctx.input("-"); })("keyup.-", function CalculatorComponent_Template_div_keyup___73_listener() { return ctx.input("-"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_76_listener() { return ctx.evaluateExpression(); })("keyup.enter", function CalculatorComponent_Template_div_keyup_enter_76_listener() { return ctx.evaluateExpression(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_79_listener() { return ctx.input("0"); })("keyup.0", function CalculatorComponent_Template_div_keyup_0_79_listener() { return ctx.input("0"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_82_listener() { return ctx.input("+"); })("keyup.+", function CalculatorComponent_Template_div_keyup___82_listener() { return ctx.input("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_div_click_85_listener() { return ctx.clearInput(); })("keyup.backspace", function CalculatorComponent_Template_div_keyup_backspace_85_listener() { return ctx.clearInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-sidebar", 31);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "COSMIC_CALCULATOR"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inputString)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.resultString)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx.menuState)("calcHistory", ctx.calcHistory);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["input[_ngcontent-%COMP%]{\r\n  background: inherit;\r\n  border: 0;\r\n  outline: none;\r\n  width: 400px;\r\n  height: 100px;\r\n  cursor: pointer;\r\n  font-size: 48px;\r\n  text-align: end;\r\n  color: #7a7a8c;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: calc(50vh - 40px) auto 0 auto;\r\n  text-transform: uppercase;\r\n  font-family: \"Archivo Black\", \"Archivo\", sans-serif;\r\n  font-weight: normal;\r\n  display: block;\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: antiquewhite;\r\n  margin: 1rem auto;\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  letter-spacing: 15px;\r\n  text-shadow: white;\r\n}\r\n\r\n.logo-1[_ngcontent-%COMP%] {\r\n  color: white;\r\n  -webkit-animation: neon 3s infinite;\r\n          animation: neon 3s infinite;\r\n}\r\n\r\n@-webkit-keyframes neon {\r\n  0% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),\r\n    0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);\r\n  }\r\n  50% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 5px var(--shadow-color-light), 0 0 15px var(--shadow-color-light), 0 0 25px var(--shadow-color-light),\r\n    0 0 50px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 80px var(--shadow-color), 0 0 110px var(--shadow-color), 0 0 210px var(--shadow-color);\r\n  }\r\n  100% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),\r\n    0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);\r\n  }\r\n}\r\n\r\n@keyframes neon {\r\n  0% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),\r\n    0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);\r\n  }\r\n  50% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 5px var(--shadow-color-light), 0 0 15px var(--shadow-color-light), 0 0 25px var(--shadow-color-light),\r\n    0 0 50px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 80px var(--shadow-color), 0 0 110px var(--shadow-color), 0 0 210px var(--shadow-color);\r\n  }\r\n  100% {\r\n    text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light),\r\n    0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light),\r\n    0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);\r\n  }\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  height: 100px;\r\n  margin: 0 auto 0 auto;\r\n}\r\n\r\n.result-text[_ngcontent-%COMP%] {\r\n  color: antiquewhite;\r\n}\r\n\r\n.calculator-body[_ngcontent-%COMP%]  {\r\n  margin: 0 auto 0 auto;\r\n  width: 400px;\r\n  height: 400px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #112;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(4, 1fr);\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%]{\r\n  margin: 2px;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  visibility: hidden;\r\n  \r\n  -webkit-mask-image: radial-gradient(circle at center, white 0%, transparent 160px);\r\n  -webkit-mask-repeat: no-repeat;\r\n  -webkit-mask-size: 320px 320px;\r\n}\r\n\r\n.calculator-container[_ngcontent-%COMP%]:hover   .highlight[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.calculator-container[_ngcontent-%COMP%]:hover   .grid-item[_ngcontent-%COMP%] {\r\n  transition: .8s;\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\r\n  border: 3px solid #cd7bff;\r\n}\r\n\r\n.number-layer[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\r\n  color: #cd7bff;\r\n  font-size: 32px;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.number-layer[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\r\n  font-size: 32px;\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #58586a;\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%]:active {\r\n  background-color: #eee;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRTs7d0xBRW9MO0VBQ3RMO0VBQ0E7SUFDRTs7d0xBRW9MO0VBQ3RMO0VBQ0E7SUFDRTs7d0xBRW9MO0VBQ3RMO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRTs7d0xBRW9MO0VBQ3RMO0VBQ0E7SUFDRTs7d0xBRW9MO0VBQ3RMO0VBQ0E7SUFDRTs7d0xBRW9MO0VBQ3RMO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyx5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrRkFBa0Y7RUFDbEYsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBjb2xvcjogIzdhN2E4YztcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiBjYWxjKDUwdmggLSA0MHB4KSBhdXRvIDAgYXV0bztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm8gQmxhY2tcIiwgXCJBcmNoaXZvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIHRleHQtc2hhZG93OiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28tMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFuaW1hdGlvbjogbmVvbiAzcyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuZW9uIHtcclxuICAwJSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLCAtMXB4IDFweCAxcHggdmFyKC0tc2hhZG93LWNvbG9yLWxpZ2h0KSwgMXB4IC0xcHggMXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDFweCAxcHggMXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksXHJcbiAgICAwIDAgM3B4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDAgMCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDAgMCAyMHB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksXHJcbiAgICAwIDAgMzBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgNDBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgNTBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgNzBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgMTAwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDIwMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLCAtMXB4IDFweCAxcHggdmFyKC0tc2hhZG93LWNvbG9yLWxpZ2h0KSwgMXB4IC0xcHggMXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDFweCAxcHggMXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksXHJcbiAgICAwIDAgNXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDAgMCAxNXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDAgMCAyNXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksXHJcbiAgICAwIDAgNTBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgNjBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgNjBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgODBweCB2YXIoLS1zaGFkb3ctY29sb3IpLCAwIDAgMTEwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDIxMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggdmFyKC0tc2hhZG93LWNvbG9yLWxpZ2h0KSwgLTFweCAxcHggMXB4IHZhcigtLXNoYWRvdy1jb2xvci1saWdodCksIDFweCAtMXB4IDFweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLCAxcHggMXB4IDFweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLFxyXG4gICAgMCAwIDNweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLCAwIDAgMTBweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLCAwIDAgMjBweCB2YXIoLS1zaGFkb3ctY29sb3ItbGlnaHQpLFxyXG4gICAgMCAwIDMwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDQwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDUwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDcwcHggdmFyKC0tc2hhZG93LWNvbG9yKSwgMCAwIDEwMHB4IHZhcigtLXNoYWRvdy1jb2xvciksIDAgMCAyMDBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4ucmVzdWx0LXRleHQge1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWJvZHkgIHtcclxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxMTI7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW17XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLypub2luc3BlY3Rpb24gQ3NzSW52YWxpZFByb3BlcnR5VmFsdWUqL1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCB0cmFuc3BhcmVudCAxNjBweCk7XHJcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiAzMjBweCAzMjBweDtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyOmhvdmVyIC5oaWdobGlnaHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWNvbnRhaW5lcjpob3ZlciAuZ3JpZC1pdGVtIHtcclxuICB0cmFuc2l0aW9uOiAuOHM7XHJcbn1cclxuXHJcbi5oaWdobGlnaHQgLmdyaWQtaXRlbSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2NkN2JmZjtcclxufVxyXG5cclxuLm51bWJlci1sYXllciAuZ3JpZC1pdGVtIHtcclxuICBjb2xvcjogI2NkN2JmZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm51bWJlci1sYXllciAuZ3JpZC1pdGVtIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1ODZhO1xyXG59XHJcblxyXG4uZ3JpZC1pdGVtOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(0,0,0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(100%, 0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                    ]),
                ]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"] }, { type: _services_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/calculator/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculator/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const history_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clickEventHandler(history_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", history_r1.expression, " ");
} }
class SidebarComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
    }
    clickEventHandler(history) {
        this.eventService.sidebarclick.emit(history);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { calcHistory: "calcHistory" }, decls: 2, vars: 1, consts: [[1, "card-list"], ["class", "card-container", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-container", 3, "click"], [1, "card"], [1, "card-header"], [1, "card-body"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_1_Template, 7, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calcHistory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\r\n  background: #292c33;\r\n  color: #fff;\r\n  position: fixed;\r\n  left: auto;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 20%;\r\n  min-width: 250px;\r\n  z-index: 9999;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin: 0 0 1rem;\r\n  color: #7a7a8c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhdG9yL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6ICMyOTJjMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMCAwIDFyZW07XHJcbiAgY29sb3I6ICM3YTdhOGM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }]; }, { calcHistory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/cache.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cache.service.ts ***!
  \*******************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CacheService {
    constructor() {
        this.calcHistorySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('calcHistory')) &&
            JSON.parse(localStorage.getItem('calcHistory')).slice(0, 9)
            || []);
        this.calcHistory = this.calcHistorySubject.asObservable();
    }
    get getCalcHistory() {
        return this.calcHistorySubject.value;
    }
    addCalcHistory(calcHistory) {
        const calcHistoryArray = [...this.getCalcHistory, calcHistory];
        localStorage.setItem('calcHistory', JSON.stringify(calcHistoryArray));
        this.calcHistorySubject.next(JSON.parse(localStorage.getItem('calcHistory')));
    }
    clearCalcHistory() {
        localStorage.clear();
        this.calcHistorySubject.next(null);
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
CacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventService {
    constructor() {
        this.sidebarclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    supportedLanguage: ['hu', 'en'],
    defaultLanguage: 'hu',
    rootUrl: 'http://localhost:4200',
};


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

module.exports = __webpack_require__(/*! C:\Development\university\szfm_calculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map