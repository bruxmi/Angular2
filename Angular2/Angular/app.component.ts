import { Component } from '@angular/core';
//import { ProductListComponent } from './Products/product-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>`
})

export class AppComponent {
    pageTitle: string = "Product Managment";
}