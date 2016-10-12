import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IProduct } from "./product";
import { HttpDataService } from "../Shared/Http/http-data.service";
import { productQueryUrl } from "./product.module";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html" 
})

export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpDataService<IProduct>) {
       
    }

    ngOnInit() {
        if (!this.product) {
            this.route.params.subscribe(params => {
                let id = +params['id']; // (+) converts string 'id' to a number
                this.pageTitle += `${id}`;
                this.getProduct(id);
            });            
        }
    }

    getProduct(id: number) {
        this.http.get(productQueryUrl, id).subscribe(
            product => this.product,
            error => this.errorMessage = <any>error
        );
       
    }

    onBack(): void {
        this.router.navigate(['/products'])
    }
}