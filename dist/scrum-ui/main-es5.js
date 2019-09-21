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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"parent\">\r\n    <div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md\">\r\n      <div class=\"header\"  id=\"reject\">REJECTED</div>\r\n      <div class=\"box\" *ngFor=\"let a of arr\">\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingTwo\">\r\n                    <h2 class=\"mb-0\">\r\n                        <button type=\"button\" class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\">\r\n                          <p>Task Title</p>\r\n                          <p>Assigned to</p>\r\n                        </button>\r\n                    </h2>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"collapse show\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                      <p>sx</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n      </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"header\" id=\"pending\">PENDING</div>\r\n      <div class=\"box\">\r\n          <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"header\" id=\"dev\">DEVELOPMENT</div>\r\n      <div class=\"box\">\r\n          <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"header\" id=\"paused\">PAUSED</div>\r\n      <div class=\"box\">\r\n          <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"header\" id=\"test\">TESTING</div>\r\n      <div class=\"box\">\r\n          <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"header\" id=\"prod\">PRODUCTION</div>\r\n      <div class=\"box\">\r\n          <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n    <!-- <div class=\"container-fluid\">\r\n   <div class=\"row\">\r\n    <div class=\"col-md box\">\r\n      <div *ngFor=\"let i of arr\">\r\n        {{i}}\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md box\" >\r\n        <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md box\" >\r\n        <div *ngFor=\"let i of arr\">\r\n            {{i}}\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md box\" >\r\n        <div *ngFor=\"let i of arr\">\r\n          \r\n        </div>\r\n    </div>\r\n    <div class=\"col-md box\" >\r\n        <div *ngFor=\"let i of arr\">\r\n          \r\n        </div>\r\n    </div>\r\n    <div class=\"col-md\" >\r\n        <div *ngFor=\"let i of arr\">\r\n          \r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n  </div> -->\r\n  <!-- <ng-template #tipContent><b>Click to add new Task</b>!</ng-template> -->\r\n  \r\n  <div><button title=\"click to add task\" class=\"btn btn-success\" style=\"z-index: +999; position: fixed; bottom: 8px; right: 3px;\"  matTooltip=\"Info about the action\">ADD NEW TASK</button></div>\r\n  \r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header\r\n{\r\n    background-color: #000428 ;\r\n    height: 50px;\r\n    width: 100%;\r\n    color: white ;\r\n    text-align: center;\r\n}\r\n.parent\r\n{\r\n    background-color: #004e92 ;\r\n    height: 755px;  \r\n    overflow: scroll;\r\n    \r\n}\r\n.box\r\n{\r\n    border-right: 1px solid black ;\r\n}\r\n#reject\r\n{\r\n    border-bottom: 2px solid #cb2d3e ;\r\n}\r\n#pending\r\n{\r\n    border-bottom: 2px solid #ffb347 ;\r\n}\r\n#dev\r\n{\r\n    border-bottom: 2px solid #56ab2f ;\r\n}\r\n#test\r\n{\r\n    border-bottom: 2px solid #3a7bd5 ;\r\n}\r\n#prod\r\n{\r\n    border-bottom: 2px solid #4CB8C4;\r\n}\r\n#paused\r\n{\r\n    border-bottom: 2px solid rgb(230, 58, 58);\r\n}\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 0px;\r\n     padding-left: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjtBQUNBOztJQUVJLDhCQUE4QjtBQUNsQztBQUNBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLGlDQUFpQztBQUNyQztBQUNBOztJQUVJLGdDQUFnQztBQUNwQztBQUNBOztJQUVJLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7S0FDakIsaUJBQWlCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA0MjggO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGUgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wYXJlbnRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5MiA7XHJcbiAgICBoZWlnaHQ6IDc1NXB4OyAgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgXHJcbn1cclxuLmJveFxyXG57XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjayA7XHJcbn1cclxuI3JlamVjdFxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NiMmQzZSA7XHJcbn1cclxuI3BlbmRpbmdcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmIzNDcgO1xyXG59XHJcbiNkZXZcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NmFiMmYgO1xyXG59XHJcbiN0ZXN0XHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2E3YmQ1IDtcclxufVxyXG4jcHJvZFxyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRDQjhDNDtcclxufVxyXG4jcGF1c2VkXHJcbntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjMwLCA1OCwgNTgpO1xyXG59XHJcblxyXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLCAuY29sLWF1dG8sIC5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20sIC5jb2wtc20tYXV0bywgLmNvbC1tZC0xLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZCwgLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLCAuY29sLWxnLWF1dG8sIC5jb2wteGwtMSwgLmNvbC14bC0yLCAuY29sLXhsLTMsIC5jb2wteGwtNCwgLmNvbC14bC01LCAuY29sLXhsLTYsIC5jb2wteGwtNywgLmNvbC14bC04LCAuY29sLXhsLTksIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwsIC5jb2wteGwtYXV0byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scrum-ui';
        this.arr = [1, 2, 3];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\task_manager-master\task_manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map