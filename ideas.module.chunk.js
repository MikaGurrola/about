webpackJsonp(["ideas.module"],{

/***/ "../../../../../src/app/modules/ideas/ideas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ideas_ideas_component__ = __webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ideas_ideas_component__["a" /* IdeasComponent */]
    }
];
var IdeasRoutingModule = (function () {
    function IdeasRoutingModule() {
    }
    IdeasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], IdeasRoutingModule);
    return IdeasRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasModule", function() { return IdeasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ideas_routing_module__ = __webpack_require__("../../../../../src/app/modules/ideas/ideas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ideas_ideas_component__ = __webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IdeasModule = (function () {
    function IdeasModule() {
    }
    IdeasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ideas_routing_module__["a" /* IdeasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ideas_ideas_component__["a" /* IdeasComponent */]
            ]
        })
    ], IdeasModule);
    return IdeasModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"page animate\">\n  \n\n  <div class=\"hero hero--work\">\n    <h1>Portfolio Picks</h1>\n    <p>Just a small collection of my favorite projects, I've workd on. Check em out!</p>\n\n    <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn btn--white\">\n      Visit my CodePen <i class=\"fab fa-codepen\"></i>\n    </a>\n  </div>\n\n\n  <div class=\"container\">\n      <h1>FUN PROJECTS</h1>\n    <app-article>\n      <div class=\"projects__demo\">\n        <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n        <div class=\"gif\">\n          <img src=\"../../../assets/demos/pp.gif\" alt=\"Picture perfect pallett demo\">\n        </div>        \n      </div>\n      <div class=\"article__content\">\n        <h2>Picture Perfect Palette</h2>\n        <p>This is a simple app that utilizes the Unsplash.com api to get recent/popular images and a Vibrant JS to get the dominant colors of an image to create a color palette. You can also upload your own image to create a palette. I really wanted to play with router animations and lazy load pages/components.</p>\n        <div class=\"actions\">\n          <a target=\"_blank\" href=\"https://mikagurrola.github.io/picture-perfect-palette/\" class=\"btn\">DEMO <i class=\"fab fa-chrome\"></i></a>\n          <a target=\"_blank\" href=\"https://github.com/MikaGurrola/picture-perfect-palette\" class=\"btn btn--secondary\">SOURCE <i class=\"fab fa-github\"></i></a>\n        </div>\n      </div>\n    </app-article>\n\n    <app-article>\n      <div class=\"projects__demo\">\n        <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n        <div class=\"gif\">\n          <img src=\"../../../assets/demos/outorl.gif\" alt=\"Out Orlando demo\">\n        </div>      \n      </div>\n      <div class=\"article__content\">\n        <h2>Out Orlando</h2>\n        <p>My goal with this little project is to highlight hidden gems of the community and share with the gym bunnies, the queer families, the drag mothers, the shopaholics, the food connoisseurs, the volunteers and everyone in between. There's more to Orlando than just theme parks.</p>\n        <div class=\"actions\">\n          <a target=\"_blank\" href=\"https://outorlando-741d5.firebaseapp.com/home\" class=\"btn\">DEMO <i class=\"fab fa-chrome\"></i></a>\n        </div>\n      </div>\n    </app-article>\n  </div>\n\n\n  <div class=\"container\">\n    <h1>CLIENT WORKS</h1>\n    \n    <app-article>\n      <div class=\"projects__demo\">\n        <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n        <div class=\"gif\">\n          <img src=\"../../../assets/demos/greenlight2.gif\" alt=\"greenlight demo\">\n        </div>     \n      </div>\n      <div class=\"article__content\">\n        <h2>Green Light Group Tours</h2>\n        <p>This was a fun design to bring to life. Using Underscores as a foundation for this custom theme I had to build the backend editor for the client to make changes and add content to their site on their own - Advanced Custom Fields really helped with that.</p>\n        <div class=\"actions\">\n          <a target=\"_blank\" href=\"https://greenlightgrouptours.com/\" class=\"btn\">LIVE <i class=\"fab fa-chrome\"></i></a>\n        </div>\n      </div>\n    </app-article>\n\n    <app-article>\n      <div class=\"projects__demo\">\n        <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n        <div class=\"gif\">\n          <img src=\"../../../assets/demos/sct.gif\" alt=\"Go CocoaBeach demo\">\n        </div>      \n      </div>\n      <div class=\"article__content\">\n        <h2>Go CocoaBeach</h2>\n        <p>A simple landing page with subtle animations here and there, I had to add this page to larger site that constantly has different pages with drastically different themes - therefore when implimenting this single page I went the route of making a specific template with it's own set of scripts and styles so as not to pollute and add to the main sites codebase. </p>\n        <div class=\"actions\">\n          <a target=\"_blank\" href=\"http://www.gococoabeach.com/class-in-space-coast/\" class=\"btn\">LIVE <i class=\"fab fa-chrome\"></i></a>\n        </div>\n      </div>\n    </app-article>\n\n    <app-article>\n      <div class=\"projects__demo\">\n        <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n        <div class=\"gif\">\n          <img src=\"../../../assets/demos/launches2.gif\" alt=\"launches demo\">\n        </div>    \n      </div>\n      <div class=\"article__content\">\n        <h2>Space Coast Launches</h2>\n        <p>This was my first native app, built with Kotlin for android - I developed the compass feature to help guide the user in the direction of the next or current launch. It was fun yet challenging project as native development was familiar, but not at the same time.</p>\n        <div class=\"actions\">\n          <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.three212.spacecoastlaunches&hl=en\" class=\"btn\">Play store <i class=\"fab fa-android\"></i></a>\n        </div>\n      </div>\n    </app-article>\n  </div>\n\n\n  <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero--work {\n  background: linear-gradient(#FF1744 0%, #651FFF 80%), linear-gradient(to right, #FF1744 0%, #651FFF 100%), linear-gradient(#212121 0%, #263238 100%), url(" + escape(__webpack_require__("../../../../../src/assets/anthem.jpg")) + ");\n  background-blend-mode: screen, difference, hard-light, lighten;\n  background-position: center top, center top, center bottom, left bottom;\n  background-size: 100% 100%, 100% 100%, 100% 0%, 150vw auto;\n  background-repeat: no-repeat;\n  transition: all 1.5s cubic-bezier(0.55, 0, 0.1, 1); }\n  .hero--work .btn--white {\n    color: #212121; }\n    .hero--work .btn--white:hover {\n      color: white; }\n  .hero--work:hover {\n    background-position: -100vw 0%, 100vw 0%, center bottom,  right bottom;\n    background-size: 100% 0%, 100% 0, 100% 100%, 150vw auto;\n    background-repeat: no-repeat; }\n    .hero--work:hover p {\n      color: white; }\n  @media screen and (max-width: 600px) {\n    .hero--work {\n      margin: 0 5% 100px 5%;\n      height: 50vh;\n      min-height: 300px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 15px;\n      background-position: center top, center top, center bottom, left bottom;\n      background-size: 100% 100%, 100% 100%, 100% 0%, cover;\n      -webkit-animation-name: mobileBackgroundAnimation;\n              animation-name: mobileBackgroundAnimation;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-iteration-count: 1;\n              animation-iteration-count: 1;\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n      .hero--work:hover {\n        background-position: -100vw 0%, 100vw 0%, center bottom,  right bottom;\n        background-size: 100% 0%, 100% 0, 100% 100%, cover; }\n        .hero--work:hover p {\n          color: white; }\n        .hero--work:hover .btn {\n          background: #2979FF;\n          border: 2px solid #2979FF; }\n      .hero--work p, .hero--work .btn {\n        -webkit-animation-duration: 2s;\n                animation-duration: 2s;\n        -webkit-animation-iteration-count: 1;\n                animation-iteration-count: 1;\n        -webkit-animation-delay: 3s;\n                animation-delay: 3s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n      .hero--work p {\n        -webkit-animation-name: textAnimation;\n                animation-name: textAnimation; }\n      .hero--work .btn {\n        -webkit-animation-name: buttonAnimation;\n                animation-name: buttonAnimation; } }\n\n@-webkit-keyframes mobileBackgroundAnimation {\n  0% {\n    background-position: center top, center top, center bottom, left bottom;\n    background-size: 100% 100%, 100% 100%, 100% 0%,  cover; }\n  100% {\n    background-position: -100vw 0%, 100vw 0%, center bottom,  right bottom;\n    background-size: 100% 0%, 100% 0, 100% 100%,  cover; } }\n\n@keyframes mobileBackgroundAnimation {\n  0% {\n    background-position: center top, center top, center bottom, left bottom;\n    background-size: 100% 100%, 100% 100%, 100% 0%,  cover; }\n  100% {\n    background-position: -100vw 0%, 100vw 0%, center bottom,  right bottom;\n    background-size: 100% 0%, 100% 0, 100% 100%,  cover; } }\n\n@-webkit-keyframes buttonAnimation {\n  0% {\n    background: #212121;\n    border: 2px solid #212121; }\n  100% {\n    background: #2979FF;\n    border: 2px solid #2979FF; } }\n\n@keyframes buttonAnimation {\n  0% {\n    background: #212121;\n    border: 2px solid #212121; }\n  100% {\n    background: #2979FF;\n    border: 2px solid #2979FF; } }\n\n@-webkit-keyframes textAnimation {\n  0% {\n    color: #212121; }\n  100% {\n    color: white; } }\n\n@keyframes textAnimation {\n  0% {\n    color: #212121; }\n  100% {\n    color: white; } }\n\n.projects__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 50px auto;\n  height: 100%;\n  min-height: 100vh; }\n  .projects__item:nth-child(even) .projects__demo {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    .projects__item:nth-child(even) .projects__demo .cmy {\n      -webkit-animation-delay: 2.5s;\n              animation-delay: 2.5s; }\n  .projects__item:nth-child(even) .projects__content {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  @media screen and (max-width: 600px) {\n    .projects__item {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .projects__item:nth-child(even) .projects__demo {\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; }\n      .projects__item:nth-child(even) .projects__content {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2; } }\n\n.projects__demo, .projects__content {\n  width: 45%; }\n  @media screen and (max-width: 600px) {\n    .projects__demo, .projects__content {\n      width: 100%; } }\n\n.projects__demo {\n  position: relative;\n  overflow: hidden; }\n  .projects__demo .pixel2 {\n    width: 250px;\n    height: 500px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 2; }\n    .projects__demo .pixel2:hover + .cmy {\n      background-position: top center, top center, top center; }\n  .projects__demo .gif {\n    position: absolute;\n    top: 33px;\n    left: -2px;\n    right: 0;\n    z-index: 0;\n    margin: 0 auto; }\n    .projects__demo .gif img {\n      width: 220px;\n      height: auto;\n      margin: 0 auto; }\n  .projects__demo .cmy {\n    z-index: 0;\n    position: absolute;\n    top: 32px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-blend-mode: multiply;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/cyan.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/magenta.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/yellow.png")) + ");\n    background-repeat: no-repeat;\n    background-size: 228px 439px;\n    transition: .25s .5s;\n    width: 200%;\n    left: -50%;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-name: blend;\n            animation-name: blend;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate; }\n    @media screen and (max-width: 600px) {\n      .projects__demo .cmy {\n        width: 150%;\n        left: -25%; } }\n\n.projects__content h1 {\n  text-align: left; }\n\n.projects__content .btn {\n  margin: 15px 15px 15px 0; }\n\n@-webkit-keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n\n@keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pageTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasComponent; });
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
var IdeasComponent = (function () {
    function IdeasComponent() {
    }
    IdeasComponent.prototype.ngOnInit = function () {
    };
    IdeasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ideas',
            template: __webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.scss")],
            animations: [pageTransition],
            host: {
                '[@pageTransition]': ''
            },
        }),
        __metadata("design:paramtypes", [])
    ], IdeasComponent);
    return IdeasComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/anthem.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "anthem.1b9fc34cbf5f7b004b68.jpg";

/***/ })

});
//# sourceMappingURL=ideas.module.chunk.js.map