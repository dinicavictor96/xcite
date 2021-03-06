(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-devices-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDevicesDevicesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar style=\" --background: #2C2C2C !important;\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section style=\"width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700\">Your Devices</h1>\n  </section>\n  <section>\n    <a href=\"/stop\">\n    <div >\n      <img src=\"/assets/images/device@2x.png\">\n    </div>\n    </a>\n  </section>\n\n  <section style=\"margin-top: 40px; width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700\">Recent Activity</h1>\n  </section>\n  <section>\n  <div>\n    <img src=\"/assets/images/time@2x.png\">\n    <img src=\"/assets/images/time@2x.png\">\n  </div>\n  </section>\n\n  <section style=\"margin-top: 40px; width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700\">Statistics</h1>\n  </section>\n  <section>\n  <div>\n    <img src=\"assets/images/status@2x.png\">\n  </div>\n  </section>\n\n  <section style=\"margin-top: 40px; width: 90%; margin: 0 auto;\">\n    <h1 style=\"margin-bottom: 20px; font-weight: 700;\">Community</h1>\n  </section>\n  <section>\n    <img src=\"/assets/images/blog-element@2x.png\">\n    <img src=\"/assets/images/blog-element@2x.png\">\n  </section>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/devices/devices-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/devices/devices-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DevicesPageRoutingModule */

    /***/
    function srcAppDevicesDevicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicesPageRoutingModule", function () {
        return DevicesPageRoutingModule;
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


      var _devices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./devices.page */
      "./src/app/devices/devices.page.ts");

      var routes = [{
        path: '',
        component: _devices_page__WEBPACK_IMPORTED_MODULE_3__["DevicesPage"]
      }];

      var DevicesPageRoutingModule = function DevicesPageRoutingModule() {
        _classCallCheck(this, DevicesPageRoutingModule);
      };

      DevicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DevicesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/devices/devices.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/devices/devices.module.ts ***!
      \*******************************************/

    /*! exports provided: DevicesPageModule */

    /***/
    function srcAppDevicesDevicesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicesPageModule", function () {
        return DevicesPageModule;
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


      var _devices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./devices-routing.module */
      "./src/app/devices/devices-routing.module.ts");
      /* harmony import */


      var _devices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./devices.page */
      "./src/app/devices/devices.page.ts");

      var DevicesPageModule = function DevicesPageModule() {
        _classCallCheck(this, DevicesPageModule);
      };

      DevicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _devices_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicesPageRoutingModule"]],
        declarations: [_devices_page__WEBPACK_IMPORTED_MODULE_6__["DevicesPage"]]
      })], DevicesPageModule);
      /***/
    },

    /***/
    "./src/app/devices/devices.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/devices/devices.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppDevicesDevicesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".x-cite-btn {\n  --background: #2C2C2C !important;\n  margin: 0 auto;\n  --padding-bottom: 15px;\n  --padding-top: 15px;\n  margin-bottom: 20px;\n  --border-radius: 38px;\n}\n\nion-content, ion-item {\n  --background: #24242A;\n  color: white;\n}\n\nh1, p {\n  color: white;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlcy9kZXZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGV2aWNlcy9kZXZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54LWNpdGUtYnRue1xuICAgIC0tYmFja2dyb3VuZDogIzJDMkMyQyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzhweDtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQsaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjQyNDJBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaDEscHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/devices/devices.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/devices/devices.page.ts ***!
      \*****************************************/

    /*! exports provided: DevicesPage */

    /***/
    function srcAppDevicesDevicesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicesPage", function () {
        return DevicesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DevicesPage = /*#__PURE__*/function () {
        function DevicesPage() {
          _classCallCheck(this, DevicesPage);
        }

        _createClass(DevicesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DevicesPage;
      }();

      DevicesPage.ctorParameters = function () {
        return [];
      };

      DevicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./devices.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./devices.page.scss */
        "./src/app/devices/devices.page.scss"))["default"]]
      })], DevicesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=devices-devices-module-es5.js.map