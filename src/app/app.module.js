var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "@angular/common", "./app.component", "./app-routing.module", "../plotter-shell-angular2", "../plotter-shell-angular2", "./session.service"], function (require, exports, core_1, platform_browser_1, forms_1, http_1, common_1, app_component_1, app_routing_module_1, plotter_shell_angular2_1, plotter_shell_angular2_2, session_service_1) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
        }
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                plotter_shell_angular2_1.ShellModule,
                plotter_shell_angular2_2.ShellProvidersModule,
                platform_browser_1.BrowserModule
            ],
            providers: [
                session_service_1.SessionService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map