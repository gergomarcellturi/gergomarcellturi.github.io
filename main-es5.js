function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./azeris/azeris.component */
    "./src/app/azeris/azeris.component.ts");

    var routes = [{
      path: '**',
      component: _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_2__["AzerisComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'project-azeris';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./azeris/azeris.component */
    "./src/app/azeris/azeris.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__["AzerisComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _azeris_azeris_component__WEBPACK_IMPORTED_MODULE_5__["AzerisComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/azeris/azeris.component.ts":
  /*!********************************************!*\
    !*** ./src/app/azeris/azeris.component.ts ***!
    \********************************************/

  /*! exports provided: AzerisComponent */

  /***/
  function srcAppAzerisAzerisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AzerisComponent", function () {
      return AzerisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_Tipus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/Tipus */
    "./src/app/model/Tipus.ts");
    /* harmony import */


    var _model_Megkotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/Megkotes */
    "./src/app/model/Megkotes.ts");
    /* harmony import */


    var _model_Jutsu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/Jutsu */
    "./src/app/model/Jutsu.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AzerisComponent =
    /*#__PURE__*/
    function () {
      /**
       * <iframe src="localhost:4200" title="W3Schools Free Online Web Tutorials"></iframe>
       */
      function AzerisComponent() {
        _classCallCheck(this, AzerisComponent);

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
        this.url = [new URL('https://de.narutopedia.eu/images/thumb/e/e1/Hijutsukirisame.png/250px-Hijutsukirisame.png'), // tslint:disable-next-line:max-line-length
        new URL('https://vignette.wikia.nocookie.net/denaruto3/images/d/d5/Kirisame01.PNG/revision/latest/top-crop/width/360/height/450?cb=20100205182000&path-prefix=de')];
        this.kirisame = new _model_Jutsu__WEBPACK_IMPORTED_MODULE_3__["Jutsu"]('Hijutsu: Kirisame', 'Titkos Technika: Szitáló Eső', 800, 'S', 'Kos, Kutya, Patkány', // tslint:disable-next-line:max-line-length
        'Ez a jutsu Kirigakure egyik titkos technikája, melyet az Oinin-ek előszeretettel használnak. Szükséges hozzá a Kirigakure no Jutsu ismerete. Ha a köd már elég sűrű, ezt a technikát használva a köd víztartalmát kipárologtatva a ködfelhőn belül esőt hozhatunk létre, mely meggátolja az ellenfél mozgását, összezavarja, és a jutsuk hatásfokát, korlátozza: A technikák amivel az esőcseppek érintkezésbe kerülnek, ezáltal a bennük tárolódó chakra is, folyamatosan veszítenek a chakratartalmukból, így a gyengébb technikák létre sem jönnek, az erősebbek pedig gyengébbek lesznek.', 'Megjegyzes teszt', 'figyelmeztetes teszt', this.suiton, this.moderatori, 'Kirigakure Oinin', this.url);
      }

      _createClass(AzerisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setHeaderStyle",
        value: function setHeaderStyle() {
          var styles = {
            'background-image': "linear-gradient(to right, ".concat(this.kirisame.tipus.color, ", rgba(255,0,0,0)")
          };
          return styles;
        }
      }]);

      return AzerisComponent;
    }();

    AzerisComponent.ɵfac = function AzerisComponent_Factory(t) {
      return new (t || AzerisComponent)();
    };

    AzerisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AzerisComponent,
      selectors: [["app-azeris"]],
      decls: 3,
      vars: 4,
      consts: [[1, "main-div"], [3, "ngStyle"]],
      template: function AzerisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setHeaderStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.kirisame.tipus.kanji, " ", ctx.kirisame.japanNev, " // ", ctx.kirisame.magyarNev, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".main-div[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXplcmlzL2F6ZXJpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hemVyaXMvYXplcmlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzerisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-azeris',
          templateUrl: './azeris.component.html',
          styleUrls: ['./azeris.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/Jutsu.ts":
  /*!********************************!*\
    !*** ./src/app/model/Jutsu.ts ***!
    \********************************/

  /*! exports provided: Jutsu */

  /***/
  function srcAppModelJutsuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Jutsu", function () {
      return Jutsu;
    });

    var Jutsu = function Jutsu(japanNev, magyarNev, chakraszint, besorolas, kezpecseket, leiras, megjegyzes, figyelmeztetes, tipus, megkotes, hasznaloja, kep) {
      _classCallCheck(this, Jutsu);

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
    };
    /***/

  },

  /***/
  "./src/app/model/Megkotes.ts":
  /*!***********************************!*\
    !*** ./src/app/model/Megkotes.ts ***!
    \***********************************/

  /*! exports provided: Megkotes, Engedely */

  /***/
  function srcAppModelMegkotesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Megkotes", function () {
      return Megkotes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Engedely", function () {
      return Engedely;
    });

    var Megkotes = function Megkotes(megkotes, engedely) {
      _classCallCheck(this, Megkotes);

      this.megkotes = megkotes;
      this.engedely = engedely;
    };

    var Engedely;

    (function (Engedely) {
      Engedely[Engedely["ENGEDELYES"] = 0] = "ENGEDELYES";
      Engedely[Engedely["MODERATORI"] = 1] = "MODERATORI";
      Engedely[Engedely["SIMA"] = 2] = "SIMA";
    })(Engedely || (Engedely = {}));
    /***/

  },

  /***/
  "./src/app/model/Tipus.ts":
  /*!********************************!*\
    !*** ./src/app/model/Tipus.ts ***!
    \********************************/

  /*! exports provided: Tipus */

  /***/
  function srcAppModelTipusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tipus", function () {
      return Tipus;
    });

    var Tipus = function Tipus(id, tipus, kanji, color) {
      _classCallCheck(this, Tipus);

      this.id = id;
      this.tipus = tipus;
      this.kanji = kanji || '忍';
      this.color = color || '#171717';
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/gergomarcellturi/Documents/gundan/project-azeris/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map