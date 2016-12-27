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
    var CustomerListComponent = (function () {
        function CustomerListComponent() {
        }
        CustomerListComponent.prototype.getDynState = function () {
            return this.dynState;
        };
        CustomerListComponent.prototype.setDynState = function (value) {
            this.dynState = value;
        };
        CustomerListComponent.prototype.ngOnInit = function () {
        };
        return CustomerListComponent;
    }());
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'customer-list',
            template: "\n    <p>customer-list !!!</p>\n    <p>message: {{dynState?.message}}</p>\n    ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], CustomerListComponent);
    exports.CustomerListComponent = CustomerListComponent;
});
//# sourceMappingURL=customerList.component.js.map