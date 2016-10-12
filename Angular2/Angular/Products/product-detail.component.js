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
var router_1 = require('@angular/router');
var http_data_service_1 = require("../Shared/Http/http-data.service");
var product_module_1 = require("./product.module");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.pageTitle = "Product Detail";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.product) {
            this.route.params.subscribe(function (params) {
                var id = +params['id']; // (+) converts string 'id' to a number
                _this.pageTitle += "" + id;
                _this.getProduct(id);
            });
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.http.get(product_module_1.productQueryUrl, id).subscribe(function (product) { return _this.product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "product-detail.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_data_service_1.HttpDataService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map