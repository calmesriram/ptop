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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-gurad.guard */ "./src/app/services/auth-gurad.guard.ts");







var routes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        canActivate: [_services_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuradGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_services_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuradGuard"]]
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
    },
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<app-nav-bar></app-nav-bar>\n</div>\n<div class=\"container-fluid\">      \n      <router-outlet></router-outlet>\n </div>"

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
        this.title = 'ptop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_create_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/create-order.service */ "./src/app/services/create-order.service.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-gurad.guard */ "./src/app/services/auth-gurad.guard.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                // HttpClient 
            ],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services_auth_gurad_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuradGuard"],
                _services_create_order_service__WEBPACK_IMPORTED_MODULE_12__["CreateOrderService"],
                _services_script_loader_service__WEBPACK_IMPORTED_MODULE_13__["ScriptLoaderService"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                { provide: Window, useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poiret+One');\n.screencenter{\n    margin-top:10%;\n    padding:2%;\n}\n.myfont{\n    font-family: 'Poiret One', cursive;\n    font-size: 48px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7QUFDbEU7SUFDSSxlQUFlO0lBQ2YsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9pcmV0K09uZScpO1xuLnNjcmVlbmNlbnRlcntcbiAgICBtYXJnaW4tdG9wOjEwJTtcbiAgICBwYWRkaW5nOjIlO1xufVxuLm15Zm9udHtcbiAgICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n\n      <div class=\"card screencenter\">\n          <div class=\"card-header text-center text-primary myfont\">\n              LogIn\n            </div>\n            <div class=\"card-body\">\n                <form  [formGroup]=\"myangForm\" (ngSubmit)=\"login()\">\n                 \n                      <div class=\"form-group\">\n                          <label for=\"inputsm\">Email:</label>\n                          <input class=\"form-control inputsm\"  placeholder=\"Email\" type=\"text\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"myemail\"  autocomplete=\"off\" required>\n                        </div>\n  \n                        <div class=\"form-group\">\n                            <label for=\"inputsm\">Password:</label>\n                            <input class=\"form-control inputsm\" placeholder=\"Password\"  ng-trim=\"true\"  class=\"form-control\"  type=\"password\" formControlName=\"pwd\" autocomplete=\"off\" required>                            \n                          </div> \n\n                          <div class=\"form-group\">\n                                <button type=\"submit\"  [disabled]=\"!myangForm.valid\" class=\"btn btn-primary\">LogIn</button>                             \n                            </div>\n                          </form>  \n              </div>           \n      </div>\n  </div>\n  <div class=\"col-sm-04\"></div>\n  </div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_create_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/create-order.service */ "./src/app/services/create-order.service.ts");






var LoginComponent = /** @class */ (function () {
    // public myusernamenavbar:any;
    // credentials: any = {
    //   email: '',
    //   password: '',
    //   keys: '',
    //   _id: ''
    // };
    function LoginComponent(CreateOrderService, fb, auth, router) {
        this.CreateOrderService = CreateOrderService;
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // var myVar = setInterval(()=>
        // {
        //   this.auth.check_user().then(state=>{
        //     if(state){
        //       this.router.navigate(['menu'])
        //     }
        //   })   
        //  }
        // , 500);
        this.myangForm = this.fb.group({
            myemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.myangForm.invalid) {
            return;
        }
        var d = {
            email: this.myangForm.value.myemail,
            password: this.myangForm.value.pwd,
            keys: "",
            _id: ""
        };
        console.log(d);
        this.auth.login(d).subscribe(function (user) {
            console.log("user details   =>", user);
            // console.log(user['ram'])
            // console.log(user['ram'].firstname)
            // this.CreateOrderService.myusernamenavbar = user['ram'].firstname;
            console.log("Login successful");
            //window.location.href ='/dashboard';
            _this.router.navigateByUrl("/menu");
            // this.refresh();
        }, function (err) {
            console.error(err);
        });
    };
    // login() {
    //   console.log(this.credentials)
    //   this.auth.login(this.credentials).subscribe((user) => {
    //     console.log("user details   =>", user)
    //     //window.location.href ='/dashboard';
    //     //  this.router.navigateByUrl("/dashboard");
    //     // this.refresh();
    //   }, (err) => {
    //     console.error(err);
    //   });
    // }
    LoginComponent.prototype.refresh = function () {
        // this.router.navigateByUrl("/dashboard");
        // window.location.reload();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_create_order_service__WEBPACK_IMPORTED_MODULE_5__["CreateOrderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\n.mycolor{\n    background-color: #2471A3;\n    color:white;    \n}\n.up {\n    margin-top: 10%;\n    /* margin-left: 2%; */\n    /* margin-right: 2%;  */\n}\n.down{\n    margin-top:8%;\n}\n.text-input {\n    border-bottom: solid 1px wheat;\n    border-top: none;\n    border-left: none;\n    border-right: none;    \n}\ninput[type=\"text\"]:focus{\n   \n    outline: none;\n\n}\n.tablebackgroundcolour{\n    background-color: white;\n}\n.tablesize{\n    height:400px;\n    overflow: auto;\n}\n.tablesize2{\n    height:280px;\n    overflow: auto;\n}\n.formsize{\n    font-size: 13px;\n    /* font-weight: 600; */\n    font-family: \"Source Sans Pro\", sans-serif;\n    \n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBQ3ZFO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFHRDtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEOztJQUVJLGNBQWM7O0NBRWpCO0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7QUFFRDtJQUNJLGFBQWE7SUFDYixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7O0NBRTlDIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1BybycpO1xuLm15Y29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NzFBMztcbiAgICBjb2xvcjp3aGl0ZTsgICAgXG59XG5cbi51cCB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyJTsgKi9cbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIlOyAgKi9cbn1cbi5kb3due1xuICAgIG1hcmdpbi10b3A6OCU7XG59XG5cblxuLnRleHQtaW5wdXQge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB3aGVhdDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTsgICAgXG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1c3tcbiAgIFxuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuLnRhYmxlYmFja2dyb3VuZGNvbG91cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlc2l6ZXtcbiAgICBoZWlnaHQ6NDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZXNpemUye1xuICAgIGhlaWdodDoyODBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmZvcm1zaXple1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgIFxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <br><div class=\"container formsize\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" style=\"text-align: center\"><b>Buy Details</b></div>\n                  <div class=\"panel-body\">\n                      <div class=\"table-responsive tablesize table-striped table-hover\">          \n                          <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>Price</th>\n                                <th>Size</th>\n                                <th>Total Size</th>\n                                <th>Average Price</th>                             \n                              </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let cell of assetHistory; index as i;\">                                          \n                                    <td>{{cell.inr}}</td>\n                                    <td>{{cell.btc}}</td>\n                                    <td>{{cell.total|number:'1.2-2'}}</td>\n                                    <td>{{cell.avg|number:'1.2-2'}}</td>\n                                </tr>\n                                                                                 \n                            </tbody>\n                          </table>\n                          </div>\n                  </div>\n                </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" style=\"text-align: center\"><b>Place Buy Order</b></div>\n                  <div class=\"panel-body\">\n                    <form  [formGroup]=\"myangForm\" (ngSubmit)=\"onSubmit()\">\n                      <div class=\"form-group\">\n                          <label for=\"usr\">BTC:</label>\n                          <input type=\"number\" placeholder=\"BTC\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"btc\"  autocomplete=\"off\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"usr\">Price:</label>\n                            <input type=\"number\"  placeholder=\"Price\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"price\"  autocomplete=\"off\" required>\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"usr\">Average Price:</label>\n                              <input type=\"number\" placeholder=\"Average Price\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"avgprice\"  autocomplete=\"off\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"usr\">Required INR:</label>\n                                <input type=\"number\" placeholder=\"Required INR\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"reqinr\"  autocomplete=\"off\" required>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label for=\"usr\">Available INR:</label>\n                                  <input type=\"number\" placeholder=\"Available INR\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"avalinr\"  autocomplete=\"off\" required>\n                                </div>                                \n                                <div class=\"form-group\">\n                                    <button type=\"submit\"  [disabled]=\"!myangForm.valid\" class=\"btn btn-primary\">BUY</button>                             \n                                </div>\n                                </form>                           \n                  </div>\n                </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" style=\"text-align: center\"><b>Open Buy Order</b></div>\n                  <div class=\"panel-body\">\n                      <div class=\"table-responsive tablesize table-striped table-hover\">          \n                          <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>Size</th>\n                                <th>Price</th>\n                                <th>Fill</th>                                \n                              </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let cell of buyHistory; index as i;\">                                               \n                                    <td>{{cell.btc}}</td>\n                                    <td>{{cell.inr}}</td>\n                                    <td>N/A</td>                                   \n                                </tr>\n                            </tbody>\n                          </table>\n                          </div>\n                  </div>\n                </div>\n          </div>\n        </div>\n        <br>\n        <!-- <button type=\"button\" class=\"btn btn-success btn-block\">LogIn or Register To Trade </button> -->        \n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" style=\"text-align: center\"><b>Sell Details</b></div>\n                    <div class=\"panel-body\">\n                        <div class=\"table-responsive tablesize2 table-striped table-hover\">          \n                            <table class=\"table\">\n                              <thead>\n                                <tr>\n                                  <th>Price</th>\n                                  <th>Size</th>\n                                  <th>Total Size</th>\n                                  <th>Average Price</th>                               \n                                </tr>\n                              </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let cell of assetHistory1; index as i;\">                                           \n                                      <td>{{cell.price}}</td>\n                                      <td>{{cell.btc}}</td>\n                                      <td>{{cell.total|number:'1.2-2'}}</td>\n                                      <td>{{cell.avg|number:'1.2-2'}}</td>\n                                  </tr>    \n                              </tbody>\n                            </table>\n                            </div>\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" style=\"text-align: center\"><b>Place Sell Order</b></div>\n                    <div class=\"panel-body\">\n                        <form  [formGroup]=\"sellangForm\" (ngSubmit)=\"onSell()\">\n                        <div class=\"form-group\">\n                            <label for=\"usr\">Enter Your BTC:</label>\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Enter Your BTC\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"sellbtc\"  autocomplete=\"off\" required>\n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"usr\">Enter Price:</label>\n                              <input type=\"number\" class=\"form-control\" placeholder=\"Enter Price\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"sellprice\"  autocomplete=\"off\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\"  [disabled]=\"!sellangForm.valid\" class=\"btn btn-primary\">SELL</button>                             \n                            </div>\n                            </form>                        \n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" style=\"text-align: center\"><b>Open Sell Order</b></div>\n                    <div class=\"panel-body\">\n                        <div class=\"table-responsive tablesize2 table-striped table-hover\">          \n                            <table class=\"table\">\n                              <thead>\n                                <tr>\n                                  <th>Size</th>\n                                  <th>Price</th>\n                                  <th>Fill</th>                                  \n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let cell of sellHistory; index as i;\">                                   \n                                      <td>{{cell.btc}}</td>\n                                      <td>{{cell.price}}</td>\n                                      <td>N/A</td>                                      \n                                  </tr>                                                        \n                              </tbody>\n                            </table>\n                            </div>\n                    </div>\n                  </div>\n            </div>\n          </div>\n  </div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/script-loader.service */ "./src/app/services/script-loader.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_create_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/create-order.service */ "./src/app/services/create-order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var MenuComponent = /** @class */ (function () {
    function MenuComponent(fb, scriptLoader, createOrderService, auth, formBuilder, router) {
        this.fb = fb;
        this.scriptLoader = scriptLoader;
        this.createOrderService = createOrderService;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.x = true;
        this.assetHistory = [];
        this.assetHistory1 = [];
        this.sellHistory = [];
        this.buyHistory = [];
        this.submitted = false;
        this.scriptLoader.load('d3', 'c3', 'noty', 'maplace');
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.auth.show();
        var myVar = setInterval(function () {
            _this.auth.check_user().then(function (state) {
                if (!state) {
                    _this.router.navigate(['login']);
                }
            });
        }, 1000);
        var a = this.createOrderService.myusernamenavbar;
        console.log(a);
        this.myangForm = this.fb.group({
            btc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            avgprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            reqinr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            avalinr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.sellangForm = this.fb.group({
            sellbtc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sellprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            console.log("user   ::", user);
            _this.x = false;
            // return this.x;
        }, function (err) {
            console.error(err);
        });
        this.refreshData();
        this.interval = setInterval(function () {
            _this.refreshData();
        }, 5000);
        this.form = this.formBuilder.group({
            btc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            avgPrice: [null],
            inr: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            reQinr: [null],
            aviLinr: [null]
        });
        this.form1 = this.formBuilder.group({
            btc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    MenuComponent.prototype.refreshData = function () {
        var _this = this;
        console.log(this.createOrderService.myusernamenavbar);
        this.createOrderService.listBuyPlaceOrder(function (data) {
            console.log("data inside listBuyPlaceOrder=>", data);
            var temp = data;
            console.log("temp temo ", temp);
            var totalSize = 0;
            var totalPrice = 0;
            var avgPrice1 = 0;
            temp.map(function (key) {
                totalPrice = totalPrice + key.inr * key.btc;
                totalSize = totalSize + key.btc;
                avgPrice1 = (totalPrice) / totalSize;
                key.total = totalSize;
                key.avg = avgPrice1;
            });
            _this.assetHistory = temp;
        });
        this.createOrderService.listSellPlaceOrder(function (data) {
            console.log("data inside listSellPlaceOrder=>", data);
            var temp = data.reverse();
            console.log("temp temo ", temp);
            var totalSize = 0;
            var totalPrice = 0;
            var avgPrice1 = 0;
            temp.map(function (key) {
                totalPrice = totalPrice + key.price * key.btc;
                totalSize = totalSize + (key.btc);
                console.log("totalSize", totalSize);
                avgPrice1 = (totalPrice) / totalSize;
                key.total = totalSize;
                key.avg = avgPrice1;
            });
            _this.assetHistory1 = temp.reverse();
        });
        this.createOrderService.getUserBuyOrderList(function (data) {
            console.log("data inside getUserBuyOrderList=>", data);
            var temp = data.reverse();
            console.log("temp temo ", temp);
            var totalSize = 0;
            var totalPrice = 0;
            var avgPrice1 = 0;
            temp.map(function (key) {
                totalPrice = totalPrice + key.inr * key.btc;
                totalSize = totalSize + key.btc;
                avgPrice1 = (totalPrice) / totalSize;
                key.total = totalSize;
                key.avg = avgPrice1;
            });
            _this.sellHistory = temp.reverse();
        });
        this.createOrderService.getUserSellOrderList(function (data) {
            console.log("data inside getUserSellOrderList=>", data);
            var temp = data;
            console.log("temp temo ", temp);
            var totalSize = 0;
            var totalPrice = 0;
            var avgPrice1 = 0;
            temp.map(function (key) {
                totalPrice = totalPrice + key.price * key.btc;
                totalSize = totalSize + (key.btc);
                // console.log("totalSize", totalSize)
                avgPrice1 = (totalPrice) / totalSize;
                key.total = totalSize;
                key.avg = avgPrice1;
            });
            _this.buyHistory = temp;
        });
    };
    ;
    MenuComponent.prototype.redirect = function () {
        this.router.navigate(['login']);
    };
    // public btc:any;
    // public price:any;
    // public avgprice:any;
    // public reqinr:any;
    // public avalinr:any;;
    MenuComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.myangForm.invalid) {
            return;
        }
        var d = {
            avgPrice: parseFloat(this.myangForm.value.avgprice),
            aviLinr: parseFloat(this.myangForm.value.avalinr),
            btc: parseFloat(this.myangForm.value.btc),
            inr: parseFloat(this.myangForm.value.price),
            reQinr: parseFloat(this.myangForm.value.reqinr)
        };
        this.createOrderService.buyOrder(d);
        this.myangForm.reset();
    };
    MenuComponent.prototype.onSell = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.sellangForm.invalid) {
            return;
        }
        var d = {
            btc: parseFloat(this.sellangForm.value.sellbtc),
            price: parseFloat(this.sellangForm.value.sellprice)
        };
        this.createOrderService.sellOrder(d);
        this.sellangForm.reset();
    };
    MenuComponent.prototype.ngAfterViewInit = function () {
        c3.generate({
            bindto: '#ks-next-payout-chart',
            data: {
                columns: [
                    ['data1', 6, 5, 6, 5, 7, 8, 7]
                ],
                types: {
                    data1: 'area'
                },
                colors: {
                    data1: '#81c159'
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
            point: {
                show: false
            },
            axis: {
                x: { show: false },
                y: { show: false }
            }
        });
        c3.generate({
            bindto: '#ks-total-earning-chart',
            data: {
                columns: [
                    ['data1', 6, 5, 6, 5, 7, 8, 7]
                ],
                types: {
                    data1: 'area'
                },
                colors: {
                    data1: '#4e54a8'
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
            point: {
                show: false
            },
            axis: {
                x: { show: false },
                y: { show: false }
            }
        });
        c3.generate({
            bindto: '.ks-chart-orders-block',
            data: {
                columns: [
                    ['Revenue', 150, 200, 220, 280, 400, 160, 260, 400, 300, 400, 500, 420, 500, 300, 200, 100, 400, 600, 300, 360, 600],
                    ['Profit', 350, 300, 200, 140, 200, 30, 200, 100, 400, 600, 300, 200, 100, 50, 200, 600, 300, 500, 30, 200, 320]
                ],
                colors: {
                    'Revenue': '#f88528',
                    'Profit': '#81c159'
                }
            },
            point: {
                r: 5
            },
            grid: {
                y: {
                    show: true
                }
            }
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"], _services_create_order_service__WEBPACK_IMPORTED_MODULE_4__["CreateOrderService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <nav class=\"navbar navbar-toggleable-md\" style=\"background-color: rgb(52, 92, 213);\">\n      <!-- Navbar content -->\n      <a class=\"navbar-brand\" style=\"color:white\">Wandx</a>\n        <form class=\"form-inline\">\n            <div class=\"nav-item dropdown\">\n  \n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <small><a style=\"color:white\">{{displayusername}}</a></small>&nbsp;&nbsp;\n                  <img src=\"../../assets/profile/avatar3.jpeg\" alt=\"...\" class=\"rounded-circle\" blank width=\"35\" height=\"35\" blank-color=\"#777\">\n                </a>\n               \n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                    \n                  <a class=\"dropdown-item\"(click)=\"logout()\">Log Out</a>\n                </div>\n              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              \n        </form>\n    </nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_create_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/create-order.service */ "./src/app/services/create-order.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavBarComponent = /** @class */ (function () {
    // public clear:any;  
    function NavBarComponent(createOrderService, auth, router) {
        this.createOrderService = createOrderService;
        this.auth = auth;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        // setInterval(() => {
        //  var  a = this.createOrderService.myusernamenavbar;
        //   this.displayusername = this.createOrderService.myusernamenavbar;
        //   console.log(a)  
        // }, 1000);
    };
    NavBarComponent.prototype.logout = function () {
        this.auth.logout();
        // this.router.navigateByUrl("/login");
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_create_order_service__WEBPACK_IMPORTED_MODULE_2__["CreateOrderService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-gurad.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-gurad.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuradGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuradGuard", function() { return AuthGuradGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuradGuard = /** @class */ (function () {
    function AuthGuradGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuradGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.check_user().then(function (state) {
            if (!state) {
                return true;
            }
            else {
                _this.router.navigate(['menu']);
            }
        });
    };
    AuthGuradGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuradGuard);
    return AuthGuradGuard;
}());

// canActivate() {
//   if (!this.auth.isLoggedIn()) {
//     this.router.navigateByUrl('/login');
//     return false;
//   }
//   return true;
// }


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthenticationService = /** @class */ (function () {
    // visible: boolean;
    function AuthenticationService(http, router, _window) {
        this.http = http;
        this.router = router;
        this._window = _window;
        this._baseUrl = 'http://' + _window.location.hostname + ':3000';
        // this.visible = false; 
    }
    // hide() { this.visible = false; }
    // show() { this.visible = true; }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
            // this.getUserDetails()
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            // console.log("---==>",JSON.parse(payload)) 
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.check_user = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var result = localStorage.getItem('mean-token');
                        if (result != null) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    })];
            });
        });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var user = _this.getUserDetails();
                        if (user) {
                            localStorage.setItem('userid', user._id);
                            resolve(true);
                            return user.exp > Date.now() / 1000;
                        }
                        else {
                            resolve(false);
                        }
                    })];
            });
        });
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            if (type == 'update_profile' || type == 'wallet') {
                base = this.http.post(this._baseUrl + '/api/users/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + this.getToken() }) });
            }
            else if (type == 'sellOrder') {
                if (!this.getUserDetails()) {
                    alert("user not login");
                }
                base = this.http.post(this._baseUrl + '/api/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
            }
            else if (type == 'approveOrder') {
                console.log("inside approveOrder ");
                base = this.http.post(this._baseUrl + '/api/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
            }
            else if (type == 'rejectOrder') {
                console.log("inside rejectOrder ");
                base = this.http.post(this._baseUrl + '/api/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
            }
            else if (type == 'buyOrder') {
                if (!this.getUserDetails()) {
                    alert("user not login");
                }
                console.log("inside buyorder ");
                base = this.http.post(this._baseUrl + '/api/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
            }
            else if (type == 'addAsset') {
                console.log("inside addAsset ");
                base = this.http.post(this._baseUrl + '/api/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
            }
            else {
                base = this.http.post(this._baseUrl + '/api/users/' + type, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + this.getUserDetails() }) });
            }
        }
        else if (type == 'getSellOrderListByUserId') {
            console.log("inside getSellOrderListByUserId", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getBuyOrderListByUserId') {
            console.log("inside getBuyOrderListByUserId", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getSellRequestListByUserId') {
            console.log("inside getSellRequestListByUserId", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getWalletInfo') {
            console.log("inside getWalletInfo", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getAssetOrderListByUserId') {
            console.log("inside getAssetOrderListByUserId", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'listBuyPlaceOrder') {
            console.log("inside listBuyPlaceOrder", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type);
        }
        else if (type == 'listSellPlaceOrder') {
            console.log("inside listSellPlaceOrder", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type);
        }
        else if (type == 'userDetails') {
            console.log("inside userDetails", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getListAllOrder') {
            console.log("inside getListAllOrder", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getUserBuyOrderList') {
            console.log("inside getUserBuyOrderList", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else if (type == 'getUserSellOrderList') {
            console.log("inside getUserSellOrderList", this.getUserDetails());
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + JSON.stringify(this.getUserDetails()) }) });
        }
        else {
            console.log("profile info");
            base = this.http.get(this._baseUrl + '/api/' + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Bearer " + this.getToken() }) });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            // console.log("data --!--->",data)
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.updateProfile = function (profile) {
        console.log("up", profile);
        return this.request('post', 'update_profile', profile);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.userDetails = function () {
        return this.request('get', 'userDetails');
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.fullProfile = function () {
        return this.request('get', 'full_profile');
    };
    AuthenticationService.prototype.wallet = function (user) {
        console.log("wallet info   ::", user.email);
        return this.request('post', 'wallet', user);
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        // this.router.navigateByUrl('/login');
    };
    AuthenticationService.prototype.sellOrder = function (details) {
        console.log("details  ", details);
        return this.request('post', 'sellOrder', details);
    };
    AuthenticationService.prototype.approveOrder = function (details) {
        console.log("details  ", details);
        return this.request('post', 'approveOrder', details);
    };
    AuthenticationService.prototype.rejectOrder = function (details) {
        console.log("details  ", details);
        return this.request('post', 'rejectOrder', details);
    };
    AuthenticationService.prototype.buyOrder = function (details) {
        console.log("buyorder    ....details  ", details);
        return this.request('post', 'buyOrder', details);
    };
    AuthenticationService.prototype.addAsset = function (details) {
        console.log("buyorder    ...addAsset.details  ", details);
        return this.request('post', 'addAsset', details);
    };
    AuthenticationService.prototype.getSellOrderListByUserId = function () {
        return this.request('get', 'getSellOrderListByUserId');
    };
    AuthenticationService.prototype.getAssetOrderListByUserId = function () {
        return this.request('get', 'getAssetOrderListByUserId');
    };
    AuthenticationService.prototype.listBuyPlaceOrder = function () {
        return this.request('get', 'listBuyPlaceOrder');
    };
    AuthenticationService.prototype.listSellPlaceOrder = function () {
        return this.request('get', 'listSellPlaceOrder');
    };
    AuthenticationService.prototype.getBuyOrderListByUserId = function () {
        return this.request('get', 'getBuyOrderListByUserId');
    };
    AuthenticationService.prototype.getSellRequestListByUserId = function () {
        return this.request('get', 'getSellRequestListByUserId');
    };
    AuthenticationService.prototype.getWalletInfo = function () {
        return this.request('get', 'getWalletInfo');
    };
    AuthenticationService.prototype.getListAllOrder = function () {
        return this.request('get', 'getListAllOrder');
    };
    AuthenticationService.prototype.getUserSellOrderList = function () {
        return this.request('get', 'getUserSellOrderList');
    };
    AuthenticationService.prototype.getUserBuyOrderList = function () {
        return this.request('get', 'getUserBuyOrderList');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Window)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Window])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/create-order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/create-order.service.ts ***!
  \**************************************************/
/*! exports provided: CreateOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderService", function() { return CreateOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");






var CreateOrderService = /** @class */ (function () {
    function CreateOrderService(auth, http, _window) {
        this.auth = auth;
        this.http = http;
        this._window = _window;
        //   console.log("contr");
        this._baseUrl = 'http://' + _window.location.hostname + ':3000';
    }
    CreateOrderService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    CreateOrderService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    CreateOrderService.prototype.sellOrder = function (data) {
        // console.log("data details   ", _data);
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let body = JSON.stringify(_data.value);
        // let requestOptions = new RequestOptions({ headers: headers });
        this.auth.sellOrder(data).subscribe(function (_data) {
            console.log("------", _data);
        });
    };
    CreateOrderService.prototype.buyOrder = function (data) {
        console.log("data details   ", data);
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // console.log("data        ..", _data.value);
        // let body = JSON.stringify(_data.value);
        // let requestOptions = new RequestOptions({ headers: headers });
        // console.log("requestOptions        ", requestOptions);
        // console.log(":body   ", body)
        // console.log(":body   ", this._baseUrl + '/api/buyOrder')
        this.auth.buyOrder(data).subscribe(function (_data) {
            console.log("------", _data);
        });
    };
    CreateOrderService.prototype.approveOrder = function (_data) {
        console.log("data details   ", _data);
        this.auth.approveOrder(_data).subscribe(function (_data) {
            console.log("------++", _data);
        });
    };
    CreateOrderService.prototype.rejectOrder = function (_data) {
        console.log("rejectOrder   ", _data);
        this.auth.rejectOrder(_data).subscribe(function (_data) {
            console.log("------++", _data);
        });
    };
    CreateOrderService.prototype.getSellOrderListByUserId = function (res) {
        console.log("list of order");
        this.auth.getSellOrderListByUserId().subscribe(function (data) {
            console.log("data inside getsellOrderListByUserId=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getAssetOrderListByUserId = function (res) {
        console.log("list of order");
        this.auth.getAssetOrderListByUserId().subscribe(function (data) {
            console.log("data inside getAssetOrderListByUserId=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.listBuyPlaceOrder = function (res) {
        console.log("list of order");
        this.auth.listBuyPlaceOrder().subscribe(function (data) {
            console.log("data inside listBuyPlaceOrder=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.listSellPlaceOrder = function (res) {
        console.log("list of order");
        this.auth.listSellPlaceOrder().subscribe(function (data) {
            console.log("data inside listSellPlaceOrder=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getBuyOrderListByUserId = function (res) {
        console.log("list of order");
        this.auth.getBuyOrderListByUserId().subscribe(function (data) {
            console.log("data inside getOrderListByUserId", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getSellRequestListByUserId = function (res) {
        console.log("list of order");
        this.auth.getSellRequestListByUserId().subscribe(function (data) {
            console.log("data inside getsellRequestListByUserId=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getUserBuyOrderList = function (res) {
        console.log("list of ordergetUserBuyOrderList");
        this.auth.getUserBuyOrderList().subscribe(function (data) {
            console.log("data inside getUserBuyOrderList", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getUserSellOrderList = function (res) {
        console.log("list of ordergetUserSellOrderList");
        this.auth.getUserSellOrderList().subscribe(function (data) {
            console.log("data inside getUserSellOrderList=>", data);
            res(data);
        });
    };
    CreateOrderService.prototype.getWalletInfo = function (res) {
        console.log("getWalletInfo");
        this.auth.getWalletInfo().subscribe(function (data) {
            console.log("data inside getWalletInfo=>", data);
            res(data);
        });
    };
    CreateOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Window)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
    ], CreateOrderService);
    return CreateOrderService;
}());



/***/ }),

/***/ "./src/app/services/script-loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/script-loader.service.ts ***!
  \***************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.store */ "./src/app/services/script.store.ts");



var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        _script_store__WEBPACK_IMPORTED_MODULE_2__["ScriptStore"].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptLoaderService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        scripts.forEach(function (script) { return _this.loadScript(script); });
    };
    ScriptLoaderService.prototype.loadScript = function (name) {
        var self = this;
        if (!this.scripts[name].loaded) {
            var req = new XMLHttpRequest();
            req.open('GET', self.scripts[name].src, false);
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    var s = document.createElement("script");
                    s.appendChild(document.createTextNode(req.responseText));
                    self.scripts[name].loaded = true;
                    document.head.appendChild(s);
                }
            };
            req.send(null);
        }
    };
    ScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/services/script.store.ts":
/*!******************************************!*\
  !*** ./src/app/services/script.store.ts ***!
  \******************************************/
/*! exports provided: ScriptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
var ScriptStore = [
    { name: 'select2', src: 'assets/libs/select2/js/select2.min.js' },
    { name: 'momentjs', src: 'assets/libs/momentjs/moment-with-locales.min.js' },
    { name: 'flatpickr', src: 'assets/libs/flatpickr/flatpickr.min.js' },
    { name: 'touchspin', src: 'assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js' },
    { name: 'jscrollpane', src: 'assets/libs/jscrollpane/jquery.jscrollpane.min.js' },
    { name: 'mousewheel', src: 'assets/libs/jscrollpane/jquery.mousewheel.js' },
    { name: 'd3', src: 'assets/libs/d3/d3.min.js' },
    { name: 'c3', src: 'assets/libs/c3js/c3.min.js' },
    { name: 'noty', src: 'assets/libs/noty/noty.min.js' },
    { name: 'maplace', src: 'assets/libs/maplace/maplace.min.js' },
    { name: 'fullcalendar', src: 'assets/libs/fullcalendar/fullcalendar.min.js' },
    { name: 'momentjs', src: 'assets/libs/momentjs/moment-with-locales.min.js' },
    { name: 'plyr', src: 'assets/libs/plyr/plyr.js' },
    { name: 'uppy', src: 'assets/libs/uppy/uppy.min.js' },
    { name: 'dropzone', src: 'assets/libs/dropzone/dropzone.min.js' },
    { name: 'colorpicker', src: 'assets/libs/jquery-minicolors/jquery.minicolors.min.js' },
    { name: 'inputmask', src: 'assets/libs/jquery-mask/jquery.mask.min.js' },
];


/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poiret+One');\n.screencenter{\n    margin-top:10%;\n    padding:2%;\n}\n.myfont{\n    font-family: 'Poiret One', cursive;\n    font-size: 48px;\n}\n.back{\nbackground-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTtBQUNsRTtJQUNJLGVBQWU7SUFDZixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7Q0FDbkI7QUFHRDtBQUNBLDZCQUE2QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9pcmV0K09uZScpO1xuLnNjcmVlbmNlbnRlcntcbiAgICBtYXJnaW4tdG9wOjEwJTtcbiAgICBwYWRkaW5nOjIlO1xufVxuLm15Zm9udHtcbiAgICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuXG4uYmFja3tcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n\n      <div class=\"card screencenter\">\n          <div class=\"card-header text-center text-primary myfont\">\n              Register\n            </div>\n            <div class=\"card-body\">\n                <form  [formGroup]=\"angForm\" (ngSubmit)=\"Reg()\">\n                  <div class=\"form-group\">\n                    <label for=\"inputsm\">First Name:</label>\n                    <input class=\"form-control inputsm\"  placeholder=\"Firstname\" type=\"text\"  ng-trim=\"true\"  class=\"form-control\"   autofocus=\"true\" formControlName=\"fname\" autocomplete=\"off\" required>                    \n                  </div>\n  \n                  <div class=\"form-group\">\n                      <label for=\"inputsm\">Last Name:</label>\n                      <input class=\"form-control inputsm\"   placeholder=\"Lastname\" type=\"text\"  ng-trim=\"true\"  class=\"form-control\"  formControlName=\"lname\" autocomplete=\"off\" required>\n                      <!-- <div *ngIf=\"submitted && f.Lastname.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.Lastname.errors.required\">Lastname is required</div>\n                    </div> -->\n                    </div>\n  \n                    <div class=\"form-group\">\n                        <label for=\"inputsm\">Phone Number:</label>\n                        <input class=\"form-control inputsm\" placeholder=\"Phonenumber\" type=\"number\" ng-trim=\"true\"  class=\"form-control\" formControlName=\"phnumber\" autocomplete=\"off\" minlength=\"10\" maxlength=\"10\" required>\n                        <!-- <div *ngIf=\"submitted && f.Phonenumber.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.Phonenumber.errors.required\">Phonenumber is required</div>\n                        </div> -->\n                      </div>\n  \n                      <div class=\"form-group\">\n                          <label for=\"inputsm\">Email:</label>\n                          <input class=\"form-control inputsm\"  placeholder=\"Email\" type=\"Email\"  ng-trim=\"true\"  class=\"form-control\" formControlName=\"myemail\"  autocomplete=\"off\" required>\n                          <!-- <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.Email.errors.required\">Email is required</div>\n                        </div> -->\n                        </div>\n  \n                        <div class=\"form-group\">\n                            <label for=\"inputsm\">Password:</label>\n                            <input class=\"form-control inputsm\" placeholder=\"Password\"  ng-trim=\"true\"  class=\"form-control\"  type=\"password\" formControlName=\"pwd\" autocomplete=\"off\" required>\n                            <!-- <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n                            </div> -->\n                          </div> \n\n                          <div class=\"form-group\">\n                                <button type=\"submit\"  [disabled]=\"!angForm.valid\" class=\"btn btn-primary\">Signup</button>                             \n                            </div>\n\n                          </form>\n  \n              </div>\n            <div class=\"card-footer text-right\">\n            <a routerLink=\"/login\">login</a>\n            </div>\n      </div>\n\n  </div>\n  <div class=\"col-sm-04\"></div>\n  </div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.auth.logout();
        // this.auth.hide();
    }
    SignupComponent.prototype.Reg = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.angForm.value);
        // stop here if form is invalids
        if (this.angForm.invalid) {
            return;
        }
        // email: "dd@gmail.com"
        // firstname: "d"
        // keys: ""
        // lastname: "d"
        // name: ""
        // password: "dd@gmail.com"
        // phonenumber: "1235468791"
        var d = {
            email: this.angForm.value.myemail,
            firstname: this.angForm.value.fname,
            lastname: this.angForm.value.lname,
            password: this.angForm.value.pwd,
            phonenumber: this.angForm.value.phnumber,
            keys: "",
            name: "",
            _id: ""
        };
        console.log(d);
        console.log("Register 1 ......... ");
        this.auth.register(d).subscribe(function () {
            console.log("Register ......... ");
            // this.router.navigateByUrl('/dashboard');
            _this.refresh();
        }, function (err) {
            console.log("Register error......... ");
            console.error(err);
        });
    };
    SignupComponent.prototype.refresh = function () {
        console.log("Refresh ......... ");
        // window.location.href = '/login';
        this.router.navigateByUrl("/login");
        window.location.reload();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.angForm = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            myemail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! /home/chainflux/lkraja/ptop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map