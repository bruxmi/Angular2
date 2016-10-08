import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ProductModule } from './Products/product.module';

@NgModule({
    imports: [BrowserModule, FormsModule, ProductModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }