import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../Shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
    imports: [
        FormsModule,
        SharedModule,
    ],
    exports: [ProductListComponent, ProductFilterPipe],
    declarations: [
        ProductListComponent,
        ProductFilterPipe
    ]
})
export class ProductModule { }