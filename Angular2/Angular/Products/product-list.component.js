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
var core_1 = require('@angular/core');
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = "cart";
        this.products = [
            {
                description: "description 1",
                imageUrl: "https://openclipart.org/download/193438/freehammer.svg",
                price: 32.99,
                productCode: "GDN-0023",
                productId: 1,
                productName: "Hammer",
                releaseDate: new Date(),
                starRating: 4.2,
            },
            {
                description: "description 2",
                imageUrl: "https://openclipart.org/download/193438/freehammer.svg",
                price: 44.99,
                productCode: "GDN-0023",
                productId: 2,
                productName: "Garden Cart 2",
                releaseDate: new Date(),
                starRating: 4.2,
            }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pm-products',
            templateUrl: 'product-list.component.html',
            styleUrls: ["product-list.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map