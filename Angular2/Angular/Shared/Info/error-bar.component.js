"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var info_bar_color_1 = require("./info-bar-color");
var ErrorBarComponent = (function () {
    function ErrorBarComponent() {
    }
    ErrorBarComponent.prototype.ngOnInit = function () {
        this.bgColors = [
            new info_bar_color_1.InfoBarColor("default", 'rgbaCode = "rgba(211, 211, 211, 0.7)"'),
            new info_bar_color_1.InfoBarColor("success", 'rgbaCode = "rgba(122, 184, 0, 0.7)"'),
            new info_bar_color_1.InfoBarColor("danger", 'rgbaCode = "rgba(217, 83, 79, 0.7)"')
        ];
    };
    ErrorBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "error-bar",
            templateUrl: "error-bar.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorBarComponent);
    return ErrorBarComponent;
}());
exports.ErrorBarComponent = ErrorBarComponent;
;
//# sourceMappingURL=error-bar.component.js.map