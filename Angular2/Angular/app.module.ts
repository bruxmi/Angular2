import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { ProductFilterPipe } from './Products/product-filter.pipe';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ProductListComponent, ProductFilterPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }