import { Component, Directive } from '@angular/core';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ["product-list.component.css"]
})

export class ProductListComponent {
    pageTitle: string = "Product List"
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "cart";
    products: IProduct[] = [
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
            
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}