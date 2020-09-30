(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["play-play-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar style=\" --background: #2C2C2C !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section style=\"width: 90%; margin: 0 auto; padding-top: 40px\">\n    <a href=\"/stop\">\n    <img src=\"/assets/images/stop@2x.png\">\n    </a>\n  </section>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/play/play-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/play/play-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PlayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageRoutingModule", function() { return PlayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play.page */ "./src/app/play/play.page.ts");




const routes = [
    {
        path: '',
        component: _play_page__WEBPACK_IMPORTED_MODULE_3__["PlayPage"]
    }
];
let PlayPageRoutingModule = class PlayPageRoutingModule {
};
PlayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayPageRoutingModule);



/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _play_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-routing.module */ "./src/app/play/play-routing.module.ts");
/* harmony import */ var _play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.page */ "./src/app/play/play.page.ts");







let PlayPageModule = class PlayPageModule {
};
PlayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _play_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayPageRoutingModule"]
        ],
        declarations: [_play_page__WEBPACK_IMPORTED_MODULE_6__["PlayPage"]]
    })
], PlayPageModule);



/***/ }),

/***/ "./src/app/play/play.page.scss":
/*!*************************************!*\
  !*** ./src/app/play/play.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".x-cite-btn {\n  --background: #2C2C2C !important;\n  margin: 0 auto;\n  --padding-bottom: 15px;\n  --padding-top: 15px;\n  margin-bottom: 20px;\n  --border-radius: 38px;\n}\n\nion-content, ion-item {\n  --background: #24242A;\n  color: white;\n}\n\nh1, p {\n  color: white;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54LWNpdGUtYnRue1xuICAgIC0tYmFja2dyb3VuZDogIzJDMkMyQyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzhweDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQsaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjQyNDJBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaDEscHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/play/play.page.ts":
/*!***********************************!*\
  !*** ./src/app/play/play.page.ts ***!
  \***********************************/
/*! exports provided: PlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPage", function() { return PlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PlayPage = class PlayPage {
    constructor() { }
    ngOnInit() {
    }
};
PlayPage.ctorParameters = () => [];
PlayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-play',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./play.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play/play.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./play.page.scss */ "./src/app/play/play.page.scss")).default]
    })
], PlayPage);



/***/ })

}]);
//# sourceMappingURL=play-play-module-es2015.js.map