(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/form-builder/form-builder.component */ "./src/app/features/form-builder/form-builder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'en-US/Form/FormBuilder/:id', component: _features_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_2__["FormBuilderComponent"] },
    { path: 'fr-FR/Form/FormBuilder/:id', component: _features_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_2__["FormBuilderComponent"] },
    { path: 'zh-CN/Form/FormBuilder/:id', component: _features_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_2__["FormBuilderComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NtYy9fd29yay9mb3JtLWJ1aWxkZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxzSEFFOEMsRUFDL0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./src/app/base-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'form-builder';
        this.formComponents = [];
        this._destinationList = [];
        this._targetList = [
            new _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"](1, "TextBox"),
            new _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"](2, "TextArea"),
            new _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"](3, "Image"),
            new _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"](4, "File")
        ];
    }
    Object.defineProperty(AppComponent.prototype, "destinationList", {
        get: function () {
            return this._destinationList;
        },
        set: function (value) {
            this._destinationList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "targetList", {
        get: function () {
            return this._targetList;
        },
        set: function (value) {
            this._targetList = value;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_6__["FeaturesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/base-component.ts":
/*!***********************************!*\
  !*** ./src/app/base-component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/core/globals.ts":
/*!*********************************!*\
  !*** ./src/app/core/globals.ts ***!
  \*********************************/
/*! exports provided: Globals, AppComponentTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentTypes", function() { return AppComponentTypes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
    }
    var _a;
    Globals.role = "vasile";
    Globals.ComponentType = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.textBox = "textbox",
        _a);
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());

var AppComponentTypes = /** @class */ (function () {
    function AppComponentTypes() {
        this.textBox = "textBox";
    }
    AppComponentTypes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppComponentTypes);
    return AppComponentTypes;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-builder/form-builder.component */ "./src/app/features/form-builder/form-builder.component.ts");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_1__["FormBuilderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModuleModule"],
                _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/form-builder/form-builder.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/form-builder/form-builder.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <p>\n    Form Builder\n  </p>\n\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-4\">\n    <div class=\"container-lg\">\n      <h2>Form</h2>\n      <div cdkDropList #destinationList=\"cdkDropList\" [cdkDropListData]=\"formComponents\" [cdkDropListConnectedTo]=\"[sourceList]\"\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n\n        <div class=\"example-box\" *ngFor=\"let item of formComponents; let i = index\" cdkDrag cdkDragLockAxis=\"y\"\n          [cdkDragData]=\"item\" (CdkDragStart)=\"dragStart($event)\" (cdkDragEnded)=\"ended($event)\">\n\n          <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n\n          <div [ngSwitch]=\"item.componentType\">\n            <text-input *ngSwitchCase=\"appComponentTypes.textBox\" [inputModel] =\"formComponents[i]\" ></text-input>\n          </div>\n\n          <div class=\"example-settings\" (click)=\"onSettingsClicked(i)\">\n            <i class=\"fas fa-wrench\"></i>\n          </div>\n          <div class=\"example-cancel\" (click)=\"onClickMe(i)\">\n            <i class=\"far fa-trash-alt fa-lg\"></i>\n          </div>\n\n          <div class=\"example-handle\" cdkDragHandle>\n            <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n  <div *ngFor=\"let item of formComponents;\">\n    {{item.placeholder}}\n  </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"example-container\">\n      <h2>Available components</h2>\n\n      <div cdkDropList #sourceList=\"cdkDropList\" [cdkDropListData]=\"availableComponents\" [cdkDropListConnectedTo]=\"[destinationList]\"\n        class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div class=\"example-box\" *ngFor=\"let item of availableComponents\" cdkDrag [cdkDragData]=\"item\">\n          {{item.componentType}}\n          <div class=\"example-handle\" cdkDragHandle>\n            <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "./src/app/features/form-builder/form-builder.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/features/form-builder/form-builder.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Zvcm0tYnVpbGRlci9mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/form-builder/form-builder.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/form-builder/form-builder.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_modules_shared_components_models_ModelBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/components/models/ModelBase */ "./src/app/modules/shared/components/models/ModelBase.ts");
/* harmony import */ var src_app_core_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/globals */ "./src/app/core/globals.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_modules_shared_components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component */ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.ts");
/* harmony import */ var src_app_modules_shared_components_text_input_models_TextboxModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/components/text-input/models/TextboxModel */ "./src/app/modules/shared/components/text-input/models/TextboxModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(appComponentTypes, dialog) {
        this.appComponentTypes = appComponentTypes;
        this.dialog = dialog;
        this.destinationListName = ["destinationList"];
        this.sourceListName = ["sourceList"];
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        this.loadComponents();
        this.formComponents = [];
    };
    FormBuilderComponent.prototype.loadComponents = function () {
        this.availableComponents = [
            new src_app_modules_shared_components_text_input_models_TextboxModel__WEBPACK_IMPORTED_MODULE_6__["TextboxModel"]("", "textBox1", 0, false, this.appComponentTypes.textBox, false, [""], "description", "placeholder", "validationMessage", "validationRule", 100)
        ];
    };
    FormBuilderComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    FormBuilderComponent.prototype.ended = function (event) {
        console.log("end to move item");
    };
    FormBuilderComponent.prototype.onClickMe = function (index) {
        if (index > -1) {
            this.formComponents.splice(index, 1);
        }
    };
    FormBuilderComponent.prototype.onSettingsClicked = function (index) {
        var _this = this;
        var temp = this.formComponents[index];
        var settings = {
            key: "1",
            id: "1",
            componentType: "setting",
            index: 1,
            editable: false,
            label: "string",
            required: false,
            value: "no value",
            description: "description",
            placeholder: "placeholder",
            validationMessage: "validationMessage",
            validationRule: "validationRule",
            charactersLimit: 1
        };
        var dialogRef = this.dialog.open(src_app_modules_shared_components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_5__["TextInputSettingsComponent"], {
            data: settings
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result.label);
            _this.formComponents[index] = new src_app_modules_shared_components_models_ModelBase__WEBPACK_IMPORTED_MODULE_2__["ModelBase"]("", "0", _this.appComponentTypes.textBox, index, false, result.label, false, "");
        });
    };
    FormBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/features/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.scss */ "./src/app/features/form-builder/form-builder.component.scss")],
            providers: [src_app_core_globals__WEBPACK_IMPORTED_MODULE_3__["AppComponentTypes"]]
        }),
        __metadata("design:paramtypes", [src_app_core_globals__WEBPACK_IMPORTED_MODULE_3__["AppComponentTypes"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModuleModule = /** @class */ (function () {
    function MaterialModuleModule() {
    }
    MaterialModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModuleModule);
    return MaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/models/ModelBase.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/components/models/ModelBase.ts ***!
  \***************************************************************/
/*! exports provided: ModelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelBase", function() { return ModelBase; });
var ModelBase = /** @class */ (function () {
    function ModelBase(__key, __id, __componentType, __index, __editable, __label, __required, __value) {
        this.key = __key || '';
        this.id = __id;
        this.componentType = __componentType || '';
        this.index = __index === undefined ? 1 : __index;
        this.editable = __editable;
        this.label = __label || '';
        this.required = !!__required;
        this.value = __value || null;
    }
    return ModelBase;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/text-input/models/TextboxModel.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/models/TextboxModel.ts ***!
  \*****************************************************************************/
/*! exports provided: TextboxModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxModel", function() { return TextboxModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ModelBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ModelBase */ "./src/app/modules/shared/components/models/ModelBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextboxModel = /** @class */ (function (_super) {
    __extends(TextboxModel, _super);
    function TextboxModel(__key, __id, __index, __editable, __label, __required, __value, __description, __placeholder, __validationMessage, __validationRule, __charactersLimit) {
        var _this = _super.call(this, __key, __id, 'textbox', __index, __editable, __label, __required, __value) || this;
        _this.description = __description || '';
        _this.placeholder = __placeholder || '';
        _this.validationMessage = __validationMessage || '';
        _this.validationRule = __validationRule || '';
        _this.charactersLimit = __charactersLimit || 250;
        return _this;
    }
    TextboxModel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [String, String, Number, Boolean, String, Boolean, Object, String, String, String, String, Number])
    ], TextboxModel);
    return TextboxModel;
}(_models_ModelBase__WEBPACK_IMPORTED_MODULE_1__["ModelBase"]));



/***/ }),

/***/ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-container\">\n  <h1 mat-dialog-title>Text Box - details</h1>\n  <mat-dialog-content class=\"mat-typography\">\n    <form>\n      <mat-form-field>\n        <input matInput placeholder=\"Label\" [(ngModel)]=\"data.label\" name=\"label\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Description\" [(ngModel)]=\"data.description\" name=\"description\">\n      </mat-form-field>\n\n\n      <mat-form-field>\n        <input matInput placeholder=\"placeholder\" [(ngModel)]=\"data.placeholder\" name=\"placeholder\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [labelPosition]=\"labelPosition\">Checked</mat-checkbox>\n      </mat-form-field>\n    </form>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC9wb3AtdXAtc2V0dGluZ3MvdGV4dC1pbnB1dC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TextInputSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputSettingsComponent", function() { return TextInputSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _models_TextboxModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TextboxModel */ "./src/app/modules/shared/components/text-input/models/TextboxModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TextInputSettingsComponent = /** @class */ (function () {
    function TextInputSettingsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.labelPosition = 'before';
    }
    TextInputSettingsComponent.prototype.ngOnInit = function () {
    };
    TextInputSettingsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TextInputSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-input-settings',
            template: __webpack_require__(/*! ./text-input-settings.component.html */ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.html"),
            styles: [__webpack_require__(/*! ./text-input-settings.component.scss */ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _models_TextboxModel__WEBPACK_IMPORTED_MODULE_2__["TextboxModel"]])
    ], TextInputSettingsComponent);
    return TextInputSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/text-input/text-box.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/text-box.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"form-group\">\n    <label for=\"{{inputModel.id}}\">{{inputModel.label}}</label>\n     <input type=\"text\" placeholder=\"{{inputModel.placeholder}}\" class=\"form-control\" id=\"{{inputModel.id}}\" readonly=\"{{inputModel.editable}}\">\n     <small class=\"form-text text-muted\">{{inputModel.description}}</small>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/components/text-input/text-box.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/text-box.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shared/components/text-input/text-box.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/text-input/text-box.component.ts ***!
  \****************************************************************************/
/*! exports provided: TextBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxComponent", function() { return TextBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_TextboxModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/TextboxModel */ "./src/app/modules/shared/components/text-input/models/TextboxModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent(dialog) {
        this.dialog = dialog;
    }
    TextBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextboxModel__WEBPACK_IMPORTED_MODULE_2__["TextboxModel"])
    ], TextBoxComponent.prototype, "inputModel", void 0);
    TextBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-input',
            template: __webpack_require__(/*! ./text-box.component.html */ "./src/app/modules/shared/components/text-input/text-box.component.html"),
            styles: [__webpack_require__(/*! ./text-box.component.scss */ "./src/app/modules/shared/components/text-input/text-box.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TextBoxComponent);
    return TextBoxComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_text_input_text_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/text-input/text-box.component */ "./src/app/modules/shared/components/text-input/text-box.component.ts");
/* harmony import */ var _components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/text-input/pop-up-settings/text-input-settings.component */ "./src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component.ts");
/* harmony import */ var src_app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [_components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_2__["TextInputSettingsComponent"]],
            imports: [src_app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModuleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_components_text_input_text_box_component__WEBPACK_IMPORTED_MODULE_1__["TextBoxComponent"], _components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_2__["TextInputSettingsComponent"]],
            exports: [_components_text_input_text_box_component__WEBPACK_IMPORTED_MODULE_1__["TextBoxComponent"], _components_text_input_pop_up_settings_text_input_settings_component__WEBPACK_IMPORTED_MODULE_2__["TextInputSettingsComponent"], src_app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModuleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());

;


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

module.exports = __webpack_require__(/*! /home/smc/_work/form-builder/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map