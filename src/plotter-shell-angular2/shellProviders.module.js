var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@angular/http", "./shell.service", "./fileManager/fileManager", "./module.service", "./parameter.service", "./resource.service"], function (require, exports, common_1, core_1, forms_1, http_1, shell_service_1, fileManager_1, module_service_1, parameter_service_1, resource_service_1) {
    "use strict";
    var ShellProvidersModule = (function () {
        function ShellProvidersModule() {
        }
        return ShellProvidersModule;
    }());
    ShellProvidersModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                shell_service_1.ShellService,
                fileManager_1.FileManager,
                module_service_1.ModuleService,
                parameter_service_1.ParameterService,
                resource_service_1.ResourceService
            ],
            exports: []
        }),
        __metadata("design:paramtypes", [])
    ], ShellProvidersModule);
    exports.ShellProvidersModule = ShellProvidersModule;
});
//# sourceMappingURL=shellProviders.module.js.map