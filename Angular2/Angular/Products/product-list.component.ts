import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    errorMessage: string;
    constructor(private productDataService: ProductDataService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("In OnInit");
        this.productDataService.getProducts().subscribe((product: IProduct[]) => {
            this.products = product;
        });
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}