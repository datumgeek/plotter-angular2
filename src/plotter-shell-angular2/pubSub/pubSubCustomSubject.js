var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "rxjs/Rx"], function (require, exports, core_1, Rx) {
    "use strict";
    var PubSubCustomSubject = (function (_super) {
        __extends(PubSubCustomSubject, _super);
        function PubSubCustomSubject() {
            return _super.apply(this, arguments) || this;
        }
        PubSubCustomSubject.prototype.onCompleted = function () { };
        PubSubCustomSubject.prototype.onError = function (error) {
            this.error = error;
            this.observers.forEach(function (obs) {
                obs.closed = false;
                obs.error(error);
            });
        };
        return PubSubCustomSubject;
    }(Rx.Subject));
    PubSubCustomSubject = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PubSubCustomSubject);
    exports.PubSubCustomSubject = PubSubCustomSubject;
});
//# sourceMappingURL=pubSubCustomSubject.js.map