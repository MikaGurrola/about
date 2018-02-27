webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/ideas/ideas.module": [
		"../../../../../src/app/modules/ideas/ideas.module.ts",
		"ideas.module"
	],
	"./modules/stats/stats.module": [
		"../../../../../src/app/modules/stats/stats.module.ts",
		"stats.module"
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
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */],
        data: { state: 'home' }
    },
    {
        path: 'stats',
        loadChildren: './modules/stats/stats.module#StatsModule',
        data: { state: 'stats' }
    },
    {
        path: 'ideas',
        loadChildren: './modules/ideas/ideas.module#IdeasModule',
        data: { state: 'ideas' }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"navbar\">\n    <li>\n      <a  \n      [routerLink]=\"['home']\"\n      [routerLinkActive]=\"['active','red']\"\n      \n      >\n      <!-- <i class=\"material-icons\">home</i> -->\n      HOME\n      </a>\n    </li>\n    <li>\n      <a  \n      [routerLink]=\"['/stats']\"\n      [routerLinkActive]=\"['active','green']\"\n      \n      >\n      <!-- <i class=\"material-icons\">about</i> -->\n      STATS\n      </a>\n    </li>\n    <li>\n      <a  \n      [routerLink]=\"['/ideas']\"\n      [routerLinkActive]=\"['active','blue']\"\n      \n      >\n      <!-- <i class=\"material-icons\">about</i> -->\n      WORK\n      </a>\n    </li>\n  </ul>\n</nav>\n<div class=\"main\">\n  <div class=\"router-container\" [@routerTransition]=\"getState(o)\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-container {\n  min-height: 100vh; }\n\nnav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: initial;\n  z-index: 10;\n  padding: 10px; }\n  nav ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    nav ul li {\n      margin: 0 15px;\n      position: relative; }\n  nav a {\n    position: relative;\n    font-family: 'Righteous', cursive;\n    text-decoration: none;\n    color: white;\n    font-size: 30px;\n    line-height: 40px; }\n    nav a:active, nav a:visited {\n      color: white; }\n    nav a.red:after {\n      background: #FF1744; }\n    nav a.green:after {\n      background: #00695C; }\n    nav a.blue:after {\n      background: #2979FF; }\n    nav a:after {\n      content: '';\n      height: 50px;\n      width: 50px;\n      display: block;\n      position: absolute;\n      top: -50%;\n      left: -0%;\n      z-index: -1;\n      border-radius: 50%; }\n    @media screen and (max-width: 600px) {\n      nav a {\n        font-size: 28px;\n        line-height: 30px; } }\n    @media screen and (max-width: 414px) {\n      nav a {\n        font-size: 20px;\n        line-height: 30px; } }\n\nbody {\n  position: relative; }\n\n.active:after {\n  -webkit-animation: rippleOverlay 1s linear forwards;\n          animation: rippleOverlay 1s linear forwards; }\n\n@-webkit-keyframes rippleOverlay {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; }\n  20% {\n    -webkit-transform: scale(50);\n            transform: scale(50);\n    opacity: 1; }\n  40% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 1; }\n  60% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.8; }\n  80% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; } }\n\n@keyframes rippleOverlay {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; }\n  20% {\n    -webkit-transform: scale(50);\n            transform: scale(50);\n    opacity: 1; }\n  40% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 1; }\n  60% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.8; }\n  80% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.getState = function (outlet) {
        // return outlet.activatedRouteData.state;
        return outlet.activatedRouteData['state'] || 'home';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\n\n  <div class=\"hero\">\n    <h1>Mika Gurrola</h1>\n    <p>Front End Web Developer</p>\n    <a class=\"btn\" href=\"../../../assets/ResumeFeb2017.pdf\" download>DOWNLOAD résumé <i class=\"fas fa-file-alt\"></i></a>\n  </div>\n\n\n  <div class=\"container\">\n    <h1>Experience</h1>\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--three21\"></div>\n      <div class=\"content\">\n        <h2>Three21, Orlando FL — Web Developer</h2>\n        <span>FEBRUARY 2017 - PRESENT</span>\n        <p>Being part of a small but capable team of three developers I had to take on a Full Stack developer role. This includes providing templates with automated workflows for local development as well as setup staging/live environments between multiple hosting services. Besides building custom WordPress themes/plugins, I have also built custom features for clients and recently started development on a native Android app.</p>   \n      </div>\n   \n    </article>\n\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--prpl\"></div>\n      <div class=\"content\">\n        <h2>Purple, Rock, Scissors, Orlando, FL — Front End Developer</h2>\n        <span>AUGUST 2016 - DEC 2016</span>\n        <p>Joining the team Full time I built my first client project with WordPress and saw the project from design hand off to launch. </p>   \n        \n        <p class=\"h2\">Developer Intern</p>\n        <span>MAY 2014 - AUGUST 2016</span>\n        <p>My intro to the chaotic world of Agency life with a ton of projects with short turnarounds. This was also when I was thrown into the fire of CMS’s like Drupal and WordPress. I learned a great deal about the roles and process of web development in the marketing industry.</p>   \n      </div>\n    </article>\n\n\n  </div>\n\n  <div class=\"container\">\n    <h1>Education</h1>\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--fullsail\"></div>\n      <div class=\"content\">\n        \n        <h2>Full Sail, Winter Park, FL — BS Computer Science</h2>\n        <span>FEBRUARY 2014 - MARCH 2016</span>\n        <p>This crash course into web technologies has led me from the front to the back end of development. Going through SSL & Databases I found my way to the wonderful world of JS Frameworks like ReactJS and AngularJS enabling me to build out my ideas into prototypes. </p>  \n      </div>\n    </article>\n  </div>\n\n  <div class=\"container\">\n    <h1>Extracurriculars</h1>\n    <ul class=\"flex socials\">\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.instagram.com/mikaelgrr/\" class=\"btn\">\n          <i class=\"fab fa-instagram\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://twitter.com/mikaelgrr\" class=\"btn\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://github.com/MikaGurrola\" class=\"btn\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/mika-gurrola-5820858b/\" class=\"btn\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn\">\n          <i class=\"fab fa-codepen\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  background: #FF1744;\n  background: linear-gradient(to bottom, #FF3D00 0%, #FF1744 100%);\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 50px; }\n\n.hero {\n  background-color: #FF3D00;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/anthem.jpg")) + "); }\n\n.socials__item {\n  margin: 10px; }\n\n.img-overlay {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 25vw;\n  background-position: center bottom;\n  background-size: cover;\n  background-blend-mode: lighten;\n  background-repeat: no-repeat;\n  position: relative;\n  display: flex; }\n  .img-overlay--three21 {\n    background-color: #FF3D00;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/three21_1.jpg")) + "); }\n  .img-overlay--prpl {\n    background-color: #FF1744;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/prpl.jpg")) + "); }\n  .img-overlay--fullsail {\n    background-color: #FF1744;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/youtube.jpg")) + "); }\n\narticle.flex {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  article.flex .img-overlay,\n  article.flex .content {\n    width: 45%; }\n  @media screen and (max-width: 600px) {\n    article.flex {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      article.flex .img-overlay,\n      article.flex .content {\n        width: 100%; }\n      article.flex .img-overlay {\n        height: 65vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(s, a, o);
};
var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('routerTransition', [
    // when transitioning FROM any state T0 any state
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* <=> *', [
        query(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ position: 'fixed', width: '100%' })),
        // query(':enter', style({ transform: 'translateX(100%)' })),
        query(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                query(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: ' 1' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.75s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: ' 0' }))
                ], { optional: true }),
                query(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.75s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: '1' }))
                ], { optional: true }),
            ]),
        ]),
        query(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()),
    ])
]);


/***/ }),

/***/ "../../../../../src/assets/anthem.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anthem.1b9fc34cbf5f7b004b68.jpg";

/***/ }),

/***/ "../../../../../src/assets/prpl.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "prpl.e108f8d9f16d943191a8.jpg";

/***/ }),

/***/ "../../../../../src/assets/three21_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "three21_1.dc9a0917cf3b49ab8a07.jpg";

/***/ }),

/***/ "../../../../../src/assets/youtube.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "youtube.e987d48ccc7220c24819.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map