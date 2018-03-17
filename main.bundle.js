webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/ideas/ideas.module": [
		"../../../../../src/app/modules/ideas/ideas.module.ts",
		"ideas.module",
		"common"
	],
	"./modules/stats/stats.module": [
		"../../../../../src/app/modules/stats/stats.module.ts",
		"stats.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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

module.exports = "<nav>\n  <ul class=\"navbar\">\n    <li>\n      <a  \n      [routerLink]=\"['home']\"\n      [routerLinkActive]=\"['active']\"\n      \n      >\n      ABOUT\n      </a>\n    </li>\n    <!-- <li>\n      <a  \n      [routerLink]=\"['/stats']\"\n      [routerLinkActive]=\"['active']\"\n      \n      >\n      STATS\n      </a>\n    </li> -->\n    <li>\n      <a  \n      [routerLink]=\"['/ideas']\"\n      [routerLinkActive]=\"['active']\"\n      \n      >\n      <!-- <i class=\"material-icons\">about</i> -->\n      WORK\n      </a>\n    </li>\n  </ul>\n</nav>\n<div class=\"main\">\n  <div class=\"router-container\" [@routerTransition]=\"getState(o)\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-container {\n  min-height: 100vh; }\n\nnav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: initial;\n  z-index: 10;\n  padding: 10px;\n  background: #212121; }\n  nav ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    nav ul li {\n      margin: 0 15px;\n      position: relative; }\n  nav a {\n    position: relative;\n    font-family: 'Righteous', cursive;\n    text-decoration: none;\n    color: white;\n    opacity: 0.5;\n    font-size: 25px;\n    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n    font-size: 30px;\n    line-height: 40px; }\n    nav a:visited {\n      color: white; }\n    nav a.active, nav a:hover, nav a:focus, nav a:active {\n      opacity: 1;\n      font-size: 32px; }\n    @media screen and (max-width: 600px) {\n      nav a {\n        font-size: 28px;\n        line-height: 30px; } }\n    @media screen and (max-width: 414px) {\n      nav a {\n        font-size: 20px;\n        line-height: 30px; } }\n\nbody {\n  position: relative; }\n\n@-webkit-keyframes rippleOverlay {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; }\n  20% {\n    -webkit-transform: scale(50);\n            transform: scale(50);\n    opacity: 1; }\n  40% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 1; }\n  60% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.8; }\n  80% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; } }\n\n@keyframes rippleOverlay {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; }\n  20% {\n    -webkit-transform: scale(50);\n            transform: scale(50);\n    opacity: 1; }\n  40% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 1; }\n  60% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.8; }\n  80% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; } }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_content_box_content_box_component__ = __webpack_require__("../../../../../src/app/components/content-box/content-box.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_content_box_content_box_component__["a" /* ContentBoxComponent */]
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

/***/ "../../../../../src/app/components/content-box/content-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <p>\n    content-box works!\n  </p>\n\n  <div class=\"box\" [@scrollAnimation]=\"state\">\n    <img src=\"../../../assets/mika1.jpg\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/content-box/content-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/content-box/content-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export scrollAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var scrollAnimation = Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('scrollAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
        opacity: 1,
        transform: "translateX(0)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
        opacity: 0,
        transform: "translateX(-100%)"
    })),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.55,0,.1,1)')),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.55,0,.1,1)'))
]);
var ContentBoxComponent = (function () {
    function ContentBoxComponent(el) {
        this.el = el;
        this.state = 'hide';
    }
    ContentBoxComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        console.log('component position ' + componentPosition);
        var scrollPosition = window.pageYOffset + 150;
        console.log('scroll position ' + scrollPosition);
        if (scrollPosition >= componentPosition) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
    };
    ContentBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContentBoxComponent.prototype, "checkScroll", null);
    ContentBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-box',
            template: __webpack_require__("../../../../../src/app/components/content-box/content-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/content-box/content-box.component.scss")],
            animations: [scrollAnimation],
            host: {
                '[@scrollAnimation]': ''
            },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContentBoxComponent);
    return ContentBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page animate\">\n\n\n  <div class=\"hero  hero--center\">\n    <h1>Mika Gurrola</h1>\n    <p>Front End Web Developer</p>\n    <a class=\"btn btn--white\" href=\"../../../assets/ResumeFeb2017.pdf\" download>DOWNLOAD resumé <i class=\"fas fa-file-alt\"></i></a>\n  </div>\n\n  <!-- <app-content-box></app-content-box> -->\n  \n  <article class=\"container\">\n    <h1>It's pronounced \"mee - kuh\"</h1>\n    <p class=\"p--max-width\">A front end web developer with a slight obsession with technology, I like to build fun and engaging experiences for users on the web. When I'm not playing around on codepen or cleaning up a codebase with refactors and streaminling the development workflow - I'm probably crushing combos with wicked weaves, snapping away on a Google phone, trying not to die attempting crossfit or honestly just eating my feelings weight in carbs.</p>\n  </article>\n\n  <div class=\"container\">\n    <h1>Experience</h1>\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--three21\"></div>\n      <div class=\"content\">\n        <h2>Three21, Orlando FL — Web Developer</h2>\n        <span>FEBRUARY 2017 - PRESENT</span>\n        <p>Being part of a small but capable team of three developers I had to take on a Full Stack developer role. This includes providing templates with automated workflows for local development as well as setup staging/live environments between multiple hosting services. Besides building custom WordPress themes & plugins, I have also built custom features for a native Android app. It's really fullfilling to see a project from beggining to end and deploying for the world to consume - for better or worse. </p>   \n      </div>\n   \n    </article>\n\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--prpl\"></div>\n      <div class=\"content\">\n        <h2>Purple, Rock, Scissors, Orlando, FL — Front End Developer</h2>\n        <span>AUGUST 2016 - DEC 2016</span> \n        <p class=\"h2\">Developer Intern</p>\n        <span>MAY 2014 - AUGUST 2016</span>\n        <p>My intro to the chaotic world of Agency life with a ton of projects with short turnarounds. This was also when I was thrown into the fire of CMS’s like Drupal and WordPress. I learned a great deal about the roles of a web developer and how to work with teams from all departments striving for the same goal.</p>   \n      </div>\n    </article>\n\n\n  </div>\n\n  <div class=\"container\">\n    <h1>Education</h1>\n    <article class=\"flex\">\n      <div class=\"img-overlay img-overlay--fullsail\"></div>\n      <div class=\"content\">\n        \n        <h2>Full Sail, Winter Park, FL — BS Computer Science</h2>\n        <span>FEBRUARY 2014 - MARCH 2016</span>\n        <p>This crash course into web technologies has led me from the front to the back end of development. Going through SSL & Databases I found my way to the wonderful world of JS Frameworks like ReactJS and AngularJS enabling me to build out my ideas into prototypes. </p>  \n      </div>\n    </article>\n  </div>\n\n  <div class=\"container\">\n    <h1>Extracurriculars</h1>\n    <ul class=\"flex socials\">\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.instagram.com/mikaelgrr/\" class=\"btn\">\n          <i class=\"fab fa-instagram\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://twitter.com/mikaelgrr\" class=\"btn\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://github.com/MikaGurrola\" class=\"btn\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/mika-gurrola-5820858b/\" class=\"btn\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn\">\n          <i class=\"fab fa-codepen\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero {\n  background: linear-gradient(#FF1744 0%, #651FFF 80%), linear-gradient(to right, #FF3D00 0%, #2979FF 100%), linear-gradient(#212121 0%, #263238 100%), url(" + escape(__webpack_require__("../../../../../src/assets/mika3.jpg")) + ");\n  background-blend-mode: screen, difference, hard-light, lighten;\n  background-position: center top, center top, center bottom, center top;\n  background-size: 100% 100%, 100% 100%, 100% 0%, cover;\n  background-repeat: no-repeat;\n  transition: all 1.5s cubic-bezier(0.55, 0, 0.1, 1); }\n  .hero--center:hover {\n    background-position: -100vw 0%, 100vw 0%, center bottom,  center bottom;\n    background-size: 100% 0%, 100% 0%, 100% 100%, cover;\n    background-repeat: no-repeat; }\n  @media screen and (max-width: 600px) {\n    .hero--center {\n      margin: 0 5% 100px 5%;\n      height: 50vh;\n      min-height: 300px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 15px;\n      background-size: 100% 100%, 100% 100%, 100% 0%,  200% auto;\n      -webkit-animation-name: mobileBackgroundAnimation;\n              animation-name: mobileBackgroundAnimation;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-iteration-count: 1;\n              animation-iteration-count: 1;\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n      .hero--center:hover {\n        background-size: 100% 0%, 100% 0%, 100% 100%, 200% auto; } }\n\n@-webkit-keyframes mobileBackgroundAnimation {\n  0% {\n    background-size: 100% 100%, 100% 100%, 100% 0%,  200% auto; }\n  100% {\n    background-size: 100% 0%, 100% 0%, 100% 100%, 200% auto;\n    background-position: -100vw 0%, 100vw 0%, center bottom,  center bottom; } }\n\n@keyframes mobileBackgroundAnimation {\n  0% {\n    background-size: 100% 100%, 100% 100%, 100% 0%,  200% auto; }\n  100% {\n    background-size: 100% 0%, 100% 0%, 100% 100%, 200% auto;\n    background-position: -100vw 0%, 100vw 0%, center bottom,  center bottom; } }\n\narticle.flex .img-overlay {\n  background-position: center, center, center;\n  background-size: 100%, 100% , cover;\n  background-repeat: no-repeat;\n  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1); }\n  @media screen and (max-width: 600px) {\n    article.flex .img-overlay {\n      background-size: 0, 0 , cover; } }\n\narticle.flex:hover .img-overlay {\n  background-size: 0, 0 , cover; }\n\n.img-overlay {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 25vw;\n  background-position: center, center, center;\n  background-size: 0, 0 , cover;\n  background-repeat: no-repeat;\n  transition: all 1.5s cubic-bezier(0.55, 0, 0.1, 1);\n  position: relative;\n  display: flex; }\n  .img-overlay:hover {\n    background-size: 0, 0 , cover; }\n  .img-overlay--three21 {\n    background: linear-gradient(#FF1744 0%, #FF3D00 80%), linear-gradient(to right, #FF1744 0%, #FF3D00 100%), url(" + escape(__webpack_require__("../../../../../src/assets/three21_1.jpg")) + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-blend-mode: screen, difference, lighten; }\n  .img-overlay--prpl {\n    background: linear-gradient(#FF1744 0%, #FF3D00 80%), linear-gradient(to right, #FF1744 0%, #FF3D00 100%), url(" + escape(__webpack_require__("../../../../../src/assets/prpl.jpg")) + ");\n    background-blend-mode: screen, difference, lighten;\n    background-position: center;\n    background-size: cover; }\n  .img-overlay--fullsail {\n    background: linear-gradient(#FF1744 0%, #FF3D00 80%), linear-gradient(to right, #FF1744 0%, #FF3D00 100%), url(" + escape(__webpack_require__("../../../../../src/assets/youtube.jpg")) + ");\n    background-blend-mode: screen, difference, lighten;\n    background-position: bottom center;\n    background-size: cover; }\n\narticle.flex {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  article.flex .img-overlay,\n  article.flex .content {\n    width: 45%; }\n  @media screen and (max-width: 600px) {\n    article.flex {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      article.flex .img-overlay,\n      article.flex .content {\n        width: 100%; }\n      article.flex .img-overlay {\n        height: 65vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(s, a, o);
};
var pageTransition = Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('pageTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':enter', [
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 })),
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])(300, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])(':leave', [
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])(300, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")],
            animations: [pageTransition],
            host: {
                '[@pageTransition]': ''
            },
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
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(s, a, o);
};
var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('routerTransition', [
    // when transitioning FROM any state T0 any state
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* <=> *', [
        query(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', width: '100%' })),
        // query(':enter', style({ transform: 'translateX(100%)' })),
        query(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()),
        // sequence([
        //   group([
        //     query(':leave', [
        //       style({ opacity: ' 1' }),
        //       animate('0.25s cubic-bezier(.75,-0.48,.26,1.52)', 
        //       style({ opacity: ' 0' }))
        //     ],
        //     { optional: true }),
        //     query(':enter', [
        //       style({ opacity: '0' }),
        //       animate('0.25s cubic-bezier(.75,-0.48,.26,1.52)', 
        //       style({ opacity: '1' }))
        //     ],
        //     { optional: true }),
        //   ]),
        // ]),
        query(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()),
    ])
]);


/***/ }),

/***/ "../../../../../src/assets/mika3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mika3.5f6161ce3f91b33d73d3.jpg";

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