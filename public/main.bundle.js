webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin-top: 50px\">Werkstroom Modeller</h2>\r\n<br>\r\nEasy Workflow model Designer\r\n<br>\r\nnpm version of the Werkstroom Modeller Design Canvas available <br>@ https://www.npmjs.com/package/werkstroom-modeller-library\r\n<br>\r\ninstall node package using npm i werkstroom-modeller-library\r\n<br>\r\n<br>\r\nDesigner : A.V.A.R. Madushan\r\n<br>\r\nHelp me improve:<br>\r\n\r\n<fa name=\"envelope-o\"></fa>rivindum.15@cse.mrt.ac.lk<br>\r\n<fa name=\"linkedin-square\"></fa>https://www.linkedin.com/in/rivindu-madushan/<br>\r\n<fa name=\"github\"></fa>https://github.com/RivinduM/werkstroom-modeller\r\n<br><br>\r\n-------------------------------------------------------------------------------\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\r\n  padding-top: 60px;\r\n  background:black;\r\n  color: #ececec;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<div class=\"content\" style=\"text-align:center\">\r\n  <div class=\"col-md-11\" style=\"margin: auto\">\r\n    <flash-messages></flash-messages>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Werkstroom Modeller';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_box_input_box_component__ = __webpack_require__("../../../../../src/app/input-box/input-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_circle_input_circle_component__ = __webpack_require__("../../../../../src/app/input-circle/input-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__line_line_component__ = __webpack_require__("../../../../../src/app/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_table_component_table_component__ = __webpack_require__("../../../../../src/app/component-table/component-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__canvas_canvas_component__["a" /* CanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_5__input_box_input_box_component__["a" /* InputBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__input_circle_input_circle_component__["a" /* InputCircleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__line_line_component__["a" /* LineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_table_component_table_component__["a" /* ComponentTableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__canvas_canvas_component__["a" /* CanvasComponent */] },
                    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_11__help_help_component__["a" /* HelpComponent */] },
                    { path: 'components', component: __WEBPACK_IMPORTED_MODULE_12__component_table_component_table_component__["a" /* ComponentTableComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] }
                ]),
                __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["HttpModule"]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__input_box_input_box_component__["a" /* InputBoxComponent */], __WEBPACK_IMPORTED_MODULE_6__input_circle_input_circle_component__["a" /* InputCircleComponent */], __WEBPACK_IMPORTED_MODULE_9__line_line_component__["a" /* LineComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__globals__["a" /* Globals */],
                __WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] /*, CanvasComponent*/],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardBack {\r\n  background-color: rgb(132, 147, 219);\r\n  border-color: rgba(115, 170, 193, 0.72);\r\n  margin-left: 10px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  margin-right: 10px;\r\n  margin-bottom: 10px;\r\n  min-width: 1000px;\r\n  min-height: 350px;\r\n}\r\n\r\n.toolBox-container {\r\n  width: 10%;\r\n  margin-left: 10px;\r\n  min-width: 75px;\r\n}\r\n\r\n.icon-bar {\r\n  margin-left: 25px;\r\n  width: 60%;\r\n  background-color: #555;\r\n  border: 2px solid black;\r\n}\r\n\r\n.icon-bar a {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 8px;\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n  color: white;\r\n  font-size: 36px;\r\n  border: 1px solid #010840;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .5), inset 0 -2px 0 rgba(0, 0, 0, .25), inset 0 -3px 0 rgba(255, 255, 255, .2), 0 1px 0 rgba(0, 0, 0, .1);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .5), inset 0 -2px 0 rgba(0, 0, 0, .25), inset 0 -3px 0 rgba(255, 255, 255, .2), 0 1px 0 rgba(0, 0, 0, .1);\r\n\r\n}\r\n\r\n.icon-bar a:hover {\r\n  background-color: #010840;\r\n  border: 1px black;\r\n}\r\n\r\n.primary {\r\n  margin: auto;\r\n  height: 72px;\r\n}\r\n\r\n.mouseOver {\r\n  cursor: copy;\r\n}\r\n\r\n.box {\r\n  text-align: center;\r\n  background: #cbc801;\r\n  margin: auto;\r\n  -webkit-box-shadow: 1px 1px 2px #535353;\r\n          box-shadow: 1px 1px 2px #535353;\r\n  border: 4px #8ec0a1;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.boxheader {\r\n  background: #1d1d1d;\r\n  color: #85b909;\r\n  font-weight: bold;\r\n  font-size: xx-small;\r\n}\r\n\r\n.boxbody {\r\n  color: #010840;\r\n  font-size: xx-small;\r\n  padding: 10px;\r\n}\r\n\r\n.circle {\r\n  border-radius: 100%;\r\n}\r\n\r\n.workspace {\r\n  background-color: #e4ffea;\r\n  position: relative;\r\n  overflow: auto;\r\n  height: 500px;\r\n  width: 1136px;\r\n}\r\n\r\n.bin {\r\n@extend % content;\r\n  left: 0px;\r\n  height: 4000px;\r\n  width: 10000px;\r\n  border: 1px solid #0000c1;\r\n  position: absolute;\r\n  background-color: #e4ffea;\r\n\r\n  background-image: linear-gradient(rgba(0, 0, 193, 0.34) 1px,\r\n  transparent 2px), linear-gradient(90deg, rgba(0, 0, 193, 0.34) 2px, transparent 1px),\r\n  linear-gradient(rgba(1, 8, 64, 0.3) 1px, transparent 1px),\r\n  linear-gradient(90deg, rgba(1, 8, 64, 0.3) 1px, transparent 1px);\r\n  background-size: 90px 90px, 90px 90px, 15px 15px, 15px 15px;\r\n  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Welcome to Werkstroom Modeller!\r\n</h1>\r\n<h5>Easy workflow model designer </h5>\r\n<br>\r\n\r\n<div class=\"card cardBack\" id='palette'>\r\n\r\n  <div class=\"row  col-md-12 col-sm-12\">\r\n\r\n    <div class=\"toolBox-container\">\r\n\r\n      <div class=\"icon-bar\">\r\n        <div style=\"font-size: small\">Components</div>\r\n\r\n        <a class=\"primary mouseOver\">\r\n          <div class=\"box\" draggable=\"true\" (dragstart)=\"drag($event)\" id=\"boxModal\">\r\n            <div class=\"boxheader\" id=\"toolboxBoxHeader\">Header</div>\r\n            <div class=\"boxbody\" id=\"toolboxBoxBody\">Body</div>\r\n          </div>\r\n        </a>\r\n\r\n        <a class=\"primary mouseOver\">\r\n          <div class=\"box circle\" draggable=\"true\" (dragstart)=\"drag($event)\" id=\"circleModal\">\r\n            <div class=\"boxheader\" id=\"toolboxCircleHeader\">Header</div>\r\n            <div class=\"boxbody\" id=\"toolboxCircleBody\">Body</div>\r\n          </div>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <div class=\"icon-bar\">\r\n        <div style=\"font-size: small\">Toolbox</div>\r\n\r\n        <a class=\"primary mouseOver\" style=\"cursor: pointer;\">\r\n          <div (click)=\"save()\">\r\n            <img\r\n              src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5IDQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OSA0OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggZD0iTTM5LjkxNCwwSDM3LjVoLTI4aC05djQ5aDdoMzNoOFY4LjU4NkwzOS45MTQsMHogTTM1LjUsMnYxNGgtMjRWMkgzNS41eiBNOS41LDQ3VjI4aDI5djE5SDkuNXogTTQ2LjUsNDdoLTZWMjZoLTMzdjIxaC01ICAgVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTMuNSwzM2g3YzAuNTUzLDAsMS0wLjQ0NywxLTFzLTAuNDQ3LTEtMS0xaC03Yy0wLjU1MywwLTEsMC40NDctMSwxUzEyLjk0NywzMywxMy41LDMzeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTIzLjUsMzVoLTEwYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDEwYzAuNTUzLDAsMS0wLjQ0NywxLTFTMjQuMDUzLDM1LDIzLjUsMzV6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3ICAgYzAuMjYsMCwwLjUyLTAuMTEsMC43MS0wLjI5YzAuMTgtMC4xOSwwLjI5LTAuNDUsMC4yOS0wLjcxcy0wLjExLTAuNTIxLTAuMjktMC43MUMyNi44NCwzNC45MiwyNi4xNiwzNC45MiwyNS43OSwzNS4yOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0zMy41LDRoLTZ2MTBoNlY0eiBNMzEuNSwxMmgtMlY2aDJWMTJ6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\"\r\n              style=\"width: 50px\r\n; height: 40px; padding: auto\"/>\r\n          </div>\r\n        </a>\r\n        <a class=\"primary mouseOver\" style=\"cursor: pointer;\">\r\n          <div (click)=\"newWorkspace()\">\r\n            <img\r\n              src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIzLjQyOSAyMy40MjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzLjQyOSAyMy40Mjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwb2x5Z29uIHBvaW50cz0iMTYuOTQ2LDAuNjQzIDUuMDE5LDAuNjQzIDAsNS4xMzIgMCwyMi43MjYgMTEuOTM1LDIyLjcyNiAxMS45MzUsMjEuMTQ2IDEuNzc3LDIxLjE0NiAgICAgMS43NzcsNi44NTIgNi45MjYsNi44NTIgNi45MjYsMi4yMjEgMTUuMTY5LDIuMjIxIDE1LjE2OSw3LjExMSAxNi45NDYsNy4xMTEgICAiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cG9seWdvbiBwb2ludHM9IjE0LjQzOCwxNC4zNzIgMTQuNDM4LDkuNDk1IDE4LjIyNCw5LjQ5NSAxOC4yMjQsMTQuMzcyIDIzLjQyOSwxNC4zNzIgMjMuNDI5LDE3LjkwOSAgICAgMTguMjI0LDE3LjkwOSAxOC4yMjQsMjIuNzg2IDE0LjQzOCwyMi43ODYgMTQuNDM4LDE3LjkwOSA5LjI0MiwxNy45MDkgOS4yNDIsMTQuMzcyICAgIiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\"\r\n              style=\"width: 50px\r\n; height: 40px; padding: auto\"/>\r\n          </div>\r\n        </a>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div id=\"workspace\" class=\"workspace\" (mousemove)=\"updateList()\">\r\n      <div class=\"bin\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" id=\"canvas\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_box_input_box_component__ = __webpack_require__("../../../../../src/app/input-box/input-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_circle_input_circle_component__ = __webpack_require__("../../../../../src/app/input-circle/input-circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__line_line_component__ = __webpack_require__("../../../../../src/app/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(componentFactoryResolver, appRef, injector, globals, authService, flashMessage, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.globals = globals;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.compList = this.globals.compList;
        this.connectors = this.globals.connectors;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById('workspace').scrollTo(0, 178);
        this.authService.getProfile().subscribe(function (profile) {
            _this.userId = profile.user._id;
        }, function (err) {
            return false;
        });
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        if (this.compList.length > 0) {
            var compNum = this.compList.length;
            for (var i = 0; i < compNum; i++) {
                this.enterToDom(this.compList[i]);
            }
        }
        if (this.connectors.length > 0) {
            var myTO_1 = setInterval(function () {
                var error = false;
                var conNum = this.connectors.length;
                for (var i = 0; i < conNum; i++) {
                    var conn = this.connectors[i];
                    try {
                        this.drawLine(conn.node1, conn.node2, false, conn.id);
                    }
                    catch (e) {
                        error = true;
                    }
                    finally {
                        if (!error) {
                            clearInterval(myTO_1);
                        }
                    }
                }
            }.bind(this), 100);
        }
    };
    CanvasComponent.prototype.enterToDom = function (comp) {
        var id = comp.id;
        switch (comp.type) {
            case 'Box': {
                var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__input_box_input_box_component__["a" /* InputBoxComponent */]).create(this.injector);
                componentRef.instance.cid = id;
                componentRef.instance.showcntrl = 'showControls' + id;
                componentRef.instance.cntrl = 'controls' + id;
                componentRef.instance.title = comp.title;
                componentRef.instance.body = comp.body;
                this.appRef.attachView(componentRef.hostView);
                var domElem = componentRef.hostView.rootNodes[0];
                this.insertComponent(domElem, comp.x, comp.y);
                break;
            }
            case 'Circle': {
                var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__input_circle_input_circle_component__["a" /* InputCircleComponent */]).create(this.injector);
                componentRef.instance.cid = id;
                componentRef.instance.showcntrl = 'showControls' + id;
                componentRef.instance.cntrl = 'controls' + id;
                componentRef.instance.title = comp.title;
                componentRef.instance.body = comp.body;
                this.appRef.attachView(componentRef.hostView);
                var domElem = componentRef.hostView.rootNodes[0];
                this.insertComponent(domElem, comp.x, comp.y);
                break;
            }
        }
    };
    /**
     * @desc insert components to the canvas
     * @param domElem - type of component to be inserted
     * @param x - x coordinate of position
     * @param y - y coordinate of position
     */
    CanvasComponent.prototype.insertComponent = function (domElem, x, y) {
        domElem.style.position = 'absolute';
        var scroll = this.getScroll();
        var workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
        var workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
        var xPos = x + scroll[0] - workspaceX - 41;
        var yPos = y + scroll[1] - workspaceY - 105;
        domElem.style.left = xPos + 'px';
        domElem.style.top = yPos + 'px';
        var canvas = document.getElementById('canvas');
        canvas.appendChild(domElem);
    };
    /**
     * @desc prevent default drops
     * @param ev - drop event
     */
    CanvasComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    /**
     * @desc setting data of drag event
     * @param ev
     */
    CanvasComponent.prototype.drag = function (ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    };
    /**
     * @desc sense drop of toolbox elements & call function to insert component
     * @param ev
     */
    CanvasComponent.prototype.drop = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData('text');
        var id = Object(__WEBPACK_IMPORTED_MODULE_6_uuid__["v4"])();
        switch (data) {
            case 'boxModal': {
                var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__input_box_input_box_component__["a" /* InputBoxComponent */]).create(this.injector);
                componentRef.instance.cid = id;
                componentRef.instance.showcntrl = 'showControls' + id;
                componentRef.instance.cntrl = 'controls' + id;
                this.appRef.attachView(componentRef.hostView);
                var domElem = componentRef.hostView.rootNodes[0];
                this.insertComponent(domElem, ev.screenX, ev.screenY);
                break;
            }
            case 'circleModal': {
                var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__input_circle_input_circle_component__["a" /* InputCircleComponent */]).create(this.injector);
                componentRef.instance.cid = id;
                componentRef.instance.showcntrl = 'showControls' + id;
                componentRef.instance.cntrl = 'controls' + id;
                this.appRef.attachView(componentRef.hostView);
                var domElem = componentRef.hostView.rootNodes[0];
                this.insertComponent(domElem, ev.screenX, ev.screenY);
                break;
            }
        }
    };
    /**
     * confirm delete of components and update list
     * @param element - element to be deleted
     */
    CanvasComponent.prototype.delete = function (element) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#1c0b6e',
            cancelButtonColor: '#3c3c3c',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                document.getElementById(element).remove();
                var component = _this.compList.find(function (i) { return i.id === element; });
                var index = _this.compList.indexOf(component);
                _this.compList.splice(index, 1);
            }
        });
    };
    /**
     * @desc update compoent array details
     */
    CanvasComponent.prototype.updateList = function () {
        this.globals.yScroll = (document.getElementById('workspace').scrollTop);
        this.globals.xScroll = (document.getElementById('workspace').scrollLeft);
        console.log(this.globals.xScroll, this.globals.yScroll);
        for (var _i = 0, _a = this.compList; _i < _a.length; _i++) {
            var comp = _a[_i];
            if (document.getElementById(comp.id)) {
                var component = document.getElementById(comp.id);
                if (comp.type === 'Circle') {
                    comp.x = component.getBoundingClientRect().left + this.globals.xScroll + 40;
                    comp.y = component.getBoundingClientRect().top + 65 + this.globals.yScroll - 179 + 40;
                }
                else {
                    comp.x = component.getBoundingClientRect().left + this.globals.xScroll;
                    comp.y = component.getBoundingClientRect().top + 65 + this.globals.yScroll - 179;
                }
                comp.height = component.getBoundingClientRect().height;
                comp.width = component.getBoundingClientRect().width;
                comp.z = component.style.zIndex;
            }
        }
    };
    /**
     * @desc get amount of scroll of the workspace and returns scroll amount [x,y]
     * @returns {number[]}
     */
    CanvasComponent.prototype.getScroll = function () {
        var elmnt = document.getElementById('workspace');
        var x = elmnt.scrollLeft;
        var y = elmnt.scrollTop;
        return [x, y];
    };
    /**
     * @desc drawing line & updating lists
     * @param prevNode
     * @param curNode
     * @param newConnection
     * @param id
     */
    CanvasComponent.prototype.drawLine = function (prevNode, curNode, newConnection, id) {
        var leftNode;
        var rightNode;
        var lineId = id;
        if (curNode !== prevNode) {
            // setting left and right nodes
            if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left) {
                leftNode = prevNode;
                rightNode = curNode;
            }
            else {
                leftNode = curNode;
                rightNode = prevNode;
            }
            // generating line
            var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_7__line_line_component__["a" /* LineComponent */]).create(this.injector);
            /*const lineId = componentRef.instance.cid;*/
            componentRef.instance.cid = lineId;
            this.appRef.attachView(componentRef.hostView);
            var domElem = componentRef.hostView.rootNodes[0];
            var leftNodeElm = this.compList.find(function (i) { return i.id === leftNode; });
            var rightNodeElm = this.compList.find(function (i) { return i.id === rightNode; });
            var lineLeftX = leftNodeElm.x + (leftNodeElm.width / 2);
            var lineLeftY = document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height / 2;
            var lineRightX = rightNodeElm.x + (rightNodeElm.width / 2);
            var lineRightY = document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height / 2;
            // calculating line length and angle
            var xDist = lineRightX - lineLeftX;
            var yDist = lineRightY - lineLeftY;
            var hypo_1 = Math.sqrt((Math.pow(xDist, 2) + Math.pow(yDist, 2)));
            var angleRad = Math.atan(yDist / xDist);
            var angleDeg_1 = angleRad * 180 / Math.PI;
            domElem.style.position = 'absolute';
            var adjustment = angleDeg_1 * 3;
            // setting line left position
            var scroll_1 = this.getScroll();
            var workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
            var workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
            domElem.style.left = lineLeftX + scroll_1[0] - workspaceX - Math.abs(adjustment) + 'px';
            domElem.style.top = lineLeftY + scroll_1[1] - workspaceY + adjustment + 'px';
            // adding to canvas, set width and transformation
            var canvas = document.getElementById('canvas');
            canvas.appendChild(domElem);
            setTimeout(function () {
                if (document.getElementById(lineId)) {
                    var newLine = document.getElementById(lineId);
                    newLine.style.width = hypo_1 + 'px';
                    newLine.style.transform = 'rotate(' + angleDeg_1 + 'deg)';
                }
            }, 10);
            // adding connector to components in the list
            var leftEle = this.compList.find(function (i) { return i.id === leftNode; });
            var rightEle = this.compList.find(function (i) { return i.id === rightNode; });
            if (newConnection) {
                leftEle.connectors.push(lineId);
                rightEle.connectors.push(lineId);
                leftEle.neighbors.push(rightNode);
                rightEle.neighbors.push(leftNode);
                var line = { id: lineId, node1: leftNode, node2: rightNode };
                this.connectors.push(line);
            }
        }
    };
    /**
     * save workflow
     * @returns {Promise<void>}
     */
    CanvasComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var workflowName, name_1, workflow_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authService.loggedIn()) return [3 /*break*/, 2];
                        workflowName = (this.globals.workflowName === undefined) ? 'untitled workflow' : this.globals.workflowName;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                title: 'Enter workflow name',
                                input: 'text',
                                inputPlaceholder: 'Enter workflow name',
                                inputValue: workflowName,
                                showCancelButton: true,
                                inputValidator: function (value) {
                                    return !value && 'Please enter a name to save workflow!';
                                }
                            })];
                    case 1:
                        name_1 = (_a.sent()).value;
                        if (name_1) {
                            this.globals.workflowName = name_1;
                            __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */].workflowName = name_1;
                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'Done' });
                        }
                        workflow_1 = {
                            name: this.globals.workflowName,
                            compArray: this.compList,
                            connArray: this.connectors,
                            user_id: this.userId,
                            savedDate: new Date().toISOString().split('T')[0]
                        };
                        this.authService.checkWorkflow(workflow_1.user_id, workflow_1.name).subscribe(function (data) {
                            console.log('check : ' + data.success);
                            if (data.success) {
                                _this.authService.saveWorkflow(workflow_1).subscribe(function (dat) {
                                    if (dat.success) {
                                        _this.flashMessage.show('Workflow saved', { cssClass: 'alert-success', timeout: 3000 });
                                    }
                                    else {
                                        _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                                    }
                                });
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                                    title: 'Workflow name ' + workflow_1.name + ' already exists',
                                    text: 'Please retry with a different name',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Retry'
                                }).then(function (result) {
                                    if (result.value) {
                                        _this.save();
                                    }
                                });
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.flashMessage.show('Login to save workflow', {
                            cssClass: 'alert-danger', timeout: 3000
                        });
                        this.router.navigate(['/login']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * load a blank workspace
     */
    CanvasComponent.prototype.newWorkspace = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'New blank workspace?',
            text: 'All unsaved changess will be lost!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then(function (result) {
            _this.globals.workflowName = '';
            _this.globals.connectors = [];
            _this.globals.compList = [];
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                title: 'Loading!',
                text: 'Please wait',
                timer: 1000,
                onOpen: function () {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.showLoading();
                }
            }).then(function (res) {
                if (
                // Read more about handling dismissals
                res.dismiss === __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.DismissReason.timer) {
                    _this.router.navigate(['/profile']).then(function (reslt) {
                        __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */].workflowName = 'untitled workflow';
                        _this.router.navigate(['/']);
                    });
                }
            });
        });
    };
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* Router */]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component-table/component-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".components {\r\n  background-color: #3c3c3c;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  padding: 50px;\r\n}\r\n\r\n.remove {\r\n  cursor: pointer;\r\n}\r\n\r\n.remove:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*table styles*/\r\n\r\n.componentsTable {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 90%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n}\r\n\r\n.componentsTable td, .componentsTable th {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n.componentsTable tr:nth-child(even) {\r\n  background-color: #2b374f;\r\n}\r\n\r\n.componentsTable tr:nth-child(odd) {\r\n  background-color: #556daf;\r\n}\r\n\r\n.componentsTable tr:hover {\r\n  background-color: #ddd;\r\n  color: #3c3c3c;\r\n}\r\n\r\n.componentsTable th {\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n  text-align: center;\r\n  background-color: #a8adb5;\r\n  color: black;\r\n}\r\n\r\n.componentPage {\r\n  background-color: #85b909;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component-table/component-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"componentPage\">\r\n  <h3 class=\"components\">\r\n    Components on the canvas\r\n  </h3>\r\n  <div *ngIf=\"compList.length > 0\">\r\n    <table class=\"componentsTable\">\r\n      <tr>\r\n        <th>Type</th>\r\n        <th>Title</th>\r\n        <th>Body</th>\r\n        <th>Id</th>\r\n        <th>Height</th>\r\n        <th>Width</th>\r\n        <th>X</th>\r\n        <th>Y</th>\r\n        <th>Z</th>\r\n        <th>Connections</th>\r\n        <th>Remove</th>\r\n\r\n      </tr>\r\n      <tr *ngFor=\"let item of compList\">\r\n        <td>{{item.type}}</td>\r\n        <td>{{item.title}}</td>\r\n        <td>{{item.body}}</td>\r\n        <td>{{item.id}}</td>\r\n        <td>{{item.height}}</td>\r\n        <td>{{item.width}}</td>\r\n        <td>{{item.x}}</td>\r\n        <td>{{item.y}}</td>\r\n        <td>{{item.z}}</td>\r\n        <td>\r\n    <span *ngFor=\"let neighbor of item.neighbors\">\r\n      {{neighbor}}<br></span>\r\n        </td>\r\n\r\n        <td (click)=\"delete(item.id)\" class=\"remove\">Remove</td>\r\n\r\n      </tr>\r\n\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"compList.length == 0\">\r\n    No components on the canvas\r\n  </div>\r\n\r\n  <h3 class=\"components\">Connectors</h3>\r\n  <div *ngIf=\"connectors.length > 0\">\r\n\r\n\r\n    <table class=\"componentsTable\">\r\n      <tr>\r\n        <th>Connector id</th>\r\n        <th>Node 1</th>\r\n        <th>Node 2</th>\r\n        <th>Remove</th>\r\n      </tr>\r\n      <tr *ngFor=\"let connector of connectors\">\r\n        <td>{{connector.id}}</td>\r\n        <td>{{connector.node1}}</td>\r\n        <td>{{connector.node2}}</td>\r\n        <td (click)=\"delete(connector.id)\" class=\"remove\">Remove</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"connectors.length == 0\">\r\n    No connectors on the canvas\r\n  </div>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component-table/component-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentTableComponent = /** @class */ (function () {
    function ComponentTableComponent(globals) {
        this.globals = globals;
        this.compList = this.globals.compList;
        this.connectors = this.globals.connectors;
    }
    ComponentTableComponent.prototype.ngOnInit = function () {
    };
    /**
     * confirm delete of components and update list
     * @param element - element to be deleted
     */
    ComponentTableComponent.prototype.delete = function (element) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: 'Are you sure?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#1c0b6e',
            cancelButtonColor: '#3c3c3c',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                var component = _this.compList.find(function (i) { return i.id === element; });
                var _loop_1 = function (neighbor) {
                    var neighborEle = _this.compList.find(function (i) { return i.id === neighbor; }).neighbors;
                    var nIndex = neighborEle.indexOf(element);
                    neighborEle.splice(nIndex, 1);
                };
                for (var _i = 0, _a = component.neighbors; _i < _a.length; _i++) {
                    var neighbor = _a[_i];
                    _loop_1(neighbor);
                }
                for (var _b = 0, _c = component.connectors; _b < _c.length; _b++) {
                    var line = _c[_b];
                    for (var i = 0; i < _this.connectors.length; i++) {
                        if (_this.connectors[i].id === line) {
                            _this.connectors.splice(i, 1);
                            break;
                        }
                    }
                }
                var index = _this.compList.indexOf(component);
                _this.compList.splice(index, 1);
            }
        });
    };
    ComponentTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component-table',
            template: __webpack_require__("../../../../../src/app/component-table/component-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component-table/component-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */]])
    ], ComponentTableComponent);
    return ComponentTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.compList = [];
        this.connectors = [];
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image{\r\n  height: 350px;\r\n  width:550px;\r\n}\r\n\r\n.helpHeader{\r\n  margin-top: 50px;\r\n}\r\n\r\n.helpHeader1{\r\n  margin-top: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"helpHeader1\">Inserting components</h4>\r\n<p>Select a modal from toolbox, drag and drop it on the canvas where you need to place it</p>\r\n<img class=\"image\" src=\"../../assets/selectBox.jpg\"/>\r\n<img class=\"image\" src=\"../../assets/component.png\"/>\r\n<br>\r\n\r\n<h4 class=\"helpHeader\">Customizing and moving components</h4><br>\r\n<img class=\"image\" src=\"../../assets/componentEdit1.png\"/>\r\n<img class=\"image\" src=\"../../assets/componentEdit2.png\"/>\r\n<br>\r\n\r\n<h4 class=\"helpHeader\">Joining two componets by line</h4>\r\n<p>Drag from link handle of the first component and drop it on the link handle of the other</p>\r\n<img class=\"image\" src=\"../../assets/LinkComp.png\"/>\r\n<br>\r\n\r\n<h4 class=\"helpHeader\">Save workflow</h4>\r\n<img class=\"image\" src=\"../../assets/save.png\">\r\n<br>\r\n\r\n<h4 class=\"helpHeader\">New blank workflow</h4>\r\n<img class=\"image\" src=\"../../assets/new.png\">\r\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
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

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/input-box/input-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n  background: #cbc801;\r\n  margin: 40px;\r\n  -webkit-box-shadow: 5px 5px 10px #535353;\r\n          box-shadow: 5px 5px 10px #535353;\r\n  border: 1px #8ec0a1;\r\n  border-radius: 4px;\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 200px;\r\n  overflow: hidden;\r\n  /* limit size with min/max-width/height*/\r\n  min-height: 180px;\r\n  min-width: 200px;\r\n  max-width: 500px;\r\n  max-height: 400px;\r\n  resize: both;\r\n  z-index: 1000;\r\n}\r\n\r\n.boxheader {\r\n  background: #1d1d1d;\r\n  color: #85b909;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n  min-height: 32px;\r\n}\r\n\r\n.boxbody {\r\n  color: #010840;\r\n  font-size: medium;\r\n  padding: 20px;\r\n}\r\n\r\n.mouseOver {\r\n  cursor: move;\r\n}\r\n\r\n.move {\r\n  float: left;\r\n}\r\n\r\n.line-link {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n\r\nspan.settings {\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\nspan.resize {\r\n  cursor: pointer;\r\n}\r\n\r\n.settings .tooltipText {\r\n  right: 0;\r\n  top: 35px;\r\n\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: #e3ffdf;\r\n  color: #3c3c3c;\r\n  text-align: center;\r\n  border-radius: 0;\r\n  padding: 5px 0;\r\n  font-size: xx-small;\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.settings:hover .tooltipText {\r\n  visibility: visible;\r\n}\r\n\r\n.controls {\r\n  display: none;\r\n  float: left;\r\n}\r\n\r\n.move .tooltipText {\r\n  left: 0;\r\n  top: 35px;\r\n\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: #e3ffdf;\r\n  color: #3c3c3c;\r\n  text-align: center;\r\n  border-radius: 0;\r\n  padding: 5px 0;\r\n  font-size: xx-small;\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.move:hover .tooltipText {\r\n  visibility: visible;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-box/input-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" id={{cid}} (click)=\"moveConnectors()\">\r\n  <div class=\"boxheader\" (mouseenter)=\"bringToFront()\" (mouseleave)=\"sendToBack()\" >{{title}}\r\n\r\n    <span class=\"move\">\r\n      <span class=\"tooltipText\">Move | Connect</span>\r\n      <fa name=\"arrows\" class=\"mouseOver\" draggable=\"true\" (dragstart)=\"setData($event)\" (dragend)=\"moveElement($event)\"\r\n          (drop)=\"connect($event)\" (dragover)=\"allowDrop($event)\"></fa>\r\n      <fa name=\"chain-broken\" class=\"line-link\" draggable=\"true\" (dragstart)=\"setData($event)\" (drop)=\"connect($event)\"\r\n          (dragover)=\"allowDrop($event)\"></fa>\r\n\r\n      </span>\r\n    <span class=\"settings\">\r\n\r\n  <span (click)=\"showControls()\" id={{showcntrl}}>\r\n        <span class=\"tooltipText\">Settings</span>\r\n        <fa name=\"cog\" animation=\"spin\"></fa>\r\n      </span>\r\n\r\n    <span class=\"controls\" id={{cntrl}}>\r\n      <fa name=\"pencil\" (click)=\"edit()\"></fa>\r\n      <fa name=\"hand-o-up\" (click)=\"sendToBack()\"></fa>\r\n      <fa name=\"hand-o-down\" (click)=\"bringToFront()\"></fa>\r\n      <fa name=\"trash\" (click)=\"delete()\"></fa>\r\n      <fa name=\"eye-slash\" (click)=\"hideControls()\"></fa>\r\n      <span class=\"tooltipText\">Edit | Send Back | Bring Forward | Delete | Hide</span>\r\n    </span>\r\n    </span>\r\n  </div>\r\n  <div class=\"boxbody\" (mouseenter)=\"bringToFront()\" (mouseleave)=\"sendToBack()\">\r\n    {{body}}\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/input-box/input-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_line_component__ = __webpack_require__("../../../../../src/app/line/line.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputBoxComponent = /** @class */ (function () {
    function InputBoxComponent(globals, componentFactoryResolver, appRef, injector) {
        this.globals = globals;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.title = '';
        this.body = '';
        this.compList = this.globals.compList;
        this.connectors = this.globals.connectors;
        this.dragStartX = null;
        this.dragStartY = null;
        var swal = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
    }
    /**
     * @desc set modal header and body text on initialization
     */
    InputBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var newElement = (!this.compList.find(function (i) { return i.id === _this.cid; }));
        if (newElement) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2'],
                allowOutsideClick: false
            });
            var steps = [
                {
                    title: 'Modal Header',
                    text: 'Enter title of the box'
                },
                'Modal Body'
            ];
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
                if (result.value) {
                    _this.title = result.value[0];
                    _this.body = result.value[1];
                    _this.addToList();
                }
            });
        }
    };
    /**
     * @desc add component to component list
     */
    InputBoxComponent.prototype.addToList = function () {
        var comp = {
            id: this.cid, type: 'Box', x: 250, y: 60, title: this.title,
            body: this.body, height: 200, width: 250, z: 1000, connectors: [], neighbors: []
        };
        this.compList.push(comp);
    };
    /**
     * @desc move component
     * @param ev
     */
    InputBoxComponent.prototype.moveElement = function (ev) {
        var _this = this;
        ev.preventDefault();
        var element = document.getElementById(this.cid);
        element.style.position = 'absolute';
        if (isNaN(parseInt((element.style.left), 10))) {
            this.currentX = 0;
        }
        else {
            this.currentX = parseInt((element.style.left), 10);
        }
        if (isNaN(parseInt((element.style.top), 10))) {
            this.currentY = 0;
        }
        else {
            this.currentY = parseInt((element.style.top), 10);
        }
        var deltaX = this.currentX + Number(ev.screenX) - this.dragStartX;
        var deltaY = this.currentY + Number(ev.screenY) - this.dragStartY;
        this.dragStartX = null;
        this.dragStartY = null;
        element.style.left = deltaX + 'px';
        element.style.top = deltaY + 'px';
        var component = this.compList.find(function (i) { return i.id === _this.cid; });
        component.x = document.getElementById(this.cid).getBoundingClientRect().left;
        component.y = document.getElementById(this.cid).getBoundingClientRect().top;
        setTimeout(this.moveConnectors(), 10);
    };
    /**
     * @desc set data in drag event
     * @param ev
     */
    InputBoxComponent.prototype.setData = function (ev) {
        ev.dataTransfer.setData('text', this.cid);
        this.dragStartX = ev.screenX;
        this.dragStartY = ev.screenY;
    };
    /**
     * @desc increase z index of component
     */
    InputBoxComponent.prototype.bringToFront = function () {
        var currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
        var zIndent = Number(currentZ) + 1;
        document.getElementById(this.cid).style.zIndex = zIndent + '';
    };
    /**
     * @desc decrease z index of component
     */
    InputBoxComponent.prototype.sendToBack = function () {
        var currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
        var zIndent = Number(currentZ) - 1;
        document.getElementById(this.cid).style.zIndex = zIndent + '';
    };
    /**
     *@desc show control icons
     */
    InputBoxComponent.prototype.showControls = function () {
        document.getElementById(this.cntrl).style.display = 'block';
        document.getElementById(this.showcntrl).style.display = 'none';
    };
    /**
     * @desc hide control icons
     */
    InputBoxComponent.prototype.hideControls = function () {
        document.getElementById(this.cntrl).style.display = 'none';
        document.getElementById(this.showcntrl).style.display = 'block';
    };
    /**
     * @desc confirm & delete component
     */
    InputBoxComponent.prototype.delete = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#1c0b6e',
            cancelButtonColor: '#3c3c3c',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                document.getElementById(_this.cid).remove();
                var component = _this.compList.find(function (i) { return i.id === _this.cid; });
                var _loop_1 = function (neighbor) {
                    var neighborEle = _this.compList.find(function (i) { return i.id === neighbor; }).neighbors;
                    var nIndex = neighborEle.indexOf(_this.cid);
                    neighborEle.splice(nIndex, 1);
                };
                for (var _i = 0, _a = component.neighbors; _i < _a.length; _i++) {
                    var neighbor = _a[_i];
                    _loop_1(neighbor);
                }
                for (var _b = 0, _c = component.connectors; _b < _c.length; _b++) {
                    var line = _c[_b];
                    console.log('line *** ' + line);
                    var _loop_2 = function (i) {
                        if (_this.connectors[i].id === line) {
                            var node1_1 = (_this.connectors[i].node1 === _this.cid) ? _this.connectors[i].node2 : _this.connectors[i].node1;
                            var n1Connectors = _this.compList.find(function (j) { return j.id === node1_1; }).connectors;
                            var n1LineIndex = n1Connectors.indexOf(line);
                            if (n1LineIndex !== -1) {
                                n1Connectors.splice(n1LineIndex, 1);
                            }
                            _this.connectors.splice(i, 1);
                            document.getElementById(line).remove();
                            i--;
                            return out_i_1 = i, "break";
                        }
                        out_i_1 = i;
                    };
                    var out_i_1;
                    for (var i = 0; i < _this.connectors.length; i++) {
                        var state_1 = _loop_2(i);
                        i = out_i_1;
                        if (state_1 === "break")
                            break;
                    }
                }
                var index = _this.compList.indexOf(component);
                _this.compList.splice(index, 1);
            }
        });
    };
    /**
     * @desc edit modal header and body text
     */
    InputBoxComponent.prototype.edit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2'],
            allowOutsideClick: false
        });
        var steps = [
            {
                title: 'Modal Header',
                text: 'Enter title of the box',
                inputValue: this.title
            },
            {
                title: 'Modal Body',
                inputValue: this.body
            }
        ];
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
            if (result.value) {
                _this.title = result.value[0];
                _this.body = result.value[1];
                var component = _this.compList.find(function (i) { return i.id === _this.cid; });
                component.title = _this.title;
                component.body = _this.body;
            }
        });
    };
    /**
     * @desc allow drop of elements
     * @param ev
     */
    InputBoxComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    /**
     * @desc connect 2 components by line
     * @param ev
     */
    InputBoxComponent.prototype.connect = function (ev) {
        ev.preventDefault();
        var prevNode = ev.dataTransfer.getData('text');
        var curNode = this.cid;
        var id = Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])();
        this.drawLine(prevNode, curNode, true, id);
    };
    /**
     * @desc drawing line & updating lists
     * @param ev
     */
    InputBoxComponent.prototype.drawLine = function (prevNode, curNode, newConnection, id) {
        var leftNode;
        var rightNode;
        var lineId = id;
        if (curNode !== prevNode) {
            // setting left and right nodes
            if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left) {
                leftNode = prevNode;
                rightNode = curNode;
            }
            else {
                leftNode = curNode;
                rightNode = prevNode;
            }
            // generating line
            var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__line_line_component__["a" /* LineComponent */]).create(this.injector);
            componentRef.instance.cid = lineId;
            this.appRef.attachView(componentRef.hostView);
            var domElem = componentRef.hostView.rootNodes[0];
            var leftNodeElm = this.compList.find(function (i) { return i.id === leftNode; });
            var rightNodeElm = this.compList.find(function (i) { return i.id === rightNode; });
            var lineLeftX = leftNodeElm.x + (leftNodeElm.width / 2);
            var lineLeftY = document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height / 2;
            var lineRightX = rightNodeElm.x + (rightNodeElm.width / 2);
            var lineRightY = document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height / 2;
            // calculating line length and angle
            var xDist = lineRightX - lineLeftX;
            var yDist = lineRightY - lineLeftY;
            var hypo_1 = Math.sqrt((Math.pow(xDist, 2) + Math.pow(yDist, 2)));
            var angleRad = Math.atan(yDist / xDist);
            var angleDeg_1 = angleRad * 180 / Math.PI;
            domElem.style.position = 'absolute';
            var adjustment = angleDeg_1 * 3;
            // setting line left position
            var scroll_1 = this.getScroll();
            var workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
            var workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
            if ((leftNodeElm.x - rightNodeElm.x) < 100) {
                domElem.style.left = lineLeftX + scroll_1[0] - workspaceX - Math.abs(adjustment) + 50 + 'px';
            }
            else {
                domElem.style.left = lineLeftX + scroll_1[0] - workspaceX - Math.abs(adjustment) + 'px';
            }
            if (Math.abs(leftNodeElm.y - rightNodeElm.y) < 300) {
                domElem.style.top = lineLeftY + scroll_1[1] - workspaceY + adjustment - 30 + 'px';
            }
            else {
                domElem.style.top = lineLeftY + scroll_1[1] - workspaceY + adjustment + 'px';
            }
            // adding to canvas, set width and transformation
            var canvas = document.getElementById('canvas');
            canvas.appendChild(domElem);
            setTimeout(function () {
                if (document.getElementById(lineId)) {
                    var newLine = document.getElementById(lineId);
                    newLine.style.width = hypo_1 + 'px';
                    newLine.style.transform = 'rotate(' + angleDeg_1 + 'deg)';
                }
            }, 10);
            // adding connector to components in the list
            var leftEle = this.compList.find(function (i) { return i.id === leftNode; });
            var rightEle = this.compList.find(function (i) { return i.id === rightNode; });
            if (newConnection) {
                leftEle.connectors.push(lineId);
                rightEle.connectors.push(lineId);
                leftEle.neighbors.push(rightNode);
                rightEle.neighbors.push(leftNode);
                var line = { id: lineId, node1: leftNode, node2: rightNode };
                this.connectors.push(line);
            }
        }
    };
    /**
     * @desc move connected lines
     */
    InputBoxComponent.prototype.moveConnectors = function () {
        var _this = this;
        var lines = this.compList.find(function (i) { return i.id === _this.cid; }).connectors;
        var num = lines.length;
        var _loop_3 = function (i) {
            var line = lines[i];
            document.getElementById(line).remove();
            var connection = this_1.connectors.find(function (i) { return i.id === line; });
            var node = (connection.node1 === this_1.cid) ? connection.node2 : connection.node1;
            this_1.drawLine(this_1.cid, node, false, line);
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_3(i);
        }
    };
    /**
     * @desc get amount of scroll of the workspace and returns scroll amount [x,y]
     * @returns {number[]}
     */
    InputBoxComponent.prototype.getScroll = function () {
        var elmnt = document.getElementById('workspace');
        var x = elmnt.scrollLeft;
        var y = elmnt.scrollTop;
        var coordinates = [x, y];
        return coordinates;
    };
    InputBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-box',
            template: __webpack_require__("../../../../../src/app/input-box/input-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/input-box/input-box.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], InputBoxComponent);
    return InputBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/input-circle/input-circle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mouseOver {\r\n  cursor: move;\r\n}\r\n\r\n.move {\r\n  float: left;\r\n}\r\n\r\n.line-link {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n}\r\n\r\n.circle {\r\n  background: #cbc801;\r\n\r\n  -webkit-box-shadow: 5px 5px 10px #535353;\r\n\r\n          box-shadow: 5px 5px 10px #535353;\r\n  border: 1px #8ec0a1;\r\n  border-radius: 100%;\r\n  position: relative;\r\n  width: 250px;\r\n  height: 200px;\r\n  overflow: hidden;\r\n  /* limit size with min/max-width/height*/\r\n  min-height: 50px;\r\n  min-width: 100px;\r\n  max-width: 500px;\r\n  max-height: 400px;\r\n  resize: both;\r\n  z-index: 1000;\r\n\r\n}\r\n\r\n.circleHeader {\r\n  background: #1d1d1d;\r\n  color: #85b909;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n  min-height: 32px;\r\n}\r\n\r\n.circleBody {\r\n  color: #010840;\r\n  font-size: medium;\r\n  padding: 20px;\r\n}\r\n\r\nspan.settings {\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\nspan.resize {\r\n  cursor: pointer;\r\n}\r\n\r\n.settings .tooltipText {\r\n  right: 10px;\r\n  top: 30px;\r\n\r\n  visibility: hidden;\r\n  width: 90px;\r\n  background-color: #3d443b;\r\n  color: #fefefe;\r\n  text-align: center;\r\n  border-radius: 0px;\r\n  padding: 5px 0;\r\n  font-size: xx-small;\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n.settings:hover .tooltipText {\r\n  visibility: visible;\r\n}\r\n\r\n.controls {\r\n  display: none;\r\n  float: left;\r\n}\r\n\r\n.move .tooltipText {\r\n  left: 0px;\r\n  top: 30px;\r\n\r\n  visibility: hidden;\r\n  width: 50px;\r\n  background-color: #3d443b;\r\n  color: #fefefe;\r\n  text-align: center;\r\n  border-radius: 0px;\r\n  padding: 5px 0;\r\n  font-size: xx-small;\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n.move:hover .tooltipText {\r\n  visibility: visible;\r\n}\r\n\r\n.circle-control {\r\n  z-index: 1000;\r\n  color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-circle/input-circle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"circle-control\" id={{cid}} (click)=\"moveConnectors()\">\r\n  <span class=\"move\">\r\n      <span class=\"tooltipText\">Move | Connect</span>\r\n        <fa name=\"arrows\" class=\"mouseOver\" draggable=\"true\" (dragstart)=\"setData($event)\"\r\n            (dragend)=\"moveElement($event)\" (drop)=\"connect($event)\" (dragover)=\"allowDrop($event)\"></fa>\r\n\r\n      <fa name=\"chain-broken\" class=\"line-link\" draggable=\"true\" (dragstart)=\"setData($event)\" (drop)=\"connect($event)\"\r\n          (dragover)=\"allowDrop($event)\"></fa>\r\n  </span>\r\n  <span class=\"settings\">\r\n\r\n  <span (click)=\"showControls()\" id={{showcntrl}}>\r\n    <span class=\"tooltipText\">Settings</span>\r\n  <fa name=\"cog\" animation=\"spin\"></fa>\r\n    </span>\r\n    <span class=\"controls\" id={{cntrl}}>\r\n      <fa name=\"pencil\" (click)=\"edit()\"></fa>\r\n      <fa name=\"hand-o-up\" (click)=\"sendToBack()\"></fa>\r\n      <fa name=\"hand-o-down\" (click)=\"bringToFront()\"></fa>\r\n      <fa name=\"trash\" (click)=\"delete()\"></fa>\r\n      <fa name=\"eye-slash\" (click)=\"hideControls()\"></fa>\r\n\r\n      <span class=\"tooltipText\">Edit | Send Back | Bring Forward | Delete | Hide</span>\r\n    </span>\r\n  </span>\r\n\r\n  <div class=\"circle\">\r\n    <div class=\"circleHeader\" (mouseenter)=\"bringToFront()\" (mouseleave)=\"sendToBack()\" >{{title}}\r\n\r\n\r\n    </div>\r\n    <div class=\"circleBody\" (mouseenter)=\"bringToFront()\" (mouseleave)=\"sendToBack()\">\r\n      {{body}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/input-circle/input-circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_line_component__ = __webpack_require__("../../../../../src/app/line/line.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputCircleComponent = /** @class */ (function () {
    function InputCircleComponent(globals, componentFactoryResolver, appRef, injector) {
        this.globals = globals;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.title = '';
        this.body = '';
        this.compList = this.globals.compList;
        this.connectors = this.globals.connectors;
        this.dragStartX = null;
        this.dragStartY = null;
        var swal = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
    }
    /**
     * @desc set modal header and body text on initialization
     */
    InputCircleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var newElement = (!this.compList.find(function (i) { return i.id === _this.cid; }));
        if (newElement) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2'],
                allowOutsideClick: false
            });
            var steps = [
                {
                    title: 'Modal Header',
                    text: 'Enter title of the box'
                },
                'Modal Body'
            ];
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
                if (result.value) {
                    _this.title = result.value[0];
                    _this.body = result.value[1];
                    _this.addToList();
                }
            });
        }
    };
    /**
     * @desc add component to component list
     */
    InputCircleComponent.prototype.addToList = function () {
        var comp = {
            id: this.cid, type: 'Circle', x: 250, y: 60, title: this.title,
            body: this.body, height: 200, width: 250, z: 1000, connectors: [], neighbors: []
        };
        this.compList.push(comp);
    };
    /**
     * @desc move component
     * @param ev
     */
    InputCircleComponent.prototype.moveElement = function (ev) {
        var _this = this;
        ev.preventDefault();
        var element = document.getElementById(this.cid);
        element.style.position = 'absolute';
        if (isNaN(parseInt((element.style.left), 10))) {
            this.currentX = 0;
        }
        else {
            this.currentX = parseInt((element.style.left), 10);
        }
        if (isNaN(parseInt((element.style.top), 10))) {
            this.currentY = 0;
        }
        else {
            this.currentY = parseInt((element.style.top), 10);
        }
        var deltaX = this.currentX + Number(ev.screenX) - this.dragStartX;
        var deltaY = this.currentY + Number(ev.screenY) - this.dragStartY;
        this.dragStartX = null;
        this.dragStartY = null;
        element.style.left = deltaX + 'px';
        element.style.top = deltaY + 'px';
        var component = this.compList.find(function (i) { return i.id === _this.cid; });
        component.x = document.getElementById(this.cid).getBoundingClientRect().left;
        component.y = document.getElementById(this.cid).getBoundingClientRect().top;
        setTimeout(this.moveConnectors(), 10);
    };
    /**
     * @desc set data in drag event
     * @param ev
     */
    InputCircleComponent.prototype.setData = function (ev) {
        ev.dataTransfer.setData('text', this.cid);
        this.dragStartX = ev.screenX;
        this.dragStartY = ev.screenY;
    };
    /**
     * @desc increase z index of component
     */
    InputCircleComponent.prototype.bringToFront = function () {
        var currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
        var zIndent = Number(currentZ) + 1;
        document.getElementById(this.cid).style.zIndex = zIndent + '';
    };
    /**
     * @desc decrease z index of component
     */
    InputCircleComponent.prototype.sendToBack = function () {
        var currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
        var zIndent = Number(currentZ) - 1;
        document.getElementById(this.cid).style.zIndex = zIndent + '';
    };
    /**
     *@desc show control icons
     */
    InputCircleComponent.prototype.showControls = function () {
        document.getElementById(this.cntrl).style.display = 'block';
        document.getElementById(this.showcntrl).style.display = 'none';
    };
    /**
     * @desc hide control icons
     */
    InputCircleComponent.prototype.hideControls = function () {
        document.getElementById(this.cntrl).style.display = 'none';
        document.getElementById(this.showcntrl).style.display = 'block';
    };
    /**
     * @desc confirm & delete component
     */
    InputCircleComponent.prototype.delete = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#1c0b6e',
            cancelButtonColor: '#3c3c3c',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                document.getElementById(_this.cid).remove();
                var component = _this.compList.find(function (i) { return i.id === _this.cid; });
                var _loop_1 = function (neighbor) {
                    var neighborEle = _this.compList.find(function (i) { return i.id === neighbor; }).neighbors;
                    var nIndex = neighborEle.indexOf(_this.cid);
                    neighborEle.splice(nIndex, 1);
                };
                for (var _i = 0, _a = component.neighbors; _i < _a.length; _i++) {
                    var neighbor = _a[_i];
                    _loop_1(neighbor);
                }
                for (var _b = 0, _c = component.connectors; _b < _c.length; _b++) {
                    var line = _c[_b];
                    console.log('line *** ' + line);
                    var _loop_2 = function (i) {
                        if (_this.connectors[i].id === line) {
                            var node1_1 = (_this.connectors[i].node1 === _this.cid) ? _this.connectors[i].node2 : _this.connectors[i].node1;
                            var n1Connectors = _this.compList.find(function (j) { return j.id === node1_1; }).connectors;
                            var n1LineIndex = n1Connectors.indexOf(line);
                            if (n1LineIndex !== -1) {
                                n1Connectors.splice(n1LineIndex, 1);
                            }
                            _this.connectors.splice(i, 1);
                            document.getElementById(line).remove();
                            i--;
                            return out_i_1 = i, "break";
                        }
                        out_i_1 = i;
                    };
                    var out_i_1;
                    for (var i = 0; i < _this.connectors.length; i++) {
                        var state_1 = _loop_2(i);
                        i = out_i_1;
                        if (state_1 === "break")
                            break;
                    }
                }
                var index = _this.compList.indexOf(component);
                _this.compList.splice(index, 1);
            }
        });
    };
    /**
     * @desc edit modal header and body text
     */
    InputCircleComponent.prototype.edit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2'],
            allowOutsideClick: false
        });
        var steps = [
            {
                title: 'Modal Header',
                text: 'Enter title of the box',
                inputValue: this.title
            },
            {
                title: 'Modal Body',
                inputValue: this.body
            }
        ];
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
            if (result.value) {
                _this.title = result.value[0];
                _this.body = result.value[1];
                var component = _this.compList.find(function (i) { return i.id === _this.cid; });
                component.title = _this.title;
                component.body = _this.body;
            }
        });
    };
    /**
     * @desc allow drop of elements
     * @param ev
     */
    InputCircleComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    /**
     * @desc connect 2 components by line
     * @param ev
     */
    InputCircleComponent.prototype.connect = function (ev) {
        ev.preventDefault();
        var prevNode = ev.dataTransfer.getData('text');
        var curNode = this.cid;
        var id = Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])();
        this.drawLine(prevNode, curNode, true, id);
    };
    /**
     * @desc drawing line & updating lists
     * @param ev
     */
    InputCircleComponent.prototype.drawLine = function (prevNode, curNode, newConnection, id) {
        var leftNode;
        var rightNode;
        var lineId = id;
        if (curNode !== prevNode) {
            // setting left and right nodes
            if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left) {
                leftNode = prevNode;
                rightNode = curNode;
            }
            else {
                leftNode = curNode;
                rightNode = prevNode;
            }
            // generating line
            var componentRef = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__line_line_component__["a" /* LineComponent */]).create(this.injector);
            componentRef.instance.cid = lineId;
            this.appRef.attachView(componentRef.hostView);
            var domElem = componentRef.hostView.rootNodes[0];
            var leftNodeElm = this.compList.find(function (i) { return i.id === leftNode; });
            var rightNodeElm = this.compList.find(function (i) { return i.id === rightNode; });
            var lineLeftX = leftNodeElm.x + (leftNodeElm.width / 2);
            var lineLeftY = document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height / 2;
            var lineRightX = rightNodeElm.x + (rightNodeElm.width / 2);
            var lineRightY = document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height / 2;
            // calculating line length and angle
            var xDist = lineRightX - lineLeftX;
            var yDist = lineRightY - lineLeftY;
            var hypo_1 = Math.sqrt((Math.pow(xDist, 2) + Math.pow(yDist, 2)));
            var angleRad = Math.atan(yDist / xDist);
            var angleDeg_1 = angleRad * 180 / Math.PI;
            domElem.style.position = 'absolute';
            var adjustment = angleDeg_1 * 3;
            // setting line left position
            var scroll_1 = this.getScroll();
            var workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
            var workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
            if ((leftNodeElm.x - rightNodeElm.x) < 100) {
                domElem.style.left = lineLeftX + scroll_1[0] - workspaceX - Math.abs(adjustment) + 50 + 'px';
            }
            else {
                domElem.style.left = lineLeftX + scroll_1[0] - workspaceX - Math.abs(adjustment) + 'px';
            }
            if (Math.abs(leftNodeElm.y - rightNodeElm.y) < 300) {
                domElem.style.top = lineLeftY + scroll_1[1] - workspaceY + adjustment - 30 + 'px';
            }
            else {
                domElem.style.top = lineLeftY + scroll_1[1] - workspaceY + adjustment + 'px';
            }
            // adding to canvas, set width and transformation
            var canvas = document.getElementById('canvas');
            canvas.appendChild(domElem);
            setTimeout(function () {
                if (document.getElementById(lineId)) {
                    var newLine = document.getElementById(lineId);
                    newLine.style.width = hypo_1 + 'px';
                    newLine.style.transform = 'rotate(' + angleDeg_1 + 'deg)';
                }
            }, 10);
            // adding connector to components in the list
            var leftEle = this.compList.find(function (i) { return i.id === leftNode; });
            var rightEle = this.compList.find(function (i) { return i.id === rightNode; });
            if (newConnection) {
                leftEle.connectors.push(lineId);
                rightEle.connectors.push(lineId);
                leftEle.neighbors.push(rightNode);
                rightEle.neighbors.push(leftNode);
                var line = { id: lineId, node1: leftNode, node2: rightNode };
                this.connectors.push(line);
            }
        }
    };
    /**
     * @desc move connected lines
     */
    InputCircleComponent.prototype.moveConnectors = function () {
        var _this = this;
        var lines = this.compList.find(function (i) { return i.id === _this.cid; }).connectors;
        var num = lines.length;
        var _loop_3 = function (i) {
            var line = lines[i];
            document.getElementById(line).remove();
            var connection = this_1.connectors.find(function (i) { return i.id === line; });
            var node = (connection.node1 === this_1.cid) ? connection.node2 : connection.node1;
            this_1.drawLine(this_1.cid, node, false, line);
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_3(i);
        }
    };
    /**
     * @desc get amount of scroll of the workspace and returns scroll amount [x,y]
     * @returns {number[]}
     */
    InputCircleComponent.prototype.getScroll = function () {
        var elmnt = document.getElementById('workspace');
        var x = elmnt.scrollLeft;
        var y = elmnt.scrollTop;
        var coordinates = [x, y];
        /*document.getElementById ('demo').innerHTML = 'Horizontally: ' + x + 'px<br>Vertically: ' + y + 'px';*/
        return coordinates;
    };
    InputCircleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-circle',
            template: __webpack_require__("../../../../../src/app/input-circle/input-circle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/input-circle/input-circle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], InputCircleComponent);
    return InputCircleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/line/line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line{\r\n  height: 4px;\r\n  rotation-point: center;\r\n  border: solid thin #1c0b6e;\r\n  position: absolute;\r\n  background-color: #1c0b6e;\r\n  border-radius: 10px;\r\n}\r\n.line:hover{\r\n  background-color: teal;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"line\" id={{cid}} (click)=\"delete()\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = /** @class */ (function () {
    function LineComponent(globals) {
        this.globals = globals;
        this.connectors = this.globals.connectors;
        this.compList = this.globals.compList;
    }
    LineComponent.prototype.ngOnInit = function () {
    };
    /**
     * @desc delete line
     */
    LineComponent.prototype.delete = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
            title: 'Delete the connection?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#1c0b6e',
            cancelButtonColor: '#3c3c3c',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                var line = _this.connectors.find(function (i) { return i.id === _this.cid; });
                var node1_1 = line.node1;
                var n1Connectors = _this.compList.find(function (i) { return i.id === node1_1; }).connectors;
                var n1Line = n1Connectors.find(function (i) { return i.id === _this.cid; });
                var n1LineIndex = n1Connectors.indexOf(n1Line);
                n1Connectors.splice(n1LineIndex, 1);
                var node2_1 = line.node2;
                var n2Connectors = _this.compList.find(function (i) { return i.id === node2_1; }).connectors;
                var n2Line = n2Connectors.find(function (i) { return i.id === _this.cid; });
                var n2LineIndex = n2Connectors.indexOf(n2Line);
                n2Connectors.splice(n2LineIndex, 1);
                var index = _this.connectors.indexOf(line);
                _this.connectors.splice(index, 1);
                document.getElementById(_this.cid).remove();
            }
        });
    };
    LineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-line',
            template: __webpack_require__("../../../../../src/app/line/line.component.html"),
            styles: [__webpack_require__("../../../../../src/app/line/line.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */]])
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<div class=\"col-md-10\" style=\"background-color: #3d443b; text-align: left; margin: auto\">\r\n  <form (submit)=\" onLoginSubmit()\" style=\"padding: 10px;\">\r\n\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary button\" value=\"Login\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     * @desc submit form values
     */
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */].username = data.user.name;
                _this.flashMessage.show('Successfully logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Add a black background color to the top navigation */\r\n.topnav {\r\n  background-color: #333;\r\n  overflow: hidden;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 999999;\r\n}\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n  background-color: #5c45ee;\r\n  color: black;\r\n}\r\n/* Add an active class to highlight the current page */\r\n.active {\r\n  background-color: #0760af;\r\n  color: white;\r\n}\r\n/* Hide the link that should open and close the topnav on small screens */\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n.topnav.right{\r\n  right: 0;\r\n  float: right;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\r\n  <a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Werkstroom Modeller</a>\r\n  <a routerLink=\"/components\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Components</a>\r\n  <a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\">Profile</a>\r\n  <a routerLink=\"/help\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Help</a>\r\n  <a routerLink=\"/about\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">About</a>\r\n  <a (click)=\"changeName()\" style=\"font-style: italic;background-color: #333333\">{{staticWorkflowname}}</a>\r\n\r\n\r\n  <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" style=\"float:right\" routerLinkActive=\"active\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <fa name=\"sign-in \"></fa>\r\n    Login\r\n  </a>\r\n\r\n  <a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\" style=\"float:right\">\r\n    <fa name=\"sign-out \"></fa>\r\n    Logout\r\n  </a>\r\n  <a *ngIf=\"authService.loggedIn()\" style=\"float:right; background-color: #333333; color: white\">\r\n    <fa name=\"user-circle\"></fa>\r\n    {{staticUsername}}</a>\r\n  <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/signup\" style=\"float:right\" routerLinkActive=\"active\"\r\n     [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <fa name=\"user-circle\"></fa>\r\n    Signup\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, globals) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.globals = globals;
    }
    NavbarComponent_1 = NavbarComponent;
    NavbarComponent.prototype.ngOnInit = function () {
        this.authService.getProfile().subscribe(function (profile) {
            NavbarComponent_1.username = profile.user.name;
        }, function (err) {
            console.log(err);
            return false;
        });
        NavbarComponent_1.workflowName = (this.globals.workflowName === undefined) ? 'untitled workflow' : this.globals.workflowName;
    };
    Object.defineProperty(NavbarComponent.prototype, "staticUsername", {
        /**
         * @desc get current user's username
         * @returns {string}
         */
        get: function () {
            return NavbarComponent_1.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "staticWorkflowname", {
        /**
         * @desc get current workflow name
         * @returns {string}
         */
        get: function () {
            return NavbarComponent_1.workflowName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @desc logging out
     * @returns {boolean}
     */
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    /**
     * @desc change workflow name
     * @returns {Promise<void>}
     */
    NavbarComponent.prototype.changeName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            title: 'Enter workflow name',
                            input: 'text',
                            inputPlaceholder: 'Enter workflow name',
                            inputValue: NavbarComponent_1.workflowName,
                            showCancelButton: true,
                            inputValidator: function (value) {
                                return !value && 'Please enter a name to save workflow!';
                            }
                        })];
                    case 1:
                        name = (_a.sent()).value;
                        if (name) {
                            this.globals.workflowName = name;
                            NavbarComponent_1.workflowName = name;
                            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({ type: 'success', title: 'Done' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent = NavbarComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */]])
    ], NavbarComponent);
    return NavbarComponent;
    var NavbarComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile {\r\n  color: #010840;\r\n}\r\n\r\ntable, td, th {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\nth {\r\n  color: #8ec0a1;\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\r\n  <thead>\r\n  <tr>\r\n    <th>Date</th>\r\n    <th>Workflow name</th>\r\n    <th>Action</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let item of workflows\">\r\n    <td>{{item.savedDate.substring(0,10)}}</td>\r\n    <td>{{item.name}}</td>\r\n    <td>\r\n      <button class=\"btn btn-primary button\" (click)=\"open(item)\">Open</button>\r\n      <button class=\"btn btn-danger button\" (click)=\"delete(item)\">Delete</button>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n<label *ngIf=\"!display\">No saved workflows</label>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, globals) {
        this.authService = authService;
        this.router = router;
        this.globals = globals;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.name = profile.user.name;
            _this.username = profile.user.username;
            _this.email = profile.user.email;
            _this.userId = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getWorkflows().subscribe(function (workflows) {
            _this.workflows = workflows;
            _this.display = (workflows.length > 0);
            console.log(workflows, _this.display);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    /**
     * @desc load workflow
     * @param workflow
     */
    ProfileComponent.prototype.open = function (workflow) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'All unsaved changess will be lost!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, open it!'
        }).then(function (result) {
            if (result.value) {
                _this.globals.workflowName = workflow.name;
                _this.globals.connectors = workflow.connArray;
                _this.globals.compList = workflow.compArray;
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */].workflowName = workflow.name;
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                    title: 'Loading!',
                    text: 'Please wait',
                    timer: 1000,
                    onOpen: function () {
                        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
                    }
                }).then(function (res) {
                    if (
                    // Read more about handling dismissals
                    res.dismiss === __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.DismissReason.timer) {
                        _this.router.navigate(['/']);
                    }
                });
            }
        });
    };
    /**
     * @desc delete workflow
     * @param workflow
     */
    ProfileComponent.prototype.delete = function (workflow) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Are you sure?',
            text: workflow.name + ' will be deleted!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.authService.deleteWorkflow(workflow._id).subscribe(function (data) {
                });
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success').then(function (res) {
                    _this.router.navigate(['/']).then(function (result) {
                        _this.router.navigate(['/profile']);
                    });
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    /**
     * @desc register user
     * @param user
     * @returns {Observable<any>}
     */
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * @desc authenticate user
     * @param user
     * @returns {Observable<any>}
     */
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * @desc get user profile
     * @returns {Observable<any>}
     */
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * @desc store user data in local storage
     * @param token
     * @param user
     */
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    /**
     * @desc load user token
     */
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    /**
     * @desc check whether a user is logged in
     * @returns {boolean}
     */
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    /**
     * @desc logout
     */
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    /**
     * @desc save workflow
     * @param workflow
     * @returns {Observable<any>}
     */
    AuthService.prototype.saveWorkflow = function (workflow) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('workflows/save', workflow, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * @desc get workflows of a user
     * @returns {Observable<any>}
     */
    AuthService.prototype.getWorkflows = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('workflows/models', { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * delete workflow
     * @param id
     * @returns {Observable<any>}
     */
    AuthService.prototype.deleteWorkflow = function (id) {
        var body = { id: id };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('workflows/delete', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * check for same name workflows
     * @param id
     * @param name
     * @returns {Observable<any>}
     */
    AuthService.prototype.checkWorkflow = function (id, name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('workflows/checkWorkflow', { id: id, name: name }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    /**
     * @desc validate register form
     * @param user
     * @returns {boolean}
     */
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @desc validate email
     * @param email
     * @returns {boolean}
     */
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button{\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sign Up</h2>\r\n<div class=\"col-md-10\" style=\"background-color: #3d443b; text-align: left; margin: auto\">\r\n  <form (submit)=\" onSignupSubmit()\" style=\"padding: 10px;\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary button\" value=\"Submit\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    /**
     * @desc submit sign up form
     * @returns {boolean}
     */
    SignupComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully signed up', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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