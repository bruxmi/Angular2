import { Component } from '@angular/core';
import { ProductDataService } from "./Products/product-data.service"
import './rxjs-operators';

@Component({
    selector: 'my-app',
    providers: [ProductDataService], 
    template: `
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>`
})

export class AppComponent {
    pageTitle: string = "Product Managment";
}