(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    "./src/app/_components/alert.component.ts":
    /*!************************************************!*\
      !*** ./src/app/_components/alert.component.ts ***!
      \************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcApp_componentsAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
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


      var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_models */
      "./src/app/_models/index.ts");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var alert_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.removeAlert(alert_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(router, alertService) {
          _classCallCheck(this, AlertComponent);

          this.router = router;
          this.alertService = alertService;
          this.id = 'default-alert';
          this.fade = true;
          this.alerts = [];
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // subscribe to new alert notifications
            this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
              // clear alerts when an empty alert is received
              if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) {
                  return x.keepAfterRouteChange;
                }); // remove 'keepAfterRouteChange' flag on the rest

                _this.alerts.forEach(function (x) {
                  return delete x.keepAfterRouteChange;
                });

                return;
              } // add alert to array


              _this.alerts.push(alert); // auto close alert if required


              if (alert.autoClose) {
                setTimeout(function () {
                  return _this.removeAlert(alert);
                }, 3000);
              }
            }); // clear alerts on location change

            this.routeSubscription = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.alertService.clear(_this.id);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to avoid memory leaks
            this.alertSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
          }
        }, {
          key: "removeAlert",
          value: function removeAlert(alert) {
            var _this2 = this;

            // check if already removed to prevent error on auto close
            if (!this.alerts.includes(alert)) return;

            if (this.fade) {
              // fade out alert
              this.alerts.find(function (x) {
                return x === alert;
              }).fade = true; // remove alert after faded out

              setTimeout(function () {
                _this2.alerts = _this2.alerts.filter(function (x) {
                  return x !== alert;
                });
              }, 250);
            } else {
              // remove alert
              this.alerts = this.alerts.filter(function (x) {
                return x !== alert;
              });
            }
          }
        }, {
          key: "cssClass",
          value: function cssClass(alert) {
            var _alertTypeClass;

            if (!alert) return;
            var classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
            var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
            classes.push(alertTypeClass[alert.type]);

            if (alert.fade) {
              classes.push('fade');
            }

            return classes.join(' ');
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"]],
        inputs: {
          id: "id",
          fade: "fade"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'alert',
            templateUrl: 'alert.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/_components/index.ts":
    /*!**************************************!*\
      !*** ./src/app/_components/index.ts ***!
      \**************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcApp_componentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert.component */
      "./src/app/_components/alert.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"];
      });
      /***/

    },

    /***/
    "./src/app/_helpers/auth.guard.ts":
    /*!****************************************!*\
      !*** ./src/app/_helpers/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, accountService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.accountService = accountService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var token = localStorage.getItem('authToken');

            if (token) {
              // authorised so return true
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/secret'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_helpers/error.interceptor.ts":
    /*!***********************************************!*\
      !*** ./src/app/_helpers/error.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(accountService) {
          _classCallCheck(this, ErrorInterceptor);

          this.accountService = accountService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this3.accountService.logout();
              }

              var error = err.error["error"]["message"] || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_helpers/index.ts":
    /*!***********************************!*\
      !*** ./src/app/_helpers/index.ts ***!
      \***********************************/

    /*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */

    /***/
    function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/_helpers/auth.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error.interceptor */
      "./src/app/_helpers/error.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
      });
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "./src/app/_helpers/jwt.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
      });
      /***/

    },

    /***/
    "./src/app/_helpers/jwt.interceptor.ts":
    /*!*********************************************!*\
      !*** ./src/app/_helpers/jwt.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/services/constants.service */
      "./src/app/common/services/constants.service.ts");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(accountService, constantService) {
          var _this4 = this;

          _classCallCheck(this, JwtInterceptor);

          this.accountService = accountService;
          this.constantService = constantService;
          this.constantService.appUrl.subscribe(function (url) {
            _this4.apiUrl = url;
            console.log('JwtInterceptor', _this4.apiUrl);
          });
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add auth header with jwt if user is logged in and request is to the api url
            // const user = this.accountService.userValue;
            var token = localStorage.getItem("authToken");
            var isApiUrl = request.url.startsWith(this.apiUrl);

            if (token && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }, {
            type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_models/alert.ts":
    /*!**********************************!*\
      !*** ./src/app/_models/alert.ts ***!
      \**********************************/

    /*! exports provided: Alert, AlertType */

    /***/
    function srcApp_modelsAlertTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return Alert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return AlertType;
      });

      var Alert = function Alert(init) {
        _classCallCheck(this, Alert);

        Object.assign(this, init);
      };

      var AlertType;

      (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
      })(AlertType || (AlertType = {}));
      /***/

    },

    /***/
    "./src/app/_models/config.ts":
    /*!***********************************!*\
      !*** ./src/app/_models/config.ts ***!
      \***********************************/

    /*! exports provided: Config */

    /***/
    function srcApp_modelsConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Config", function () {
        return Config;
      });

      var Config = function Config() {
        _classCallCheck(this, Config);
      };
      /***/

    },

    /***/
    "./src/app/_models/index.ts":
    /*!**********************************!*\
      !*** ./src/app/_models/index.ts ***!
      \**********************************/

    /*! exports provided: Alert, AlertType, User, Config */

    /***/
    function srcApp_modelsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert */
      "./src/app/_models/alert.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"];
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user */
      "./src/app/_models/user.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_1__["User"];
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */
      "./src/app/_models/config.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Config", function () {
        return _config__WEBPACK_IMPORTED_MODULE_2__["Config"];
      });
      /***/

    },

    /***/
    "./src/app/_models/user.ts":
    /*!*********************************!*\
      !*** ./src/app/_models/user.ts ***!
      \*********************************/

    /*! exports provided: User */

    /***/
    function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "./src/app/_services/account.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/_services/account.service.ts ***!
      \**********************************************/

    /*! exports provided: AccountService */

    /***/
    function srcApp_servicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.init */
      "./src/app/app.init.ts");
      /* harmony import */


      var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/services/constants.service */
      "./src/app/common/services/constants.service.ts");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(router, http, configService, constantService) {
          var _this5 = this;

          _classCallCheck(this, AccountService);

          this.router = router;
          this.http = http;
          this.constantService = constantService;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.user = this.userSubject.asObservable();
          this.constantService.appUrl.subscribe(function (url) {
            _this5.apiUrl = url;
            console.log('apiUrl', _this5.apiUrl);
          });
        }

        _createClass(AccountService, [{
          key: "updatedDataSelection",
          value: function updatedDataSelection(user) {
            this.userSubject.next(user);
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this6 = this;

            var data = {};
            data["user"] = user;
            return this.http.post("".concat(this.apiUrl, "/users/login"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userDetail) {
              // this.userSubject.next(userDetail["user"]);
              _this6.updatedDataSelection(userDetail["user"]);

              localStorage.setItem("authToken", userDetail["token"]);
            })); // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('user', JSON.stringify(user));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage and set current user to null
            localStorage.removeItem('authToken');
            this.userSubject.next(null);
            this.router.navigate(['/account/login']);
          }
        }, {
          key: "register",
          value: function register(user) {
            var data = {};
            data["user"] = user;
            return this.http.post("".concat(this.apiUrl, "/users/register"), data);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.apiUrl, "/users/get_all_users"));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.apiUrl, "/users/").concat(id, "/user_by_id"));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this7 = this;

            return this.http.get("".concat(this.apiUrl, "/users/get_user_profile")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userDetail) {
              // this.userSubject.next(userDetail["user"]);
              _this7.updatedDataSelection(userDetail["user"]);
            }));
          }
        }, {
          key: "update",
          value: function update(id, params) {
            var data = {};
            data["user"] = params;
            return this.http.put("".concat(this.apiUrl, "/users/").concat(id, "/update_user_by_id"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "update_image",
          value: function update_image(id, params) {
            return this.http.post("".concat(this.apiUrl, "/users/").concat(id, "/update_image_by_id"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http.get("".concat(this.apiUrl, "/users/").concat(id, "/delete_user")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
              // auto logout if the logged in user deleted their own record
              return x;
            }));
          }
        }, {
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_init__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_services_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]));
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _app_init__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]
          }, {
            type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/alert.service.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/alert.service.ts ***!
      \********************************************/

    /*! exports provided: AlertService */

    /***/
    function srcApp_servicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/_models */
      "./src/app/_models/index.ts");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.defaultId = 'default-alert';
        } // enable subscribing to alerts observable


        _createClass(AlertService, [{
          key: "onAlert",
          value: function onAlert() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
              return x && x.id === id;
            }));
          } // convenience methods

        }, {
          key: "success",
          value: function success(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success,
              message: message
            })));
          }
        }, {
          key: "error",
          value: function error(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error,
              message: message
            })));
          }
        }, {
          key: "info",
          value: function info(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info,
              message: message
            })));
          }
        }, {
          key: "warn",
          value: function warn(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning,
              message: message
            })));
          } // main alert method    

        }, {
          key: "alert",
          value: function alert(_alert) {
            _alert.id = _alert.id || this.defaultId;
            this.subject.next(_alert);
          } // clear alerts

        }, {
          key: "clear",
          value: function clear() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"]({
              id: id
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)();
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/_services/index.ts":
    /*!************************************!*\
      !*** ./src/app/_services/index.ts ***!
      \************************************/

    /*! exports provided: AccountService, AlertService */

    /***/
    function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account.service */
      "./src/app/_services/account.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"];
      });
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/_services/alert.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
      });
      /***/

    },

    /***/
    "./src/app/account/login.component.ts":
    /*!********************************************!*\
      !*** ./src/app/account/login.component.ts ***!
      \********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAccountLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_components/alert.component */
      "./src/app/_components/alert.component.ts");

      function LoginComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_13_div_2_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
        }
      }

      function LoginComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_18_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
        }
      }

      function LoginComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, accountService, alertService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.accountService = accountService;
          this.alertService = alertService;
          this.loading = false;
          this.submitted = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'secret/home';
          } // convenience getter for easy access to form fields

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            this.submitted = true; // reset alerts on submit

            this.alertService.clear(); // stop here if form is invalid

            if (this.form.invalid) {
              return;
            }

            this.loading = true;
            this.accountService.login(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              _this8.router.navigate([_this8.returnUrl]);
            }, function (error) {
              _this8.alertService.error(error);

              _this8.loading = false;
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        decls: 26,
        vars: 11,
        consts: [[1, "header"], [1, "header-title"], [1, "card", 2, "width", "25%", "margin", "0 auto", "float", "none"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "ng-pattern", "pattern", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../register", 1, "btn", "btn-link"], ["ng-pattern", "pattern", 1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_span_21_Template, 1, 0, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "alert");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: brown;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n  margin-bottom: 10vh;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvYWNjb3VudC9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRFBBO0VBUVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247IFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6d2hpdGU7IFxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG4uaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/account/register.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/account/register.component.ts ***!
      \***********************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAccountRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_components/alert.component */
      "./src/app/_components/alert.component.ts");

      function RegisterComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_13_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
        }
      }

      function RegisterComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_18_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_18_div_2_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
        }
      }

      function RegisterComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_23_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_23_div_1_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_23_div_2_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.minlength);
        }
      }

      function RegisterComponent_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, route, router, accountService, alertService) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.accountService = accountService;
          this.alertService = alertService;
          this.loading = false;
          this.submitted = false;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.submitted = true; // reset alerts on submit

            this.alertService.clear(); // stop here if form is invalid

            if (this.form.invalid) {
              return;
            }

            this.loading = true; // var data = {}
            // data["user"] = this.form.value

            this.accountService.register(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              _this9.alertService.success('Registration successful', {
                keepAfterRouteChange: true
              }); // this.router.navigate(['../login'], { relativeTo: this.route });


              _this9.router.navigate(['../home']);

              localStorage.setItem('authToken', data["token"]);
            }, function (error) {
              _this9.alertService.error(error);

              _this9.loading = false;
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["ng-component"]],
        decls: 31,
        vars: 15,
        consts: [[1, "header"], [1, "header-title"], [1, "card", 2, "width", "25%", "margin", "0 auto", "float", "none"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../secret", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 3, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_span_26_Template, 1, 0, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "alert");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.name.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: brown;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n  margin-bottom: 10vh;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRFBBO0VBUVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247IFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6d2hpdGU7IFxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG4uaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
          }];
        }, null);
      })();
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


      var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home */
      "./src/app/home/index.ts");
      /* harmony import */


      var _users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users/list.component */
      "./src/app/users/list.component.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./_helpers */
      "./src/app/_helpers/index.ts");
      /* harmony import */


      var _users_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users/add-edit.component */
      "./src/app/users/add-edit.component.ts");
      /* harmony import */


      var _account_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account/login.component */
      "./src/app/account/login.component.ts");
      /* harmony import */


      var _account_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account/register.component */
      "./src/app/account/register.component.ts");
      /* harmony import */


      var _users_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./users/layout.component */
      "./src/app/users/layout.component.ts");
      /* harmony import */


      var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pagenotfound/pagenotfound.component */
      "./src/app/pagenotfound/pagenotfound.component.ts"); // import { UsersModule } from './users/users.module';
      // const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
      // const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


      var routes = [{
        path: 'secret',
        component: _account_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'register',
        component: _account_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
      // { path: 'account', loadChildren: accountModule },
      {
        path: '',
        component: _users_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'secret/home',
          component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
          canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'secret/users',
          component: _users_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
          canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'secret/users/add',
          component: _users_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"],
          canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: 'secret/users/edit/:id',
          component: _users_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"],
          canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        }, {
          path: '',
          redirectTo: 'secret/home',
          pathMatch: 'full'
        }]
      }, // { path: 'users', component: ListComponent, children: [
      //     { path: 'add', component: AddEditComponent },
      //     { path: 'edit/:id', component: AddEditComponent }
      // ] },
      // otherwise redirect to home
      // { path: '', redirectTo: 'secret/home', pathMatch: 'full' },
      {
        path: '**',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"]
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


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _app_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.init */
      "./src/app/app.init.ts");
      /* harmony import */


      var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common/services/constants.service */
      "./src/app/common/services/constants.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(accountService, configService, constantService) {
          _classCallCheck(this, AppComponent);

          this.accountService = accountService;
          this.constantService = constantService;
          this.constantService.setUrl(configService.config["apiUrl"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//   this.accountService.getUser().pipe(first()).subscribe(x => {
            //   this.accountService.user.subscribe(x => {
            //     if (x) {
            //       this.loggedIn = true;
            //     }
            //     this.user = x
            //    });
            // })
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_init__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.less']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }, {
            type: _app_init__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
          }, {
            type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.init.ts":
    /*!*****************************!*\
      !*** ./src/app/app.init.ts ***!
      \*****************************/

    /*! exports provided: ConfigService */

    /***/
    function srcAppAppInitTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import {AppModule} from './app.module';


      var ConfigService = /*#__PURE__*/function () {
        function ConfigService(http) {
          _classCallCheck(this, ConfigService);

          this.http = http;
        }

        _createClass(ConfigService, [{
          key: "loadConfig",
          value: function loadConfig() {
            var _this10 = this;

            return this.http.get('./assets/config.json').toPromise().then(function (config) {
              _this10.config = config;
            });
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigService,
        factory: ConfigService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: configFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configFactory", function () {
        return configFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.init */
      "./src/app/app.init.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_helpers */
      "./src/app/_helpers/index.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./_components */
      "./src/app/_components/index.ts");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home */
      "./src/app/home/index.ts");
      /* harmony import */


      var _users_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./users/layout.component */
      "./src/app/users/layout.component.ts");
      /* harmony import */


      var _users_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./users/list.component */
      "./src/app/users/list.component.ts");
      /* harmony import */


      var _users_add_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./users/add-edit.component */
      "./src/app/users/add-edit.component.ts");
      /* harmony import */


      var _account_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./account/register.component */
      "./src/app/account/register.component.ts");
      /* harmony import */


      var _account_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./account/login.component */
      "./src/app/account/login.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./common/services/constants.service */
      "./src/app/common/services/constants.service.ts");
      /* harmony import */


      var _side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./side-nav-bar/side-nav-bar.component */
      "./src/app/side-nav-bar/side-nav-bar.component.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pagenotfound/pagenotfound.component */
      "./src/app/pagenotfound/pagenotfound.component.ts");

      var configFactory = function configFactory(configService) {
        return function () {
          return configService.loadConfig();
        };
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: configFactory,
          deps: [_app_init__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]],
          multi: true
        }, _common_services_constants_service__WEBPACK_IMPORTED_MODULE_18__["ConstantsService"] // provider used to create fake backend
        ],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _users_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _users_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], _users_add_edit_component__WEBPACK_IMPORTED_MODULE_12__["AddEditComponent"], _account_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _account_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["SideNavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_27__["PagenotfoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _users_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _users_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], _users_add_edit_component__WEBPACK_IMPORTED_MODULE_12__["AddEditComponent"], _account_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _account_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _side_nav_bar_side_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["SideNavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_27__["PagenotfoundComponent"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"],
              multi: true
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: configFactory,
              deps: [_app_init__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]],
              multi: true
            }, _common_services_constants_service__WEBPACK_IMPORTED_MODULE_18__["ConstantsService"] // provider used to create fake backend
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();

      ;
      /***/
    },

    /***/
    "./src/app/common/services/constants.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/common/services/constants.service.ts ***!
      \******************************************************/

    /*! exports provided: ConstantsService */

    /***/
    function srcAppCommonServicesConstantsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return ConstantsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ConstantsService = /*#__PURE__*/function () {
        function ConstantsService() {
          _classCallCheck(this, ConstantsService);

          this.baseAppUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.appUrl = this.baseAppUrl.asObservable();
        }

        _createClass(ConstantsService, [{
          key: "setUrl",
          value: function setUrl(value) {
            this.baseAppUrl.next(value);
          }
        }]);

        return ConstantsService;
      }();

      ConstantsService.ɵfac = function ConstantsService_Factory(t) {
        return new (t || ConstantsService)();
      };

      ConstantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConstantsService,
        factory: ConstantsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Softprodigy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(accountService, router) {
          _classCallCheck(this, HeaderComponent);

          this.accountService = accountService;
          this.router = router;
          this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.logged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            this.toggledState = !this.toggledState;
            this.toggleSideNav.emit(this.toggledState);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.logout();
            this.router.navigate(['/secret']);
            this.logged.emit(1);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          toggleSideNav: "toggleSideNav",
          logged: "logged"
        },
        decls: 14,
        vars: 1,
        consts: [[1, "header"], [1, "header-title"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "margin-left", "5px", "color", "white", "cursor", "pointer", 3, "click"], [2, "cursor", "pointer", "color", "white", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chain-broken"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_4_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: brown;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QUROQTtFQU9RLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjp3aGl0ZTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgIH1cbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.less']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          toggleSideNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          logged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(accountService) {
          var _this11 = this;

          _classCallCheck(this, HomeComponent);

          this.accountService = accountService;
          this.accountService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(function (x) {
            _this11.accountService.user.subscribe(function (x) {
              _this11.user = x;
            });
          });
        }

        _createClass(HomeComponent, [{
          key: "logout",
          value: function logout() {
            this.accountService.logout();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["basic-table"]],
        decls: 9,
        vars: 1,
        consts: [[1, "p-4"], [1, "container"], ["routerLink", "/secret/users"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You're logged");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Users List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi ", ctx.user == null ? null : ctx.user.name, "!");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'basic-table',
            templateUrl: 'home.component.html'
          }]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/index.ts":
    /*!*******************************!*\
      !*** ./src/app/home/index.ts ***!
      \*******************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/home/home.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /***/

    },

    /***/
    "./src/app/pagenotfound/pagenotfound.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
      \********************************************************/

    /*! exports provided: PagenotfoundComponent */

    /***/
    function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
        return PagenotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PagenotfoundComponent = /*#__PURE__*/function () {
        function PagenotfoundComponent() {
          _classCallCheck(this, PagenotfoundComponent);
        }

        _createClass(PagenotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PagenotfoundComponent;
      }();

      PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
        return new (t || PagenotfoundComponent)();
      };

      PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PagenotfoundComponent,
        selectors: [["app-pagenotfound"]],
        decls: 6,
        vars: 0,
        consts: [[1, "header"], [1, "header-title"], [1, "container"]],
        template: function PagenotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: brown;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n  margin-bottom: 5vh;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRFBBO0VBUVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247IFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjp3aGl0ZTsgXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgIH1cbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xufVxuLmhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagenotfound',
            templateUrl: './pagenotfound.component.html',
            styleUrls: ['./pagenotfound.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/side-nav-bar/side-nav-bar.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/side-nav-bar/side-nav-bar.component.ts ***!
      \********************************************************/

    /*! exports provided: SideNavBarComponent */

    /***/
    function srcAppSideNavBarSideNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavBarComponent", function () {
        return SideNavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SideNavBarComponent = /*#__PURE__*/function () {
        function SideNavBarComponent() {
          _classCallCheck(this, SideNavBarComponent);
        }

        _createClass(SideNavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SideNavBarComponent;
      }();

      SideNavBarComponent.ɵfac = function SideNavBarComponent_Factory(t) {
        return new (t || SideNavBarComponent)();
      };

      SideNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavBarComponent,
        selectors: [["app-side-nav-bar"]],
        decls: 0,
        vars: 0,
        template: function SideNavBarComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2LWJhci9zaWRlLW5hdi1iYXIuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-nav-bar',
            templateUrl: './side-nav-bar.component.html',
            styleUrls: ['./side-nav-bar.component.less']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/users/add-edit.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/users/add-edit.component.ts ***!
      \*********************************************/

    /*! exports provided: AddEditComponent */

    /***/
    function srcAppUsersAddEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditComponent", function () {
        return AddEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddEditComponent_h1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_h1_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_9_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.name.errors.required);
        }
      }

      function AddEditComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_14_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditComponent_div_14_div_2_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email);
        }
      }

      function AddEditComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Leave Blank for same password)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_21_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_21_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditComponent_div_21_div_2_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.minlength);
        }
      }

      function AddEditComponent_div_23_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r19.userRole);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r19.text, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function AddEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditComponent_div_23_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.mySelect = $event;
          })("change", function AddEditComponent_div_23_Template_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddEditComponent_div_23_option_4_Template, 2, 2, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.mySelect)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r6.mySelect);
        }
      }

      function AddEditComponent_div_24_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_div_24_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_div_24_div_3_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.f.file.errors.required);
        }
      }

      function AddEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddEditComponent_div_24_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.onFileChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddEditComponent_div_24_div_3_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.file.touched && ctx_r7.f.file.invalid);
        }
      }

      function AddEditComponent_label_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Saved Image: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_img_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.added_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AddEditComponent_label_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selected Image: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditComponent_img_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AddEditComponent_span_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 42);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddEditComponent = /*#__PURE__*/function () {
        function AddEditComponent(formBuilder, route, router, accountService, alertService) {
          _classCallCheck(this, AddEditComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.accountService = accountService;
          this.alertService = alertService;
          this.loading = false;
          this.submitted = false;
          this.mySelect = "0";
          this.roles = [{
            userRole: "0",
            text: 'Customer'
          }, {
            userRole: "1",
            text: 'Staff'
          }];
        }

        _createClass(AddEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.adminMode = false;
            this.id = this.route.snapshot.params['id'];

            if (this.id == "admin_id") {
              this.accountService.user.subscribe(function (x) {
                _this12.id = x.id;
                _this12.adminMode = true;
              });
            }

            this.isAddMode = !this.id; // this.isAddMode = !this.id;
            // password not required in edit mode

            var passwordValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)];

            if (this.isAddMode) {
              passwordValidators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }

            this.form = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', passwordValidators],
              role: [this.mySelect],
              file: '',
              fileSource: '',
              image: ""
            });

            if (!this.isAddMode) {
              this.accountService.getById(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (x) {
                x = x["user"];

                _this12.f.name.setValue(x.name);

                _this12.f.email.setValue(x.email);

                _this12.f.role.setValue(x.role);

                _this12.mySelect = x.role;
                _this12.added_image = x.image;
              });
            }
          } // convenience getter for easy access to form fields

        }, {
          key: "onChange",
          value: function onChange(value) {
            this.f.role.setValue(value);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true; // reset alerts on submit

            this.alertService.clear(); // stop here if form is invalid

            if (this.form.invalid) {
              return;
            }

            this.loading = true;

            if (this.isAddMode) {
              this.createUser();
            } else {
              this.updateUser();
            }
          }
        }, {
          key: "createUser",
          value: function createUser() {
            var _this13 = this;

            this.accountService.register(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              _this13.alertService.success('User added successfully', {
                keepAfterRouteChange: true
              });

              _this13.router.navigate(['.', {
                relativeTo: _this13.route
              }]);
            }, function (error) {
              _this13.alertService.error(error);

              _this13.loading = false;
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var _this14 = this;

            if (this.image != undefined) {
              var uploadData = new FormData();
              uploadData.append('image', this.image, this.image.name);
              this.accountService.update_image(this.id, uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                _this14.check_password_field(_this14.form.value);

                _this14.accountService.update(_this14.id, _this14.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this14.alertService.success('Update successful', {
                    keepAfterRouteChange: true
                  });

                  _this14.router.navigate(['..', {
                    relativeTo: _this14.route
                  }]);
                }, function (error) {
                  _this14.alertService.error(error);

                  _this14.loading = false;
                });
              }, function (error) {
                _this14.alertService.error(error);

                _this14.loading = false;
              });
            } else {
              this.check_password_field(this.form.value);
              this.accountService.update(this.id, this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                _this14.alertService.success('Update successful', {
                  keepAfterRouteChange: true
                });

                _this14.router.navigate(['..', {
                  relativeTo: _this14.route
                }]);
              }, function (error) {
                _this14.alertService.error(error);

                _this14.loading = false;
              });
            }
          }
        }, {
          key: "check_password_field",
          value: function check_password_field(values) {
            if (values["password"] == "") {
              delete values["password"];
            }
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this15 = this;

            var reader = new FileReader();

            if (event.target.files && event.target.files.length) {
              var _event$target$files = _slicedToArray(event.target.files, 1),
                  file = _event$target$files[0];

              reader.readAsDataURL(file);

              reader.onload = function () {
                _this15.imageSrc = reader.result;
                _this15.image = event.target.files[0];
              };
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return AddEditComponent;
      }();

      AddEditComponent.ɵfac = function AddEditComponent_Factory(t) {
        return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
      };

      AddEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddEditComponent,
        selectors: [["ng-component"]],
        decls: 38,
        vars: 24,
        consts: [[1, "container", "add-edit-box"], ["class", "add-edit-box-title", 4, "ngIf"], [1, "add-edit-box-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "ng-pattern", "pattern", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [4, "ngIf"], [1, "form-group", "col-sm-3"], ["class", "change_image", 4, "ngIf"], [1, "form-group", "row"], [1, "form-group", "col", "image_preview"], ["for", "savedImage", 4, "ngIf"], ["style", "height: 200px; width:300px; padding: 10px; background-color: brown;", "class", "image_style", 3, "src", 4, "ngIf"], ["for", "selectedImage", 4, "ngIf"], ["style", "height: 200px; width:300px", "class", "image_style", 3, "src", 4, "ngIf"], [1, "form-group"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/secret/users", 1, "btn", "btn-link"], [1, "add-edit-box-title"], [1, "invalid-feedback"], ["ng-pattern", "pattern", 1, "invalid-feedback"], ["for", "role"], ["name", "my-select", "id", "role", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "hidden", "formControlName", "role", 3, "value"], [3, "value"], [1, "change_image"], ["formControlName", "image", "id", "file", "type", "file", 1, "form-control", 3, "change"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], ["for", "savedImage"], [1, "image_style", 2, "height", "200px", "width", "300px", "padding", "10px", "background-color", "brown", 3, "src"], ["for", "selectedImage"], [1, "image_style", 2, "height", "200px", "width", "300px", 3, "src"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function AddEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditComponent_h1_1_Template, 2, 0, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditComponent_h1_2_Template, 2, 0, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddEditComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddEditComponent_div_9_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddEditComponent_div_14_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddEditComponent_div_20_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddEditComponent_div_21_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddEditComponent_div_23_Template, 6, 5, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddEditComponent_div_24_Template, 4, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddEditComponent_label_27_Template, 2, 0, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddEditComponent_img_28_Template, 1, 1, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddEditComponent_label_30_Template, 2, 0, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddEditComponent_img_31_Template, 1, 1, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddEditComponent_span_34_Template, 1, 0, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.submitted && ctx.f.name.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.adminMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.added_image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.added_image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".add-edit-box[_ngcontent-%COMP%] {\n  border: 1px solid;\n  margin-top: 10vh;\n  border-radius: 10px 10px 0 0;\n  padding: 0;\n}\n.add-edit-box[_ngcontent-%COMP%]   .add-edit-box-title[_ngcontent-%COMP%] {\n  background-color: brown;\n  border-radius: 10px 10px 0 0;\n  padding: 10px;\n  color: white;\n}\n.add-edit-box[_ngcontent-%COMP%]   .add-edit-box-form[_ngcontent-%COMP%] {\n  padding: 10px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvdXNlcnMvYWRkLWVkaXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3VzZXJzL2FkZC1lZGl0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQ0NKO0FETEE7RUFNUSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFUjtBRFhBO0VBWVEsc0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC1lZGl0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1lZGl0LWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLmFkZC1lZGl0LWJveC10aXRsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5hZGQtZWRpdC1ib3gtZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XG4gICAgfVxufSIsIi5hZGQtZWRpdC1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hZGQtZWRpdC1ib3ggLmFkZC1lZGl0LWJveC10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWRkLWVkaXQtYm94IC5hZGQtZWRpdC1ib3gtZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'add-edit.component.html',
            styleUrls: ['add-edit.component.less']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/users/layout.component.ts":
    /*!*******************************************!*\
      !*** ./src/app/users/layout.component.ts ***!
      \*******************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcAppUsersLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_components/alert.component */
      "./src/app/_components/alert.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var _c0 = function _c0(a0, a1) {
        return {
          "side-bar-collapsed": a0,
          "side-bar-opened": a1
        };
      };

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent() {
          _classCallCheck(this, LayoutComponent);
        }

        _createClass(LayoutComponent, [{
          key: "setToggle",
          value: function setToggle(value) {
            this.toggledValue = value;
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)();
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["ng-component"]],
        decls: 14,
        vars: 6,
        consts: [[3, "toggleSideNav"], [1, "drawer-container"], ["mode", "side", "opened", "", 3, "ngClass"], ["routerLink", "/", "routerLinkActive", "active", 1, "span-text", 3, "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["routerLink", "/secret/users", "routerLinkActive", "active", 1, "span-text"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o"], [1, "scroll"], [1, "footer"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideNav", function LayoutComponent_Template_app_header_toggleSideNav_1_listener($event) {
              return ctx.setToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.toggledValue, ctx.toggledValue));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        styles: [".drawer-container[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.side-bar-collapsed[_ngcontent-%COMP%] {\n  width: 100px;\n  background-color: #343a40;\n}\n.side-bar-collapsed[_ngcontent-%COMP%]   .span-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px 0;\n}\n.side-bar-opened[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #343a40;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.side-bar-opened[_ngcontent-%COMP%]   .span-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 30px;\n  justify-content: space-evenly;\n  margin: 20px 0;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: #a1a1a1;\n  padding: 11px;\n  display: flex;\n  justify-content: center;\n}\n.scroll[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcm9yLXVpL3NyYy9hcHAvdXNlcnMvbGF5b3V0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91c2Vycy9sYXlvdXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0FKO0FERkE7RUFJUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NSO0FER0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESkE7RUFPUSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNBUjtBRElBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xheW91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDkwdmg7XG59XG5cbi5zaWRlLWJhci1jb2xsYXBzZWQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAgIC5zcGFuLXRleHQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxufVxuXG4uc2lkZS1iYXItb3BlbmVkIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc3Bhbi10ZXh0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iLCIuZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogOTB2aDtcbn1cbi5zaWRlLWJhci1jb2xsYXBzZWQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG59XG4uc2lkZS1iYXItY29sbGFwc2VkIC5zcGFuLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc2lkZS1iYXItb3BlbmVkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGUtYmFyLW9wZW5lZCAuc3Bhbi10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTFhMTtcbiAgcGFkZGluZzogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'layout.component.html',
            styleUrls: ['layout.component.less']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/users/list.component.ts":
    /*!*****************************************!*\
      !*** ./src/app/users/list.component.ts ***!
      \*****************************************/

    /*! exports provided: ListComponent */

    /***/
    function srcAppUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/_services */
      "./src/app/_services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ListComponent_tbody_26_img_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ListComponent_tbody_26_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tbody_26_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
        }
      }

      function ListComponent_tbody_26_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tbody_26_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListComponent_tbody_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_tbody_26_img_11_Template, 1, 1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_tbody_26_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tbody_26_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var user_r1 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.deleteUser(user_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_tbody_26_span_18_Template, 1, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_tbody_26_span_19_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_tbody_26_tr_20_Template, 3, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.role_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.image)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "edit/", user_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r1.isDeleting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.isDeleting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r1.isDeleting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.users);
        }
      }

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(accountService) {
          _classCallCheck(this, ListComponent);

          this.accountService = accountService;
          this.users = null;
          this.loading = false;
          this.image = null;
          this.admin_id = null;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.accountService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
              return _this16.users = users["users"];
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var _this17 = this;

            var user = this.users.find(function (x) {
              return x.id === id;
            });
            user.isDeleting = true;
            this.accountService["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
              _this17.users = _this17.users.filter(function (x) {
                return x.id !== id;
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.logout();
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["ng-component"]],
        decls: 27,
        vars: 1,
        consts: [[1, "p-4"], [1, "container"], ["routerLink", "add", 1, "btn", "btn-sm", "btn-success", "create_user"], ["routerLink", "edit/admin_id", 1, "btn", "btn-sm", "btn-primary", "edit_profile"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["style", "height: 50px; width:50px", 3, "src", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "btn", "btn-sm", "btn-primary", "edit_user", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", "btn-delete-user", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [4, "ngIf"], [2, "height", "50px", "width", "50px", 3, "src"], [1, "spinner-border", "spinner-border-sm"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List of users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create user");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ListComponent_tbody_26_Template, 21, 11, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'list.component.html'
          }]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
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
        production: false,
        apiUrl: 'http://localhost:3000/api/v1'
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
      /*! /var/www/html/ror-ui/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map