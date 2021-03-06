var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    var ResourceService = (function () {
        function ResourceService() {
            this.resources = {};
            this.keys = [];
            if (window.plotterPaths) {
                for (var key in window.plotterPaths) {
                    this.resources[key] = window.plotterPaths[key];
                    this.keys.push(key);
                }
                ;
            }
        }
        return ResourceService;
    }());
    ResourceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ResourceService);
    exports.ResourceService = ResourceService;
});
//# sourceMappingURL=resource.service.js.map