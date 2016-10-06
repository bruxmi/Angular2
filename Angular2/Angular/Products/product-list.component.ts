import { Component, Directive } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html'
})


export class ProductListComponent {
    pageTitle: string = "Product List"
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": ""
        },
        {
            "productId": 3,
            "productName": "Garden Cart 2",
            "productCode": "GDN-0024",
            "releaseDate": "March 18, 2016",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": ""
        }
            
    ]


}