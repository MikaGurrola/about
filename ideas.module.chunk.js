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

module.exports = "\n\n<div class=\"page\">\n  \n\n  <div class=\"hero\">\n    <h1>Is it really work if you're having fun?</h1>\n    <p>I also like to build simpl UI shenanigans on CodePen.</p>\n    <a target=\"_blank\" href=\"https://codepen.io/MikaGurrola/\" class=\"btn\">\n      <i class=\"fab fa-codepen\"></i>\n    </a>\n  </div>\n\n  <article class=\"container\">\n    <p>The coolest thing about being a developer is being able to build a solution to a problem or filling a newfound need and sharing it with the world. Here are a couple of my personal projects as well as some past work for clients.</p>\n  </article>\n\n  <h1>Fun Projects</h1>\n\n  <article class=\"container\">\n    <h1>Picture Perfect Pallet</h1>\n    <p>This is a simple app that utilizes the Unsplash.com api to get recent/popular images and a Vibrant JS to get the dominant colors of an image to create a color palette. You can also upload your own image to create a palette. I really wanted to play with router animations and lazy load pages/components.</p>\n    <div class=\"actions\">\n      <a target=\"_blank\" href=\"https://mikagurrola.github.io/picture-perfect-palette/\" class=\"btn\">DEMO <i class=\"fab fa-chrome\"></i></a>\n      <a target=\"_blank\" href=\"https://github.com/MikaGurrola/picture-perfect-palette\" class=\"btn\">SOURCE <i class=\"fab fa-github\"></i></a>\n    </div>\n  </article>\n\n  <h1>Clients</h1>\n\n  <article class=\"container\">\n    <h1>Green Light Group Tours</h1>\n    <p>This was a fun design to bring to life. Using Underscores as a foundation for this custom theme I had to build the backend editor to be easy enough for the client to make changes and add content to their site on their own - Advanced Custom Fields really helped with that.</p>\n    <div class=\"actions\">\n      <a target=\"_blank\" href=\"https://greenlightgrouptours.com/\" class=\"btn\">LIVE <i class=\"fab fa-chrome\"></i></a>\n    </div>\n  </article>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/ideas/ideas/ideas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero {\n  background-color: #2979FF;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/anthem.jpg")) + "); }\n\n.page {\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 50px;\n  background: linear-gradient(to bottom, #2979FF 0%, #651FFF 100%); }\n", ""]);

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



/***/ })

});
//# sourceMappingURL=ideas.module.chunk.js.map