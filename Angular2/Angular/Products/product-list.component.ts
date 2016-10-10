import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductDataService } from './product-data.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ["product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List"
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];

    constructor(private productDataService: ProductDataService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("In OnInit");
        this.products = this.productDataService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}