webpackJsonp(["stats.module"],{

/***/ "../../../../../src/app/modules/stats/stats-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_stats_component__ = __webpack_require__("../../../../../src/app/modules/stats/stats/stats.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__stats_stats_component__["a" /* StatsComponent */]
    }
];
var StatsRoutingModule = (function () {
    function StatsRoutingModule() {
    }
    StatsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], StatsRoutingModule);
    return StatsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/stats/stats.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_routing_module__ = __webpack_require__("../../../../../src/app/modules/stats/stats-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stats_stats_component__ = __webpack_require__("../../../../../src/app/modules/stats/stats/stats.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatsModule = (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__stats_routing_module__["a" /* StatsRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__stats_stats_component__["a" /* StatsComponent */]]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/stats/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text\" rel=\"stylesheet\">\n\n<div class=\"page\">\n\n  <div class=\"hero animate\">\n    <div class=\"projects__demo\">\n      <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n      <div class=\"cmy\"></div>          \n    </div>\n    <div class=\"content\">\n      <h1>HTML, CSS & JS are the trinities of my reality.</h1>\n    </div>\n  </div>\n  \n  <div class=\"card-container container\">\n    <article class=\"card animate\">\n      <h1>Polyglot Proficiency</h1>\n      <p>Yo no habla español, but speaking these languages make me feel better about being linguistically challenged.</p>\n      <ul>\n        <li class=\"stat\">HTML</li>\n        <li class=\"stat\">CSS3/SCSS</li>\n        <li class=\"stat\">JS/ES6</li>\n        <li class=\"stat\">PHP</li>\n      </ul>\n    </article>\n  \n    <article class=\"card animate\">\n      <h1>Technical Tools</h1>\n      <p>Using tools like Browsersync help me to squash bugs as soon as they appear across multiple platforms and devices. I also like to keep my styles organized with Sass using the BEM model.</p>\n      <ul>\n        <li class=\"stat\">Git</li>\n        <li class=\"stat\">Gulp/NPM</li>\n        <li class=\"stat\">VSCode</li>\n        <li class=\"stat\">Flywheel</li>\n        <li class=\"stat\">WPEngine</li>\n        <li class=\"stat\">Browsersync</li>\n        <li class=\"stat\">Wrike</li>\n      </ul>\n    </article>\n  \n    <article class=\"card animate\">\n      <h1>Latest Learnings</h1>\n      <p>My latest interest is building Android apps with Kotlin. Developing a native app is bittersweet experience because I find a lot of familiar paradigms while still presenting a fun challenge.</p>\n      <ul>\n        <li class=\"stat\">Kotlin</li>\n        <li class=\"stat\">Android Studio</li>\n      </ul>\n    </article>\n  </div>\n\n\n\n  <div class=\"container animate\">\n    <h1>Extracurriculars</h1>\n    <ul class=\"flex socials\">\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.instagram.com/mikaelgrr/\" class=\"btn\">\n          <i class=\"fab fa-instagram\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://twitter.com/mikaelgrr\" class=\"btn\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://github.com/MikaGurrola\" class=\"btn\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/mika-gurrola-5820858b/\" class=\"btn\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>\n      </li>\n      <li class=\"socials__item\">\n        <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn\">\n          <i class=\"fab fa-codepen\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/stats/stats/stats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stat {\n  font-family: 'Libre Barcode 39 Text', cursive;\n  font-size: 32px;\n  line-height: 50px; }\n\n.hero {\n  height: initial;\n  background-blend-mode: multiply;\n  padding: 50px 0; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.card {\n  width: 30%;\n  border-radius: 4px;\n  padding: 15px;\n  margin: 15px 0; }\n  .card h1 {\n    text-align: left; }\n  @media screen and (max-width: 1200px) {\n    .card {\n      width: 45%; } }\n  @media screen and (max-width: 600px) {\n    .card {\n      width: 90%;\n      margin: 0 auto; } }\n\n.projects__demo {\n  position: relative; }\n  .projects__demo .pixel2 {\n    width: 250px;\n    height: 500px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 2; }\n    .projects__demo .pixel2:hover + .cmy {\n      background-position: top center, top center, top center; }\n  .projects__demo .cmy {\n    z-index: 0;\n    position: absolute;\n    top: 32px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-blend-mode: multiply;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/cyan.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/magenta.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/yellow.png")) + ");\n    background-repeat: no-repeat;\n    background-size: 228px 439px;\n    transition: .25s .5s;\n    width: 200%;\n    left: -50%;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-name: blend;\n            animation-name: blend;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate; }\n    @media screen and (max-width: 600px) {\n      .projects__demo .cmy {\n        width: 150%;\n        left: -25%; } }\n\n@-webkit-keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n\n@keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/stats/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
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
var pageTransition = Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('pageTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])(':enter', [
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 })),
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])(300, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateY(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])(':leave', [
        query('.animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])(300, [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateY(0px)', opacity: 1 }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);
var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/modules/stats/stats/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/stats/stats/stats.component.scss")],
            animations: [pageTransition],
            host: {
                '[@pageTransition]': ''
            },
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ })

});
//# sourceMappingURL=stats.module.chunk.js.map