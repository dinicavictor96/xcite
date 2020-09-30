(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar style=\" --background: #2C2C2C !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section style=\"width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700\">Your Devices</h1>\n  \n  <div  style=\"background: linear-gradient( #626262, #2C2C2C); margin:0 auto; text-align: center; height: 150px; padding-top: 10%; padding-bottom: 5%; border-radius: 13px;\">\n    <a href=\"/devices\" style=\"text-decoration: none;\">\n      <img src=\"assets/images/plus.png\">\n      <p style=\"color:white\">Add a new device</p>\n    </a>\n  </div>\n  </section>\n\n  <section style=\"margin-top: 40px; width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700\">Recent Activity</h1>\n\n  <div style=\"background: linear-gradient( #626262, #2C2C2C); margin:0 auto; text-align: center; height: 150px; padding-top: 10%; padding-bottom: 5%; border-radius: 13px;\">\n    <p style=\"color:white; padding:10px\">You don’t have any activity yet.  \n      Let’s connect your device and get XCITED.</p>\n  </div>\n  </section>\n\n  <section style=\"margin-top: 40px; width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700;\">Community</h1>\n    <img src=\"/assets/images/blog-element@2x.png\">\n    <img src=\"/assets/images/blog-element@2x.png\">\n  </section>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/homepage/homepage-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/homepage/homepage-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: HomepagePageRoutingModule */

    /***/
    function srcAppHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
        return HomepagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage.page */
      "./src/app/homepage/homepage.page.ts");

      var routes = [{
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
      }];

      var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
        _classCallCheck(this, HomepagePageRoutingModule);
      };

      HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomepagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/homepage/homepage.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/homepage/homepage.module.ts ***!
      \*********************************************/

    /*! exports provided: HomepagePageModule */

    /***/
    function srcAppHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
        return HomepagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./homepage-routing.module */
      "./src/app/homepage/homepage-routing.module.ts");
      /* harmony import */


      var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./homepage.page */
      "./src/app/homepage/homepage.page.ts");

      var HomepagePageModule = function HomepagePageModule() {
        _classCallCheck(this, HomepagePageModule);
      };

      HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomepagePageRoutingModule"]],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
      })], HomepagePageModule);
      /***/
    },

    /***/
    "./src/app/homepage/homepage.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/homepage/homepage.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".x-cite-btn {\n  --background: #2C2C2C !important;\n  margin: 0 auto;\n  --padding-bottom: 15px;\n  --padding-top: 15px;\n  margin-bottom: 20px;\n  --border-radius: 38px;\n}\n\nion-content, ion-item {\n  --background: #24242A;\n  color: white;\n}\n\nh1, p {\n  color: white;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueC1jaXRlLWJ0bntcbiAgICAtLWJhY2tncm91bmQ6ICMyQzJDMkMgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDM4cHg7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50LGlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzI0MjQyQTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGgxLHB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBoMXtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/homepage/homepage.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/homepage/homepage.page.ts ***!
      \*******************************************/

    /*! exports provided: HomepagePage */

    /***/
    function srcAppHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
        return HomepagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomepagePage = /*#__PURE__*/function () {
        function HomepagePage() {
          _classCallCheck(this, HomepagePage);
        }

        _createClass(HomepagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepagePage;
      }();

      HomepagePage.ctorParameters = function () {
        return [];
      };

      HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./homepage.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./homepage.page.scss */
        "./src/app/homepage/homepage.page.scss"))["default"]]
      })], HomepagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=homepage-homepage-module-es5.js.map