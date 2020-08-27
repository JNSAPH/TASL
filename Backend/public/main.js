(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: 'admin/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
let AppRoutingModule = /*@__PURE__*/ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let AppComponent = /*@__PURE__*/ (() => {
    class AppComponent {
        constructor(router) {
            this.router = router;
            this.title = 'TASL';
        }
        checkStatus() {
            return localStorage.getItem("loggedin");
        }
        logout() {
            localStorage.clear();
            this.router.navigateByUrl("admin/login");
        }
        clearLocalStorage(event) {
            localStorage.clear();
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.clearLocalStorage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            }
        }, decls: 8, vars: 1, consts: [[1, "title"], [1, "right"], ["shape", "round", "nbButton", "", 3, "click", 4, "ngIf"], ["shape", "round", "nbButton", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TASL App");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkStatus());
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  background: #5e71e4;\n  background: linear-gradient(90deg, #5e71e4 0%, #9c5de4 100%);\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.login[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  margin-left: 100px;\n}\n\n.right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw0REFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItbGF5b3V0LWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYig5NCwxMTMsMjI4KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5NCwxMTMsMjI4LDEpIDAlLCByZ2JhKDE1Niw5MywyMjgsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbn1cclxuXHJcbi5sb2dpbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"] });
    return AppComponent;
})();



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _urllist_urllist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./urllist/urllist.component */ "./src/app/urllist/urllist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _newshort_newshort_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newshort/newshort.component */ "./src/app/newshort/newshort.component.ts");
/* harmony import */ var _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info-card/info-card.component */ "./src/app/info-card/info-card.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");















let AppModule = /*@__PURE__*/ (() => {
    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"]
            ]] });
    return AppModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _urllist_urllist_component__WEBPACK_IMPORTED_MODULE_7__["URLListComponent"],
            _newshort_newshort_component__WEBPACK_IMPORTED_MODULE_9__["NewshortComponent"],
            _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_10__["InfoCardComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"]] });
})();



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info-card/info-card.component */ "./src/app/info-card/info-card.component.ts");
/* harmony import */ var _newshort_newshort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newshort/newshort.component */ "./src/app/newshort/newshort.component.ts");
/* harmony import */ var _urllist_urllist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../urllist/urllist.component */ "./src/app/urllist/urllist.component.ts");







let DashboardComponent = /*@__PURE__*/ (() => {
    class DashboardComponent {
        constructor(router, toastrService) {
            this.router = router;
            this.toastrService = toastrService;
        }
        ngOnInit() {
            {
                if (!localStorage.getItem('loggedin'))
                    this.router.navigateByUrl("admin/login");
                this.showToast("top-right", "info", "Login", "Successfully logged in!");
            }
        }
        showToast(position, status, head, description) {
            this.toastrService.show(description, head, { position, status });
        }
    }
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 0, consts: [["infocard", ""], [3, "newAdded"], ["addui", ""], [3, "removedEntry"], ["list", ""]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info-card", null, 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-newshort", 1, 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newAdded", function DashboardComponent_Template_app_newshort_newAdded_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); _r2.ngOnInit(); return _r0.ngOnInit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-urllist", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removedEntry", function DashboardComponent_Template_app_urllist_removedEntry_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.ngOnInit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_3__["InfoCardComponent"], _newshort_newshort_component__WEBPACK_IMPORTED_MODULE_4__["NewshortComponent"], _urllist_urllist_component__WEBPACK_IMPORTED_MODULE_5__["URLListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return DashboardComponent;
})();



/***/ }),

/***/ "./src/app/info-card/info-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-card/info-card.component.ts ***!
  \**************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




let InfoCardComponent = /*@__PURE__*/ (() => {
    class InfoCardComponent {
        constructor(http) {
            this.http = http;
            this.ROOT_URL = "http://localhost:3000/TASL";
        }
        ngOnInit() {
            this.http.get(this.ROOT_URL + '/getStats')
                .subscribe((data) => {
                this.response = data;
                console.log(data);
            });
        }
    }
    InfoCardComponent.ɵfac = function InfoCardComponent_Factory(t) { return new (t || InfoCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    InfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoCardComponent, selectors: [["app-info-card"]], decls: 16, vars: 2, consts: [[1, "row", 2, "text-align", "center"], [1, "col"], [1, "title"], [1, "description"]], template: function InfoCardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shortend URLs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Clicks on Links");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.response.totalUrls);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.response.totalClicks);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  color: #9F9F9F;\n  font-size: 19px;\n  font-weight: bold;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 22px;\n  font-weight: bold;\n  padding-left: 20px;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  margin-right: 2vw;\n  text-align: left;\n  border: none;\n  border-radius: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jYXJkL2luZm8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSxhQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUVJLGFBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgY29sb3I6ICM5RjlGOUY7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbm5iLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG4uY29sIHtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbn1cclxuLmNvbC1hdXRvIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxufSJdfQ== */"] });
    return InfoCardComponent;
})();



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");






let LoginComponent = /*@__PURE__*/ (() => {
    class LoginComponent {
        constructor(http, router) {
            this.http = http;
            this.router = router;
            this.ROOT_URL = "http://localhost:3000/TASL";
        }
        login(uname, pword) {
            localStorage.setItem('loggedin', 'true');
            this.http.post(this.ROOT_URL + '/login', {}, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'username': uname,
                    'password': pword
                }),
            })
                .subscribe((data) => {
                console.log(data);
                if (data.code == 200) {
                    this.accent = "success";
                    localStorage.setItem("loggedin", "true");
                    localStorage.setItem("jwt", data.token);
                    this.router.navigate(['/']);
                }
                else {
                    this.accent = "danger";
                    localStorage.clear();
                }
                this.error = data.message;
            });
        }
    }
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 2, consts: [[3, "accent"], [1, "title"], ["type", "text", "nbInput", "", "shape", "round", "fieldSize", "large", "placeholder", "Username", "required", ""], ["uname", ""], ["type", "password", "nbInput", "", "shape", "round", "fieldSize", "large", "placeholder", "Password", "required", ""], ["pword", ""], ["nbButton", "", "status", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.login(_r0.value, _r1.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "If this is the first that you login please change the Password & Username in the Config File!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("accent", ctx.accent);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["[_ngcontent-%COMP%]:root {\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 50vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5uYi1jYXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogNTB2dztcclxufSJdfQ== */"] });
    return LoginComponent;
})();



/***/ }),

/***/ "./src/app/newshort/newshort.component.ts":
/*!************************************************!*\
  !*** ./src/app/newshort/newshort.component.ts ***!
  \************************************************/
/*! exports provided: NewshortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewshortComponent", function() { return NewshortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");





let NewshortComponent = /*@__PURE__*/ (() => {
    class NewshortComponent {
        constructor(http, toastrService) {
            this.http = http;
            this.toastrService = toastrService;
            this.newAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.ROOT_URL = "http://localhost:3000/TASL";
        }
        makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        newShort(long, short) {
            this.http.post(this.ROOT_URL + '/createShort', long, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': localStorage.getItem('jwt'),
                    'long': long,
                    'short': !short ? this.makeid(5) : short
                })
            })
                .subscribe((data) => {
                this.newAdded.emit();
                if (data.code == 400) {
                    this.showToast('top-right', 'danger', 'Error!', 'Please supply a URL before clicking on Shorten');
                }
                else {
                    this.showToast('top-right', 'success', "Success!", 'New Short-URL Generated');
                }
            });
        }
        showToast(position, status, head, description) {
            this.toastrService.show(description, head, { position, status });
        }
    }
    NewshortComponent.ɵfac = function NewshortComponent_Factory(t) { return new (t || NewshortComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"])); };
    NewshortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewshortComponent, selectors: [["app-newshort"]], outputs: { newAdded: "newAdded" }, decls: 15, vars: 0, consts: [[2, "width", "100%"], [1, "title"], [1, "row", 2, "text-align", "center"], [1, "col"], ["type", "url", "nbInput", "", "shape", "round", "fullWidth", "true", "placeholder", "httos://google.com/"], ["long", ""], ["type", "text", "nbInput", "", "shape", "round", "placeholder", "URL Code"], ["short", ""], ["nbButton", "", "status", "primary", "shape", "round", 3, "click"]], template: function NewshortComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create new Short URL");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewshortComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.newShort(_r0.value, _r1.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shorten");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-right: 5vw;\n  border-radius: 10px;\n  border: none;\n  padding: 20px;\n  padding-top: 5px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2hvcnQvbmV3c2hvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUVJLGFBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBRUksYUFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFFSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL25ld3Nob3J0L25ld3Nob3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNvbCB7XHJcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1heC13aWR0aDogMTAwJVxyXG59XHJcbi5jb2wtYXV0byB7XHJcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlXHJcbn0iXX0= */"] });
    return NewshortComponent;
})();



/***/ }),

/***/ "./src/app/urllist/urllist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/urllist/urllist.component.ts ***!
  \**********************************************/
/*! exports provided: URLListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLListComponent", function() { return URLListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function URLListComponent_tbody_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function URLListComponent_tbody_17_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const resp_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteShort(resp_r1.short); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const resp_r1 = ctx.$implicit;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resp_r1.full);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.website_url + "/" + resp_r1.short, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resp_r1.short);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](resp_r1.clicks);
    }
}
let URLListComponent = /*@__PURE__*/ (() => {
    class URLListComponent {
        constructor(http) {
            this.http = http;
            this.removedEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.ROOT_URL = "http://localhost:3000/TASL";
            this.website_url = document.location.origin;
        }
        ngOnInit() {
            this.http.get(this.ROOT_URL + '/getShortDetails')
                .subscribe((data) => {
                this.response = data;
            });
        }
        // Currently a POST request
        deleteShort(short) {
            this.http.post(this.ROOT_URL + '/deleteShort', short, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'authorization': localStorage.getItem('jwt'),
                    'short': short
                })
            })
                .subscribe((data) => {
                this.ngOnInit();
                this.removedEntry.emit();
            });
        }
    }
    URLListComponent.ɵfac = function URLListComponent_Factory(t) { return new (t || URLListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    URLListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: URLListComponent, selectors: [["app-urllist"]], outputs: { removedEntry: "removedEntry" }, decls: 20, vars: 1, consts: [[1, "row"], [1, "col"], [1, "title"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], [2, "max-width", "200px", "overflow", "hidden"], ["full", ""], ["short", ""], [3, "href"], ["nbButton", "", "status", "danger", "shape", "round", 3, "click"]], template: function URLListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Shortend URLs");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full URL");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "URL Code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Clicks");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, URLListComponent_tbody_17_Template, 13, 4, "tbody", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.response);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n  margin-right: 5vw;\n  padding: 5px;\n  border-radius: 10px;\n  border: none;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXJsbGlzdC91cmxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFFSSxhQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUVJLGFBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvdXJsbGlzdC91cmxsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcbi5jb2wge1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxufSJdfQ== */"] });
    return URLListComponent;
})();



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Jonas\Documents\GitHub\TASL\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map