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
                __WEBPACK_IMPORTED_MODULE_2__ideas_routing_module__["a" /* IdeasRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__ideas_ideas_component__["a" /* IdeasComponent */]]
        })
    ], IdeasModule);
    return IdeasModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"page\">\n  \n\n  <div class=\"hero\">\n    <!-- <h1>Is it really work if you're having fun?</h1> -->\n    <p>I also like to build simpl UI shenanigans on CodePen.</p>\n    <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn\">\n      <i class=\"fab fa-codepen\"></i>\n    </a>\n  </div>\n\n  <article class=\"container\">\n    <p>The coolest thing about being a developer is being able to build a solution to a problem or filling a newfound need and sharing it with the world. Here are a couple of my personal projects as well as some past work for clients.</p>\n  </article>\n\n  <h1>Fun Projects</h1>\n\n  <div class=\"container\">\n    <ul class=\"projects\">\n      <li class=\"projects__item\">\n        <div class=\"projects__demo\">\n          <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n          <div class=\"cmy\"></div>          \n        </div>\n        <article class=\"projects__content\">\n          <h1>Picture Perfect Palette</h1>\n          <p>This is a simple app that utilizes the Unsplash.com api to get recent/popular images and a Vibrant JS to get the dominant colors of an image to create a color palette. You can also upload your own image to create a palette. I really wanted to play with router animations and lazy load pages/components.</p>\n          <div class=\"actions\">\n            <a target=\"_blank\" href=\"https://mikagurrola.github.io/picture-perfect-palette/\" class=\"btn\">DEMO <i class=\"fab fa-chrome\"></i></a>\n            <a target=\"_blank\" href=\"https://github.com/MikaGurrola/picture-perfect-palette\" class=\"btn\">SOURCE <i class=\"fab fa-github\"></i></a>\n          </div>\n        </article>\n      </li>\n      <li class=\"projects__item\">\n        <div class=\"projects__demo\">\n          <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n          <div class=\"cmy\"></div>          \n        </div>\n        <article class=\"projects__content\">\n          <h1>Out Orlando</h1>\n          <p>My goal with this little project is to highlight hidden gems of the community and share with the gym bunnies, the queer families, the drag mothers, the shopaholics, the food connoisseurs, the volunteers and everyone in between. There's more to Orlando than just theme parks.</p>\n          <div class=\"actions\">\n            <a target=\"_blank\" href=\"https://outorlando-741d5.firebaseapp.com/home\" class=\"btn\">DEMO <i class=\"fab fa-chrome\"></i></a>\n            <!-- <a target=\"_blank\" href=\"#\" class=\"btn\">SOURCE <i class=\"fab fa-github\"></i></a> -->\n          </div>\n        </article>\n      </li>\n    </ul>\n  </div>\n\n  <h1>Clients</h1>\n\n  <div class=\"container\">\n    <ul class=\"projects\">\n      <li class=\"projects__item\">\n        <div class=\"projects__demo\">\n          <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n          <div class=\"gif\">\n            <img src=\"../../../assets/demos/greenlight.gif\" alt=\"greenlight demo\">\n          </div>          \n        </div>\n        <article class=\"projects__content\">\n          <h1>Green Light Group Tours</h1>\n          <p>This was a fun design to bring to life. Using Underscores as a foundation for this custom theme I had to build the backend editor to be easy enough for the client to make changes and add content to their site on their own - Advanced Custom Fields really helped with that.</p>\n          <div class=\"actions\">\n            <a target=\"_blank\" href=\"https://greenlightgrouptours.com/\" class=\"btn\">LIVE <i class=\"fab fa-chrome\"></i></a>\n          </div>\n        </article>\n      </li>\n      <li class=\"projects__item\">\n        <div class=\"projects__demo\">\n          <img class=\"pixel2\" src=\"../../../assets/demos/pixel2.png\" alt=\"project demo\">\n          <div class=\"gif\">\n            <img src=\"../../../assets/demos/launches.gif\" alt=\"launches demo\">\n          </div>         \n        </div>\n        <article class=\"projects__content\">\n          <h1>Space Coast Launches</h1>\n          <p>This was my first native app, built with Kotlin for android - I developed the compass & implimented the video streaming features. It was fun yet challenging as native development was familiar, but not at the same time. I </p>\n          <div class=\"actions\">\n            <a target=\"_blank\" href=\"#\" class=\"btn\">LIVE <i class=\"fab fa-android\"></i></a>\n          </div>\n        </article>\n      </li>\n    </ul>\n  </div>\n\n  <!-- <article class=\"container\">\n    <h1>Green Light Group Tours</h1>\n    <p>This was a fun design to bring to life. Using Underscores as a foundation for this custom theme I had to build the backend editor to be easy enough for the client to make changes and add content to their site on their own - Advanced Custom Fields really helped with that.</p>\n    <div class=\"actions\">\n      <a target=\"_blank\" href=\"https://greenlightgrouptours.com/\" class=\"btn\">LIVE <i class=\"fab fa-chrome\"></i></a>\n    </div>\n  </article>\n\n\n  <article class=\"container\">\n    <h1>Space Coast Launches</h1>\n    <p>This was my first native app, built with Kotlin for android - I developed the compass & implimented the video streaming features. It was fun yet challenging as native development was familiar, but not at the same time. I </p>\n    <div class=\"actions\">\n      <a target=\"_blank\" href=\"#\" class=\"btn\">LIVE <i class=\"fab fa-android\"></i></a>\n    </div>\n  </article> -->\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero {\n  background-color: #2979FF;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/anthem.jpg")) + "); }\n\n.page {\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 50px;\n  background: linear-gradient(to bottom, #2979FF 0%, #651FFF 100%); }\n\n.projects__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 50px auto; }\n  .projects__item:nth-child(even) .projects__demo {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n    .projects__item:nth-child(even) .projects__demo .cmy {\n      -webkit-animation-delay: 2.5s;\n              animation-delay: 2.5s; }\n  .projects__item:nth-child(even) .projects__content {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  @media screen and (max-width: 600px) {\n    .projects__item {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .projects__item:nth-child(even) .projects__demo {\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1; }\n      .projects__item:nth-child(even) .projects__content {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2; } }\n\n.projects__demo, .projects__content {\n  width: 45%; }\n  @media screen and (max-width: 600px) {\n    .projects__demo, .projects__content {\n      width: 100%; } }\n\n.projects__demo {\n  position: relative; }\n  .projects__demo .pixel2 {\n    width: 250px;\n    height: 500px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 2; }\n    .projects__demo .pixel2:hover + .cmy {\n      background-position: top center, top center, top center; }\n  .projects__demo .gif {\n    position: absolute;\n    top: 33px;\n    left: -2px;\n    right: 0;\n    z-index: 0;\n    margin: 0 auto; }\n    .projects__demo .gif img {\n      width: 246px;\n      height: auto;\n      margin: 0 auto; }\n  .projects__demo .cmy {\n    z-index: 0;\n    position: absolute;\n    top: 32px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-blend-mode: multiply;\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/cyan.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/magenta.png")) + "), url(" + escape(__webpack_require__("../../../../../src/assets/demos/outOrl/yellow.png")) + ");\n    background-repeat: no-repeat;\n    background-size: 228px 439px;\n    transition: .25s .5s;\n    width: 200%;\n    left: -50%;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-name: blend;\n            animation-name: blend;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate; }\n    @media screen and (max-width: 600px) {\n      .projects__demo .cmy {\n        width: 150%;\n        left: -25%; } }\n\n@-webkit-keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n\n@keyframes blend {\n  0% {\n    background-position: top left, top center, top right; }\n  20% {\n    background-position: top center, top center, top center; }\n  80% {\n    background-position: top center, top center, top center; }\n  100% {\n    background-position: top left, top center, top right; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasComponent; });
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

var IdeasComponent = (function () {
    function IdeasComponent() {
    }
    IdeasComponent.prototype.ngOnInit = function () {
    };
    IdeasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ideas',
            template: __webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/ideas/ideas/ideas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IdeasComponent);
    return IdeasComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/demos/outOrl/cyan.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cyan.54d958de0df61b55772e.png";

/***/ }),

/***/ "../../../../../src/assets/demos/outOrl/magenta.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "magenta.c958d5a485881e54567e.png";

/***/ }),

/***/ "../../../../../src/assets/demos/outOrl/yellow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "yellow.8c306f91eedfd8791231.png";

/***/ })

});
//# sourceMappingURL=ideas.module.chunk.js.map